export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export enum BookingState {
  IDLE = 'IDLE',
  LOCATING = 'LOCATING',
  CONFIRMED = 'CONFIRMED'
}