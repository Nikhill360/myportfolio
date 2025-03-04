"use client";

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Sparkles, Coffee } from 'lucide-react';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (section) {
        const elements = section.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0">
          About <span className="text-pink-500">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pink-300 to-purple-400 dark:from-pink-600 dark:to-purple-700">
                <img 
                  src="/images/1.jpg" 
                  alt="Riya Kohar" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-pink-500 animate-pulse" />
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-2xl font-semibold mb-4">
              Creative Designer & Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              Hello! I'm Riya Kohar, a passionate designer and developer with a love for creating beautiful, functional digital experiences. I blend creativity with technical skills to build solutions that not only look great but also solve real problems.
            </p>
            <p className="text-muted-foreground mb-8">
              With a keen eye for detail and a commitment to excellence, I strive to push the boundaries of what's possible in digital design and development. I'm constantly learning and evolving my skills to stay at the forefront of industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-pink-200 dark:border-pink-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <Star className="text-yellow-500 h-5 w-5" />
                  <span>Creative Thinking</span>
                </CardContent>
              </Card>
              <Card className="border-pink-200 dark:border-pink-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <Sparkles className="text-purple-500 h-5 w-5" />
                  <span>Problem Solving</span>
                </CardContent>
              </Card>
              <Card className="border-pink-200 dark:border-pink-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <Heart className="text-pink-500 h-5 w-5" />
                  <span>Attention to Detail</span>
                </CardContent>
              </Card>
              <Card className="border-pink-200 dark:border-pink-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <Coffee className="text-amber-600 h-5 w-5" />
                  <span>Continuous Learning</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}