import { RigidBody } from "@react-three/rapier";
import { DoubleSide } from "three";

export default function Floor(props) {
  return (
    <RigidBody name="Floor" type="fixed" {...props} colliders="trimesh">
      <mesh receiveShadow rotation-x={Math.PI * 0.5}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="orange" side={DoubleSide}/>
      </mesh>
    </RigidBody>
  );
}
