import React from "react";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sunrise, Clock, Flame, ArrowRight } from "lucide-react";

export const BreakfastSection: React.FC = () => {
  // Morning breakfast dishes from menu data
  const breakfastDishes = menuItems.filter(
    (item) => item.category === "breakfast" || item.id === "misal-pav"
  );

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F4FAF2] via-white to-[#F8FAF5] border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Morning Theme Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeading
            align="left"
            badge="Morning 9:00 AM – 12:00 PM"
            marathiBadge="सकाळचा नाश्ता"
            title="Start Here."
            subtitle="Simple, fresh, and wholesome morning favourites prepared hot right from opening time."
          />

          <div className="shrink-0 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
              <Sunrise className="w-4 h-4 text-amber-600" />
              <span>Served Fresh Daily</span>
            </span>
            <a
              href="/menu#breakfast"
              className="text-xs font-bold text-brand-green hover:text-brand-green-deep flex items-center gap-1"
            >
              <span>View All Breakfast</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Breakfast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breakfastDishes.slice(0, 6).map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-card overflow-hidden shadow-soft hover:shadow-card border border-gray-100 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Visual Image if available */}
                {dish.image ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-brand-green-forest flex items-center gap-1.5 shadow-xs">
                      <span className="veg-indicator" />
                      <span>{dish.tag || "PURE VEG"}</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 pb-0 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="veg-indicator" />
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Breakfast Special
                      </span>
                    </div>
                    {dish.tag && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-green-light text-brand-green-forest">
                        {dish.tag}
                      </span>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-bold text-base text-brand-charcoal group-hover:text-brand-green transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-base font-extrabold text-brand-green font-sans shrink-0">
                      ₹{dish.price}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {dish.marathiName}
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed mt-2.5 line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="text-[11px] font-medium text-gray-500">
                  {dish.portion || "Standard Portion"}
                </span>
                <span className="text-[11px] font-semibold text-brand-green">
                  Fresh Hot Prep
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Morning Micro-Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-brand-green/20 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-green-light text-brand-green flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-charcoal">
                Need a quick morning breakfast on Kharadi Bypass?
              </h4>
              <p className="text-xs text-gray-500">
                Hot Kanda Poha, Puri Bhaji, and Fresh Filter Coffee are ready starting 9:00 AM daily.
              </p>
            </div>
          </div>

          <a
            href="tel:+919322141408"
            className="btn-secondary px-4 py-2 text-xs font-bold whitespace-nowrap shrink-0"
          >
            Call Ahead for Takeaway
          </a>
        </div>
      </div>
    </section>
  );
};
