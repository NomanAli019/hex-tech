'use client';

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "Noman Ali Khan",
    role: "Founder & CEO",
    bio: "Visionary leader driving innovation and growth",
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Lead Developer",
    bio: "Full-stack expert with 10+ years experience",
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "3D Design Lead",
    bio: "Master of visual storytelling and 3D art",
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Product Manager",
    bio: "Strategic thinker turning ideas into reality",
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "UX Designer",
    bio: "Crafting intuitive user experiences",
  },
  {
    id: 6,
    name: "Team Member 6",
    role: "DevOps Engineer",
    bio: "Infrastructure and deployment specialist",
  },
];

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    let lastTimestamp = 0;

    const scroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      
      if (scrollContainer) {
        scrollContainer.scrollLeft += delta * 0.05;
        
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      
      lastTimestamp = timestamp;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
                <span className="gradient-text-neon">OUR TEAM</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet the talented individuals behind Hex Tech's success
              </p>
            </div>

            <div className="relative">
              <div 
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-8 scroll-smooth hide-scrollbar"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                data-testid="team-scroller"
              >
                {[...teamMembers, ...teamMembers].map((member, index) => (
                  <Card
                    key={`${member.id}-${index}`}
                    className="flex-shrink-0 w-80 p-8 border-2 border-[hsl(var(--neon-cyan))]/30 neon-glow-cyan hover-elevate transition-all duration-300"
                    data-testid={`card-team-${member.id}`}
                  >
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[hsl(var(--neon-cyan))]/20 to-[hsl(var(--neon-magenta))]/20 flex items-center justify-center border-2 border-[hsl(var(--neon-cyan))]/50 neon-glow-cyan">
                        <div className="text-4xl font-bold gradient-text-neon">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-[hsl(var(--neon-cyan))] font-medium mb-3 tracking-wide">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Hover over the carousel to pause auto-scroll
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
