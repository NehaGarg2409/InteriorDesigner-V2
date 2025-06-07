"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/ProjectsSection/page";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <ScrollUp /> */}
      <Hero />
      <Projects />
      
    </>
  );
}
