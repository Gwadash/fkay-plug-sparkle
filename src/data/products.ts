export interface Product {
  id: string;
  model: string;
  storage: string;
  price: number;
  condition: "brand-new" | "pre-owned";
  image?: string;
}

export const brandNewProducts: Product[] = [
  { id: "1", model: "iPhone 7", storage: "32GB", price: 2800, condition: "brand-new", image: "/lovable-uploads/39e97a94-2071-432b-bf0a-e446a5bd1a9b.png" },
  { id: "2", model: "iPhone 7 Plus", storage: "32GB", price: 3500, condition: "brand-new", image: "/lovable-uploads/d60a3aa9-9ae0-4b1e-b65d-760bf33c7740.png" },
  { id: "3", model: "iPhone 7 Plus", storage: "128GB", price: 3900, condition: "brand-new", image: "/lovable-uploads/d60a3aa9-9ae0-4b1e-b65d-760bf33c7740.png" },
  { id: "4", model: "iPhone 8", storage: "64GB", price: 3300, condition: "brand-new", image: "/lovable-uploads/7e05145c-8840-4b0d-abdf-2e4896ee92df.png" },
  { id: "5", model: "iPhone 8 Plus", storage: "64GB", price: 4200, condition: "brand-new", image: "/lovable-uploads/8b205e3d-8a67-4959-8213-d0106a2040c9.png" },
  { id: "6", model: "iPhone X", storage: "64GB", price: 4800, condition: "brand-new", image: "/lovable-uploads/14b8ff94-84eb-4d5f-8808-deba2dd270ea.png" },
  { id: "7", model: "iPhone XS", storage: "64GB", price: 5100, condition: "brand-new", image: "/lovable-uploads/f9f08086-3414-4ee4-9f09-246de5adee3f.png" },
  { id: "8", model: "iPhone XR", storage: "64GB", price: 4900, condition: "brand-new", image: "/lovable-uploads/c16f4f49-c799-4c19-acdb-5e25d8f042f8.png" },
  { id: "9", model: "iPhone XR", storage: "128GB", price: 5300, condition: "brand-new", image: "/lovable-uploads/c16f4f49-c799-4c19-acdb-5e25d8f042f8.png" },
  { id: "10", model: "iPhone 11", storage: "64GB", price: 5900, condition: "brand-new", image: "/lovable-uploads/7c5544b8-af91-4224-9d62-46067b2c070f.png" },
  { id: "11", model: "iPhone 11", storage: "128GB", price: 6500, condition: "brand-new", image: "/lovable-uploads/7c5544b8-af91-4224-9d62-46067b2c070f.png" },
  { id: "12", model: "iPhone 11 Pro", storage: "64GB", price: 7400, condition: "brand-new" },
  { id: "13", model: "iPhone 11 Pro Max", storage: "64GB", price: 8600, condition: "brand-new" },
  { id: "14", model: "iPhone 12", storage: "128GB", price: 7800, condition: "brand-new" },
  { id: "15", model: "iPhone 12 Pro", storage: "256GB", price: 9800, condition: "brand-new" },
  { id: "16", model: "iPhone 12 Pro Max", storage: "128GB", price: 11300, condition: "brand-new" },
  { id: "17", model: "iPhone 13", storage: "128GB", price: 9900, condition: "brand-new" },
  { id: "18", model: "iPhone 13 Pro", storage: "128GB", price: 14500, condition: "brand-new" },
  { id: "19", model: "iPhone 14", storage: "128GB", price: 12800, condition: "brand-new" },
  { id: "20", model: "iPhone 14 Pro", storage: "256GB", price: 16900, condition: "brand-new" },
  { id: "21", model: "iPhone 14 Pro Max", storage: "128GB", price: 18500, condition: "brand-new" },
  { id: "22", model: "iPhone 15", storage: "128GB", price: 14900, condition: "brand-new" },
  { id: "23", model: "iPhone 15 Pro Max", storage: "256GB", price: 24000, condition: "brand-new" },
];

export const preOwnedProducts: Product[] = [
  { id: "24", model: "iPhone 7", storage: "32GB", price: 2400, condition: "pre-owned", image: "/lovable-uploads/39e97a94-2071-432b-bf0a-e446a5bd1a9b.png" },
  { id: "25", model: "iPhone 7 Plus", storage: "32GB", price: 3000, condition: "pre-owned", image: "/lovable-uploads/d60a3aa9-9ae0-4b1e-b65d-760bf33c7740.png" },
  { id: "26", model: "iPhone 7 Plus", storage: "128GB", price: 3400, condition: "pre-owned", image: "/lovable-uploads/d60a3aa9-9ae0-4b1e-b65d-760bf33c7740.png" },
  { id: "27", model: "iPhone 8", storage: "64GB", price: 2900, condition: "pre-owned", image: "/lovable-uploads/7e05145c-8840-4b0d-abdf-2e4896ee92df.png" },
  { id: "28", model: "iPhone 8 Plus", storage: "64GB", price: 3500, condition: "pre-owned", image: "/lovable-uploads/8b205e3d-8a67-4959-8213-d0106a2040c9.png" },
  { id: "29", model: "iPhone Plus", storage: "128GB", price: 3900, condition: "pre-owned", image: "/lovable-uploads/8b205e3d-8a67-4959-8213-d0106a2040c9.png" },
  { id: "30", model: "iPhone XR", storage: "64GB", price: 4300, condition: "pre-owned", image: "/lovable-uploads/c16f4f49-c799-4c19-acdb-5e25d8f042f8.png" },
  { id: "31", model: "iPhone XR", storage: "128GB", price: 4900, condition: "pre-owned", image: "/lovable-uploads/c16f4f49-c799-4c19-acdb-5e25d8f042f8.png" },
  { id: "32", model: "iPhone X", storage: "64GB", price: 4100, condition: "pre-owned", image: "/lovable-uploads/14b8ff94-84eb-4d5f-8808-deba2dd270ea.png" },
  { id: "33", model: "iPhone XS", storage: "64GB", price: 4600, condition: "pre-owned", image: "/lovable-uploads/f9f08086-3414-4ee4-9f09-246de5adee3f.png" },
  { id: "34", model: "iPhone 11", storage: "64GB", price: 5500, condition: "pre-owned", image: "/lovable-uploads/7c5544b8-af91-4224-9d62-46067b2c070f.png" },
  { id: "35", model: "iPhone 11", storage: "128GB", price: 5700, condition: "pre-owned", image: "/lovable-uploads/7c5544b8-af91-4224-9d62-46067b2c070f.png" },
  { id: "36", model: "iPhone 11 Pro", storage: "64GB", price: 6800, condition: "pre-owned" },
  { id: "37", model: "iPhone 11 Pro Max", storage: "64GB", price: 7500, condition: "pre-owned" },
  { id: "38", model: "iPhone 12", storage: "128GB", price: 6900, condition: "pre-owned" },
  { id: "39", model: "iPhone 12 Pro", storage: "128GB", price: 8900, condition: "pre-owned" },
  { id: "40", model: "iPhone 12 Pro Max", storage: "128GB", price: 10600, condition: "pre-owned" },
  { id: "41", model: "iPhone 13", storage: "128GB", price: 9000, condition: "pre-owned" },
  { id: "42", model: "iPhone 13 Pro", storage: "128GB", price: 12200, condition: "pre-owned" },
  { id: "43", model: "iPhone 13 Pro Max", storage: "128GB", price: 13900, condition: "pre-owned" },
];