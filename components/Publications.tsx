import React from 'react';
import { Section } from './Section';
import { PUBLICATIONS } from '../constants';
import { BookOpen, ExternalLink } from 'lucide-react';

export const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Publications" subtitle="Scientific Contributions">
      {PUBLICATIONS.map((pub, index) => (
        <div key={index} className="max-w-4xl mx-auto bg-gradient-to-r from-scientific-primary to-[#1a4f8b] rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-scientific-accent">
              <BookOpen size={24} />
              <span className="font-bold tracking-widest text-sm uppercase">Published Research</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-relaxed">
              "{pub.title}"
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 italic font-light">
              Published in {pub.journal}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-sm text-gray-300 mb-3 uppercase tracking-wide font-bold">Indexed In:</p>
              <div className="flex flex-wrap gap-2">
                {pub.indexing.map((idx, i) => (
                  <span key={i} className="px-3 py-1 bg-black/20 rounded-full text-xs text-white border border-white/10">
                    {idx}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};