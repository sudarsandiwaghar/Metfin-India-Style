import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeSteelBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Cylinder Geometry (The Bright Steel Bar)
    // RadiusTop, RadiusBottom, Height, RadialSegments, HeightSegments, OpenEnded
    const geometry = new THREE.CylinderGeometry(0.8, 0.8, 4.5, 64, 1, false);
    
    // Custom Metallic Material
    // To simulate polished steel we use high metalness and low roughness
    const material = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.95,
      roughness: 0.12,
      bumpScale: 0.05,
      flatShading: false,
    });

    // Create the mesh
    const steelBar = new THREE.Mesh(geometry, material);
    steelBar.rotation.x = Math.PI / 6; // Tilt it slightly
    steelBar.rotation.z = Math.PI / 12;
    scene.add(steelBar);

    // Add a chamfer/beveled ring on the top and bottom to represent precision cuts
    const ringGeo = new THREE.TorusGeometry(0.8, 0.03, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.05,
    });
    const topCapRing = new THREE.Mesh(ringGeo, ringMaterial);
    topCapRing.position.y = 2.25;
    topCapRing.rotation.x = Math.PI / 2;
    steelBar.add(topCapRing);

    const bottomCapRing = new THREE.Mesh(ringGeo, ringMaterial);
    bottomCapRing.position.y = -2.25;
    bottomCapRing.rotation.x = Math.PI / 2;
    steelBar.add(bottomCapRing);

    // Lights
    // 1. Ambient Light for soft illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // 2. High intensity directional light for bright metallic reflections (The Bright Bar effect)
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 3.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    // 3. Counter-light to fill in shadows
    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight2.position.set(-5, -3, 2);
    scene.add(dirLight2);

    // 4. Gold Brand light to project an elegant backlight glow (#C5A059)
    const purpleLight = new THREE.PointLight(0xC5A059, 8, 15);
    purpleLight.position.set(-2, 1, 3);
    scene.add(purpleLight);

    // 5. Champagne Brand light to cast side highlights (#EADBB9)
    const blueLight = new THREE.PointLight(0xEADBB9, 6, 15);
    blueLight.position.set(3, -1, 2);
    scene.add(blueLight);

    // 6. Dynamic glowing "Grinding Spark" Light that travels up and down the bar
    const sparkLight = new THREE.PointLight(0x9E804B, 4, 8);
    sparkLight.position.set(0.9, 0, 1);
    scene.add(sparkLight);

    // Mouse interactive coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Map to normalized range [-1, 1]
      targetX = (x / width) * 2 - 1;
      targetY = (y / height) * 2 - 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Resize Handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height || 500;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow idle rotation
      steelBar.rotation.y += 0.006;
      
      // Moving grinding highlight (simulates polishing/grinding process dynamically)
      const sparkY = Math.sin(elapsedTime * 1.5) * 2.0;
      sparkLight.position.y = sparkY;
      // Oscillate spark intensity slightly
      sparkLight.intensity = 3 + Math.sin(elapsedTime * 10) * 1.5;

      // Smooth mouse follow (LERP)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Apply mouse-driven tilting
      steelBar.rotation.x = Math.PI / 6 + mouseY * 0.4;
      steelBar.rotation.z = Math.PI / 12 + mouseX * 0.4;

      // Pulse purple backlight
      purpleLight.intensity = 8 + Math.sin(elapsedTime * 2) * 2;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[420px] md:min-h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block z-10" />

      {/* Cyber/Mechanical decorative targeting grid overlays - adds immense futuristic high-tech polish */}
      <div className="absolute inset-0 border border-brand-purple/10 pointer-events-none rounded-2xl flex items-center justify-center">
        {/* Corner Brackets */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-purple/40" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-purple/40" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-purple/40" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-purple/40" />

        {/* UI Telemetry elements (clean, minimal, aligned to guidelines) */}
        <div className="absolute bottom-6 left-6 font-mono text-[0.6rem] text-brand-purple/50 tracking-wider">
          ROT: <span className="text-white">ACTIVE_3D</span> | SENS_HVR: {isHovered ? "ON" : "OFF"}
        </div>
        <div className="absolute top-6 right-6 font-mono text-[0.6rem] text-brand-yellow/50 tracking-wider">
          CORE_TEMP: <span className="text-white">OPTIMAL</span>
        </div>

        {/* Target crosshairs */}
        <div className="w-48 h-48 border border-dashed border-brand-blue/20 rounded-full animate-spin-slow absolute pointer-events-none" />
        <div className="w-64 h-64 border border-brand-purple/5 rounded-full absolute pointer-events-none" />
      </div>

      {/* Futuristic floating overlay badge */}
      <div className="absolute bottom-12 right-6 bg-[#0d0d0d]/85 backdrop-blur border border-white/10 px-4 py-2.5 rounded-lg z-20 pointer-events-none shadow-2xl">
        <p className="font-display font-semibold text-xs tracking-wider text-brand-silver">
          MFIS SPECIMEN BAR
        </p>
        <p className="font-mono text-[0.65rem] text-brand-yellow mt-0.5">
          25mm - 65mm REELED/GROUND
        </p>
      </div>

      {/* Grinding/sparks dynamic CSS background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none group-hover:bg-brand-purple/15 transition-all duration-700" />
    </div>
  );
}
