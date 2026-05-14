import type { ICategory } from "./category";

export interface IProduct {
  id?: string;
  imageURL: string;
  title: string;
  description: string;
  colors: string[];
  price: string;
  category: ICategory;
}