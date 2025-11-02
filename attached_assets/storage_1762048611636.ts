import { randomUUID } from "crypto";

export interface IUser {
  id: string;
  username: string;
}

export interface IContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export interface IStorage {
  getUser(id: string): Promise<IUser | undefined>;
  getUserByUsername(username: string): Promise<IUser | undefined>;
  createUser(user: Omit<IUser, "id">): Promise<IUser>;
  createContactMessage(message: Omit<IContactMessage, "id" | "createdAt">): Promise<IContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, IUser>;
  private contactMessages: Map<string, IContactMessage>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<IUser | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<IUser | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(userData: Omit<IUser, "id">): Promise<IUser> {
    const id = randomUUID();
    const user: IUser = { ...userData, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(
    messageData: Omit<IContactMessage, "id" | "createdAt">,
  ): Promise<IContactMessage> {
    const id = randomUUID();
    const message: IContactMessage = {
      ...messageData,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
