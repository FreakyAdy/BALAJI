import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { restaurantData } from "@/data/restaurant";
import { RestaurantHeader } from "@/components/layout/RestaurantHeader";
import { RestaurantFooter } from "@/components/layout/RestaurantFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  weight: ["400", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#27A844",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://balajipureveg-kharadi.com"),
  title: "Balaji Pure Veg Kharadi | Pure Vegetarian Restaurant in Pune",
  description:
    "Balaji Pure Veg in Kharadi, Pune serves vegetarian North Indian, South Indian and Indo-Chinese food, breakfast, snacks, beverages and more. View the menu, call or get directions.",
  keywords: [
    "Balaji Pure Veg Kharadi",
    "Pure Veg Restaurant Kharadi",
    "Vegetarian Restaurant Pune",
    "South Indian Breakfast Kharadi",
    "North Indian Food Kharadi Pune",
    "Misal Pav Kharadi",
    "Dosa Kharadi Hadapsar Bypass",
  ],
  authors: [{ name: "Balaji Pure Veg" }],
  openGraph: {
    title: "Balaji Pure Veg Kharadi | Pure Vegetarian Restaurant in Pune",
    description:
      "Enjoy everyday pure vegetarian favourites from breakfast to dinner in Kharadi, Pune. North Indian, South Indian, Indo-Chinese and snacks.",
    url: "https://balajipureveg-kharadi.com",
    siteName: "Balaji Pure Veg",
    images: [
      {
        url: "/images/storefront.jpg",
        width: 1200,
        height: 630,
        alt: "Balaji Pure Veg Restaurant Kharadi Storefront",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for LocalBusiness / VegetarianRestaurant
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "VegetarianRestaurant", "FoodEstablishment"],
    name: restaurantData.name,
    alternateName: [restaurantData.marathiName, "Balaji Restaurant Kharadi"],
    image: "https://balajipureveg-kharadi.com/images/storefront.jpg",
    telephone: restaurantData.phone.raw,
    priceRange: "₹₹ (Approx ₹400 for two)",
    servesCuisine: restaurantData.attributes.cuisines,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${restaurantData.address.shopNo}, ${restaurantData.address.srNo}, ${restaurantData.address.road}, ${restaurantData.address.landmark}`,
      addressLocality: restaurantData.address.locality,
      addressRegion: "Maharashtra",
      postalCode: restaurantData.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurantData.address.coordinates.lat,
      longitude: restaurantData.address.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: restaurantData.hours.open,
        closes: restaurantData.hours.close,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: restaurantData.ratings.google.rating,
      reviewCount: restaurantData.ratings.google.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    hasMenu: "https://balajipureveg-kharadi.com/menu",
    acceptsReservations: "False",
    paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Cards",
    currenciesAccepted: "INR",
  };

  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${manrope.variable} ${notoDevanagari.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#F8FAF5] text-brand-charcoal min-h-screen flex flex-col antialiased pb-16 md:pb-0">
        <RestaurantHeader />
        <main className="flex-1 w-full">{children}</main>
        <RestaurantFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
