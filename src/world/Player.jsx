
export default function Player() {
  return (
    <mesh receiveShadow>
      <capsuleGeometry args={[0.3, 0.7, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
