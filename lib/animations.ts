import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideIn = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
};

export const scaleUp = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

export const useAnimationOnScroll = (ref: React.RefObject<HTMLElement>, animation: any) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (ref.current) {
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });

      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current && ref.current) {
        observer.current.unobserve(ref.current);
      }
    };
  }, [ref]);

  return animation;
};

export default { fadeIn, slideIn, scaleUp, useAnimationOnScroll };