import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls, Sky } from "@react-three/drei";

export default function Experience() {
  return (
    <Canvas>
      <OrbitControls />
      <Sky />
      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={5} />
      <Model />
    </Canvas>
  );
}
