import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import xss from "xss";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form specific rate limiting
  const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // limit each IP to 5 contact form submissions per hour
    message: {
      error: "Too many contact form submissions, please try again later."
    }
  });

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    // Remove XSS attacks
    const sanitized = xss(input, {
      whiteList: {}, // No HTML tags allowed
      stripIgnoreTag: true,
      stripIgnoreTagBody: ['script']
    });
    
    // Trim whitespace
    return sanitized.trim();
  };

  // Contact form endpoint with enhanced security
  app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
      // First validate the input structure
      const validatedData = insertContactSchema.parse(req.body);
      
      // Then sanitize each field to prevent XSS
      const sanitizedData = {
        name: sanitizeInput(validatedData.name),
        email: sanitizeInput(validatedData.email),
        subject: sanitizeInput(validatedData.subject),
        message: sanitizeInput(validatedData.message)
      };
      
      // Additional validation after sanitization
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.subject || !sanitizedData.message) {
        return res.status(400).json({ 
          error: "All fields are required and cannot be empty" 
        });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        return res.status(400).json({ 
          error: "Invalid email format" 
        });
      }
      
      // Save contact message to database
      const contact = await storage.createContact(sanitizedData);
      
      console.log("Contact form submission saved:", contact);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ 
        error: "Failed to save contact message" 
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        error: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
