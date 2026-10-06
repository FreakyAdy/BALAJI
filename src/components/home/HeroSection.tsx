import React from "react";
import Image from "next/image";
import { restaurantData } from "@/data/restaurant";
import {
  Phone,
  Navigation,
  BookOpen,
  ShieldCheck,
  Star,
  Clock,
  MapPin,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-off-white to-white py-12 lg:py-20 border-b border-gray-100">
      {/* Subtle oversized background watermark text: "BALAJI" at 3% opacity */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[16vw] font-black tracking-widest text-brand-charcoal/[0.03] uppercase whitespace-nowrap z-0 font-sans"
      >
        BALAJI
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call-to-Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Identity Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-green-forest text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                100% PURE VEGETARIAN
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-brand-green" />
                Kharadi, Pune
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ★ 4.2 ({restaurantData.ratings.google.reviewCount} Google Reviews)
              </span>
            </div>

            {/* Primary Headline */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-normal tracking-tight leading-[1.12]">
                Good Food. <br />
                <span className="text-brand-green font-normal">
                  Purely Vegetarian.
                </span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-500 font-medium">
                बालाजी शुध्द शाकाहारी • Kharadi–Hadapsar Bypass Road
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              {restaurantData.supportingCopy}
            </p>

            {/* Quick Micro-Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 border-t border-gray-200/60 max-w-xl text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                <span>South Indian Breakfast</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                <span>North Indian & Paneer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                <span>Indo-Chinese & Snacks</span>
              </div>
            </div>

            {/* CTAs: Primary, Secondary, Third */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary CTA */}
              <a
                href="/menu"
                className="btn-primary flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold shadow-md hover:shadow-hover"
              >
                <BookOpen className="w-5 h-5" />
                <span>VIEW MENU</span>
              </a>

              {/* Secondary CTA */}
              <a
                href={restaurantData.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 px-5 py-3.5 text-base font-bold"
              >
                <Navigation className="w-4 h-4 text-brand-green" />
                <span>GET DIRECTIONS</span>
              </a>

              {/* Third CTA */}
              <a
                href={restaurantData.phone.telUri}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-base font-semibold text-brand-charcoal hover:text-brand-green transition-colors"
                aria-label="Call Balaji Pure Veg"
              >
                <Phone className="w-4 h-4 text-brand-green" />
                <span>CALL NOW</span>
              </a>
            </div>

            {/* Timings & Cost Guarantee Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-green" />
                Daily {restaurantData.hours.display}
              </span>
              <span>•</span>
              <span>₹400 for two approx</span>
              <span>•</span>
              <span>Dine-In & Takeaway</span>
            </div>
          </div>

          {/* Right Column: Visual Composition with Food + Green Balaji Accent (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Green Brand Accent Backdrop Panel */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-green-light rounded-3xl -z-10 transform rotate-3" />
              <div className="absolute -bottom-4 -left-4 w-60 h-60 bg-emerald-50 rounded-3xl -z-10 transform -rotate-3" />

              {/* Main Circular / Rounded Food Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/dosa.jpg"
                    alt="Golden crisp Masala Dosa with sambar and fresh coconut chutney at Balaji Pure Veg"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* 100% Pure Veg Factual Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-brand-green/30">
                    <span className="veg-indicator" />
                    <span className="text-xs font-black tracking-wide text-brand-green-forest uppercase">
                      100% PURE VEG
                    </span>
                  </div>

                  {/* Bottom Dish Callout */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                      Signature Breakfast Favourite
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white">
                      Crispy Golden Masala Dosa
                    </h3>
                    <p className="text-xs text-gray-200 mt-0.5 line-clamp-1">
                      Fermented rice-lentil crepe with spiced potato bhaji, hot sambar & fresh coconut chutney
                    </p>
                  </div>
                </div>

                {/* Secondary Micro-Card: Storefront Recognition Highlight */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-green-light flex items-center justify-center text-brand-green shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                        Find the Green Sign
                      </h4>
                      <p className="text-xs text-gray-500">
                        Kharadi–Hadapsar Bypass Road
                      </p>
                    </div>
                  </div>
                  <a
                    href="#storefront"
                    className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
                  >
                    <span>View Storefront</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Floating Pill: Everyday Value */}
              <div className="absolute -bottom-3 right-4 bg-brand-charcoal text-white text-xs font-bold py-2 px-3.5 rounded-lg shadow-xl border border-white/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                <span>₹400 for two • Everyday Affordable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
