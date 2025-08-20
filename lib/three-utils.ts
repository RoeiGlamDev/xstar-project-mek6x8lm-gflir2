import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene
export const createScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set background color to white
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5; // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height); // Set renderer size
    return renderer;
};

// Function to add a light to the scene
export const addLight = (scene: THREE.Scene) => {
    const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(light);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Directional light
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
};

// Function to create a basic geometry (e.g., a cube)
export const createCube = () => {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink color
    const cube = new THREE.Mesh(geometry, material);
    return cube;
};

// Function to animate the cube
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const animateLoop = () => {
        requestAnimationFrame(animateLoop);
        renderer.render(scene, camera); // Render the scene
    };
    animateLoop();
}; 

export default { createScene, createCamera, createRenderer, addLight, createCube, animate };