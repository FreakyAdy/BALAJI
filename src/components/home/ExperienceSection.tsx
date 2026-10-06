import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  Users,
  Sunrise,
  ShoppingBag,
  Truck,
  Armchair,
  Sparkles,
} from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "100% Pure Vegetarian",
      marathi: "शुध्द शाकाहारी",
      description:
        "A dedicated vegetarian kitchen with strict standards for cleanliness, separate prep stations, and fresh daily ingredients.",
      icon: ShieldCheck,
    },
    {
      title: "Family Friendly Seating",
      marathi: "कौटुंबिक बैठक व्यवस्था",
      description:
        "Comfortable dining tables arranged for families, couples, and neighborhood groups having lunch or dinner.",
      icon: Users,
    },
    {
      title: "All-Day Dining (9 AM – 11:30 PM)",
      marathi: "सकाळ ते रात्री",
      description:
        "Seamless service from morning South Indian breakfast through evening snacks to late-night Punjabi and Maharashtrian dinners.",
      icon: Sunrise,
    },
    {
      title: "Indoor Casual Ambience",
      marathi: "स्वच्छ व शांत वातावरण",
      description:
        "Hygienic interiors featuring signature black-and-white patterned floors, clean glass frontage, and quick attentive table service.",
      icon: Armchair,
    },
    {
      title: "Express Takeaway Counter",
      marathi: "पार्सल सुविधा",
      description:
        "Pick up hot, neatly packed curries, rotis, and thalis on your way home with minimal waiting time.",
      icon: ShoppingBag,
    },
    {
      title: "Local Home Delivery",
      marathi: "होम डिलिव्हरी",
      description:
        "Warm meals delivered directly to homes and offices across Kharadi and surrounding bypass localities.",
      icon: Truck,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-off-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Casual Dining Atmosphere"
          marathiBadge="भोजनाचा अनुभव"
          title="MADE FOR EVERYDAY MEALS"
          subtitle="Whether dining in with your family, catching a quick dosa before work, or taking home dinner, Balaji is built for everyday comfort."
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-card border border-gray-200/90 shadow-soft hover:shadow-card hover:border-brand-green/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-brand-charcoal">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-brand-green font-medium block mt-0.5">
                    {exp.marathi}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2.5">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span>Verified Service</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interior Atmosphere Highlight Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-card p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Cleanliness & Hygiene
            </span>
            <h3 className="font-serif text-2xl text-brand-charcoal">
              Freshly Prepared in an Open, Hygienic Kitchen
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We take pride in maintaining high standards of food hygiene, fresh cutting vegetables, pure dairy products, and spotless dining tables.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a href="tel:+919322141408" className="btn-primary px-6 py-3 text-xs font-bold">
              Call: +91 93221 41408
            </a>
            <a href="/contact" className="btn-secondary px-5 py-3 text-xs font-bold">
              View Dining Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
