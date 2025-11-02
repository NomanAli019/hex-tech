'use client';

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const projects = [
  {
  id: 1,
  title: "Variostrong",
  category: "3D Design",
  description:
    "A smart gym machine concept brought to life with 3D design — featuring an AI workout assistant, hydraulic resistance system, and a virtual training environment for full-body exercises.",
},
 {
  id: 2,
  title: "MarineOptim",
  category: "Web Development",
  description:
    "A cutting-edge digital platform for optimizing marine operations and vessel performance — delivering real-time analytics, fuel-efficiency insights, and intelligent scheduling across global fleets.",
},
{
  id: 3,
  title: "Projectivity.ai",
  category: "SaaS",
  description:
    "AI-powered task management platform that analyzes job descriptions to auto-generate projects, assign tasks to available employees, and streamline collaboration with real-time progress tracking and team updates.",
},
  {
  id: 4,
  title: "Glucowatch 3D",
  category: "3D Design",
  description:
    "A 3D concept and AR showcase of a smart glucose monitoring wristband designed for diabetic patients, featuring a Blender-rendered promotional video demonstrating its real-time health tracking capabilities.",
},
  {
  id: 5,
  title: "Shiftally",
  category: "SaaS / Web Development",
  description:
    "A SaaS-based shift management and job portal platform where contractors post available shifts and workers claim them in real time, with a dual-sided payment system for both job providers and seekers.",
},
 {
  id: 6,
  title: "Project 8 VIP",
  category: "SaaS / Automation",
  description:
    "An AI-driven Telegram bot that interacts with users, manages free and VIP signal groups, and automates PayPal-based subscription payments through seamless integration with the Telegram Bot API.",
},
];

const categories = ["All", "3D Design", "Web Development", "SaaS"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
                <span className="gradient-text-neon">OUR PROJECTS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Showcasing our portfolio of innovative digital solutions
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-md font-medium text-sm tracking-wider transition-all ${
                    selectedCategory === category
                      ? "bg-[hsl(var(--neon-cyan))] text-background neon-glow-cyan"
                      : "bg-card text-muted-foreground hover-elevate"
                  }`}
                  data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover-elevate active-elevate-2 border-card-border transition-all duration-300 hover:-translate-y-2"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-card to-card-foreground/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2300D9FF' stroke-width='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                      }} />
                    </div>
                    <div className="relative z-10 text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 hexagon-clip bg-gradient-to-br from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-magenta))] neon-glow-cyan" />
                      <p className="text-sm text-muted-foreground font-mono">
                        Project Image Placeholder
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-[hsl(var(--neon-cyan))] bg-[hsl(var(--neon-cyan))]/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
