"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Spinner } from "@nextui-org/react";
import Model from "./Model";
import { Environment } from "@react-three/drei";

function Loader() {
  return (
    <Html fullscreen>
      <div className="h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    </Html>
  );
}

export default function Scene() {
  return (
    <>
      <Canvas style={{ backgroundColor: "transparent" }}>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Suspense fallback={<Loader />}>
          <Environment files="/media/kloofendal_28d_misty_puresky_4k.hdr" />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
}
