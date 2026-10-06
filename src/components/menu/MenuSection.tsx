"use client";

import React, { useState, useMemo } from "react";
import { menuItems, menuCategories, MenuCategoryKey } from "@/data/menu";
import { MenuCard } from "./MenuCard";
import { MenuCategoryNav } from "./MenuCategoryNav";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Search,
  SlidersHorizontal,
  X,
  Phone,
  Sparkles,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [jainOnly, setJainOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"default" | "price-low" | "price-high">(
    "default"
  );

  // Compute counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<MenuCategoryKey, number> = {
      all: menuItems.length,
      breakfast: 0,
      "south-indian": 0,
      "local-favourites": 0,
      "north-indian": 0,
      "indo-chinese": 0,
      "breads-rice": 0,
      snacks: 0,
      beverages: 0,
      desserts: 0,
    };
    menuItems.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category] += 1;
      }
    });
    return counts;
  }, []);

  // Filtered and sorted items
  const filteredItems = useMemo(() => {
    return menuItems
      .filter((item) => {
        // Category match
        if (activeCategory !== "all" && item.category !== activeCategory) {
          return false;
        }
        // Jain filter
        if (jainOnly && !item.isJainAvailable) {
          return false;
        }
        // Search query match (name, marathiName, description, subCategory)
        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase().trim();
          const matchName = item.name.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          const matchSub = item.subCategory?.toLowerCase().includes(q) || false;
          const matchMarathi = item.marathiName.includes(q);
          if (!matchName && !matchDesc && !matchSub && !matchMarathi) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        return 0;
      });
  }, [activeCategory, searchQuery, jainOnly, sortBy]);

  // Current active category meta
  const currentCategoryMeta = menuCategories.find(
    (c) => c.key === activeCategory
  );

  const handleReset = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setJainOnly(false);
    setSortBy("default");
  };

  return (
    <section id="menu-section" className="py-12 sm:py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pure Vegetarian Daily Menu"
          marathiBadge="भोजन मेनू"
          title="Fresh Food. Broad Menu."
          subtitle="Explore over 100+ everyday vegetarian preparations prepared fresh with honest ingredients and transparent pricing."
        />

        {/* Search, Jain filter & Sort Controls */}
        <div className="mt-10 mb-6 bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input (6 cols) */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Dosa, Sev Bhaji, Paneer, Misal, Poha)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green bg-gray-50/50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Jain Filter Toggle (3 cols) */}
            <div className="md:col-span-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setJainOnly(!jainOnly)}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-colors ${
                  jainOnly
                    ? "bg-amber-50 border-amber-300 text-amber-900"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
                aria-pressed={jainOnly}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Jain Available Only</span>
              </button>
            </div>

            {/* Price Sort (3 cols) */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "default" | "price-low" | "price-high")
                }
                className="w-full py-2.5 px-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                aria-label="Sort dishes"
              >
                <option value="default">Default Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active Filters Summary Bar */}
          {(searchQuery || jainOnly || activeCategory !== "all") && (
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span>Showing <strong>{filteredItems.length}</strong> items</span>
                {searchQuery && (
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-700">
                    Query: "{searchQuery}"
                  </span>
                )}
                {jainOnly && (
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">
                    Jain Options Only
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Category Bar */}
      <MenuCategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={categoryCounts}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Category Description Banner */}
        {currentCategoryMeta && (
          <div className="mb-8 p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-brand-charcoal">
                  {currentCategoryMeta.label}
                </h3>
                <span className="text-xs text-gray-400">
                  {currentCategoryMeta.marathiLabel}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                {currentCategoryMeta.description}
              </p>
            </div>
            <div className="shrink-0 text-xs font-semibold text-brand-green bg-brand-green-light px-3 py-1.5 rounded-lg">
              {filteredItems.length} Items Listed
            </div>
          </div>
        )}

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-soft max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl text-brand-charcoal">
              No matching dishes found
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-sm mx-auto">
              We couldn't find any dishes matching your search. Try changing the category or clearing the filters.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="btn-primary mt-5 px-5 py-2.5 text-xs font-bold"
            >
              Reset Filters & View Full Menu
            </button>
          </div>
        )}

        {/* Counter Ordering Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-brand-charcoal text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Takeaway & Large Group Seating
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-white">
              Planning lunch or dinner for your family?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Call ahead to reserve group tables or order your takeaway parcel for quick pickup on Kharadi bypass.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="tel:+919322141408"
              className="btn-primary flex items-center gap-2 px-6 py-3 text-xs font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>CALL +91 93221 41408</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
