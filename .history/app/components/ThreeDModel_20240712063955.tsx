import React, { Suspense } from "react";
import { Canvas, ObjectMap } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/Addons.js";

const Model = ({ path }: { path: string }) => {
  const { scene } = useGLTF(path) as unknown as GLTF & ObjectMap;
  return <primitive object={scene} />;
};

const ThreeDModel = ({ path }: { path: string }) => {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      {/* Ambient Light for global illumination */}
      <ambientLight intensity={0.5} />

      {/* Directional Light to simulate sunlight */}
      <directionalLight
        position={[0, 5, 5]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Point Light for local illumination */}
      <pointLight position={[-5, 5, -5]} intensity={0.5} />

      {/* Spot Light for focused illumination */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={null}>
        <Model path={path} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;
