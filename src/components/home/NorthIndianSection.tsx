import React from "react";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Flame, Star, ArrowRight } from "lucide-react";

export const NorthIndianSection: React.FC = () => {
  const northIndianItems = menuItems.filter(
    (i) => i.category === "north-indian" || i.category === "breads-rice"
  );

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-charcoal via-[#122415] to-brand-charcoal text-white relative overflow-hidden border-b border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-deep/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Dark Theme */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeading
            theme="dark"
            badge="Evening Dinners & Family Meals"
            marathiBadge="उत्तर भारतीय व पनीर"
            title="Hearty North Indian Gravies & Paneer Delicacies."
            subtitle="Richly spiced gravies slow-simmered in copper handis, fresh soft malai paneer, double-tempered yellow dals, and piping hot tandoori rotis."
          />
        </div>

        {/* Feature Split Hero: Paneer Handi & Sev Bhaji Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/40">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/paneer-curry.jpg"
                  alt="Slow-cooked Paneer Handi with aromatic spices at Balaji Pure Veg Kharadi"
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 bg-brand-green/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/20">
                  <Flame className="w-3.5 h-3.5 text-amber-300" />
                  <span>KHARADI GUEST FAVOURITE</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                      Handi Special
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-emerald-300">
                      ₹195 • Serves 2
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">
                    Special Paneer Handi
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                    Succulent cubes of fresh malai paneer cooked in a deeply spiced semi-dry onion, tomato, and cashew nut gravy. Perfectly complemented with butter tandoori naan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Showcase: Khandeshi Sev Bhaji (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green px-2.5 py-1 rounded bg-brand-green/10">
                Maharashtra Special
              </span>
              <span className="text-base font-extrabold text-amber-400 font-sans">
                ₹140
              </span>
            </div>

            <h3 className="font-serif text-2xl text-white">
              Khandeshi Sev Bhaji
            </h3>
            <p className="text-xs text-brand-green-muted font-medium mt-0.5">
              शेव भाजी • Loved by Pune Locals
            </p>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-3">
              Crisp gram flour sev soaked in a fiery red coconut-onion rassa cooked with dry roasted spices. One of our most requested comfort food dishes.
            </p>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center justify-between">
                <span>Dal Tadka (Double Ghee Tadka)</span>
                <span className="font-bold text-white">₹130</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Veg Kadai Handi</span>
                <span className="font-bold text-white">₹170</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tandoori Butter Roti</span>
                <span className="font-bold text-white">₹25</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Garlic Butter Naan</span>
                <span className="font-bold text-white">₹60</span>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <a
                href="/menu#north-indian"
                className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-xs font-bold"
              >
                <span>VIEW ALL MAIN COURSE & BREADS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* North Indian Quick Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {northIndianItems.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brand-green/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                {item.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-brand-charcoal/90 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] font-bold text-brand-gold flex items-center gap-1 border border-white/10">
                      <span className="veg-indicator" />
                      <span>{item.tag || "North Indian"}</span>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {item.subCategory || "Main Course"}
                    </span>
                    <span className="text-sm font-bold text-brand-green font-sans">
                      ₹{item.price}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-brand-green transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    {item.marathiName}
                  </p>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-400">{item.portion}</span>
                <span className="text-emerald-400 font-semibold text-[11px]">Handi Simmered</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
