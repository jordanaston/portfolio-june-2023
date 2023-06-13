import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ParticleBackground({ isDarkMode }) {
  const mountRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const geometry = new THREE.BufferGeometry();
    const count = 400000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = isDarkMode ? 1 : 0.01; 
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.001, 
      vertexColors: true,
      opacity: isDarkMode ? 0.07 : 0.2, 
      transparent: true,
    });
    const points = new THREE.Points(geometry, material);

    scene.add(points);

    camera.position.z = width > 800 ? 5 : 10; 
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const handleWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      material.size = width > 800 ? 0.001 : 0.003; 
      camera.position.z = width > 800 ? 5 : 10; 
    };

    window.addEventListener('resize', handleWindowResize);

    const animate = function () {
      requestAnimationFrame(animate);

      points.rotation.x += 0.0005;
      points.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
      window.removeEventListener('resize', handleWindowResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [isDarkMode]);

  return <div ref={mountRef} />;
}

export default ParticleBackground;




