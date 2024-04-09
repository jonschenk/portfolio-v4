"use client";
import dynamic from "next/dynamic";
import { Projects } from "./components/Projects";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Navbar } from "./components/Navbar";

const Scene = dynamic(() => import("./components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative h-screen fade-in">
      <Navbar />
      <Scene />
      <Projects />
      <BackgroundBeams />
    </main>
  );
}
