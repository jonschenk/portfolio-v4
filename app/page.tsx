"use client";
import dynamic from "next/dynamic";
import { Projects } from "./components/main/Projects";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Navbar } from "./components/main/Navbar";
import AboutMe from "./components/main/AboutMe";
import GitHubStatus from "./components/main/GithubStatus";
import SectionDiv from "./components/main/SectionDiv";
import { WorkExperience } from "./components/main/WorkExperience";
import Footer from "./components/main/Footer";
import { Contact } from "./components/main/Contact";

const Scene = dynamic(() => import("./components/main/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative h-screen fade-in dark">
      <Navbar />
      <Scene />
      <SectionDiv words="[ABOUT_ME]" />
      <AboutMe />
      <SectionDiv words="[GITHUB_STATUS]" />
      <GitHubStatus />
      <SectionDiv words="[WORK_EXPERIENCE]" />
      <WorkExperience />
      <SectionDiv words="[PROJECTS]" />
      <Projects />
      <SectionDiv words="[CONTACT_ME]" />
      <Contact />
      <Footer />
      <BackgroundBeams />
    </main>
  );
}
