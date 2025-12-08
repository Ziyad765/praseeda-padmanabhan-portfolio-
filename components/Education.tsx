import React from 'react';
import { Section } from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" isAlternate={true} subtitle="Academic Journey">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-4 border-scientific-secondary/30 ml-4 md:ml-6 space-y-12">
          {EDUCATION.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-scientific-bg border-4 border-scientific-secondary rounded-full group-hover:bg-scientific-accent transition-colors"></div>
              
              <div className="glass-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-heading font-bold text-scientific-primary flex items-center gap-2">
                    <GraduationCap size={24} className="text-scientific-secondary" />
                    {item.degree}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-scientific-primary text-white text-xs font-bold rounded-full mt-2 md:mt-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-700 font-medium text-lg mb-2">{item.institution}</p>
                <p className="text-scientific-secondary font-bold">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};