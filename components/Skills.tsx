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

        {/* Expertise I Offer */}
        <div>
          <h3 className="text-xl font-heading font-bold text-scientific-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-scientific-accent"></span>
            Expertise I Offer
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFERS.map((offer, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="text-scientific-secondary mt-1 shrink-0" size={20} />
                <span className="font-medium text-gray-700">{offer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};