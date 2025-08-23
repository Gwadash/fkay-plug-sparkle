export interface Product {
  id: string;
  model: string;
  storage: string;
  price: number;
  condition: "brand-new" | "pre-owned";
}

export const brandNewProducts: Product[] = [
  { id: "1", model: "iPhone 7", storage: "32GB", price: 2800, condition: "brand-new" },
  { id: "2", model: "iPhone 7 Plus", storage: "32GB", price: 3500, condition: "brand-new" },
  { id: "3", model: "iPhone 7 Plus", storage: "128GB", price: 3900, condition: "brand-new" },
  { id: "4", model: "iPhone 8", storage: "64GB", price: 3300, condition: "brand-new" },
  { id: "5", model: "iPhone 8 Plus", storage: "64GB", price: 4200, condition: "brand-new" },
  { id: "6", model: "iPhone X", storage: "64GB", price: 4800, condition: "brand-new" },
  { id: "7", model: "iPhone XS", storage: "64GB", price: 5100, condition: "brand-new" },
  { id: "8", model: "iPhone XR", storage: "64GB", price: 4900, condition: "brand-new" },
  { id: "9", model: "iPhone XR", storage: "128GB", price: 5300, condition: "brand-new" },
  { id: "10", model: "iPhone 11", storage: "64GB", price: 5900, condition: "brand-new" },
  { id: "11", model: "iPhone 11", storage: "128GB", price: 6500, condition: "brand-new" },
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
  { id: "24", model: "iPhone 7", storage: "32GB", price: 2400, condition: "pre-owned" },
  { id: "25", model: "iPhone 7 Plus", storage: "32GB", price: 3000, condition: "pre-owned" },
  { id: "26", model: "iPhone 7 Plus", storage: "128GB", price: 3400, condition: "pre-owned" },
  { id: "27", model: "iPhone 8", storage: "64GB", price: 2900, condition: "pre-owned" },
  { id: "28", model: "iPhone 8 Plus", storage: "64GB", price: 3500, condition: "pre-owned" },
  { id: "29", model: "iPhone Plus", storage: "128GB", price: 3900, condition: "pre-owned" },
  { id: "30", model: "iPhone XR", storage: "64GB", price: 4300, condition: "pre-owned" },
  { id: "31", model: "iPhone XR", storage: "128GB", price: 4900, condition: "pre-owned" },
  { id: "32", model: "iPhone X", storage: "64GB", price: 4100, condition: "pre-owned" },
  { id: "33", model: "iPhone XS", storage: "64GB", price: 4600, condition: "pre-owned" },
  { id: "34", model: "iPhone 11", storage: "64GB", price: 5500, condition: "pre-owned" },
  { id: "35", model: "iPhone 11", storage: "128GB", price: 5700, condition: "pre-owned" },
  { id: "36", model: "iPhone 11 Pro", storage: "64GB", price: 6800, condition: "pre-owned" },
  { id: "37", model: "iPhone 11 Pro Max", storage: "64GB", price: 7500, condition: "pre-owned" },
  { id: "38", model: "iPhone 12", storage: "128GB", price: 6900, condition: "pre-owned" },
  { id: "39", model: "iPhone 12 Pro", storage: "128GB", price: 8900, condition: "pre-owned" },
  { id: "40", model: "iPhone 12 Pro Max", storage: "128GB", price: 10600, condition: "pre-owned" },
  { id: "41", model: "iPhone 13", storage: "128GB", price: 9000, condition: "pre-owned" },
  { id: "42", model: "iPhone 13 Pro", storage: "128GB", price: 12200, condition: "pre-owned" },
  { id: "43", model: "iPhone 13 Pro Max", storage: "128GB", price: 13900, condition: "pre-owned" },
];