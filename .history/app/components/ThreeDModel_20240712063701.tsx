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
      <ambientLight />
      <pointLight position={[1000, 10, 10]} />
      <Suspense fallback={null}>
        <Model path={path} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;
