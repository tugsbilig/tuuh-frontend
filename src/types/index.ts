// types/index.ts
export interface HistoryEvent {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  date: string;
  category: string;
  fullDescription?: string; // Optional field for extended content
  relatedFigures?: string[]; // Optional array of related people
  sources?: string[]; // Optional sources/references
}

// Add other types your project needs
export interface User {
  id: string;
  name: string;
  savedHistories: number[];
}

export type ActiveSection = 
  | "default" 
  | "timeline" 
  | "history" 
  | "famous" 
  | "profile" 
  | "login";