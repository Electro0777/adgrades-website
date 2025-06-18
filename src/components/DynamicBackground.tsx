import React from 'react';

interface DynamicBackgroundProps {
  variant?: 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'careers';
  className?: string;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ 
  variant = 'home', 
  className = '' 
}) => {
  return (
    <div className={`fixed inset-0 overflow-hidden -z-10 ${className}`}>
      {/* Clean slate gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] to-[#0F172A]">
        
        {/* Minimal brand accent gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, #00B5FF 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, #01F9C6 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
        </div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 181, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 181, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
};

export default DynamicBackground;