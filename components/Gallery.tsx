import React from 'react';
import { Section } from './Section';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
    return (
        <Section id="gallery" title="Gallery" subtitle="Scientific Exploration" isAlternate={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GALLERY_IMAGES.map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
                        <div className="absolute inset-0 bg-scientific-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img
                            src={`/gallery/${image}`}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
};
