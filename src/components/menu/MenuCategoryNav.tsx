"use client";

import React from "react";
import { menuCategories, MenuCategoryKey } from "@/data/menu";
import {
  Utensils,
  Sunrise,
  Layers,
  Flame,
  CookingPot,
  Zap,
  Wheat,
  Coffee,
  CupSoda,
  Sparkles,
} from "lucide-react";

interface MenuCategoryNavProps {
  activeCategory: MenuCategoryKey;
  onSelectCategory: (cat: MenuCategoryKey) => void;
  counts: Record<MenuCategoryKey, number>;
}

export const MenuCategoryNav: React.FC<MenuCategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Sunrise":
        return Sunrise;
      case "Layers":
        return Layers;
      case "Flame":
        return Flame;
      case "CookingPot":
        return CookingPot;
      case "Zap":
        return Zap;
      case "Wheat":
        return Wheat;
      case "Coffee":
        return Coffee;
      case "CupSoda":
        return CupSoda;
      case "Sparkles":
        return Sparkles;
      default:
        return Utensils;
    }
  };

  return (
    <nav
      aria-label="Menu Categories"
      className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-y border-gray-200 py-2.5 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
          {menuCategories.map((cat) => {
            const Icon = getIcon(cat.iconName);
            const isActive = activeCategory === cat.key;
            const count = counts[cat.key] || 0;

            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => onSelectCategory(cat.key)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-brand-green text-white shadow-xs"
                    : "bg-gray-100 text-brand-charcoal hover:bg-gray-200/80"
                }`}
                aria-pressed={isActive}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-brand-green"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                    isActive ? "bg-white/25 text-white" : "bg-white text-gray-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
