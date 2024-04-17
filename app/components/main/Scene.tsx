"use client";
import React, { Suspense, useState, CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Model from "./Model";
import { Environment } from "@react-three/drei";

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <Html fullscreen>
      <div className="h-screen flex items-center justify-center">
        <div className="sweet-loading">
          <RingLoader
            color="#ffffff"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
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
