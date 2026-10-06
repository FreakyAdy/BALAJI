import React from "react";
import Image from "next/image";
import { restaurantData } from "@/data/restaurant";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Navigation,
  Eye,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";

export const StorefrontSection: React.FC = () => {
  return (
    <section id="storefront" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeading
            badge="Local Recognition"
            marathiBadge="खराडीमधील ओळख"
            title="Find the Green Sign in Kharadi."
            subtitle="Look for our distinct white storefront, bold green BALAJI signage, striped awning, and glass frontage right on the Kharadi–Hadapsar Bypass Road next to Durga Mata Mandir."
          />
        </div>

        {/* Visual Architectural Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Architectural Storefront Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-brand-green/30 overflow-hidden shadow-card bg-white relative">
              {/* Awning Motif Banner Strip */}
              <div className="h-4 w-full bg-awning-stripes" />

              {/* Storefront Signage Simulation Bar */}
              <div className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border-2 border-brand-green bg-white flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-brand-green" />
                  </div>
                  <div>
                    <span className="font-black text-2xl tracking-widest text-brand-green font-sans leading-none block">
                      BALAJI
                    </span>
                    <span className="text-[10px] font-black tracking-widest text-brand-charcoal uppercase leading-none block mt-0.5">
                      PURE VEG • बालाजी शाकाहारी
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-xs font-bold text-gray-500 block">
                    Shop No. 1, Eknath Pathare Vasti
                  </span>
                  <span className="text-[11px] font-semibold text-brand-green block">
                    Next to Durga Mata Mandir
                  </span>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative aspect-[16/10] w-full bg-gray-100">
                <Image
                  src="/images/storefront.jpg"
                  alt="Balaji Pure Veg restaurant storefront in Kharadi Pune with green signage and white facade"
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Real Visual Cue Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-brand-green text-white text-xs font-bold px-2.5 py-1 rounded shadow-xs">
                    Original Storefront
                  </span>
                  <span className="bg-white/90 backdrop-blur-xs text-brand-charcoal text-xs font-semibold px-2.5 py-1 rounded shadow-xs">
                    Clean Glass Frontage
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span>Kharadi–Hadapsar Bypass Road, Pune 411014</span>
                  </div>
                  <p className="text-xs text-gray-200 mt-1">
                    Easy parking access on service lane • Landmark: Next to Durga Mata Mandir
                  </p>
                </div>
              </div>

              {/* Checkered Floor Accent Detail */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-brand-charcoal rounded-xs inline-block" />
                  <span>Patterned floor & comfortable family seating inside</span>
                </span>
                <span className="font-semibold text-brand-green">
                  Open Daily 9:00 AM – 11:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* Right: Storefront Checklist & Local Directions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-off-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-2xl text-brand-charcoal">
                How to Spot Us
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether you are commuting along the Kharadi–Hadapsar bypass or a resident in Eknath Pathare Vasti, here are the landmark cues:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Vivid Green BALAJI Signage:</strong> Prominently mounted on the bright white facade.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Durga Mata Mandir Landmark:</strong> Located directly adjacent to the temple on the bypass road.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Green Canopy & Potted Plants:</strong> Welcoming entrance with clean glass doors.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Indoor Casual Seating:</strong> Clean black-and-white patterned floors and family dining tables.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-200/80 flex flex-col sm:flex-row gap-3">
                <a
                  href={restaurantData.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS ON MAPS</span>
                </a>
                <a
                  href={restaurantData.phone.telUri}
                  className="btn-secondary flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL FOR PICKUP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
