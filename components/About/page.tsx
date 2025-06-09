import React from 'react';
import Image from 'next/image';
import { Award, Users, Home, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Home, label: 'Projects Completed', value: '120+' },
    { icon: Award, label: 'Design Awards', value: '18' },
    { icon: Users, label: 'Team Members', value: '40+' },
    { icon: Briefcase, label: 'Years of Experience', value: '18+' }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Image Section */}
          <div className="h-full">
            <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/TeekshaGupta.png" 
                alt="Teeksha Gupta"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-between h-full min-h-[500px]">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                About Teeksha Gupta
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                "With over two decades of experience, Teeksha Gupta is recognized as one of the best architects in Panchkula. We focus on creating spaces that feel like home — whether it’s designing your dream house, planning a modern office, or crafting the perfect interior."
              </p>
              <p className="text-lg text-muted-foreground mb-2">
                We also offer Vastu consulting, industrial design, and landscape planning, ensuring every space is beautiful, balanced, and deeply personal.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our team brings deep expertise and boundless creativity to every project. We believe architecture should not only be visually compelling but also environmentally thoughtful and tailored to your needs.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-600 transition"
                >
                  Learn More About Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
