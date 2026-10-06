import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { restaurantData } from "@/data/restaurant";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  MapPin,
  Utensils,
  CheckCircle2,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Balaji Pure Veg Kharadi, Pune",
  description:
    "Learn about Balaji Pure Veg, a genuine local vegetarian restaurant serving everyday Indian, South Indian and Indo-Chinese food in Kharadi, Pune.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-charcoal text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-white/10 px-3 py-1 rounded-full border border-brand-green/30">
              Our Kharadi Story
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white mt-3">
              Everyday Vegetarian Food for Kharadi
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              Balaji Pure Veg was established with a straightforward mission: serve clean, satisfying, purely vegetarian everyday Indian meals at honest neighborhood prices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                badge="Grounded in Purity & Taste"
                marathiBadge="आमचा दृष्टिकोन"
                title="A Table Where Everyone in the Family Feels Welcome."
                subtitle="In the growing neighborhood along Kharadi–Hadapsar Bypass Road, residents, office professionals, and families need a reliable spot they can return to several times a week."
              />

              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  We are not an expensive luxury fine-dining experiment or a trendy minimalist startup. Balaji Pure Veg is a genuine, hardworking Indian casual dining restaurant. When you step through our glass doors, you are greeted by our signature green signage, crisp white storefront, clean checkered tile floors, and the enticing aromas of roasting dosas and slow-simmered handi gravies.
                </p>
                <p>
                  Our kitchen adheres strictly to 100% pure vegetarian standards. Fresh vegetables arrive each morning, curries are seasoned with authentic regional masalas, and dals receive their signature sizzling ghee tadkas moments before reaching your table.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-charcoal">
                      100% Pure Veg Kitchen
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      No meat or non-veg handling. Strict kitchen integrity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-charcoal">
                      Honest Everyday Value
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Wholesome meals for two for approximately ₹400.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-charcoal">
                      9:00 AM to 11:30 PM
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Open all 7 days for morning breakfast to late dinner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-charcoal">
                      Large Group Seating
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Spacious indoor tables for family lunches and celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-gray-200">
                <Image
                  src="/images/storefront.jpg"
                  alt="Balaji Pure Veg restaurant storefront in Kharadi Pune"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-brand-charcoal/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded">
                  Storefront on Kharadi Bypass Road
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-card border border-gray-200">
                <Image
                  src="/images/interior.jpg"
                  alt="Clean dining seating interior at Balaji Pure Veg"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-brand-charcoal/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded">
                  Indoor Family Dining Tables
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
