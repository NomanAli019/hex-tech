import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage_1762048611636";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      // Directly log received form data for now
      console.log("Contact form submission received:", req.body);

      res.json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
