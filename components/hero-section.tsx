"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout | null = null;
    
    const startAnimation = () => {
      let iteration = 0;
      const originalText = text.dataset.value || "";
      
      clearInterval(interval as NodeJS.Timeout);
      
      interval = setInterval(() => {
        text.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        
        if (iteration >= originalText.length) {
          clearInterval(interval as NodeJS.Timeout);
        }
        
        iteration += 1 / 3;
      }, 30);
    };

    startAnimation();
    
    const handleMouseOver = () => {
      startAnimation();
    };
    
    text.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      if (interval) clearInterval(interval);
      text.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/30 to-purple-100/30 dark:from-pink-900/10 dark:to-purple-900/10 z-0" />
      
      <div className="container mx-auto px-4 z-10 text-center ">
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/images/1.jpg"
                  alt="Riya Kohar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-2 animate-fade-in">
          Hello, I'm
        </h2>
        <h1 
          ref={textRef}
          data-value="RIYA KOHAR"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
        >
          RIYA KOHAR
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Creative designer & developer crafting beautiful digital experiences
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="https://www.instagram.com/riya_kohar25?igsh=MWRycWw3bWE0MzJqcw==" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 hover:bg-pink-100 dark:hover:bg-pink-900/20">
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/riya-kohar-b754172b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 hover:bg-blue-100 dark:hover:bg-blue-900/20">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:riyakohar7856@gamil.com">
            <Button variant="outline" size="lg" className="gap-2 hover:bg-green-100 dark:hover:bg-green-900/20">
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </Button>
          </Link>
        </div>
        
        <Link href="#about" className="inline-block animate-bounce">
          <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl" />
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
    </section>
  );
}