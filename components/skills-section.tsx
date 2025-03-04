"use client";

import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'UI/UX Design', level: 90 },
  { name: 'Web Development', level: 85 },
  { name: 'Graphic Design', level: 80 },
  { name: 'Photography', level: 75 },
  { name: 'Digital Marketing', level: 70 },
  { name: 'Content Creation', level: 85 },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedSkills, setAnimatedSkills] = React.useState<{ [key: string]: boolean }>({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setAnimatedSkills(prev => ({ ...prev, [skillName]: true }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.skill-item');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (section) {
        const elements = section.querySelectorAll('.skill-item');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-pink-500">Skills</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-item mb-8"
              data-skill={skill.name}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <Progress 
                value={animatedSkills[skill.name] ? skill.level : 0} 
                className="h-2 transition-all duration-1000 ease-out"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
            <div className="text-4xl font-bold text-pink-500 mb-2">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
            <div className="text-4xl font-bold text-pink-500 mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
            <div className="text-4xl font-bold text-pink-500 mb-2">30+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
            <div className="text-4xl font-bold text-pink-500 mb-2">15+</div>
            <div className="text-muted-foreground">Awards Received</div>
          </div>
        </div>
      </div>
    </section>
  );
}