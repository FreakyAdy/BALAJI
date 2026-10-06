import React from "react";
import type { Metadata } from "next";
import { LocationSection } from "@/components/home/LocationSection";
import { restaurantData } from "@/data/restaurant";
import { Phone, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Location & Contact | Balaji Pure Veg Kharadi, Pune",
  description:
    "Find Balaji Pure Veg on Kharadi–Hadapsar Bypass Road, next to Durga Mata Mandir, Eknath Pathare Vasti, Kharadi, Pune. View phone, hours, and Google Maps directions.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-charcoal text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-white/10 px-3 py-1 rounded-full border border-brand-green/30">
              Visit or Inquire
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white mt-3">
              Location & Contact
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              We are located on the service corridor of the Kharadi–Hadapsar Bypass Road next to Durga Mata Mandir.
            </p>
          </div>
        </div>
      </section>

      {/* Main Location Section */}
      <LocationSection />
    </div>
  );
}
