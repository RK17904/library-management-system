export interface Book {
  id?: number; 
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
  copies: number;
  shelfLocation?: string; 
}