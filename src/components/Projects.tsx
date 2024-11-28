import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './Button';

const projects = [
  {
    title: 'GAYANA',
    description: 'A music application which uses API servies to play and listen music',
    image: 'https://i.postimg.cc/BZ84DrgT/Group-5.png',
    github: 'https://github.com/nithinmgowda/MUSIC',
    demo: '#'
  },
  {
    title: 'Brain tumor detection',
    description: 'A deep learning model which utillizes cogulative neural network to identify brain tumors and classify them',
    image: 'https://shorturl.at/uT4nv',
    github: 'https://github.com/nithinmgowda/CNN_BRAIN_TUMOR',
    demo: '#'
  },
  {
    title: 'RICETTA',
    description: 'An AI powered recipe application which provides recipes to various dishes over the world',
    image: 'https://i.postimg.cc/HWfHt6Zf/Group-102.png',
    github: 'https://github.com/nithinmgowda/RecipeApp',
    demo: '#'
  },
  {
    title: 'The Artscape',
    description: 'A webiste showcasing various art with pictures of paintings',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/nithinmgowda/THE-ARTSCAPE',
    demo: 'https://nithinmgowda.github.io/THE-ARTSCAPE/'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}