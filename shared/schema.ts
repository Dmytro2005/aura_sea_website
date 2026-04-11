/** Shared types for in-memory storage (no database in this project). */

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface InsertUser {
  username: string;
  password: string;
}
