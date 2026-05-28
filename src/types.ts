export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  specs: { [key: string]: string };
  features: string[];
  warranty?: string;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  notes?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  itemCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}
