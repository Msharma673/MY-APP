import Swal from 'sweetalert2';

/** Immediate feedback while the contact API request is in flight */
export function showSendingSwal() {
  void Swal.fire({
    title: 'Sending...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    width: '80%',
    customClass: {
      popup: 'responsive-swal-popup',
    },
    didOpen: () => {
      Swal.showLoading();
    },
  });
}
