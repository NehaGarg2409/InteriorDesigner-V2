import React from 'react';
import { Award, Users, Home, Palette } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Home, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '120+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Palette, label: 'Design Awards', value: '15+' }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/TeekshaGupta.png"
              alt="Teeksha Gupta - Interior Designer"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Teeksha Gupta
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 10+ years of experience in interior design, I specialize in creating spaces that are both beautiful and functional. My approach combines contemporary aesthetics with timeless elegance, ensuring each project reflects the unique personality and lifestyle of my clients.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I believe that great design is about more than just beautiful spaces—it's about creating environments that enhance the way you live, work, and connect with others. Every project is a collaboration, and I work closely with my clients to bring their vision to life.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
