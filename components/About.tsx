import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Flag, User, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Professional Profile">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>{PERSONAL_INFO.about}</p>
          <p className="italic text-scientific-secondary border-l-4 border-scientific-accent pl-4 py-2 bg-white shadow-sm rounded-r-lg">
            "Dedicated to bridging the gap between microbial diagnostics and advanced nanomedicine."
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-scientific-primary h-fit">
          <h3 className="text-xl font-heading font-bold text-scientific-primary mb-6">Personal Details</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-scientific-section rounded-lg text-scientific-secondary">
                <Flag size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Nationality</p>
                <p className="font-medium">{PERSONAL_INFO.nationality}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-2 bg-scientific-section rounded-lg text-scientific-secondary">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Birthplace</p>
                <p className="font-medium">{PERSONAL_INFO.birthplace}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-scientific-section rounded-lg text-scientific-secondary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Location</p>
                <p className="font-medium">{PERSONAL_INFO.currentLocation}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-scientific-section rounded-lg text-scientific-secondary">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">English Proficiency</p>
                <p className="font-medium">IELTS: {PERSONAL_INFO.ielts}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};