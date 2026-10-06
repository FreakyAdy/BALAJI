import React from "react";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export const SouthIndianSection: React.FC = () => {
  const dosas = menuItems.filter((i) => i.category === "south-indian");

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          <div className="lg:col-span-8">
            <SectionHeading
              align="left"
              badge="Pure Vegetarian Tradition"
              marathiBadge="दक्षिण भारतीय खास"
              title="Crispy Dosas, Steamed Idlis & Homestyle Sambar."
              subtitle="Fermented rice and lentil batter roasted golden on the griddle, served with our signature piping hot vegetable sambar and freshly ground coconut chutney."
            />
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-4 rounded-xl bg-brand-green-light/70 border border-brand-green/20 text-xs text-brand-green-forest space-y-1.5 w-full sm:w-auto">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-brand-green" />
                <span>The Dosa Corner</span>
              </div>
              <p className="text-gray-600">
                Signature crispy dosas and savory uttappams cooked fresh to order on the tawa.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Hero Banner: Large Masala Dosa Focus */}
        <div className="bg-brand-off-white rounded-2xl border border-gray-200 overflow-hidden shadow-card mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[400px]">
              <Image
                src="/images/dosa.jpg"
                alt="Crispy Golden Masala Dosa served at Balaji Pure Veg"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                FRESH ON THE TAWA
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                  South Indian Classic
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal mt-1">
                  Crispy Masala Dosa & Sambar
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  Made using traditionally fermented rice and urad dal batter roasted thin and crispy on high heat. Layered with mildly spiced mashed potato bhaji, paired with warm sambar and cooling fresh coconut chutney.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Pure Vegetarian Batter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Fresh Coconut Chutney</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Rich Vegetable Sambar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Amul Butter Options</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500">Starting from</span>
                  <div className="text-2xl font-black text-brand-green font-sans">
                    ₹95 – ₹120
                  </div>
                </div>
                <a
                  href="/menu#south-indian"
                  className="btn-primary px-5 py-2.5 text-xs font-bold flex items-center gap-2"
                >
                  <span>EXPLORE ALL DOSAS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Distinct Dosa & Uttappam Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {dosas.slice(0, 8).map((dosa) => (
            <div
              key={dosa.id}
              className="rounded-xl overflow-hidden bg-white border border-gray-200/90 shadow-soft hover:shadow-card hover:border-brand-green/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {dosa.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={dosa.image}
                      alt={dosa.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] font-bold text-brand-green-forest flex items-center gap-1 shadow-xs">
                      <span className="veg-indicator" />
                      <span>{dosa.tag || "PURE VEG"}</span>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {dosa.subCategory || "Dosa"}
                    </span>
                    <span className="text-sm font-extrabold text-brand-green font-sans">
                      ₹{dosa.price}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-green transition-colors">
                    {dosa.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-medium">
                    {dosa.marathiName}
                  </p>

                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {dosa.description}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span className="text-[11px] font-medium">{dosa.portion}</span>
                <span className="text-[11px] font-semibold text-brand-green">Hot on Tawa</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
