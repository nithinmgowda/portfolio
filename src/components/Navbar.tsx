import React from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <div className="fixed w-full top-0 z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-white font-poppins text-base">NITHIN.M.GOWDA</span>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors font-poppins"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="md:hidden text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}