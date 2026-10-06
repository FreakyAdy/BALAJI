import React from "react";
import {
  ShieldCheck,
  Sunrise,
  Sun,
  Moon,
  ShoppingBag,
  Truck,
  Users,
  CreditCard,
} from "lucide-react";

export const QuickInfoStrip: React.FC = () => {
  const quickItems = [
    {
      icon: ShieldCheck,
      title: "100% PURE VEG",
      subtitle: "Pure Vegetarian Kitchen",
      highlight: true,
    },
    {
      icon: Sunrise,
      title: "BREAKFAST",
      subtitle: "From 9:00 AM Daily",
      highlight: false,
    },
    {
      icon: Sun,
      title: "LUNCH",
      subtitle: "Thalis & Main Course",
      highlight: false,
    },
    {
      icon: Moon,
      title: "DINNER",
      subtitle: "Till 11:30 PM Night",
      highlight: false,
    },
    {
      icon: ShoppingBag,
      title: "TAKEAWAY",
      subtitle: "Quick Counter Pickup",
      highlight: false,
    },
    {
      icon: Truck,
      title: "HOME DELIVERY",
      subtitle: "Hot Local Packaging",
      highlight: false,
    },
    {
      icon: Users,
      title: "GROUP SEATING",
      subtitle: "Family Dining Space",
      highlight: false,
    },
    {
      icon: CreditCard,
      title: "DIGITAL PAYMENTS",
      subtitle: "UPI / Cards / Cash",
      highlight: false,
    },
  ];

  return (
    <section
      aria-label="Restaurant Services Quick Information"
      className="bg-white border-y border-gray-200/80 shadow-xs relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth">
          {quickItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 shrink-0 px-4 py-2.5 rounded-xl border transition-all ${
                  item.highlight
                    ? "bg-brand-green-light border-brand-green/30 text-brand-green-forest"
                    : "bg-gray-50/80 border-gray-200/70 text-brand-charcoal hover:bg-white hover:border-brand-green/30"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    item.highlight
                      ? "bg-brand-green text-white shadow-xs"
                      : "bg-white text-brand-green border border-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-black tracking-wider uppercase font-sans leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium whitespace-nowrap leading-tight mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
