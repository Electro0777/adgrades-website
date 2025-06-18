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
        
        {/* Animated glowing orbs */}
        <div className="absolute inset-0">
          {/* Large primary orb */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float opacity-10"
            style={{
              background: 'radial-gradient(circle, #00B5FF 0%, transparent 70%)',
              filter: 'blur(60px)',
              animationDuration: '8s',
              animationDelay: '0s'
            }}
          />
          
          {/* Medium secondary orb */}
          <div 
            className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full animate-float opacity-8"
            style={{
              background: 'radial-gradient(circle, #01F9C6 0%, transparent 70%)',
              filter: 'blur(50px)',
              animationDuration: '10s',
              animationDelay: '2s'
            }}
          />
          
          {/* Small accent orb */}
          <div 
            className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full animate-float opacity-6"
            style={{
              background: 'radial-gradient(circle, #00B5FF 0%, transparent 70%)',
              filter: 'blur(40px)',
              animationDuration: '12s',
              animationDelay: '4s'
            }}
          />
          
          {/* Additional floating orbs */}
          <div 
            className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full animate-float opacity-5"
            style={{
              background: 'radial-gradient(circle, #01F9C6 0%, transparent 70%)',
              filter: 'blur(35px)',
              animationDuration: '15s',
              animationDelay: '1s'
            }}
          />
          
          <div 
            className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full animate-float opacity-7"
            style={{
              background: 'radial-gradient(circle, #00B5FF 0%, transparent 70%)',
              filter: 'blur(45px)',
              animationDuration: '9s',
              animationDelay: '3s'
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
        
        {/* Subtle animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse opacity-20" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary/8 to-transparent animate-pulse opacity-15" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default DynamicBackground;