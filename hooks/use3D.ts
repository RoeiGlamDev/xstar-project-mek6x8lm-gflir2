import { useEffect, useRef } from 'react';

const use3D = (modelUrl: string) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('webgl');
    if (!context) return;

    // Initialize 3D model rendering
    const loadModel = async () => {
      const response = await fetch(modelUrl);
      const modelData = await response.arrayBuffer();
      // Process and render the model data here
    };

    loadModel();

    return () => {
      // Cleanup resources if needed
    };
  }, [modelUrl]);

  return canvasRef; // Return the ref for use in components
};

export default use3D;