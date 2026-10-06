export interface BusinessHours {
  open: string;
  close: string;
  display: string;
  days: string;
  mealSlots: {
    breakfast: string;
    lunch: string;
    snacks: string;
    dinner: string;
  };
}

export interface RestaurantData {
  name: string;
  marathiName: string;
  tagline: string;
  supportingCopy: string;
  extendedIntro: string;
  phone: {
    raw: string;
    display: string;
    telUri: string;
    whatsappNumber: string;
    whatsappUri: string;
  };
  address: {
    shopNo: string;
    srNo: string;
    road: string;
    landmark: string;
    area: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
    googleMapsSearchUrl: string;
    googleMapsDirectionsUrl: string;
    googleMapsEmbedUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  hours: BusinessHours;
  attributes: {
    pureVeg: boolean;
    costForTwo: number;
    costForTwoFormatted: string;
    cuisines: string[];
    services: string[];
    paymentMethods: string[];
    acDining: boolean;
    indoorSeating: boolean;
    groupFriendly: boolean;
  };
  ratings: {
    google: {
      rating: number;
      reviewCount: number;
      label: string;
    };
    zomato: {
      diningRating: number;
      deliveryRating: number;
      label: string;
    };
  };
  onlineOrdering: {
    available: boolean;
    zomatoUrl?: string;
    swiggyUrl?: string;
  };
  brandColors: {
    primaryGreen: string;
    deepGreen: string;
    forestGreen: string;
    darkCharcoal: string;
    softBlack: string;
    pureWhite: string;
    warmOffWhite: string;
    lightGreen: string;
    mutedGreen: string;
    accentGold: string;
  };
}

export const restaurantData: RestaurantData = {
  name: "BALAJI PURE VEG",
  marathiName: "बालाजी शुध्द शाकाहारी",
  tagline: "Good Food. Purely Vegetarian.",
  supportingCopy:
    "From a quick breakfast to a hearty family meal, enjoy a wide selection of Indian, South Indian and Indo-Chinese vegetarian dishes in Kharadi.",
  extendedIntro:
    "Balaji Pure Veg serves a broad vegetarian menu covering South Indian breakfast, North Indian favourites, Indo-Chinese dishes, snacks, beverages and desserts. Freshly prepared everyday with generous portions at honest value for families, office goers and residents across Kharadi.",
  phone: {
    raw: "+919322141408",
    display: "+91 93221 41408",
    telUri: "tel:+919322141408",
    whatsappNumber: "919322141408",
    whatsappUri: "https://wa.me/919322141408?text=Hello%20Balaji%20Pure%20Veg%2C%20I%20would%20like%20to%20inquire%20about%20your%20menu%20and%20takeaway.",
  },
  address: {
    shopNo: "Shop No. 1",
    srNo: "Sr No. Dinkar No. 1",
    road: "Kharadi–Hadapsar Bypass Road",
    landmark: "Next to Durga Mata Mandir, Eknath Pathare Vasti",
    area: "Eknath Pathare Vasti",
    locality: "Kharadi",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411014",
    country: "India",
    fullFormatted:
      "Shop No. 1, Sr No. Dinkar No. 1, Kharadi–Hadapsar Bypass Road, Next to Durga Mata Mandir, Eknath Pathare Vasti, Kharadi, Pune, Maharashtra 411014",
    googleMapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=Balaji+Pure+Veg+Kharadi+Hadapsar+Bypass+Road+Pune+411014",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Shop+No+1+Kharadi+Hadapsar+Bypass+Road+Durga+Mata+Mandir+Kharadi+Pune+411014",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Balaji%20Pure%20Veg%2C%20Kharadi%E2%80%93Hadapsar%20Bypass%20Road%2C%20Pune%2C%20Maharashtra%20411014&t=&z=15&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 18.5447,
      lng: 73.9416,
    },
  },
  hours: {
    open: "09:00",
    close: "23:30",
    display: "9:00 AM – 11:30 PM",
    days: "Monday – Sunday (Open All 7 Days)",
    mealSlots: {
      breakfast: "9:00 AM – 12:00 PM",
      lunch: "12:00 PM – 4:00 PM",
      snacks: "4:00 PM – 7:00 PM",
      dinner: "7:00 PM – 11:30 PM",
    },
  },
  attributes: {
    pureVeg: true,
    costForTwo: 400,
    costForTwoFormatted: "₹400 for two approx.",
    cuisines: ["North Indian", "South Indian", "Indo-Chinese", "Maharashtrian Favourites", "Beverages & Desserts"],
    services: [
      "Pure Vegetarian Only",
      "Breakfast to Dinner",
      "Indoor Seating",
      "Large Group Seating",
      "Takeaway Service",
      "Home Delivery",
      "Digital Payments Accepted",
    ],
    paymentMethods: ["UPI", "Google Pay", "PhonePe", "Paytm", "Cash", "Debit/Credit Cards"],
    acDining: false,
    indoorSeating: true,
    groupFriendly: true,
  },
  ratings: {
    google: {
      rating: 4.2,
      reviewCount: 195,
      label: "Rated on Google",
    },
    zomato: {
      diningRating: 3.3,
      deliveryRating: 3.9,
      label: "Zomato Verified Listing",
    },
  },
  onlineOrdering: {
    available: false, // Per prompt: only display ordering if verified mechanism exists; otherwise hide or link to call/takeaway
    zomatoUrl: undefined,
    swiggyUrl: undefined,
  },
  brandColors: {
    primaryGreen: "#27A844",
    deepGreen: "#147331",
    forestGreen: "#0F5127",
    darkCharcoal: "#171917",
    softBlack: "#0D0F0D",
    pureWhite: "#FFFFFF",
    warmOffWhite: "#F8FAF5",
    lightGreen: "#EAF6EA",
    mutedGreen: "#6E9D72",
    accentGold: "#D4A63C",
  },
};
