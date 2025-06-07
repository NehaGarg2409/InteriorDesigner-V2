"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "satyagroup.sec.md@gmail.com",
      link: "mailto:satyagroup.sec.md@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 90234 22269",
      link: "tel:+9190234 22269",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Office Location",
      detail: "SCO 207 CABIN 22 SECOND FLOOR SECTOR 14, Panchkula, India, 134109",
      link: "#",
      description: "Visit our design studio"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: "#",
      description: "We're here to help"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-200 text-slate-800">

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-sky-100/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Let's Create Something
              <span className="text-sky-400 block">Beautiful Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500">
              Ready to transform your space? Get in touch and let's discuss how we can bring your interior design vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-sky-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-sky-400/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-400/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <info.icon className="w-8 h-8 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-sky-400 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-sm text-slate-500 mb-2">
                  {info.description}
                </p>
                {info.link !== "#" ? (
                  <a 
                    href={info.link}
                    className="text-slate-800 hover:text-sky-400 transition-colors duration-200 font-medium"
                  >
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-slate-800 font-medium">{info.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                Start Your Design Journey
              </h2>
              <p className="text-lg text-slate-500">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-800 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 hover:border-sky-400/50 hover:shadow-lg transform hover:scale-[1.02]"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-800 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 hover:border-sky-400/50 hover:shadow-lg transform hover:scale-[1.02]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 hover:border-sky-400/50 hover:shadow-lg transform hover:scale-[1.02]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-800 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 hover:border-sky-400/50 hover:shadow-lg transform hover:scale-[1.02]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-800 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 hover:border-sky-400/50 hover:shadow-lg transform hover:scale-[1.02]"
                    placeholder="Interior Design Consultation"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 hover:border-sky-400/50 hover:shadow-lg transform hover:scale-[1.02] resize-none"
                    placeholder="Tell us about your project, style preferences, budget, and timeline..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-4 bg-sky-400 text-white font-semibold rounded-xl hover:bg-sky-400/90 transition-all duration-200 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-sky-100/5 to-sky-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
            Prefer to Talk Directly?
          </h3>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Schedule a consultation call to discuss your project in detail and get personalized recommendations.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center px-8 py-4 bg-sky-100 text-slate-800 font-semibold rounded-xl hover:bg-sky-100/80 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now: +91 98765 43210
          </a>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
