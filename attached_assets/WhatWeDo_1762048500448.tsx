import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Box, Code, Rocket, Zap, Globe, Shield } from "lucide-react";

const servicesDetailed = [
  {
    icon: Box,
    title: "3D Product Design & Visualization",
    description: "Transform concepts into photorealistic 3D models and interactive experiences.",
    capabilities: [
      "Product modeling & rendering",
      "Interactive 3D configurators",
      "AR/VR experiences",
      "Animation & motion graphics",
      "Photorealistic visualization",
    ],
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Build scalable, performant web applications with modern technologies.",
    capabilities: [
      "React, Next.js, Vue.js frontends",
      "Node.js, Python, Go backends",
      "RESTful & GraphQL APIs",
      "PostgreSQL, MongoDB databases",
      "Cloud deployment (AWS, Azure, GCP)",
    ],
  },
  {
    icon: Rocket,
    title: "SaaS Product Development",
    description: "End-to-end development of software-as-a-service platforms.",
    capabilities: [
      "Multi-tenant architecture",
      "Subscription & billing integration",
      "Real-time features & WebSockets",
      "Microservices architecture",
      "CI/CD & DevOps",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Maximize speed, efficiency, and user experience.",
    capabilities: [
      "Code splitting & lazy loading",
      "Database query optimization",
      "CDN & caching strategies",
      "SEO optimization",
      "Core Web Vitals improvement",
    ],
  },
  {
    icon: Globe,
    title: "API Development & Integration",
    description: "Connect systems and build robust API architectures.",
    capabilities: [
      "RESTful API design",
      "GraphQL implementation",
      "Third-party integrations",
      "API documentation & testing",
      "Webhook systems",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your applications and user data.",
    capabilities: [
      "Authentication & authorization",
      "Data encryption",
      "GDPR compliance",
      "Security audits",
      "Penetration testing",
    ],
  },
];

export default function WhatWeDo() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
                <span className="gradient-text-neon">WHAT WE DO</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We deliver comprehensive digital solutions that combine cutting-edge technology 
                with strategic thinking to drive your business forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesDetailed.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover-elevate active-elevate-2 border-card-border transition-all duration-300 hover:-translate-y-2"
                    data-testid={`card-service-${index}`}
                  >
                    <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[hsl(var(--neon-cyan))]/20 to-[hsl(var(--neon-magenta))]/20 flex items-center justify-center mb-6 neon-glow-cyan">
                      <Icon className="w-8 h-8 text-[hsl(var(--neon-cyan))]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--neon-cyan))] mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-20 text-center">
              <Card className="p-12 border-2 border-[hsl(var(--neon-cyan))]/30 neon-glow-cyan">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">
                  <span className="gradient-text-neon">Tech Stack Flexibility</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  While we have deep expertise in modern web technologies like React, Next.js, Node.js, 
                  and cloud platforms, we're technology agnostic. We adapt to your existing stack or 
                  recommend the best tools for your specific needs.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
