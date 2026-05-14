import type { IFormInput } from "../interfaces/form-input";

export const formInputs: IFormInput[] = [
  {
    id: "title",
    label: "Product Title",
    type: "text",
    name: "title",
  },
  {
    id: "description",
    label: "Product Description",
    type: "text",
    name: "description"
  },
  {
    id: "image",
    label: "Product Image URL",
    type: "text",
    name: "imageURL"
  },
  {
    id: "price",
    label: "Product Price",
    type: "text",
    name: "price"
  }
];