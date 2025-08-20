import { CSSProperties } from 'react';

export type AnimationType = 'fade' | 'slide' | 'zoom' | 'bounce';

export interface AnimationProps {
  type: AnimationType; // Type of animation
  duration?: number; // Duration of the animation in milliseconds
  delay?: number; // Delay before the animation starts in milliseconds
  style?: CSSProperties; // Additional styles for the animation
}

const animationStyles: Record<AnimationType, CSSProperties> = {
  fade: {
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  },
  slide: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease-in-out',
  },
  zoom: {
    transform: 'scale(0)',
    transition: 'transform 0.5s ease-in-out',
  },
  bounce: {
    animation: 'bounce 0.5s infinite',
  },
};

export default animationStyles;