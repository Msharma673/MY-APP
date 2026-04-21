const DEFAULT_API = 'https://site-backend-xd32.onrender.com';

/** Request budget — avoids hung UI if the network or host stalls */
const CONTACT_TIMEOUT_MS = 45_000;

export function getApiBase() {
  return (process.env.REACT_APP_API_URL || DEFAULT_API).replace(/\/$/, '');
}

function createTimeoutSignal() {
  if (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) {
    return AbortSignal.timeout(CONTACT_TIMEOUT_MS);
  }
  const controller = new AbortController();
  setTimeout(() => controller.abort(), CONTACT_TIMEOUT_MS);
  return controller.signal;
}

/**
 * Wake cold hosts (e.g. Render free tier) so the real POST is less likely to pay cold-start latency.
 * Uses no-cors GET so the browser still opens a connection even without CORS on GET /.
 */
export function warmupContactBackend() {
  if (typeof fetch === 'undefined') return;
  const base = getApiBase();
  fetch(base, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-store',
  }).catch(() => {});
}

/**
 * POST to the same contact endpoint as the Contact page form.
 * @param {{ name: string, email: string, phone: string, message: string }} body
 * @returns {Promise<void>}
 */
export async function submitContact({ name, email, phone, message }) {
  const contactUrl = `${getApiBase()}/api/v1/contact`;
  let response;
  try {
    response = await fetch(contactUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
      signal: createTimeoutSignal(),
    });
  } catch (err) {
    const isAbort =
      err &&
      (err.name === 'AbortError' ||
        err.name === 'TimeoutError' ||
        (typeof err.message === 'string' && err.message.includes('aborted')));
    if (isAbort) {
      throw new Error(
        'Request timed out. Please check your connection and try again.'
      );
    }
    throw err;
  }

  let payload = null;
  const raw = await response.text();
  if (raw) {
    try {
      payload = JSON.parse(raw);
    } catch {
      payload = null;
    }
  }

  if (!response.ok) {
    const msg =
      (payload && (payload.message || payload.error)) ||
      `Request failed (${response.status})`;
    throw new Error(typeof msg === 'string' ? msg : 'Failed to submit form');
  }
}
