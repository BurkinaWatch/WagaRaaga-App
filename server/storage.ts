import { type User, type InsertUser, type Notification, type InsertNotification, type Conversation, type Message } from "@shared/schema";
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

  getConversations(userId: string): Promise<Conversation[]>;
  getMessages(conversationId: string): Promise<Message[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private notifications: Map<string, Notification>;
  private conversations: Map<string, Conversation>;
  private messages: Map<string, Message>;

  constructor() {
    this.users = new Map();
    this.notifications = new Map();
    this.conversations = new Map();
    this.messages = new Map();

    // Seed some initial notifications for demo purposes
    this.seedNotifications();
    this.seedConversations();
  }

  private seedConversations() {
    const mockConversations: Conversation[] = [
      { 
        id: "conv1", 
        participant1Id: "demo", 
        participant2Id: "aisha", 
        participant2Name: "Aisha", 
        participant2Avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", 
        lastMessage: "Yes, it is! I can meet you at the market tomorrow around noon if that works for", 
        lastMessageTime: "12:30 PM" 
      },
      { 
        id: "conv2", 
        participant1Id: "demo", 
        participant2Id: "kwame", 
        participant2Name: "Kwame", 
        participant2Avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", 
        lastMessage: "I'm interested in the beaded necklace you posted. Is it still available?", 
        lastMessageTime: "Yesterday" 
      },
      { 
        id: "conv3", 
        participant1Id: "demo", 
        participant2Id: "fatima", 
        participant2Name: "Fatima", 
        participant2Avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150", 
        lastMessage: "h", 
        lastMessageTime: "Oct 24" 
      },
      { 
        id: "conv4", 
        participant1Id: "demo", 
        participant2Id: "juma", 
        participant2Name: "Juma", 
        participant2Avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", 
        lastMessage: "I'm interested in the beaded necklace you posted. Is it still available?", 
        lastMessageTime: "Oct 22" 
      }
    ];

    mockConversations.forEach(c => this.conversations.set(c.id, c));
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

  async getConversations(userId: string): Promise<Conversation[]> {
    return Array.from(this.conversations.values())
      .filter(c => c.participant1Id === userId || c.participant2Id === userId);
  }

  async getMessages(conversationId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter(m => m.conversationId === conversationId);
  }
}

export const storage = new MemStorage();
