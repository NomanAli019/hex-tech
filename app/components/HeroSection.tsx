'use client';

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Dark_neon_tech_hero_background_edd67c10.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2300D9FF' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
            <span className="gradient-text-neon">FUTURISTIC</span>
            <br />
            <span className="text-foreground">DIGITAL SOLUTIONS</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Pioneering the future of technology with cutting-edge 3D design, 
            innovative web development, and transformative SaaS products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/90 text-background font-semibold neon-glow-cyan"
              data-testid="button-explore-projects"
            >
              EXPLORE PROJECTS
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glassmorphism border-[hsl(var(--neon-cyan))]/50 text-foreground font-semibold"
              data-testid="button-contact-us"
            >
              CONTACT US
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "50+", label: "Projects" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support" },
            { value: "2", label: "SaaS Products" },
          ].map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="text-3xl md:text-4xl font-bold neon-text-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
