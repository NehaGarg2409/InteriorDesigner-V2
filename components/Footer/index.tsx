"use client";
import React from 'react';
import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-heading font-semibold">Anshul Architects</span>
            </div>
            <p className="text-gray-200 mb-6">
              Creating spaces that inspire. We blend innovative design with functionality to create architectural masterpieces.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-200 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-200 hover:text-white transition-colors">Architectural Design</li>
              <li className="text-gray-200 hover:text-white transition-colors">Interior Design</li>
              <li className="text-gray-200 hover:text-white transition-colors">Urban Planning</li>
              <li className="text-gray-200 hover:text-white transition-colors">Landscape Design</li>
              <li className="text-gray-200 hover:text-white transition-colors">Renovation</li>
              <li className="text-gray-200 hover:text-white transition-colors">Construction Management</li>
              <li className="text-gray-200 hover:text-white transition-colors">Evaluation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-200" />
                <span className="text-gray-200">
                  Sco 8, Green Field Market, opposite Sector 7, DD Colony, Kurukshetra, Haryana 136118
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-200" />
                <a href="mailto:info@anshularchitects.com" className="text-gray-200 hover:text-white transition-colors">
                  info@anshularchitects.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-200 rotate-90" />
                <a href="tel:+918930000984" className="text-gray-200 hover:text-white transition-colors">
                  +91 89300 00984
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Anshul Architects. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
