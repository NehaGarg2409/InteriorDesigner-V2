"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = ["/hero_image.jpg", "/hero_image2.jpg", "/hero_image3.jpg"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-[100vh] overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute top-0 left-0 z-[-1] h-full w-full">
        {heroImages.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Architecture slide ${i + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="animate-fadeInUp mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Designing Spaces That Inspire
        </h1>
        <p className="animate-fadeInUp mb-6 text-lg text-white/90 delay-200 md:text-xl">
          We craft modern <span className="text-yellow">residential</span> and{" "}
          <span className="text-yellow">commercial</span> environments.
        </p>
        <div className="animate-fadeInUp delay-400 flex space-x-4">
          <Link
            href="/projects"
            className="hover:bg-teal-100 transform rounded-lg bg-white px-6 py-2 font-semibold text-black shadow-md transition hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            Our Projects
          </Link>
          <Link
            href="/contact"
            className="bg-yellow hover:bg-teal-100 transform rounded-lg px-6 py-2 font-semibold text-black shadow-md transition hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
