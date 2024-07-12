import React, { Suspense } from "react";
import { Canvas, ObjectMap } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/Addons.js";

type ModelProps = {
  path: string;
};

const Model = ({ path }: ModelProps) => {
  const { scene } = useGLTF(path) as unknown as GLTF & ObjectMap;
  scene.scale.set(0.1, 0.1, 0.1); // Adjust the scale factors as needed

  return <primitive object={scene} />;
};

const ThreeDModel = ({ path }: { path: string }) => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }}
      camera={{ position: [5, 5, 5], fov: 50 }}
    >
      {/* Ambient Light for global illumination */}
      <ambientLight intensity={0.3} />

      {/* Directional Light to simulate sunlight */}
      <directionalLight
        position={[3, 5, 5]}
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
      <OrbitControls enableZoom={false} target={[0, 1, 0]} />
    </Canvas>
  );
};

export default ThreeDModel;
