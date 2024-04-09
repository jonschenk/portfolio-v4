"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconHome,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "LinkedIn",
      link: "/about",
      icon: (
        <IconBrandLinkedin className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Github",
      link: "/contact",
      icon: (
        <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
