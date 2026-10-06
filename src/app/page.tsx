import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickInfoStrip } from "@/components/home/QuickInfoStrip";
import { RestaurantIntro } from "@/components/home/RestaurantIntro";
import { BreakfastSection } from "@/components/home/BreakfastSection";
import { SouthIndianSection } from "@/components/home/SouthIndianSection";
import { NorthIndianSection } from "@/components/home/NorthIndianSection";
import { LocalFavouritesSection } from "@/components/home/LocalFavouritesSection";
import { PanIndianRibbon } from "@/components/home/PanIndianRibbon";
import { PopularDishes } from "@/components/home/PopularDishes";
import { BeverageSection } from "@/components/home/BeverageSection";
import { DessertSection } from "@/components/home/DessertSection";
import { StorefrontSection } from "@/components/home/StorefrontSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ReviewSection } from "@/components/home/ReviewSection";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Information Strip (Pure Veg, Breakfast, Lunch, Dinner, Takeaway, Delivery) */}
      <QuickInfoStrip />

      {/* 3. Restaurant Intro ("Your Everyday Vegetarian Table") */}
      <RestaurantIntro />

      {/* 4. Breakfast Section ("Start Here. Simple favourites for the morning") */}
      <BreakfastSection />

      {/* 5. South Indian Section (Crisp Dosas, Chutney, Sambar) */}
      <SouthIndianSection />

      {/* 6. North Indian Section (Paneer Handi, Sev Bhaji, Dals on dark theme) */}
      <NorthIndianSection />

      {/* 7. Local Favourites Section ("Favourites Close to Home" - Misal, Pav Bhaji, Usal) */}
      <LocalFavouritesSection />

      {/* 8. Pan-Indian Variety Ribbon ("More Than One Craving") */}
      <PanIndianRibbon />

      {/* 9. Popular Dishes ("BALAJI FAVOURITES") */}
      <PopularDishes />

      {/* 10. Beverage Section ("Something Cold. Something Fresh") */}
      <BeverageSection />

      {/* 11. Dessert Section (Matka Kulfi, Royal Falooda) */}
      <DessertSection />

      {/* 12. Storefront Recognition ("Find the Green Sign in Kharadi") */}
      <StorefrontSection />

      {/* 13. Dining Experience ("MADE FOR EVERYDAY MEALS") */}
      <ExperienceSection />

      {/* 14. Customer Reviews ("Rated on Google" 4.2 / 5) */}
      <ReviewSection />

      {/* 15. Location & Directions ("FIND BALAJI") */}
      <LocationSection />
    </div>
  );
}
