import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function DocumentStack() {
  const group = useRef(null);

  useFrame(({ pointer, clock }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.12 - group.current.rotation.y) * Math.min(delta * 2, 1);
    group.current.rotation.x += (-pointer.y * 0.08 - group.current.rotation.x) * Math.min(delta * 2, 1);
    group.current.position.y = Math.sin(clock.elapsedTime * 1.1) * 0.04;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.015} floatIntensity={0.04}>
      <group ref={group} rotation={[0.02, -0.12, -0.04]}>
        <mesh position={[-0.11, 0.08, -0.16]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[1.18, 1.44, 0.035]} />
          <meshStandardMaterial color="#e8eef4" roughness={0.72} />
        </mesh>
        <mesh position={[0.02, -0.01, -0.07]} rotation={[0, 0, -0.06]}>
          <boxGeometry args={[1.18, 1.44, 0.035]} />
          <meshStandardMaterial color="#f4f7fa" roughness={0.66} />
        </mesh>
        <mesh position={[0.12, 0.02, 0.05]}>
          <boxGeometry args={[1.18, 1.44, 0.04]} />
          <meshStandardMaterial color="#ffffff" roughness={0.58} />
        </mesh>
        <mesh position={[0.12, 0.45, 0.08]}>
          <boxGeometry args={[0.62, 0.045, 0.012]} />
          <meshBasicMaterial color="#0b132b" />
        </mesh>
        <mesh position={[0.12, 0.28, 0.08]}>
          <boxGeometry args={[0.58, 0.018, 0.012]} />
          <meshBasicMaterial color="#94a3b8" />
        </mesh>
        <mesh position={[-0.015, 0.16, 0.08]}>
          <boxGeometry args={[0.31, 0.018, 0.012]} />
          <meshBasicMaterial color="#94a3b8" />
        </mesh>
        <mesh position={[0.12, -0.01, 0.08]}>
          <boxGeometry args={[0.58, 0.018, 0.012]} />
          <meshBasicMaterial color="#cbd5e1" />
        </mesh>
        <mesh position={[0.06, -0.14, 0.08]}>
          <boxGeometry args={[0.46, 0.018, 0.012]} />
          <meshBasicMaterial color="#cbd5e1" />
        </mesh>
        <mesh position={[0.4, -0.38, 0.09]}>
          <circleGeometry args={[0.14, 24]} />
          <meshBasicMaterial color="#006c4a" />
        </mesh>
        <mesh position={[0.4, -0.38, 0.105]} rotation={[0, 0, -0.7]}>
          <boxGeometry args={[0.025, 0.12, 0.012]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 36 }}
      dpr={[1, 1.25]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={2.2} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <DocumentStack />
    </Canvas>
  );
}
