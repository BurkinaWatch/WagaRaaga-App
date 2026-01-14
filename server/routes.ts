import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.get("/api/notifications", async (req, res) => {
    const userId = "demo"; // In a real app, this would come from the session
    const notifications = await storage.getNotifications(userId);
    res.json(notifications);
  });

  app.post("/api/notifications/:id/read", async (req, res) => {
    await storage.markNotificationAsRead(req.params.id);
    res.sendStatus(200);
  });

  const httpServer = createServer(app);

  return httpServer;
}
