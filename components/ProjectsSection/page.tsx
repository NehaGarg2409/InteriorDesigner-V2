"use client";
import React from "react";
import Image from "next/image";
const projects = [
  {
    id: 1,
    title: "Modern Residential Home",
    description: "A beautiful modern home designed with open spaces and natural light.",
    image: "/project1.jpg",
    link: "/projects/modern-residential-home",
  },
  {
    id: 2,
    title: "Commercial Office Space",
    description: "A sleek, professional office environment that fosters productivity.",
    image: "/project2.jpg",
    link: "/projects/commercial-office-space",
  },
  {
    id: 3,
    title: "Urban Apartment Complex",
    description: "Sustainable apartments in the heart of the city with modern amenities.",
    image: "/project3.jpg",
    link: "/projects/urban-apartment-complex",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
        Our Projects
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, image, link }) => (
          <a
            key={id}
            href={link}
            className="group block overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-64 w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={id === 1}
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;