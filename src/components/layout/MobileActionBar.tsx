"use client";

import React from "react";
import { restaurantData } from "@/data/restaurant";
import { Phone, BookOpen, Navigation, MessageCircle } from "lucide-react";

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick Actions Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-2xl px-2 py-2"
      style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* CALL NOW */}
        <a
          href={restaurantData.phone.telUri}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brand-green text-white active:scale-95 transition-transform"
          aria-label="Call Balaji Pure Veg"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[11px] font-bold tracking-tight uppercase leading-none">
            Call
          </span>
        </a>

        {/* MENU */}
        <a
          href="/menu"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gray-50 text-brand-charcoal hover:bg-brand-green-light hover:text-brand-green-forest active:scale-95 transition-transform border border-gray-200/80"
          aria-label="View Full Menu"
        >
          <BookOpen className="w-5 h-5 mb-1 text-brand-green" />
          <span className="text-[11px] font-bold tracking-tight uppercase leading-none">
            Menu
          </span>
        </a>

        {/* DIRECTIONS */}
        <a
          href={restaurantData.address.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gray-50 text-brand-charcoal hover:bg-brand-green-light hover:text-brand-green-forest active:scale-95 transition-transform border border-gray-200/80"
          aria-label="Get Directions to Kharadi Restaurant"
        >
          <Navigation className="w-5 h-5 mb-1 text-brand-green" />
          <span className="text-[11px] font-bold tracking-tight uppercase leading-none">
            Maps
          </span>
        </a>

        {/* WHATSAPP / INQUIRE */}
        <a
          href={restaurantData.phone.whatsappUri}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gray-50 text-brand-charcoal hover:bg-emerald-50 hover:text-emerald-800 active:scale-95 transition-transform border border-gray-200/80"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-emerald-600" />
          <span className="text-[11px] font-bold tracking-tight uppercase leading-none">
            Chat
          </span>
        </a>
      </div>
    </aside>
  );
};
