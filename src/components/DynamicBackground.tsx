import React from 'react';

interface DynamicBackgroundProps {
  variant?: 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'careers';
  className?: string;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ 
  variant = 'home', 
  className = '' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'home':
        return {
          orbs: [
            { size: 'w-96 h-96', position: 'top-1/4 left-1/4', color: 'from-primary/30 to-primary/5', delay: '0s' },
            { size: 'w-80 h-80', position: 'top-3/4 right-1/4', color: 'from-secondary/25 to-secondary/5', delay: '1s' },
            { size: 'w-72 h-72', position: 'bottom-1/4 left-1/3', color: 'from-accent/20 to-accent/5', delay: '2s' },
            { size: 'w-64 h-64', position: 'top-1/2 right-1/3', color: 'from-primary/15 to-transparent', delay: '3s' }
          ],
          particles: [
            { size: 'w-2 h-2', position: 'top-20 left-20', color: 'bg-primary/60' },
            { size: 'w-1 h-1', position: 'top-40 right-32', color: 'bg-secondary/50' },
            { size: 'w-1.5 h-1.5', position: 'bottom-32 left-1/2', color: 'bg-accent/40' },
            { size: 'w-1 h-1', position: 'top-1/2 right-20', color: 'bg-primary/30' }
          ]
        };
      
      case 'about':
        return {
          orbs: [
            { size: 'w-80 h-80', position: 'top-1/3 right-1/4', color: 'from-primary/25 to-primary/5', delay: '0s' },
            { size: 'w-72 h-72', position: 'bottom-1/3 left-1/4', color: 'from-secondary/20 to-secondary/5', delay: '1.5s' },
            { size: 'w-64 h-64', position: 'top-2/3 right-1/3', color: 'from-accent/15 to-transparent', delay: '2.5s' }
          ],
          particles: [
            { size: 'w-1.5 h-1.5', position: 'top-32 left-32', color: 'bg-primary/50' },
            { size: 'w-1 h-1', position: 'bottom-40 right-40', color: 'bg-secondary/40' },
            { size: 'w-2 h-2', position: 'top-1/2 left-1/4', color: 'bg-accent/30' }
          ]
        };
      
      case 'services':
        return {
          orbs: [
            { size: 'w-88 h-88', position: 'top-1/4 right-1/5', color: 'from-primary/30 to-primary/8', delay: '0s' },
            { size: 'w-76 h-76', position: 'bottom-1/4 left-1/5', color: 'from-secondary/25 to-secondary/8', delay: '1s' },
            { size: 'w-68 h-68', position: 'top-2/3 left-1/2', color: 'from-accent/20 to-accent/5', delay: '2s' }
          ],
          particles: [
            { size: 'w-1 h-1', position: 'top-24 right-24', color: 'bg-primary/40' },
            { size: 'w-1.5 h-1.5', position: 'bottom-24 left-24', color: 'bg-secondary/35' },
            { size: 'w-1 h-1', position: 'top-1/3 right-1/3', color: 'bg-accent/30' }
          ]
        };
      
      case 'portfolio':
        return {
          orbs: [
            { size: 'w-84 h-84', position: 'top-1/5 left-1/5', color: 'from-primary/28 to-primary/6', delay: '0s' },
            { size: 'w-76 h-76', position: 'bottom-1/5 right-1/5', color: 'from-secondary/22 to-secondary/6', delay: '1.2s' },
            { size: 'w-68 h-68', position: 'top-3/5 right-1/4', color: 'from-accent/18 to-accent/4', delay: '2.4s' }
          ],
          particles: [
            { size: 'w-1.5 h-1.5', position: 'top-28 right-28', color: 'bg-primary/45' },
            { size: 'w-1 h-1', position: 'bottom-28 left-28', color: 'bg-secondary/38' },
            { size: 'w-2 h-2', position: 'top-2/5 left-2/5', color: 'bg-accent/32' }
          ]
        };
      
      case 'contact':
        return {
          orbs: [
            { size: 'w-92 h-92', position: 'top-1/6 right-1/6', color: 'from-primary/32 to-primary/8', delay: '0s' },
            { size: 'w-80 h-80', position: 'bottom-1/6 left-1/6', color: 'from-secondary/26 to-secondary/8', delay: '1.3s' },
            { size: 'w-72 h-72', position: 'top-4/6 left-1/2', color: 'from-accent/22 to-accent/6', delay: '2.6s' }
          ],
          particles: [
            { size: 'w-2 h-2', position: 'top-16 left-16', color: 'bg-primary/55' },
            { size: 'w-1 h-1', position: 'bottom-16 right-16', color: 'bg-secondary/45' },
            { size: 'w-1.5 h-1.5', position: 'top-1/2 right-1/4', color: 'bg-accent/38' }
          ]
        };
      
      case 'careers':
        return {
          orbs: [
            { size: 'w-88 h-88', position: 'top-1/4 left-1/6', color: 'from-primary/30 to-primary/7', delay: '0s' },
            { size: 'w-78 h-78', position: 'bottom-1/4 right-1/6', color: 'from-secondary/24 to-secondary/7', delay: '1.4s' },
            { size: 'w-70 h-70', position: 'top-3/5 right-2/5', color: 'from-accent/20 to-accent/5', delay: '2.8s' }
          ],
          particles: [
            { size: 'w-1.5 h-1.5', position: 'top-20 right-20', color: 'bg-primary/50' },
            { size: 'w-1 h-1', position: 'bottom-20 left-20', color: 'bg-secondary/40' },
            { size: 'w-2 h-2', position: 'top-2/5 left-3/5', color: 'bg-accent/35' }
          ]
        };
      
      default:
        return {
          orbs: [
            { size: 'w-80 h-80', position: 'top-1/4 left-1/4', color: 'from-primary/25 to-primary/5', delay: '0s' }
          ],
          particles: [
            { size: 'w-1 h-1', position: 'top-20 left-20', color: 'bg-primary/40' }
          ]
        };
    }
  };

  const { orbs, particles } = getVariantStyles();

  return (
    <div className={`fixed inset-0 overflow-hidden -z-10 ${className}`}>
      {/* Animated Gradient Drift Background */}
      <div className="hero-gradient-bg" />
      
      {/* Enhanced base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95">
        
        {/* Dynamic animated orbs */}
        {orbs.map((orb, index) => (
          <div
            key={`orb-${index}`}
            className={`absolute ${orb.size} ${orb.position} bg-gradient-radial ${orb.color} rounded-full animate-pulse-slow blur-3xl`}
            style={{ 
              animationDelay: orb.delay,
              animationDuration: '4s'
            }}
          />
        ))}
        
        {/* Floating particles */}
        {particles.map((particle, index) => (
          <div
            key={`particle-${index}`}
            className={`absolute ${particle.size} ${particle.position} ${particle.color} rounded-full animate-float opacity-60`}
            style={{ 
              animationDelay: `${index * 0.5}s`,
              animationDuration: '6s'
            }}
          />
        ))}
        
        {/* Enhanced grid pattern for light mode */}
        <div 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Subtle animated lines for visual interest */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary/15 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Light mode enhancement: subtle color overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.02] via-transparent to-secondary/[0.02] dark:opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/[0.01] via-transparent to-primary/[0.01] dark:opacity-30" />
      </div>
      
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      
      {/* Light mode specific enhancements */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10 dark:opacity-0" />
      
      {/* Content readability overlay */}
      <div className="hero-content-overlay absolute inset-0" />
    </div>
  );
};

export default DynamicBackground;