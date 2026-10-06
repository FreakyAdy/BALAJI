import React from "react";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Flame, Star, Sparkles, ArrowRight } from "lucide-react";

export const LocalFavouritesSection: React.FC = () => {
  const localItems = menuItems.filter((i) => i.category === "local-favourites");

  return (
    <section className="py-16 sm:py-24 bg-brand-off-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeading
            align="left"
            badge="Pune & Maharashtrian Specialties"
            marathiBadge="स्थानिक आवडीचे पदार्थ"
            title="Favourites Close to Home."
            subtitle="Beloved regional flavours crafted with authentic spices, from fiery Misal Pav to butter-drenched Pav Bhaji and griddle Tawa Pulav."
          />

          <a
            href="/menu#local-favourites"
            className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1.5 shrink-0"
          >
            <span>Browse Local Favourites</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2 Featured Spotlights: Misal Pav & Pav Bhaji */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Puneri Misal Pav */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-card hover:border-brand-green/40 transition-all flex flex-col justify-between group">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/misal.jpg"
                alt="Puneri Misal Pav with spicy red rassa and farsan at Balaji Pure Veg"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                <Flame className="w-3 h-3" />
                <span>SPICY PUNERI STYLE</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal">
                    Puneri Misal Pav
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    पुणेरी मिसळ पाव • With Extra Kat & Farsan
                  </p>
                </div>
                <div className="text-xl font-black text-brand-green font-sans">
                  ₹85
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                Sprouted moth beans cooked in authentic Kolhapuri-style red rassa gravy, generously topped with crisp spicy farsan, fresh coriander, and chopped onions. Served with 2 soft buttered pavs and fresh lime.
              </p>

              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-brand-green">1 Bowl Misal + Rassa + 2 Pav</span>
                <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-bold">
                  Guest Favourite
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Amul Butter Pav Bhaji */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-card hover:border-brand-green/40 transition-all flex flex-col justify-between group">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/pav-bhaji.jpg"
                alt="Amul Butter Pav Bhaji at Balaji Pure Veg Kharadi"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-brand-green text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>LOADED WITH AMUL BUTTER</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal">
                    Amul Butter Pav Bhaji
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    बटर पाव भाजी • Evening Favourite
                  </p>
                </div>
                <div className="text-xl font-black text-brand-green font-sans">
                  ₹120
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                Slow-simmered cauliflower, green peas, tomatoes, and potatoes mashed smooth on a flat tawa with aromatic spices and a generous slab of golden Amul butter. Accompanied by griddle-toasted pavs.
              </p>

              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-brand-green">Cheese Pav Bhaji also available (₹150)</span>
                <span className="bg-brand-green-light text-brand-green-forest px-2 py-0.5 rounded font-bold">
                  Popular Choice
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Local Dishes Grid (Tawa Pulav, Usal Pav, Poha) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {localItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group"
            >
              {item.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] font-bold text-brand-green-forest flex items-center gap-1 shadow-xs">
                    <span className="veg-indicator" />
                    <span>LOCAL CLASSIC</span>
                  </div>
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-green transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-sm font-extrabold text-brand-green font-sans">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">
                  {item.marathiName}
                </p>
                <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
