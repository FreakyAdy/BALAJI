import React from "react";
import type { Metadata } from "next";
import { MenuSection } from "@/components/menu/MenuSection";
import { restaurantData } from "@/data/restaurant";
import { ShieldCheck, Clock, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Menu | Balaji Pure Veg Kharadi, Pune",
  description:
    "Explore the full pure vegetarian menu of Balaji Pure Veg in Kharadi, Pune. Featuring South Indian dosas, North Indian paneer curries, Punjabi dals, Puneri misal, Indo-Chinese and desserts.",
};

export default function MenuPage() {
  return (
    <div className="w-full">
      {/* Menu Header Banner */}
      <section className="bg-brand-charcoal text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-brand-green/30 text-brand-green text-xs font-bold tracking-wider uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% PURE VEGETARIAN MENU</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white">
                Daily Food Menu
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-xl">
                Freshly prepared breakfast, lunch, evening snacks and dinner. Serving Kharadi daily from 9:00 AM to 11:30 PM.
              </p>
            </div>

            <div className="shrink-0 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-2">
              <div className="flex items-center gap-2 text-brand-green font-bold">
                <Clock className="w-4 h-4" />
                <span>Serving Timings: {restaurantData.hours.display}</span>
              </div>
              <div className="text-gray-400">
                Average cost: ₹400 for two approx.
              </div>
              <a
                href={restaurantData.phone.telUri}
                className="btn-primary w-full flex items-center justify-center gap-2 py-2 text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Order Parcel: {restaurantData.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Menu Component */}
      <MenuSection />
    </div>
  );
}
