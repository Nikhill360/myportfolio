"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
      duration: 5000,
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-pink-500">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
            <p className="text-muted-foreground mb-8">
              Have a project in mind or just want to say hello? Feel free to reach out to me. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <p className="font-medium">riyakohar7856@gamil.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p className="font-medium">Mumbai, India</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://www.instagram.com/riya_kohar25?igsh=MWRycWw3bWE0MzJqcw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full hover:bg-pink-200 dark:hover:bg-pink-800/30 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-pink-500" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/riya-kohar-b754172b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full hover:bg-pink-200 dark:hover:bg-pink-800/30 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-pink-500" />
                </a>
                <a 
                  href="mailto:riyakohar7856@gamil.com"
                  className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full hover:bg-pink-200 dark:hover:bg-pink-800/30 transition-colors"
                >
                  <Mail className="h-5 w-5 text-pink-500" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can I help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here..." 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}