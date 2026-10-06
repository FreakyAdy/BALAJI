import React from "react";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Flame, Star, ArrowRight } from "lucide-react";

export const PopularDishes: React.FC = () => {
  // Curated 6 popular dishes based on verified review mentions and ordering signals
  const popularDishIds = [
    "masala-dosa",
    "sev-bhaji",
    "paneer-handi",
    "misal-pav",
    "pav-bhaji",
    "royal-falooda",
  ];

  const popularItems = menuItems.filter((i) => popularDishIds.includes(i.id));

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Customer Mentions"
          marathiBadge="ग्राहकांची पसंती"
          title="BALAJI FAVOURITES"
          subtitle="Our most frequently ordered everyday dishes, crafted with consistent taste, wholesome ingredients, and generous portions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {popularItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-card overflow-hidden border border-gray-200/90 shadow-soft hover:shadow-card hover:border-brand-green/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Dish Visual Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  {dish.image ? (
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-brand-green-light text-brand-green">
                      <span className="font-serif text-lg font-bold">
                        {dish.name}
                      </span>
                    </div>
                  )}

                  {/* Veg Indicator & Verified Label */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="veg-indicator bg-white shadow-xs" />
                    <span className="px-2.5 py-0.5 rounded bg-brand-charcoal/80 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider uppercase">
                      {dish.tag || "POPULAR"}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-sm font-extrabold text-brand-green font-sans shadow-xs">
                    ₹{dish.price}
                  </div>
                </div>

                {/* Dish Details */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-base text-brand-charcoal group-hover:text-brand-green transition-colors">
                        {dish.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        {dish.marathiName}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mt-2.5 leading-relaxed line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400 font-medium">
                  {dish.portion || "Standard Serving"}
                </span>
                <a
                  href="/menu"
                  className="font-bold text-brand-green hover:underline flex items-center gap-1"
                >
                  <span>Order at Counter</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View Entire Menu Action */}
        <div className="text-center mt-12">
          <a
            href="/menu"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold shadow-md hover:shadow-hover"
          >
            <span>VIEW COMPLETE MENU & PRICING</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
