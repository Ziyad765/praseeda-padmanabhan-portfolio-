import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  isAlternate?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "",
  isAlternate = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 relative overflow-hidden ${
        isAlternate ? 'bg-scientific-section' : 'bg-scientific-bg'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-scientific-primary mb-3 uppercase tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <div className="w-24 h-1 bg-scientific-accent mx-auto rounded-full"></div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};