"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FlowerAnimationProps {
  className?: string;
}

export function FlowerAnimation({ className }: FlowerAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = [
      'rgba(255, 105, 180, 0.7)', // pink
      'rgba(147, 112, 219, 0.7)', // purple
      'rgba(255, 182, 193, 0.7)', // light pink
      'rgba(255, 160, 122, 0.7)', // light salmon
      'rgba(221, 160, 221, 0.7)', // plum
    ];

    const createFlower = () => {
      const flower = document.createElement('div');
      const size = Math.random() * 30 + 20;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      flower.className = 'absolute';
      flower.style.width = `${size}px`;
      flower.style.height = `${size}px`;
      flower.style.borderRadius = '50%';
      flower.style.background = color;
      flower.style.boxShadow = `0 0 10px ${color}`;
      flower.style.left = `${Math.random() * 100}%`;
      flower.style.top = `${Math.random() * 100}%`;
      flower.style.opacity = '0';
      flower.style.transform = 'scale(0)';
      flower.style.transition = 'all 5s ease-out';
      
      // Create petals
      for (let i = 0; i < 5; i++) {
        const petal = document.createElement('div');
        petal.className = 'absolute';
        petal.style.width = `${size * 0.8}px`;
        petal.style.height = `${size * 0.8}px`;
        petal.style.borderRadius = '50%';
        petal.style.background = color;
        petal.style.left = '50%';
        petal.style.top = '50%';
        petal.style.transform = `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-${size * 0.5}px)`;
        flower.appendChild(petal);
      }
      
      container.appendChild(flower);
      
      // Animate the flower
      setTimeout(() => {
        flower.style.opacity = '0.8';
        flower.style.transform = 'scale(1)';
      }, 100);
      
      // Remove the flower after animation
      setTimeout(() => {
        flower.style.opacity = '0';
        flower.style.transform = 'scale(0)';
        setTimeout(() => {
          if (container.contains(flower)) {
            container.removeChild(flower);
          }
        }, 5000);
      }, 10000);
    };
    
    // Create flowers periodically
    const interval = setInterval(createFlower, 2000);
    
    // Create initial flowers
    for (let i = 0; i < 5; i++) {
      setTimeout(createFlower, i * 500);
    }
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={cn("fixed inset-0 pointer-events-none z-0", className)}
    />
  );
}