import { PricingTier, Testimonial, PortfolioItem } from "./types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Lifestyle Influencer",
    avatar: "https://picsum.photos/100/100?random=1",
    content: "The 10-minute turnaround is not a gimmick. I booked, they shot, and I had the file before I finished my coffee. Insane speed.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CMO, TechFlow",
    avatar: "https://picsum.photos/100/100?random=2",
    content: "Reel Express is the Uber of content creation. Consistent quality, industrial aesthetic, and zero friction.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus J.",
    role: "Event Organizer",
    avatar: "https://picsum.photos/100/100?random=3",
    content: "Used the Event Pack for our launch party. The Flashooters were professional and invisible. The output was cinema quality.",
    rating: 5,
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "quick",
    name: "Quick Strike",
    price: "$149",
    description: "Per hour. Perfect for street style and quick promos.",
    features: [
      "1 Hour On-Location",
      "1 Professional Shooter",
      "iPhone 15 Pro Max / Cinema Rig",
      "2 Edited Reels (15s & 30s)",
      "10-Minute Delivery Window"
    ],
    isPopular: false,
  },
  {
    id: "pro",
    name: "Production Grade",
    price: "$499",
    description: "Half-day block. For campaigns and brand launches.",
    features: [
      "4 Hours On-Location",
      "Director + Shooter",
      "Lighting & Audio Kit",
      "8 Edited Reels",
      "Raw Footage Access",
      "Priority Booking"
    ],
    isPopular: true,
  },
  {
    id: "event",
    name: "Event Coverage",
    price: "Custom",
    description: "Full coverage for festivals, conferences, and galas.",
    features: [
      "Multi-Cam Setup",
      "Live Editing Station",
      "Real-time Social Uploads",
      "Dedicated Project Manager",
      "Unlimited Reels"
    ],
    isPopular: false,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'Neon Nights', category: 'Music Video', image: 'https://picsum.photos/400/600?random=10' },
  { id: '2', title: 'Urban Drift', category: 'Automotive', image: 'https://picsum.photos/400/500?random=11' },
  { id: '3', title: 'Tech Unbox', category: 'Product', image: 'https://picsum.photos/400/700?random=12' },
  { id: '4', title: 'Fitness Flow', category: 'Lifestyle', image: 'https://picsum.photos/400/600?random=13' },
  { id: '5', title: 'Coffee Run', category: 'Hospitality', image: 'https://picsum.photos/400/500?random=14' },
  { id: '6', title: 'Runway', category: 'Fashion', image: 'https://picsum.photos/400/600?random=15' },
];

export const BRAND_LOGOS = [
  "VOGUE", "NIKE", "RED BULL", "SPOTIFY", "TESLA", "SONY", "VICE"
];