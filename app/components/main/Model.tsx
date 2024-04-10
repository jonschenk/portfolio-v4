import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { Leva, useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("./media/shape.glb");
  const { viewport } = useThree();
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.001;
  });

  const materialProps = useControls({
    thickness: {
      value: 0.2,
      min: 0,
      max: 3,
      step: 0.5,
    },
    roughness: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.1,
    },
    transmission: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.1,
    },
    ior: {
      value: 1.2,
      min: 0,
      max: 3,
      step: 0.1,
    },
    chromaticAberration: {
      value: 0.41,
      min: 0,
      max: 1,
    },
  });

  return (
    <group scale={viewport.width / 10}>
      <Text
        fontSize={1}
        font="/fonts/ArchivoBlack-Regular.ttf"
        position={[0, 0, -0.5]}
      >
        [JS]
      </Text>
      <group name="shape" position={[0, 0, 0]} scale={0.35}>
        <mesh
          ref={mesh}
          geometry={(nodes.shape as THREE.Mesh).geometry}
          rotation={[0, 0, 0]}
        >
          <MeshTransmissionMaterial {...materialProps} />
          <Leva hidden />
        </mesh>
      </group>
    </group>
  );
}
useGLTF.preload("./media/shape.glb");
