import React from 'react';
import { Download, ChevronRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { MoleculeBackground } from './MoleculeBackground';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-scientific-bg to-scientific-section pt-20">
      <MoleculeBackground />

      {/* Abstract Shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-scientific-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-scientific-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-scientific-section border border-scientific-secondary/20">
            <span className="text-scientific-secondary font-semibold text-sm tracking-wider uppercase">
              Microbiologist & Researcher
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-scientific-primary leading-tight">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light">
            {PERSONAL_INFO.punchline}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-scientific-primary text-white rounded-lg font-semibold shadow-lg hover:bg-scientific-secondary transition-all flex items-center gap-2 group">
              Contact Me <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#research" className="px-8 py-3 border-2 border-scientific-primary text-scientific-primary rounded-lg font-semibold hover:bg-scientific-primary hover:text-white transition-all flex items-center gap-2">
              View Research <ChevronRight size={18} />
            </a>
            <a href={PERSONAL_INFO.cv} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-scientific-accent text-scientific-primary rounded-lg font-bold shadow-md hover:bg-yellow-400 transition-all flex items-center gap-2">
              CV <Download size={18} />
            </a>
          </div>
        </div>

        {/* Image / Graphic */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-4 border-scientific-accent rounded-full animate-pulse opacity-50"></div>
            <div className="absolute -inset-4 border border-scientific-secondary rounded-full opacity-30"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
              <img
                src="/portfolio-image.jpg"
                alt="Praseeda Padmanabhan"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute top-10 -left-10 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce z-20">
              <div className="w-10 h-10 bg-scientific-section rounded-full flex items-center justify-center text-scientific-primary">
                <span className="font-bold text-lg">C1</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">IELTS Score</p>
                <p className="font-bold text-scientific-primary">7.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};