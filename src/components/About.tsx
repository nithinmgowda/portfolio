import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-xl text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  const skillSets = [
    {
      icon: <Code size={24} />,
      title: "Development",
      skills: ["React.js", "TypeScript", "Node.js", "Python", "Java"]
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Responsive Design", "Design Systems"]
    },
    {
      icon: <Globe size={24} />,
      title: "Other Skills",
      skills: ["Git", "AWS", "Docker", "Agile Methodology"]
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-white text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-gray-300 mb-12 text-center">
          <p className="mb-4">
            I'm Nithin M., a skilled UX/UI designer and app developer with a strong drive to transition into software development. 
            I specialize in crafting seamless, user-centered interfaces and building innovative solutions that blend design with functionality.
            With expertise in Figma, Flutter, and a solid foundation in machine learning and deep learning, 
            I bring a creative and technical approach to problem-solving.
            My work is driven by a user-first mindset, ensuring products are intuitive, functional, and impactful.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, learning newer and advanced technologies, 
            or enjoying my love for gaming.
          </p>
        </div>
       
      </div>
    </section>
  );
}