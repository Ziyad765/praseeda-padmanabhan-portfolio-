import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" isAlternate={true}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Info & Map */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
            <p className="text-gray-600">
              Feel free to reach out for collaborations, research opportunities, or academic discussions.
            </p>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow-sm text-scientific-secondary">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-800">Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-scientific-primary hover:underline">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow-sm text-scientific-secondary">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-800">Phone</p>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-scientific-primary hover:underline">{PERSONAL_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow-sm text-scientific-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-800">Address</p>
                <p className="text-gray-600 max-w-xs">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* Visual Map Placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
             <div className="absolute inset-0 bg-[url('https://picsum.photos/800/400?grayscale&blur=2')] bg-cover bg-center opacity-50"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg flex flex-col items-center">
                   <MapPin className="text-red-500 mb-2" size={32} />
                   <span className="font-bold text-gray-800">Chennai, India</span>
                   <span className="text-xs text-gray-500">Nanmangalam</span>
                </div>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-scientific-primary">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-secondary focus:ring-2 focus:ring-scientific-secondary/20 outline-none transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-secondary focus:ring-2 focus:ring-scientific-secondary/20 outline-none transition-all" placeholder="Your Email" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-secondary focus:ring-2 focus:ring-scientific-secondary/20 outline-none transition-all" placeholder="Inquiry / Collaboration" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-secondary focus:ring-2 focus:ring-scientific-secondary/20 outline-none transition-all" placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-scientific-primary text-white font-bold rounded-lg hover:bg-scientific-secondary transition-colors flex justify-center items-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </Section>
  );
};