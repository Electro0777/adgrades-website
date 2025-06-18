import React, { useRef, useEffect, useState } from 'react';
import { createNoise3D } from 'simplex-noise';
import { useTheme } from '../contexts/ThemeContext';

const TAU = 2 * Math.PI;
const BASE_TTL = 50;
const RANGE_TTL = 150;
const PARTICLE_PROP_COUNT = 9;
const RANGE_HUE = 100;
const NOISE_STEPS = 3;
const X_OFF = 0.00125;
const Y_OFF = 0.00125;
const Z_OFF = 0.0005;

interface VortexBackgroundProps {
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  children?: React.ReactNode;
}

const VortexBackground: React.FC<VortexBackgroundProps> = ({
  className = '',
  containerClassName = '',
  particleCount = 700,
  rangeY = 100,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  baseHue = 200, // AdGrades cyan base
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlePropsRef = useRef<Float32Array | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  
  const [tick, setTick] = useState(0);
  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const [isVisible, setIsVisible] = useState(true);
  
  const { isDark } = useTheme();
  
  const noise3D = createNoise3D();

  // Utility functions
  const rand = (n: number) => n * Math.random();
  const randRange = (n: number) => n - rand(2 * n);
  const fadeInOut = (t: number, m: number) => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number) => (1 - speed) * n1 + speed * n2;

  // Particle cache for performance
  const particleCache = {
    x: 0, y: 0, vx: 0, vy: 0, life: 0, ttl: 0, speed: 0, radius: 0, hue: 0
  };

  const initParticle = (i: number) => {
    if (!particlePropsRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    particleCache.x = rand(canvas.width);
    particleCache.y = center[1] + randRange(rangeY);
    particleCache.vx = 0;
    particleCache.vy = 0;
    particleCache.life = 0;
    particleCache.ttl = BASE_TTL + rand(RANGE_TTL);
    particleCache.speed = baseSpeed + rand(rangeSpeed);
    particleCache.radius = baseRadius + rand(rangeRadius);
    
    // AdGrades brand colors - cyan to teal range
    if (isDark) {
      particleCache.hue = baseHue + rand(RANGE_HUE); // 200-300 range (cyan to teal)
    } else {
      particleCache.hue = baseHue + rand(60); // Tighter range for light mode
    }

    particlePropsRef.current.set([
      particleCache.x, particleCache.y, particleCache.vx, particleCache.vy,
      particleCache.life, particleCache.ttl, particleCache.speed,
      particleCache.radius, particleCache.hue
    ], i);
  };

  const updateParticle = (i: number) => {
    if (!particlePropsRef.current || !canvasRef.current || !ctxRef.current) return;

    const canvas = canvasRef.current;
    const props = particlePropsRef.current;
    const context = ctxRef.current;

    // Load particle data
    particleCache.x = props[i];
    particleCache.y = props[i + 1];
    particleCache.vx = props[i + 2];
    particleCache.vy = props[i + 3];
    particleCache.life = props[i + 4];
    particleCache.ttl = props[i + 5];
    particleCache.speed = props[i + 6];
    particleCache.radius = props[i + 7];
    particleCache.hue = props[i + 8];

    // Calculate noise-based movement
    const n = noise3D(
      particleCache.x * X_OFF,
      particleCache.y * Y_OFF,
      tick * Z_OFF
    ) * NOISE_STEPS * TAU;

    const nextVx = lerp(particleCache.vx, Math.cos(n), 0.5);
    const nextVy = lerp(particleCache.vy, Math.sin(n), 0.5);
    const nextX = particleCache.x + nextVx * particleCache.speed;
    const nextY = particleCache.y + nextVy * particleCache.speed;

    // Draw particle trail
    context.save();
    context.lineCap = 'round';
    context.lineWidth = particleCache.radius;
    
    // AdGrades brand colors with theme-aware opacity
    const opacity = fadeInOut(particleCache.life, particleCache.ttl);
    const adjustedOpacity = isDark ? opacity * 0.8 : opacity * 0.6;
    
    context.strokeStyle = `hsla(${particleCache.hue}, 100%, ${isDark ? '60%' : '50%'}, ${adjustedOpacity})`;
    context.beginPath();
    context.moveTo(particleCache.x, particleCache.y);
    context.lineTo(nextX, nextY);
    context.stroke();
    context.restore();

    // Update particle properties
    props[i] = nextX;
    props[i + 1] = nextY;
    props[i + 2] = nextVx;
    props[i + 3] = nextVy;
    props[i + 4] = particleCache.life + 1;

    // Reset particle if out of bounds or expired
    if (
      nextX > canvas.width || nextX < 0 ||
      nextY > canvas.height || nextY < 0 ||
      particleCache.life > particleCache.ttl
    ) {
      initParticle(i);
    }
  };

  const draw = () => {
    if (!canvasRef.current || !ctxRef.current || !particlePropsRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const context = ctxRef.current;

    setTick(prev => prev + 1);

    // Clear canvas with theme-appropriate background
    const backgroundColor = isDark ? '#0B1120' : '#FFFFFF';
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Update all particles
    for (let i = 0; i < particlePropsRef.current.length; i += PARTICLE_PROP_COUNT) {
      updateParticle(i);
    }

    // Apply glow effects - reduced for better performance and subtlety
    context.save();
    context.filter = `blur(${isDark ? '8px' : '6px'}) brightness(${isDark ? '200%' : '150%'})`;
    context.globalCompositeOperation = 'lighter';
    context.drawImage(canvas, 0, 0);
    context.restore();

    context.save();
    context.filter = `blur(${isDark ? '4px' : '3px'}) brightness(${isDark ? '200%' : '150%'})`;
    context.globalCompositeOperation = 'lighter';
    context.drawImage(canvas, 0, 0);
    context.restore();

    animationFrameRef.current = requestAnimationFrame(draw);
  };

  const handleResize = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { innerWidth, innerHeight } = window;
    
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    setCenter([0.5 * canvas.width, 0.5 * canvas.height]);
  };

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    ctxRef.current = context;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setCenter([0.5 * canvas.width, 0.5 * canvas.height]);

    // Initialize particles
    const particlePropsLength = particleCount * PARTICLE_PROP_COUNT;
    particlePropsRef.current = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += PARTICLE_PROP_COUNT) {
      initParticle(i);
    }

    // Start animation
    draw();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Restart animation when theme changes
  useEffect(() => {
    if (particlePropsRef.current) {
      // Reinitialize particles with new theme colors
      const particlePropsLength = particleCount * PARTICLE_PROP_COUNT;
      for (let i = 0; i < particlePropsLength; i += PARTICLE_PROP_COUNT) {
        initParticle(i);
      }
    }
  }, [isDark]);

  // Control animation based on visibility
  useEffect(() => {
    if (isVisible && !animationFrameRef.current) {
      draw();
    } else if (!isVisible && animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, [isVisible]);

  return (
    <div 
      ref={containerRef}
      className={`relative h-full w-full ${containerClassName}`}
    >
      <div className="absolute inset-0 z-0 flex size-full items-center justify-center bg-transparent">
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ 
            background: isDark ? '#0B1120' : '#FFFFFF',
            opacity: isDark ? 0.7 : 0.5 
          }}
        />
      </div>

      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default VortexBackground;