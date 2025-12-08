import React from 'react';
import { Section } from './Section';
import { SKILLS, OFFERS } from '../constants';
import { CheckCircle2 } from 'lucide-react';


export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Expertise" subtitle="Competencies">
      <div className="space-y-12">
        {SKILLS.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-heading font-bold text-scientific-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-scientific-accent"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm hover:border-scientific-secondary hover:text-scientific-secondary transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}


      </div>
    </Section>
  );
};