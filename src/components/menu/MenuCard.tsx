import React from "react";
import Image from "next/image";
import { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <article
      className="bg-white rounded-card p-4 sm:p-5 border border-gray-200/90 shadow-soft hover:shadow-card hover:border-brand-green/30 transition-all flex flex-col justify-between group"
      aria-labelledby={`dish-${item.id}`}
    >
      <div>
        {/* Optional Image */}
        {item.image && (
          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3.5 bg-gray-100">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-brand-green-forest flex items-center gap-1 shadow-xs">
              <span className="veg-indicator" />
              <span>PURE VEG</span>
            </div>
          </div>
        )}

        {/* Top Badges & Indicators */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            {!item.image && <span className="veg-indicator shrink-0" />}
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {item.subCategory || "Pure Veg"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {item.isJainAvailable && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                Jain Avail.
              </span>
            )}
            {item.tag && (
              <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-brand-green-light text-brand-green-forest tracking-wide">
                {item.tag}
              </span>
            )}
          </div>
        </div>

        {/* Dish Title & Price */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3
              id={`dish-${item.id}`}
              className="font-bold text-base text-brand-charcoal group-hover:text-brand-green transition-colors leading-snug"
            >
              {item.name}
            </h3>
            {item.marathiName && (
              <p className="text-xs text-gray-400 font-medium mt-0.5">
                {item.marathiName}
              </p>
            )}
          </div>
          <div className="text-right shrink-0">
            <span className="text-base font-extrabold text-brand-green font-sans">
              ₹{item.price}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Footer Info: Portion & Spice */}
      <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
        <span>{item.portion || "Standard Serving"}</span>
        {item.spiceLevel && (
          <span
            className={`font-semibold ${
              item.spiceLevel === "Spicy"
                ? "text-red-600"
                : item.spiceLevel === "Medium"
                ? "text-amber-600"
                : "text-emerald-700"
            }`}
          >
            {item.spiceLevel} Spice
          </span>
        )}
      </div>
    </article>
  );
};
