"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Float, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function BasixLogoVoxel() {
    const { scene } = useGLTF("/assets/3D/basix_logo.glb");
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
            <primitive object={scene} scale={2.5} />
        </Float>
    );
}

export default function App() {
    return (
        <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
            <color attach="background" args={["#0A0A0A"]} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#00E7B5" />
            <Suspense fallback={null}>
                <Environment preset="sunset" background={false} />
                <Center>
                    <BasixLogoVoxel />
                </Center>
            </Suspense>
            <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
    );
}
