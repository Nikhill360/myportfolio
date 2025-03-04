"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Riya<span className="text-pink-500">Kohar</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#skills" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="#portfolio" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}