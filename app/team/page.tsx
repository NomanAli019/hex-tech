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
    bio: "Visionary leader driving innovation and growth Full-stack Web Dev",
  },
  // add more members here to test >1 behavior
];

export default function Team() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPointerOver, setIsPointerOver] = useState(false);

  // speed px per ms
  const SPEED = 0.05;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // when only 1 member, we do not autoplay
    if (teamMembers.length <= 1) {
      return;
    }

    let animationId = 0;
    let lastTimestamp = 0;

    const getHalfWidth = () => container.scrollWidth / 2;

    const step = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      // Pause autoplay if pointer is over or state indicates paused
      if (!isAutoPlaying || isPointerOver) {
        lastTimestamp = timestamp;
        animationId = requestAnimationFrame(step);
        return;
      }

      container.scrollLeft += delta * SPEED;

      // If we've scrolled past the first duplicated block, wrap by subtracting half width.
      // Using >= is fine; this produces a smooth wrap without jumping to 0.
      const half = getHalfWidth();
      if (container.scrollLeft >= half) {
        container.scrollLeft -= half;
      }

      lastTimestamp = timestamp;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    // Clean up
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isAutoPlaying, isPointerOver]);

  // If there is only 1 member, center it
  if (teamMembers.length <= 1) {
    const member = teamMembers[0];
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

              <div className="flex justify-center">
                <Card
                  className="w-80 p-8 border-2 border-[hsl(var(--neon-cyan))]/30 neon-glow-cyan hover-elevate transition-all duration-300"
                  data-testid={`card-team-${member.id}`}
                >
                  <div className="mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full p-[3px] bg-gradient-to-br from-[hsl(var(--neon-cyan))]/20 to-[hsl(var(--neon-magenta))]/20 border-2 border-[hsl(var(--neon-cyan))]/50 neon-glow-cyan overflow-hidden">
                      <img
                        src={`/projectimages/Noman.png`} // 👈 Example path: /public/team/1.jpg
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
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
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  
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

  // For >1 members, render the seamless auto-scrolling carousel
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
                onMouseEnter={() => {
                  setIsPointerOver(true);
                }}
                onMouseLeave={() => {
                  setIsPointerOver(false);
                }}
                onTouchStart={() => {
                  setIsPointerOver(true);
                }}
                onTouchEnd={() => {
                  setIsPointerOver(false);
                }}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                data-testid="team-scroller"
              >
                {/* duplicate the list so we can wrap seamlessly */}
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

              {/* left + right fade to mask duplication seam */}
              <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Hover or touch the carousel to pause auto-scroll
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
