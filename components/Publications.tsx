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

            <p className="text-lg text-gray-300 mb-2 italic font-light">
              Published in {pub.journal}
            </p>
            {pub.volume && <p className="text-gray-400 mb-1">{pub.volume}</p>}
            {pub.date && <p className="text-gray-400 mb-4">{pub.date}</p>}

            {pub.authors && (
              <p className="text-gray-300 mb-6 border-l-4 border-scientific-accent pl-4">
                <span className="font-semibold text-scientific-accent">Authors:</span> {pub.authors}
              </p>
            )}



            {pub.link && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-scientific-accent text-scientific-primary px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg">
                Read Paper <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
};