'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const products = [
  {
    name: "Clashey",
    tagline: "Competitive Gaming Platform",
    description: "A revolutionary platform bringing gamers together for competitive tournaments, matchmaking, and community engagement.",
    features: [
      "Real-time tournament management",
      "Advanced matchmaking algorithms",
      "Player statistics & rankings",
      "Community forums & chat",
    ],
    accent: "cyan",
  },
  {
    name: "Office Boy",
    tagline: "Workspace Management Solution",
    description: "Streamline your office operations with intelligent task automation, resource management, and team collaboration tools.",
    features: [
      "Task automation & workflows",
      "Resource scheduling & booking",
      "Team collaboration hub",
      "Analytics & reporting",
    ],
    accent: "magenta",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            <span className="gradient-text-neon">OUR PRODUCTS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative SaaS solutions designed to transform industries
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`p-8 md:p-12 border-2 ${
                product.accent === 'cyan' 
                  ? 'border-[hsl(var(--neon-cyan))]/30 neon-glow-cyan' 
                  : 'border-[hsl(var(--neon-magenta))]/30 neon-glow-magenta'
              }`}
              data-testid={`card-product-${product.name.toLowerCase()}`}
            >
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="mb-6">
                    <h3 className={`text-3xl md:text-4xl font-bold mb-2 tracking-tighter ${
                      product.accent === 'cyan' ? 'neon-text-cyan' : 'neon-text-magenta'
                    }`}>
                      {product.name}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {product.tagline}
                    </p>
                  </div>
                  <p className="text-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <Button 
                    className={`${
                      product.accent === 'cyan'
                        ? 'bg-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/90 neon-glow-cyan'
                        : 'bg-[hsl(var(--neon-magenta))] hover:bg-[hsl(var(--neon-magenta))]/90 neon-glow-magenta'
                    } text-background font-semibold`}
                    data-testid={`button-learn-more-${product.name.toLowerCase()}`}
                  >
                    LEARN MORE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold mb-4 tracking-tight">Key Features</h4>
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          product.accent === 'cyan' 
                            ? 'text-[hsl(var(--neon-cyan))]' 
                            : 'text-[hsl(var(--neon-magenta))]'
                        }`} />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
