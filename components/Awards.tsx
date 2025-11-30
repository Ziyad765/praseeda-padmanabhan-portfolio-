import React from 'react';
import { Section } from './Section';
import { AWARDS, EXTRACURRICULARS } from '../constants';
import { Trophy, Mic, PenTool, Users, Award } from 'lucide-react';

const getIcon = (type: string) => {
  switch(type) {
    case 'presentation': return <Trophy className="text-scientific-accent" />;
    case 'paper': return <Award className="text-scientific-secondary" />;
    case 'speech': return <Mic className="text-purple-400" />;
    case 'literary': return <PenTool className="text-pink-400" />;
    default: return <Award />;
  }
};

export const Awards: React.FC = () => {
  return (
    <Section id="awards" title="Awards & Activities" isAlternate={true}>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {AWARDS.map((award, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 bg-scientific-section rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="mb-4 p-3 bg-scientific-bg w-fit rounded-lg shadow-inner">
                {getIcon(award.type)}
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">{award.title}</h4>
              <p className="text-scientific-primary font-medium text-sm mb-2">{award.event}</p>
              {award.description && (
                <p className="text-gray-500 text-sm mt-2 pt-2 border-t border-gray-100">
                  {award.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Extracurriculars */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-scientific-primary text-white rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users size={24} className="text-scientific-accent" />
            <h3 className="text-xl font-bold">Leadership</h3>
          </div>
          <ul className="space-y-4">
            {EXTRACURRICULARS.leadership.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>{item.role}</span>
                <span className="text-sm opacity-70 bg-white/10 px-2 py-1 rounded">{item.period}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border-2 border-scientific-section rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-red-100 rounded-full text-red-500">
               <Award size={24} />
             </div>
            <h3 className="text-xl font-bold text-gray-800">Volunteering</h3>
          </div>
          <ul className="space-y-3">
            {EXTRACURRICULARS.volunteering.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};