import React from "react";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, Heart } from "lucide-react";

export const DessertSection: React.FC = () => {
  const desserts = menuItems.filter((i) => i.category === "desserts");

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sweet Traditions"
          marathiBadge="मिष्टान्न व कुल्फी"
          title="A Sweet Finish to Every Meal."
          subtitle="Traditional cooling treats, royal rose falooda with sabja seeds, and slow-churned matka malai kulfi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {/* Card 1: Royal Rose Falooda */}
          <div className="bg-white rounded-2xl border border-amber-200/60 overflow-hidden shadow-card group">
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src="/images/falooda.jpg"
                alt="Royal Rose Falooda with ice cream and pistachios at Balaji Pure Veg"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                POPULAR CHOICE
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-brand-charcoal">
                    Royal Rose Falooda
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    रॉयल गुलाब फालुदा
                  </p>
                </div>
                <div className="text-xl font-black text-brand-green font-sans">
                  ₹110
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                Layered tall glass with rose syrup, cooling sabja seeds, soft vermicelli noodles, chilled milk, and a scoop of rich vanilla ice cream topped with dry fruits.
              </p>
            </div>
          </div>

          {/* Card 2: Special Matka Malai Kulfi */}
          <div className="bg-white rounded-2xl border border-amber-200/60 overflow-hidden shadow-card group">
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src="/images/kulfi.jpg"
                alt="Matka Malai Kulfi in traditional earthen pot at Balaji Pure Veg"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-brand-green text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                TRADITIONAL POT
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-brand-charcoal">
                    Special Matka Malai Kulfi
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    मटका मलाई कुल्फी
                  </p>
                </div>
                <div className="text-xl font-black text-brand-green font-sans">
                  ₹70
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                Dense, slow-cooked whole milk kulfi infused with green cardamom pods and kesar saffron, served chilled in traditional authentic clay pots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
