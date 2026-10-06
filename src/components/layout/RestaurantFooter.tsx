import React from "react";
import { BalajiLogo } from "@/components/brand/BalajiLogo";
import { restaurantData } from "@/data/restaurant";
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Heart,
  Navigation,
} from "lucide-react";

export const RestaurantFooter: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-14 pb-12 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <BalajiLogo variant="footer" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Everyday Indian vegetarian dining in Kharadi, Pune. Serving freshly prepared South Indian breakfasts, hearty North Indian gravies, wok-tossed Indo-Chinese, snacks, and traditional desserts.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>100% PURE VEGETARIAN KITCHEN</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-4 font-sans">
              Explore Balaji
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Food Menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>About Our Kitchen</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Photo Gallery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Location & Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Timings */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-4 font-sans">
              Services & Dining
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {restaurantData.attributes.services.map((svc) => (
                <li key={svc} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-gray-400">
              <span className="text-gray-300 font-medium">Approx Cost:</span> {restaurantData.attributes.costForTwoFormatted}
            </div>
          </div>

          {/* Col 4: Contact & Exact Location */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-4 font-sans">
              Visit Us in Kharadi
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <address className="not-italic text-xs leading-relaxed text-gray-300">
                {restaurantData.address.shopNo}, {restaurantData.address.srNo},<br />
                {restaurantData.address.road},<br />
                {restaurantData.address.landmark},<br />
                {restaurantData.address.locality}, {restaurantData.address.city}, {restaurantData.address.pincode}
              </address>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-brand-green shrink-0" />
              <a
                href={restaurantData.phone.telUri}
                className="text-white hover:text-brand-green font-semibold transition-colors"
              >
                {restaurantData.phone.display}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-gray-300">
              <Clock className="w-4 h-4 text-brand-green shrink-0" />
              <span>{restaurantData.hours.display} (All 7 Days)</span>
            </div>

            <div className="pt-2">
              <a
                href={restaurantData.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-green hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {restaurantData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400">
            <span>Prepared with fresh ingredients for Kharadi, Pune</span>
            <Heart className="w-3.5 h-3.5 text-brand-green fill-brand-green inline" />
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Google: ★ {restaurantData.ratings.google.rating} ({restaurantData.ratings.google.reviewCount} reviews)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
