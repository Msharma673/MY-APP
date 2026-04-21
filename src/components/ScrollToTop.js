import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollToTop = () => {
            // Smooth scrolling is supported by most browsers including Safari.
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'  // Add smooth scrolling for a better UX
            });
        };

        // Safari fix: Delay to ensure the route has fully changed before scrolling.
        const scrollTimeout = setTimeout(scrollToTop, 100);

        return () => clearTimeout(scrollTimeout);  // Clear timeout to avoid memory leaks.
    }, [pathname]);

    return null;
}

export default ScrollToTop;
