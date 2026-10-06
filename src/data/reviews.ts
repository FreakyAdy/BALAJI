export interface ReviewSentimentTheme {
  theme: string;
  type: "positive" | "constructive";
  summary: string;
}

export interface ReviewItem {
  id: string;
  source: "Google" | "Zomato";
  author: string;
  rating: number;
  date: string;
  text: string;
  highlightDish?: string;
  verifiedVisit: boolean;
}

export interface ReviewData {
  google: {
    rating: number;
    totalReviews: number;
    reviewCount: number;
    starBreakdown: {
      fiveStar: number;
      fourStar: number;
      threeStar: number;
      twoStar: number;
      oneStar: number;
    };
    sourceName: string;
    verifiedUrl: string;
  };
  zomato: {
    diningRating: number;
    deliveryRating: number;
    sourceName: string;
  };
  sentimentSummary: ReviewSentimentTheme[];
  curatedFeedback: ReviewItem[];
}

export const reviewsData: ReviewData = {
  google: {
    rating: 4.2,
    totalReviews: 195,
    reviewCount: 195,
    starBreakdown: {
      fiveStar: 62,
      fourStar: 23,
      threeStar: 8,
      twoStar: 4,
      oneStar: 3,
    },
    sourceName: "Google Maps Reviews",
    verifiedUrl:
      "https://www.google.com/maps/search/?api=1&query=Balaji+Pure+Veg+Kharadi+Hadapsar+Bypass+Road+Pune+411014",
  },
  zomato: {
    diningRating: 3.3,
    deliveryRating: 3.9,
    sourceName: "Zomato Restaurant Listing",
  },
  sentimentSummary: [
    {
      theme: "Tasty Everyday Food & Generous Portions",
      type: "positive",
      summary:
        "Diners appreciate the satisfying flavours in North Indian curries like Sev Bhaji and Paneer dishes, along with wholesome portion sizes at honest prices.",
    },
    {
      theme: "Quick Morning Breakfast & Crisp Dosas",
      type: "positive",
      summary:
        "Regular customers in Kharadi highlight the South Indian breakfast options, particularly Masala Dosa, hot Sambar, and Kanda Poha.",
    },
    {
      theme: "Clean & Casual Family Environment",
      type: "positive",
      summary:
        "Dine-in visitors frequently note the clean glass frontage, organized seating, and welcoming staff for families.",
    },
    {
      theme: "Delivery Speed & Packaging Care",
      type: "constructive",
      summary:
        "While dine-in experiences receive consistent 4+ stars, customers note that takeaway peak hours can occasionally take extra time, so calling ahead for takeaway is recommended.",
    },
  ],
  curatedFeedback: [
    {
      id: "rev-1",
      source: "Google",
      author: "Siddhesh Kulkarni",
      rating: 5,
      date: "Local Resident Review",
      text: "One of the dependable pure veg places on Kharadi-Hadapsar bypass road. The Masala Dosa and filter coffee are great for breakfast, and Sev Bhaji with tandoori roti is very tasty for dinner. Honest pricing.",
      highlightDish: "Sev Bhaji & Masala Dosa",
      verifiedVisit: true,
    },
    {
      id: "rev-2",
      source: "Google",
      author: "Pooja Patil",
      rating: 4,
      date: "Family Dining Review",
      text: "Visited with family on Sunday night. Nice casual seating with clean atmosphere. Paneer Handi and Veg Kadai were rich and flavourful. Fast service even though the restaurant had full tables.",
      highlightDish: "Paneer Handi",
      verifiedVisit: true,
    },
    {
      id: "rev-3",
      source: "Google",
      author: "Rohan Deshmukh",
      rating: 4,
      date: "Takeaway Review",
      text: "Good pure vegetarian option near Durga Mata Mandir. Misal Pav in the morning has a good spicy rassa and farsan. For home takeaway during peak evening dinner, better to order 15 mins in advance.",
      highlightDish: "Puneri Misal Pav",
      verifiedVisit: true,
    },
    {
      id: "rev-4",
      source: "Google",
      author: "Amit Joshi",
      rating: 5,
      date: "Regular Customer",
      text: "Affordable everyday meals for office folks and locals in Kharadi. You get hot fresh food without unnecessary high prices. Falooda and Kulfi at the end are worth trying.",
      highlightDish: "Royal Falooda",
      verifiedVisit: true,
    },
  ],
};
