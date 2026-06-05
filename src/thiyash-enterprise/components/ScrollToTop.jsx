import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures the page is scrolled to the top whenever the route changes.
 * This prevents new pages from loading halfway scrolled down.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
