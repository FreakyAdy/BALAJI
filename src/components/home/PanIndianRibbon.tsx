import React from "react";
import {
  Layers,
  CookingPot,
  Zap,
  Coffee,
  Pizza,
  CupSoda,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const PanIndianRibbon: React.FC = () => {
  const ribbons = [
    {
      title: "South Indian & Dosas",
      marathi: "दक्षिण भारतीय",
      icon: Layers,
      items: "Masala Dosa, Mysore Dosa, Rava Dosa, Idli Sambar, Uttappam",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      link: "/menu#south-indian",
    },
    {
      title: "North Indian & Paneer",
      marathi: "उत्तर भारतीय भाजी",
      icon: CookingPot,
      items: "Paneer Handi, Sev Bhaji, Veg Kadai, Dal Tadka, Tandoori Roti",
      color: "bg-amber-50 text-amber-900 border-amber-200",
      link: "/menu#north-indian",
    },
    {
      title: "Indo-Chinese Delights",
      marathi: "चायनीज स्टार्टर्स",
      icon: Zap,
      items: "Veg Manchurian, Paneer Chilli, Hakka Noodles, Fried Rice",
      color: "bg-orange-50 text-orange-900 border-orange-200",
      link: "/menu#indo-chinese",
    },
    {
      title: "Snacks & Sandwiches",
      marathi: "स्नॅक्स व सँडविच",
      icon: Coffee,
      items: "Veg Cheese Grilled Sandwich, Pav Bhaji, Quick Evening Bites",
      color: "bg-blue-50 text-blue-900 border-blue-200",
      link: "/menu#snacks",
    },
    {
      title: "Chilled Beverages & Juices",
      marathi: "ताजी पेये व लस्सी",
      icon: CupSoda,
      items: "Special Ginger Chai, Filter Coffee, Thick Sweet Lassi, Soda",
      color: "bg-teal-50 text-teal-900 border-teal-200",
      link: "/menu#beverages",
    },
    {
      title: "Traditional Desserts",
      marathi: "कुल्फी व फालुदा",
      icon: Sparkles,
      items: "Royal Rose Falooda, Matka Malai Kulfi, Ice Cream",
      color: "bg-purple-50 text-purple-900 border-purple-200",
      link: "/menu#desserts",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest bg-brand-green-light px-3 py-1 rounded-full">
            All-Day Multi-Cuisine
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal mt-2">
            More Than One Craving.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Balaji Pure Veg brings together an extensive regional selection so everyone leaves satisfied.
          </p>
        </div>

        {/* Horizontal Visual Category Ribbon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ribbons.map((ribbon, idx) => {
            const Icon = ribbon.icon;
            return (
              <a
                key={idx}
                href={ribbon.link}
                className={`p-4 rounded-xl border ${ribbon.color} hover:shadow-card transition-all flex items-start gap-3.5 group`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-5 h-5 text-brand-green" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-green transition-colors">
                      {ribbon.title}
                    </h3>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                  </div>
                  <span className="text-[11px] text-gray-500 block">
                    {ribbon.marathi}
                  </span>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                    {ribbon.items}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
