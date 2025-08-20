import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const triggerPosition = 200; // Change this value to adjust when the animation triggers

    if (scrollPosition > triggerPosition) {
      setIsVisible(true); // Set visible to true when scrolled past trigger position
    } else {
      setIsVisible(false); // Set visible to false when above trigger position
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up listener on unmount
    };
  }, []);

  return isVisible; // Return visibility state
};

export default useScrollAnimation;