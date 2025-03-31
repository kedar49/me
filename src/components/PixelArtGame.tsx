'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const PIXEL_SIZE = 4;
const GRID_WIDTH = 32;
const GRID_HEIGHT = 16;
const STAR_COUNT = 15;
const INTERACTION_RADIUS = 5;
const MOVEMENT_SPEED = 0.1;

interface Star {
  x: number;
  y: number;
  brightness: number;
  speed: number;
  baseX: number;
  baseY: number;
}

export function PixelArtGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Initialize stars with random positions and properties
  useEffect(() => {
    starsRef.current = Array.from({ length: STAR_COUNT }, () => {
      const x = Math.random() * GRID_WIDTH;
      const y = Math.random() * GRID_HEIGHT;
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        brightness: Math.random(),
        speed: 0.02 + Math.random() * 0.03
      };
    });
  }, []);

  const animate = useCallback(() => {
    if (!ctxRef.current) return;
    const ctx = ctxRef.current;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const currentTime = performance.now();

    starsRef.current.forEach((star) => {
      // Update star brightness with a sine wave
      star.brightness = 0.5 + Math.sin(currentTime * star.speed) * 0.5;

      if (isHovered) {
        // Calculate distance from mouse
        const dx = star.x - mousePos.x / PIXEL_SIZE;
        const dy = star.y - mousePos.y / PIXEL_SIZE;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < INTERACTION_RADIUS) {
          // Add subtle movement away from mouse
          star.x += (dx / distance) * MOVEMENT_SPEED;
          star.y += (dy / distance) * MOVEMENT_SPEED;
        } else {
          // Return to base position when not influenced by mouse
          star.x += (star.baseX - star.x) * 0.05;
          star.y += (star.baseY - star.y) * 0.05;
        }
        
        // Keep stars within bounds
        star.x = Math.max(0, Math.min(GRID_WIDTH - 1, star.x));
        star.y = Math.max(0, Math.min(GRID_HEIGHT - 1, star.y));
      } else {
        // Return to base position when not hovered
        star.x += (star.baseX - star.x) * 0.05;
        star.y += (star.baseY - star.y) * 0.05;
      }

      // Draw star with current brightness
      const brightness = isHovered ? Math.min(1, star.brightness + 0.3) : star.brightness;
      ctx.fillStyle = `rgba(255, 215, 0, ${brightness})`;
      ctx.fillRect(
        Math.floor(star.x) * PIXEL_SIZE,
        Math.floor(star.y) * PIXEL_SIZE,
        PIXEL_SIZE,
        PIXEL_SIZE
      );
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isHovered, mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = GRID_WIDTH * PIXEL_SIZE;
    canvas.height = GRID_HEIGHT * PIXEL_SIZE;
    ctxRef.current = ctx;

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      ctxRef.current = null;
    };
  }, [animate]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  return (
    <div className="relative group">
      <canvas
        ref={canvasRef}
        className="border border-border rounded-md transition-all duration-300 cursor-pointer"
        style={{
          imageRendering: 'pixelated',
          width: GRID_WIDTH * PIXEL_SIZE,
          height: GRID_HEIGHT * PIXEL_SIZE
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      />
      <div className="absolute -bottom-8 left-0 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Lalalalalalalalalala
      </div>
    </div>
  );
}