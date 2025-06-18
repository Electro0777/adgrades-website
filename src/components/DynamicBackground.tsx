import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface DynamicBackgroundProps {
  variant?: 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'careers';
  className?: string;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ 
  variant = 'home', 
  className = '' 
}) => {
  const { isDark } = useTheme();

  return (
    <div className={`fixed inset-0 overflow-hidden -z-10 ${className}`}>
      {/* Base gradient background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E293B]'
          : 'bg-gradient-to-br from-white via-slate-50 to-slate-100'
      }`}>
        
        {/* Animated glowing orbs */}
        <div className="absolute inset-0">
          {/* Large primary orb */}
          <div 
            className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float ${
              isDark ? 'opacity-5' : 'opacity-3'
            }`}
            style={{
              background: isDark 
                ? 'radial-gradient(circle, #00B5FF 0%, transparent 70%)'
                : 'radial-gradient(circle, #00B5FF 0%, transparent 80%)',
              filter: 'blur(60px)',
              animationDuration: '8s',
              animationDelay: '0s'
            }}
          />
          
          {/* Medium secondary orb */}
          <div 
            className={`absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full animate-float ${
              isDark ? 'opacity-4' : 'opacity-2'
            }`}
            style={{
              background: isDark
                ? 'radial-gradient(circle, #01F9C6 0%, transparent 70%)'
                : 'radial-gradient(circle, #01F9C6 0%, transparent 80%)',
              filter: 'blur(50px)',
              animationDuration: '10s',
              animationDelay: '2s'
            }}
          />
          
          {/* Small accent orb */}
          <div 
            className={`absolute top-2/3 left-1/2 w-64 h-64 rounded-full animate-float ${
              isDark ? 'opacity-3' : 'opacity-2'
            }`}
            style={{
              background: isDark
                ? 'radial-gradient(circle, #00B5FF 0%, transparent 70%)'
                : 'radial-gradient(circle, #00B5FF 0%, transparent 80%)',
              filter: 'blur(40px)',
              animationDuration: '12s',
              animationDelay: '4s'
            }}
          />
          
          {/* Additional floating orbs */}
          <div 
            className={`absolute top-1/2 right-1/4 w-48 h-48 rounded-full animate-float ${
              isDark ? 'opacity-3' : 'opacity-2'
            }`}
            style={{
              background: isDark
                ? 'radial-gradient(circle, #01F9C6 0%, transparent 70%)'
                : 'radial-gradient(circle, #01F9C6 0%, transparent 80%)',
              filter: 'blur(35px)',
              animationDuration: '15s',
              animationDelay: '1s'
            }}
          />
          
          <div 
            className={`absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full animate-float ${
              isDark ? 'opacity-4' : 'opacity-2'
            }`}
            style={{
              background: isDark
                ? 'radial-gradient(circle, #00B5FF 0%, transparent 70%)'
                : 'radial-gradient(circle, #00B5FF 0%, transparent 80%)',
              filter: 'blur(45px)',
              animationDuration: '9s',
              animationDelay: '3s'
            }}
          />

          {/* Additional smaller orbs for more movement */}
          <div 
            className={`absolute top-1/6 right-1/6 w-32 h-32 rounded-full animate-float ${
              isDark ? 'opacity-2' : 'opacity-1'
            }`}
            style={{
              background: isDark
                ? 'radial-gradient(circle, #01F9C6 0%, transparent 70%)'
                : 'radial-gradient(circle, #01F9C6 0%, transparent 80%)',
              filter: 'blur(25px)',
              animationDuration: '7s',
              animationDelay: '5s'
            }}
          />
          
          <div 
            className={`absolute bottom-1/6 left-1/6 w-40 h-40 rounded-full animate-float ${
              isDark ? 'opacity-3' : 'opacity-2'
            }`}
            style={{
              background: isDark
                ? 'radial-gradient(circle, #00B5FF 0%, transparent 70%)'
                : 'radial-gradient(circle, #00B5FF 0%, transparent 80%)',
              filter: 'blur(30px)',
              animationDuration: '11s',
              animationDelay: '6s'
            }}
          />
        </div>
        
        {/* Subtle grid pattern - different for light/dark */}
        <div 
          className={`absolute inset-0 ${isDark ? 'opacity-[0.015]' : 'opacity-[0.02]'}`}
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? 'rgba(0, 181, 255, 0.1)' : 'rgba(0, 181, 255, 0.05)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(0, 181, 255, 0.1)' : 'rgba(0, 181, 255, 0.05)'} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Subtle animated lines */}
        <div className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/${isDark ? '8' : '4'} to-transparent animate-pulse opacity-${isDark ? '15' : '10'}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary/${isDark ? '6' : '3'} to-transparent animate-pulse opacity-${isDark ? '10' : '5'}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default DynamicBackground;