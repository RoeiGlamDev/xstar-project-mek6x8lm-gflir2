// Global type declarations for common modules
declare module 'scrollreveal' {
  interface ScrollRevealObjectOptions {
    delay?: number;
    distance?: string;
    duration?: number;
    easing?: string;
    opacity?: number;
    origin?: string;
    reset?: boolean;
    rotate?: { x?: number; y?: number; z?: number };
    scale?: number;
    cleanup?: boolean;
    desktop?: boolean;
    mobile?: boolean;
    viewFactor?: number;
    viewOffset?: { top?: number; right?: number; bottom?: number; left?: number };
  }

  interface ScrollRevealObject {
    reveal(target: string | Element | NodeList, options?: ScrollRevealObjectOptions): ScrollRevealObject;
    sync(): void;
    clean(target?: string | Element | NodeList): void;
    destroy(): void;
  }

  const ScrollReveal: {
    (options?: ScrollRevealObjectOptions): ScrollRevealObject;
  };

  export = ScrollReveal;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: string;
  export default content;
}

// Three.js module augmentations
declare module 'three/examples/jsm/loaders/GLTFLoader' {
  export { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
}

declare module 'three/examples/jsm/controls/OrbitControls' {
  export { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
}