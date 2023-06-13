import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ParticleBackground({ isDarkMode }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const geometry = new THREE.BufferGeometry();
    const count = 1000000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = isDarkMode ? 1 : 0.01; // Set dark grey (0.3) in light mode, white (1) in dark mode
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.001,
        vertexColors: true,
        opacity: isDarkMode ? 0.07 : 0.13, // Set opacity based on the mode
        transparent: true
      });
    const points = new THREE.Points(geometry, material);

    scene.add(points);

    camera.position.z = 5;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    const animate = function () {
      requestAnimationFrame(animate);

      points.rotation.x += 0.0005;
      points.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    //cleanup function to stop animation and remove event listener when component unmounts
    return () => {
      cancelAnimationFrame(animate);
      window.removeEventListener('resize', handleWindowResize);
      mountRef.current.removeChild(renderer.domElement);
    };

  }, [isDarkMode]);

  return (
    <div ref={mountRef} />
  );
}

export default ParticleBackground;



