'use client';

import { Box, Code, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Box,
    title: "3D Product Design",
    description: "Transform your ideas into stunning three-dimensional reality with our cutting-edge 3D modeling and visualization services.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack development solutions using modern technologies. We adapt to any stack or leverage our expertise in React, Node.js, and cloud platforms.",
  },
  {
    icon: Rocket,
    title: "SaaS Products",
    description: "Build and scale your software-as-a-service vision with our proven development methodologies and cloud-native architecture.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            <span className="gradient-text-neon">OUR SERVICES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions powered by innovation and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate active-elevate-2 border-card-border transition-all duration-300 hover:-translate-y-2"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[hsl(var(--neon-cyan))]/20 to-[hsl(var(--neon-magenta))]/20 flex items-center justify-center mb-6 neon-glow-cyan">
                  <Icon className="w-8 h-8 text-[hsl(var(--neon-cyan))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
