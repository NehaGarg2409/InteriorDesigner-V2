import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bedroom Interior",
      image: "/project1.jpg",
      description:
        "Luxurious and elegant bedroom interiors with modern materials.",
    },
    {
      id: 2,
      title: "Office Interior",
      image: "/ofc_cabin.png",
      description:
        "Functional and aesthetic office designs with natural elements.",
    },
    {
      id: 3,
      title: "Workspace Interior",
      image: "/ofc_image.png",
      description:
        "Luxurious and elegant workspace interiors with modern materials.",
    },
    {
      id: 4,
      title: "Jewellery Shop Interior",
      image: "/hero_image1.jpg",
      description:
        "Functional and aesthetic jewellery shop designs with natural elements.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-teal-100 to-amber-100">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <Image
          src="/dining_area.png"
          alt="Featured Project"
          fill
          className="object-cover brightness-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Featured Project: {''}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 bg-clip-text text-transparent font-extrabold">
              Courtyard Elegance
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Blending heritage with contemporary comfort in this award-winning
            residence.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 text-center">
          OUR BEST {""}
          <span className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold animate-[pulse_2s_ease-in-out_infinite]">
            PROJECTS
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-10 sm:text-lg">
          Discover some of our most inspiring and innovative designs.
        </p>
        <div className="grid gap-x-12 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-xl shadow-lg group"
            >
              {/* Background Image */}
              <div className="relative h-[400px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300 rounded-lg"
                />
              </div>

              {/* Overlay Info Card */}

              <div className="absolute -bottom-12 -right-6 bg-teal-100 bg-opacity-90 rounded-lg shadow-md p-4 max-w-[70%]">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {project.description}
                </p>
                <button className="text-black font-medium hover:underline mt-2">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
