import type { ProductNameTypes } from "../types/product-name-types";

export interface IFormInput {
  id: string;
  label: string;
  type: string;
  name: ProductNameTypes;
}