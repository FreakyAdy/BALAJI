import React from "react";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Coffee, CupSoda, Sparkles } from "lucide-react";

export const BeverageSection: React.FC = () => {
  const drinks = menuItems.filter((i) => i.category === "beverages");

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-off-white to-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          <div className="lg:col-span-8">
            <SectionHeading
              align="left"
              badge="Hot & Cold Beverages"
              marathiBadge="ताजी पेये व लस्सी"
              title="Something Cold. Something Fresh."
              subtitle="From steaming morning cutting chai and authentic filter coffee to chilled Punjabi sweet lassi and sparkling fresh lime soda."
            />
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
              <CupSoda className="w-4 h-4 text-teal-600" />
              <span>All Prepared Fresh To Order</span>
            </div>
          </div>
        </div>

        {/* 2 Visual Spotlights: Chai & Lassi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Spotlight 1: Sweet Lassi */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-card flex flex-col sm:flex-row items-center">
            <div className="relative w-full sm:w-1/2 aspect-square sm:aspect-auto sm:h-full min-h-[220px]">
              <Image
                src="/images/lassi.jpg"
                alt="Chilled Punjabi Sweet Lassi with thick malai at Balaji Pure Veg"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:w-1/2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600">
                Thick & Chilled
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal mt-1">
                Special Sweet Lassi
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                पंजाबी गोड लस्सी
              </p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Churned curd sweetened and served cold with rich malai and crushed dry fruits.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">300ml Glass</span>
                <span className="text-lg font-black text-brand-green font-sans">
                  ₹60
                </span>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Special Ginger Chai */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-card flex flex-col sm:flex-row items-center">
            <div className="relative w-full sm:w-1/2 aspect-square sm:aspect-auto sm:h-full min-h-[220px]">
              <Image
                src="/images/tea.jpg"
                alt="Special ginger cardamom Indian tea at Balaji Pure Veg"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:w-1/2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                Freshly Brewed
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal mt-1">
                Special Balaji Chai
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                स्पेशल आले-वेलची चहा
              </p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Strong milk tea brewed with fresh crushed ginger and fragrant green cardamom.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">Piping Hot</span>
                <span className="text-lg font-black text-brand-green font-sans">
                  ₹25
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Beverages Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {drinks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group"
            >
              {item.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] font-bold text-teal-800 flex items-center gap-1 shadow-xs">
                    <span className="veg-indicator" />
                    <span>REFRESHER</span>
                  </div>
                </div>
              )}
              <div className="p-3.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs sm:text-sm text-brand-charcoal group-hover:text-brand-green transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-sm font-extrabold text-brand-green font-sans shrink-0">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  {item.marathiName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
