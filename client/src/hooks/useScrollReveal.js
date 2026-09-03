import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that triggers a CSS animation when an element enters the viewport.
 * Uses Intersection Observer for performant scroll detection.
 *
 * Usage:
 *   const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
 *   <section ref={ref} className={`fade-section ${isVisible ? 'visible' : ''}`}>
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
};

export default useScrollReveal;
