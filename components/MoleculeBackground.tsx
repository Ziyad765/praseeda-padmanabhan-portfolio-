import React from 'react';

export const MoleculeBackground: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-10 ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="molecular-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="3" fill="#0B3C6F" />
          <circle cx="80" cy="80" r="3" fill="#008B8B" />
          <circle cx="20" cy="80" r="2" fill="#0B3C6F" />
          <circle cx="80" cy="20" r="2" fill="#008B8B" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="#0B3C6F" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="20" y2="80" stroke="#008B8B" strokeWidth="0.5" />
          <line x1="20" y1="80" x2="80" y2="80" stroke="#0B3C6F" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#molecular-pattern)" />
      </svg>
    </div>
  );
};