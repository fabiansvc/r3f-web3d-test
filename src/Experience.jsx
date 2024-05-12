import { Canvas } from "@react-three/fiber";
import Fox from "./world/Fox";
import { KeyboardControls, Sky } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Floor from "./world/Floor";
import Ecctrl from "ecctrl";
import { useMemo } from "react";
import Player from "./world/Player";

export default function Experience() {
  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "backward", keys: ["ArrowDown", "KeyS"] },
      { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
      { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      { name: "jump", keys: ["Space"] },
      { name: "run", keys: ["Shift"] },
    ],
    []
  );

  const onCollisionBall = ({other}) => {
    if(other.rigidBodyObject.name === "Fox") {
      console.log("Ball collided with Fox");
    }
  };

  return (
    <KeyboardControls map={map}>
      <Canvas>
        <Sky />
        <ambientLight />
        <directionalLight position={[10, 10, 5]} intensity={5} />
        <Physics debug>
          <Floor />
          <Fox position={[0, 0, 3]} />
          <Ecctrl
            position={[0, 1, -4]}
            name="ball"
            onCollisionEnter={(e) => onCollisionBall(e)}
          >
            <Player />
          </Ecctrl>
        </Physics>
      </Canvas>
    </KeyboardControls>
  );
}
