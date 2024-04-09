"use client";
import dynamic from "next/dynamic";
import { Projects } from "./components/Projects";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Navbar } from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import GitHubStatus from "./components/GithubStatus";
import SectionDiv from "./components/SectionDiv";

const Scene = dynamic(() => import("./components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative h-screen fade-in">
      <Navbar />
      <Scene />
      <SectionDiv words="[ABOUT_ME]" />
      <AboutMe />
      <SectionDiv words="[GITHUB_STATUS]" />
      <GitHubStatus />
      <SectionDiv words="[PROJECTS]" />
      <Projects />
      <BackgroundBeams />
    </main>
  );
}
