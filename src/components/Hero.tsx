import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/40 z-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi I'm Nithin.m.gowda
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          UX/UI designer + AI app dev crafting smart, fun experiences—building cool stuff! 
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="white">View Projects</Button>
          <Button variant="white">Contact Me</Button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/nithinmgowda" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="www.linkedin.com/in/nithin-m-0892a5294" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="nithinmgowda12@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}