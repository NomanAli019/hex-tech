'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight gradient-text-neon">
              GET IN TOUCH
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={contactMutation.isPending}
                  data-testid="input-name"
                  className="bg-background/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={contactMutation.isPending}
                  data-testid="input-email"
                  className="bg-background/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={contactMutation.isPending}
                  rows={4}
                  data-testid="input-message"
                  className="bg-background/50"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/90 text-background font-semibold neon-glow-cyan"
                disabled={contactMutation.isPending}
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight gradient-text-neon">
              CONTACT INFO
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[hsl(var(--neon-cyan))] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-muted-foreground">
                    Johar Town, Lahore, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[hsl(var(--neon-cyan))] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a 
                    href="tel:+923052253482" 
                    className="text-muted-foreground hover:text-[hsl(var(--neon-cyan))] transition-colors"
                    data-testid="link-phone"
                  >
                    +92 305 2253482
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[hsl(var(--neon-cyan))] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a 
                    href="mailto:nomanromeo694@gmail.com" 
                    className="text-muted-foreground hover:text-[hsl(var(--neon-cyan))] transition-colors break-all"
                    data-testid="link-email"
                  >
                    nomanromeo694@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 hexagon-clip bg-gradient-to-br from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-magenta))] neon-glow-cyan" />
              <span className="font-bold tracking-tighter gradient-text-neon">
                HEX TECH
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Hex Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
