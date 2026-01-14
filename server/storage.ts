import { type User, type InsertUser, type Notification, type InsertNotification } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getNotifications(userId: string): Promise<Notification[]>;
  createNotification(notification: InsertNotification): Promise<Notification>;
  markNotificationAsRead(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private notifications: Map<string, Notification>;

  constructor() {
    this.users = new Map();
    this.notifications = new Map();

    // Seed some initial notifications for demo purposes
    this.seedNotifications();
  }

  private seedNotifications() {
    const mockNotifications: InsertNotification[] = [
      { userId: "demo", title: "Market Update", description: "New products from local artisans", type: "market_update", timestamp: "2h", isRead: "false" },
      { userId: "demo", title: "Reservation", description: "Your reservation at the Spice Merchant is confirmed", type: "reservation", timestamp: "4h", isRead: "false" },
      { userId: "demo", title: "Message", description: "A new message from Aisha", type: "message", timestamp: "6h", isRead: "false" },
      { userId: "demo", title: "Market Update", description: "Explore new crafts from local artisans", type: "market_update", timestamp: "1d", isRead: "true" },
      { userId: "demo", title: "Reservation", description: "Your reservation at the Weaver's Cafe is confirmed", type: "reservation", timestamp: "2d", isRead: "true" },
      { userId: "demo", title: "Message", description: "A new message from Kwame", type: "message", timestamp: "3d", isRead: "true" },
    ];

    mockNotifications.forEach(n => this.createNotification(n));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getNotifications(userId: string): Promise<Notification[]> {
    return Array.from(this.notifications.values())
      .filter(n => n.userId === userId || n.userId === "demo") // Include demo data
      .sort((a, b) => {
        // Simple sort by timestamp string (not perfect but works for mock)
        return a.timestamp.localeCompare(b.timestamp);
      });
  }

  async createNotification(insertNotification: InsertNotification): Promise<Notification> {
    const id = randomUUID();
    const notification: Notification = { 
      ...insertNotification, 
      id,
      isRead: insertNotification.isRead ?? "false"
    };
    this.notifications.set(id, notification);
    return notification;
  }

  async markNotificationAsRead(id: string): Promise<void> {
    const notification = this.notifications.get(id);
    if (notification) {
      this.notifications.set(id, { ...notification, isRead: "true" });
    }
  }
}

export const storage = new MemStorage();
