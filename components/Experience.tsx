import React from 'react';
import { Section } from './Section';
import { INTERNSHIPS } from '../constants';
import { FlaskConical, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" isAlternate={true} subtitle="Internships & Training">
      <div className="grid md:grid-cols-3 gap-6">
        {INTERNSHIPS.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-scientific-secondary hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-scientific-section rounded-full text-scientific-primary">
                <FlaskConical size={24} />
              </div>
              <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                {item.period}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-4 min-h-[3rem] line-clamp-2">
              {item.company}
            </h3>

            <ul className="space-y-2 mb-4">
              {item.description.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircle2 size={16} className="text-scientific-secondary shrink-0 mt-0.5" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {item.document && (
              <div className="pt-4 border-t border-gray-100">
                <a href={item.document} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-scientific-primary hover:text-scientific-secondary hover:underline flex items-center gap-2">
                  View Document &rarr;
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};