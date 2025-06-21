import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: any;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const animationIdRef = useRef<number>();
  const isVisibleRef = useRef(true);
  
  // Responsive particle count based on screen size and performance
  const getParticleCount = () => {
    const { innerWidth } = window;
    const baseCount = props.particleCount || 700;
    
    if (innerWidth < 768) return Math.min(baseCount, 300); // Mobile
    if (innerWidth < 1024) return Math.min(baseCount, 350); // Tablet
    if (innerWidth < 1440) return Math.min(baseCount, 300); // Small Desktop
    if (innerWidth < 2560) return Math.min(baseCount, 250); // Large Desktop
    return Math.min(baseCount, 200); // 4K+ screens - very conservative
  };
  
  const particleCount = typeof window !== 'undefined' ? getParticleCount() : (props.particleCount || 400);
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";
  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center: [number, number] = [0, 0];
  
  // Performance monitoring
  let lastFrameTime = 0;
  let frameCount = 0;
  let fpsSum = 0;
  let avgFps = 60;
  
  // FPS throttling
  const targetFps = typeof window !== 'undefined' && window.innerWidth > 1440 ? 30 : 60;
  const frameInterval = 1000 / targetFps;
  let lastDrawTime = 0;
  
  // Performance-based quality
  let qualityLevel = 1; // 0 = low, 1 = medium, 2 = high

  const HALF_PI: number = 0.5 * Math.PI;
  const TAU: number = 2 * Math.PI;
  const TO_RAD: number = Math.PI / 180;
  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    // simplex = new SimplexNoise();
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x, y, vx, vy, life, ttl, speed, radius, hue;

    x = rand(canvas.width);
    y = center[1] + randRange(rangeY);
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    radius = baseRadius + rand(rangeRadius);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    // Pause animation if not visible
    if (!isVisibleRef.current) {
      animationIdRef.current = window.requestAnimationFrame(() => draw(canvas, ctx));
      return;
    }
    
    const currentTime = performance.now();
    
    // FPS throttling
    if (currentTime - lastDrawTime < frameInterval) {
      animationIdRef.current = window.requestAnimationFrame(() => draw(canvas, ctx));
      return;
    }
    
    // Performance monitoring
    if (lastFrameTime > 0) {
      const fps = 1000 / (currentTime - lastFrameTime);
      fpsSum += fps;
      frameCount++;
      
      if (frameCount >= 60) { // Update average every 60 frames
        avgFps = fpsSum / frameCount;
        frameCount = 0;
        fpsSum = 0;
        
        // Adjust quality based on performance
        if (avgFps < 25) {
          qualityLevel = Math.max(0, qualityLevel - 1);
        } else if (avgFps > 50 && qualityLevel < 2) {
          qualityLevel = Math.min(2, qualityLevel + 1);
        }
      }
    }
    
    lastFrameTime = currentTime;
    lastDrawTime = currentTime;
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    
    // Conditional glow rendering based on quality level
    if (qualityLevel > 0) {
      renderGlow(canvas, ctx);
    }
    
    renderToScreen(canvas, ctx);

    animationIdRef.current = window.requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    // Skip particles based on quality level for better performance
    const step = qualityLevel === 0 ? particlePropCount * 2 : particlePropCount;
    
    for (let i = 0; i < particlePropsLength; i += step) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i;
    let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

    x = particleProps[i];
    y = particleProps[i2];
    n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    vx = lerp(particleProps[i3], Math.cos(n), 0.5);
    vy = lerp(particleProps[i4], Math.sin(n), 0.5);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    radius = particleProps[i8];
    hue = particleProps[i9];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0;
  };

  const resize = (
    canvas: HTMLCanvasElement,
    ctx?: CanvasRenderingContext2D
  ) => {
    const { innerWidth, innerHeight } = window;
    
    // More aggressive canvas size limits based on screen size and quality
    let maxWidth, maxHeight;
    
    if (innerWidth > 2560) { // 4K+ screens
      maxWidth = Math.min(innerWidth * 0.6, 1440);
      maxHeight = Math.min(innerHeight * 0.6, 900);
    } else if (innerWidth > 1440) { // Large screens
      maxWidth = Math.min(innerWidth * 0.75, 1600);
      maxHeight = Math.min(innerHeight * 0.75, 1000);
    } else { // Normal screens
      maxWidth = Math.min(innerWidth, 1440);
      maxHeight = Math.min(innerHeight, 900);
    }
    
    canvas.width = maxWidth;
    canvas.height = maxHeight;

    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
    
    // Always scale canvas to fill container
    canvas.style.width = '100%';
    canvas.style.height = '100%';
  };

  const renderGlow = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    const isLargeScreen = typeof window !== 'undefined' && window.innerWidth > 1440;
    
    // Adaptive glow based on screen size and quality level
    if (qualityLevel === 2 || (!isLargeScreen && qualityLevel >= 1)) {
      // Full quality glow
      ctx.save();
      ctx.filter = "blur(8px) brightness(200%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();

      ctx.save();
      ctx.filter = "blur(4px) brightness(200%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    } else if (qualityLevel === 1) {
      // Simplified glow for performance
      ctx.save();
      ctx.filter = isLargeScreen ? "blur(4px) brightness(150%)" : "blur(6px) brightness(175%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    }
    // No glow for qualityLevel 0 (handled by conditional call in draw function)
  };

  const renderToScreen = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setup();
    }, 100);
    
    const handleResize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resize(canvas, ctx);
        // Re-initialize particles with new count if screen size changed significantly
        const newParticleCount = getParticleCount();
        if (Math.abs(newParticleCount - particleCount) > 50) {
          initParticles();
        }
      }
    };
    
    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent"
      >
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};