import React from "react";
import Image from "next/image";
import { restaurantData } from "@/data/restaurant";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Utensils,
  MapPin,
  HeartHandshake,
} from "lucide-react";

export const RestaurantIntro: React.FC = () => {
  const valueProps = [
    {
      title: "Extensive Variety",
      description:
        "From crisp morning dosas to sizzling evening paneer handi and hakka noodles, everyone in the family finds their favourite meal.",
      icon: Utensils,
    },
    {
      title: "Strictly Pure Veg",
      description:
        "100% vegetarian kitchen with fresh vegetables, authentic dairy paneer, and homestyle cooking ethics.",
      icon: CheckCircle2,
    },
    {
      title: "Honest Kharadi Pricing",
      description:
        "Approx ₹400 for two. Generous portions without inflated fine-dining bills, ideal for everyday dining.",
      icon: HeartHandshake,
    },
    {
      title: "Breakfast Till Late Dinner",
      description:
        "Open all 7 days from 9:00 AM to 11:30 PM on Kharadi–Hadapsar Bypass Road for dine-in, takeaway, and delivery.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Food Photography (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card border border-gray-200">
                <Image
                  src="/images/paneer-curry.jpg"
                  alt="Fresh Paneer curry with butter naan and aromatic spices at Balaji Pure Veg"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Homestyle Cooking
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1">
                    Fresh Spices & Generous Portions
                  </h3>
                  <p className="text-xs text-gray-200 mt-1">
                    Prepared hot to order using quality ingredients and traditional regional recipes.
                  </p>
                </div>
              </div>

              {/* Floating Badge: Everyday Casual Dining */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-brand-green text-white p-4 rounded-xl shadow-lg max-w-[200px] border border-white/30 hidden sm:block">
                <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-100">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kharadi Special</span>
                </div>
                <div className="font-serif text-2xl font-bold mt-1">
                  100+
                </div>
                <div className="text-xs text-emerald-100 leading-tight">
                  Pure vegetarian choices on our daily menu
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Value Pillars (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              align="left"
              badge="About Our Kitchen"
              marathiBadge="आमचे वैशिष्ट्य"
              title="Your Everyday Vegetarian Table."
              subtitle={restaurantData.extendedIntro}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {valueProps.map((prop, index) => {
                const Icon = prop.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-brand-off-white border border-gray-200/80 hover:border-brand-green/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-brand-charcoal mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href="/menu" className="btn-primary px-6 py-3 text-sm font-bold">
                EXPLORE OUR FULL MENU
              </a>
              <a
                href="/about"
                className="btn-secondary px-5 py-3 text-sm font-bold"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
