import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Canvas3D() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}

interface Props extends MeshProps { }

function Box(props: Props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null);
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((_state, delta) =>
    meshRef.current ? (meshRef.current.rotation.x += delta) : null,
  );
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}
