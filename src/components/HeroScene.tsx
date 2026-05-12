"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GlobeWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
  });

  return (
    <mesh ref={meshRef} scale={2.4}>
      <sphereGeometry args={[1, 36, 36]} />
      <meshBasicMaterial
        color="#D4A853"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

function GlowingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.scale.setScalar(2.4 + Math.sin(t * 0.8) * 0.03);
  });

  return (
    <mesh ref={meshRef} scale={2.4}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color="#D4A853"
        transparent
        opacity={0.04}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function RouteLines() {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: number[] = [];
    const numLines = 12;
    const numSegments = 8;

    for (let l = 0; l < numLines; l++) {
      const phi1 = (l / numLines) * Math.PI * 2;
      const theta1 = Math.random() * Math.PI;
      const x1 = Math.sin(theta1) * Math.cos(phi1);
      const y1 = Math.cos(theta1);
      const z1 = Math.sin(theta1) * Math.sin(phi1);

      for (let s = 0; s < numSegments; s++) {
        const phi2 = phi1 + (Math.random() - 0.5) * 0.5;
        const theta2 = theta1 + (Math.random() - 0.5) * 0.3;
        const x2 = Math.sin(theta2) * Math.cos(phi2);
        const y2 = Math.cos(theta2);
        const z2 = Math.sin(theta2) * Math.sin(phi2);

        points.push(x1, y1, z1);
        points.push(x2, y2, z2);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.015) * 0.08;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#D4A853" transparent opacity={0.15} />
    </lineSegments>
  );
}

function FloatingDots() {
  const ref = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const count = 150;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#D4A853"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <GlowingOrb />
        <GlobeWireframe />
        <RouteLines />
        <FloatingDots />
      </Canvas>
    </div>
  );
}