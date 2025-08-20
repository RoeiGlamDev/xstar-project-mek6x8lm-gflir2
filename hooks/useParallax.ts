import { useEffect, useState } from 'react';

const useParallax = (speed: number) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    setOffset(window.scrollY * speed);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return offset; // Returns the calculated offset for parallax effect
};

export default useParallax;