"use client";
import About from "@/components/About/page";
import Hero from "@/components/Hero";
import Projects from "@/components/ProjectsSection/page";
import Testimonials from "@/components/Testimonials/page";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Testimonials />
    </>
  );
}
