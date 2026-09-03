import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Wrapper that adds a fade-in-up animation when the section scrolls into view.
 * Apply it around any section component:
 *
 *   <RevealSection>
 *     <Services />
 *   </RevealSection>
 */
const RevealSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${delay ? `reveal-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealSection;
