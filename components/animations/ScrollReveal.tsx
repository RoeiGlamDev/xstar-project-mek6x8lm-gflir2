'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      scale: 1,
      viewFactor: 0.2,
    });

    sr.reveal('.reveal', { interval: 200 }); // Reveal elements with class 'reveal'

    return () => {
      sr.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div>{children}</div>; // Render children
};

export default ScrollRevealComponent;