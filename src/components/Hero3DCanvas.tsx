'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create a high-tech Multi-layered Icosahedron (Crystal Digital Core)
    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    
    // Core solid/metallic mesh
    const material = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
      emissive: 0x4ade80,
      emissiveIntensity: 0.15,
    });
    const coreMesh = new THREE.Mesh(geometry, material);
    scene.add(coreMesh);

    // Outer glowing wireframe shell for high-tech cyber look
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.65, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframeMesh);

    // Add Ambient and Cinematic Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa855f7, 6, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x4ade80, 5, 50);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Mouse movement interaction effect
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth auto-rotation + mouse reactivity for both layers
      coreMesh.rotation.x += 0.003 + mouseY * 0.008;
      coreMesh.rotation.y += 0.005 + mouseX * 0.008;

      wireframeMesh.rotation.x -= 0.004 + mouseY * 0.006;
      wireframeMesh.rotation.y -= 0.006 + mouseX * 0.006;

      renderer.render(scene, camera);
    };
    animate();

    // Responsive Window Resizing
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500/20 to-[#4ade80]/20 rounded-full blur-[80px] pointer-events-none" />
      <div 
        ref={canvasContainerRef} 
        className="w-full h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}