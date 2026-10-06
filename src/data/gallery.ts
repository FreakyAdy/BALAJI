export interface GalleryImage {
  id: string;
  title: string;
  category: "all" | "storefront" | "breakfast" | "south-indian" | "north-indian" | "dessert-drinks";
  description: string;
  src: string;
  alt: string;
  badge?: string;
  aspect?: "landscape" | "portrait" | "square";
}

export const galleryCategories = [
  { key: "all", label: "All Photos" },
  { key: "storefront", label: "Storefront & Space" },
  { key: "breakfast", label: "Morning Breakfast" },
  { key: "south-indian", label: "South Indian" },
  { key: "north-indian", label: "North Indian & Dals" },
  { key: "dessert-drinks", label: "Drinks & Desserts" },
] as const;

export const galleryImages: GalleryImage[] = [
  {
    id: "gal-storefront",
    title: "The Green Sign in Kharadi",
    category: "storefront",
    description: "Our signature vivid green BALAJI signage against clean white storefront on Kharadi-Hadapsar Bypass Road.",
    src: "/images/storefront.jpg",
    alt: "Balaji Pure Veg restaurant storefront in Kharadi with green signage and awning",
    badge: "Kharadi Landmark",
    aspect: "landscape",
  },
  {
    id: "gal-dosa",
    title: "Golden Crisp Masala Dosa",
    category: "south-indian",
    description: "Freshly roasted crisp dosa with spiced potato masala, aromatic sambar, and fresh coconut chutney.",
    src: "/images/dosa.jpg",
    alt: "Crispy South Indian Masala Dosa with sambar and chutney",
    badge: "Popular Everyday",
    aspect: "landscape",
  },
  {
    id: "gal-misal",
    title: "Puneri Misal Pav with Spicy Rassa",
    category: "breakfast",
    description: "Authentic sprouted moth bean misal topped with crunchy farsan, chopped onions, and soft buttered pav.",
    src: "/images/misal.jpg",
    alt: "Puneri Misal Pav served with rassa, farsan, and toasted pav",
    badge: "Local Special",
    aspect: "square",
  },
  {
    id: "gal-paneer",
    title: "Rich Paneer Handi & Fresh Roti",
    category: "north-indian",
    description: "Succulent paneer cubes simmered in a slow-cooked cashew-tomato gravy, served with hot tandoori rotis.",
    src: "/images/paneer-curry.jpg",
    alt: "Paneer handi in traditional handi bowl with butter rotis",
    badge: "Family Dining",
    aspect: "landscape",
  },
  {
    id: "gal-sev-bhaji",
    title: "Khandeshi Sev Bhaji",
    category: "north-indian",
    description: "Crispy spicy sev in deeply aromatic spicy red rassa, an everyday favourite in Maharashtra.",
    src: "/images/sev-bhaji.jpg",
    alt: "Maharashtrian Sev Bhaji curry with crisp gram flour sev",
    badge: "Dhaba Style",
    aspect: "portrait",
  },
  {
    id: "gal-poha",
    title: "Fresh Morning Kanda Poha",
    category: "breakfast",
    description: "Light and wholesome flattened rice tempered with mustard seeds, curry leaves, and crunchy peanuts.",
    src: "/images/poha.jpg",
    alt: "Kanda Poha garnished with fresh coriander and lemon wedge",
    badge: "Morning 9 AM",
    aspect: "square",
  },
  {
    id: "gal-pav-bhaji",
    title: "Amul Butter Pav Bhaji",
    category: "breakfast",
    description: "Steaming hot mashed vegetable bhaji drenched in pure Amul butter, paired with golden griddle-toasted pav.",
    src: "/images/pav-bhaji.jpg",
    alt: "Buttery Pav Bhaji with lemon, onions and toasted pav",
    badge: "Guest Favourite",
    aspect: "landscape",
  },
  {
    id: "gal-falooda",
    title: "Royal Rose Falooda with Ice Cream",
    category: "dessert-drinks",
    description: "Layered rose syrup, sabja seeds, silky vermicelli, cold milk, and rich vanilla ice cream with dry fruits.",
    src: "/images/falooda.jpg",
    alt: "Tall glass of Royal Rose Falooda with ice cream and pistachios",
    badge: "Sweet Finish",
    aspect: "portrait",
  },
  {
    id: "gal-kulfi",
    title: "Traditional Matka Malai Kulfi",
    category: "dessert-drinks",
    description: "Dense, slow-cooked cardamom milk kulfi chilled in authentic earthen clay pots.",
    src: "/images/kulfi.jpg",
    alt: "Matka Malai Kulfi in clay pot garnished with saffron and pistachios",
    badge: "Authentic",
    aspect: "square",
  },
  {
    id: "gal-interior",
    title: "Comfortable Indoor Family Seating",
    category: "storefront",
    description: "Clean black-and-white patterned floors, comfortable seating tables, and a hygienic casual dining space.",
    src: "/images/interior.jpg",
    alt: "Balaji Pure Veg restaurant interior with clean tables and welcoming atmosphere",
    badge: "Indoor Seating",
    aspect: "landscape",
  },
];
