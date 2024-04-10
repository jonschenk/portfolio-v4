"use client";
import React, { useState, useEffect } from "react";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "./media/JONSCHENKJR_RESUME.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsMobile(isMobile);
    setVisible(isMobile);
  }, []);
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05 && !isMobile) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4 font-light uppercase",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 font-archivo-black font-light"
            )}
          >
            <span className="hidden md:block">{navItem.name}</span>
            <span className="">{navItem.icon}</span>
          </Link>
        ))}

        <button
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full font-archivo-black hover:border-gradient-to-r hover:border-cyan-500 transition-all duration-500 font-light ease-in-out"
          onClick={downloadResume}
        >
          <span className="font-light uppercase">
            Download Resume &#128195;
          </span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
