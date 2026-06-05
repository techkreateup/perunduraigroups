import { useState, useEffect, useRef } from 'react';

/**
 * Hook to handle scroll-reveal animations in a React-safe way.
 * Returns a ref to attach to the element and a boolean indicating if it's visible.
 */
export const useReveal = (options = {}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Use responsive defaults if not explicitly provided
    const threshold = options.threshold !== undefined ? options.threshold : (isMobile ? 0.05 : 0.15);
    const rootMargin = options.rootMargin !== undefined ? options.rootMargin : (isMobile ? '0px 0px -10px 0px' : '0px 0px -50px 0px');

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isRevealed];
};
