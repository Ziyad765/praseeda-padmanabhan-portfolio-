import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-scientific-primary text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-6">
        
        <h2 className="text-2xl font-heading font-bold">{PERSONAL_INFO.name}</h2>
        
        <div className="flex space-x-6">
          <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-scientific-accent hover:text-scientific-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 bg-white/10 rounded-full hover:bg-scientific-accent hover:text-scientific-primary transition-colors">
            <Mail size={20} />
          </a>
          <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-scientific-accent hover:text-scientific-primary transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <div className="text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Praseeda Padmanabhan. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <span className="text-red-400">❤️</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};