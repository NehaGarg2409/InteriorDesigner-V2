import React from 'react';
import { Instagram, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Ar Teeksha Gupta</h3>
            <p className="text-muted-foreground mb-4">
              Creating beautiful, functional interior spaces that reflect your unique style and enhance your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="mailto:teeksha@interiordesign.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Residential Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Commercial Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Color Consultation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Space Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors duration-200">Portfolio</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" fill="currentColor" /> for beautiful spaces
          </p>
          <p className="text-muted-foreground mt-2">
            © 2024 Ar Teeksha Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
