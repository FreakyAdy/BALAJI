import React from "react";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Camera, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Balaji Pure Veg Kharadi, Pune",
  description:
    "View authentic photos of Balaji Pure Veg restaurant in Kharadi, Pune. Explore our storefront, dining hall, South Indian dosas, North Indian gravies and desserts.",
};

export default function GalleryPage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-charcoal text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-white/10 px-3 py-1 rounded-full border border-brand-green/30">
              Visual Highlights
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white mt-3">
              Photo Gallery
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              Take a look at our dishes, morning breakfasts, welcoming dining hall, and our recognizable green storefront in Kharadi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid Component */}
      <GalleryGrid />
    </div>
  );
}
