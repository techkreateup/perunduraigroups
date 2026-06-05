import { useCallback, useRef } from 'react';

/**
 * A hook that provides a smooth scroll function with offset handling.
 */
export const useSmoothScroll = (offset = 80) => {
  const animationRef = useRef(null);

  const scrollToId = useCallback((e, id) => {
    if (e) e.preventDefault();
    
    const element = document.getElementById(id);
    if (!element) return;

    const scroller = document.scrollingElement || document.documentElement;
    const startY = scroller.scrollTop;
    const targetY = Math.max(0, element.getBoundingClientRect().top + startY - offset);
    const distance = targetY - startY;

    if (Math.abs(distance) < 2) return;

    if (animationRef.current !== null && typeof window.cancelAnimationFrame === 'function') {
      window.cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    const now = () => (window.performance && typeof window.performance.now === 'function'
      ? window.performance.now()
      : Date.now());
    
    const isMobile = window.innerWidth <= 768;
    const durationMultiplier = isMobile ? 0.6 : 1.2;
    const minDuration = isMobile ? 400 : 900;
    const maxDuration = isMobile ? 800 : 2000;
    
    // Increased duration for a more majestic, unmistakable scroll
    const duration = Math.min(maxDuration, Math.max(minDuration, Math.abs(distance) * durationMultiplier));
    const startTime = now();

    const easeInOutQuint = (t) => (
      t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2
    );

    const step = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuint(progress);
      
      // Use window.scrollTo for maximum cross-browser reliability
      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        animationRef.current = window.requestAnimationFrame(step);
      } else {
        animationRef.current = null;
        window.scrollTo(0, targetY);
      }
    };

    if (typeof window.requestAnimationFrame === 'function') {
      animationRef.current = window.requestAnimationFrame(step);
    } else {
      // Fallback for older environments using window.scrollTo
      const interval = 16;
      const timer = window.setInterval(() => {
        const current = now();
        const elapsed = current - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuint(progress);
        
        window.scrollTo(0, startY + distance * eased);
        
        if (progress >= 1) {
          window.scrollTo(0, targetY);
          window.clearInterval(timer);
        }
      }, interval);
    }
    // Intentionally avoid URL hash updates to prevent browser anchor jumps.
  }, [offset]);

  return scrollToId;
};
