import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground = ({ isDarkMode }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = isDarkMode ? new THREE.Color(0x0D0D0D) : new THREE.Color(0xA3A3A3);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.domElement.style.pointerEvents = 'none';

    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const particleCount = isMobile ? 300000 : 1000000;
    const particlesGeometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 20 - 10;
      const y = Math.random() * 20 - 10;
      const z = Math.random() * 20 - 15;
      vertices.push(x, y, z);
    }

    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: isMobile ? 0.01 : 0.001, transparent: true, opacity: isDarkMode ? 0.07 : 0.2 });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const animateParticles = () => {
      particles.rotation.x += 0.0004;
      particles.rotation.y += 0.0004;
      particles.rotation.z += 0.0004;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      animateParticles();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      particlesMaterial.dispose();
      particlesGeometry.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]);

  return <div ref={mountRef} />;
};

export default ParticleBackground;