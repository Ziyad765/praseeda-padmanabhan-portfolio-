import React from 'react';
import { Section } from './Section';
import { RESEARCH } from '../constants';
import { Microscope, Activity, Target, Zap } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <Section id="research" title="Research" subtitle="Innovation & Discovery">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="grid md:grid-cols-5">
          
          <div className="md:col-span-2 bg-scientific-primary p-10 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 bg-scientific-secondary rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <Microscope size={64} className="mb-6 text-scientific-accent" />
            <h3 className="text-2xl font-heading font-bold mb-2">Independent Research</h3>
            <p className="opacity-80 mb-6">{RESEARCH.period}</p>
            <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
              {RESEARCH.institution}
            </div>
          </div>

          <div className="md:col-span-3 p-10 flex flex-col justify-center">
            <h4 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-6 leading-snug">
              {RESEARCH.title}
            </h4>

            <div className="space-y-4">
              <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Key Focus Areas</h5>
              <div className="flex flex-wrap gap-3">
                {RESEARCH.areas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-scientific-section text-scientific-primary rounded-lg font-medium">
                    {idx === 0 && <Activity size={16} />}
                    {idx === 1 && <Zap size={16} />}
                    {idx === 2 && <Target size={16} />}
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-scientific-accent/20 flex items-center justify-center">
                 <div className="w-3 h-3 bg-scientific-accent rounded-full animate-ping"></div>
               </div>
               <p className="text-sm text-gray-500">
                 Research focused on enhancing therapeutic efficacy for breast cancer cells (MDA-MB-231).
               </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};