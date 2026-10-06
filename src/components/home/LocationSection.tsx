import React from "react";
import { restaurantData } from "@/data/restaurant";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Car,
  Compass,
} from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-brand-off-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Kharadi, Pune Location"
          marathiBadge="पत्ता व संपर्क"
          title="FIND BALAJI"
          subtitle="Easily accessible on the Kharadi–Hadapsar Bypass Road right beside Durga Mata Mandir in Eknath Pathare Vasti."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          {/* Left Column: Address, Phone, Hours, Actions (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-card space-y-6">
            {/* Address */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Exact Physical Address</span>
              </span>
              <address className="not-italic text-sm sm:text-base font-medium text-brand-charcoal leading-relaxed">
                <strong>{restaurantData.address.shopNo}, {restaurantData.address.srNo}</strong><br />
                {restaurantData.address.road}<br />
                {restaurantData.address.landmark}<br />
                {restaurantData.address.locality}, {restaurantData.address.city}, {restaurantData.address.state} {restaurantData.address.pincode}
              </address>
              <p className="text-xs text-gray-500 pt-1">
                Landmark: Directly next to Durga Mata Mandir on the bypass service corridor.
              </p>
            </div>

            {/* Operating Hours */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Operating Timings</span>
              </span>
              <div className="text-sm font-bold text-brand-charcoal">
                {restaurantData.hours.display}
              </div>
              <p className="text-xs text-gray-500">
                {restaurantData.hours.days}
              </p>

              {/* Meal Slots breakdown */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-gray-600">
                <div className="p-2 rounded bg-gray-50">
                  <span className="font-semibold block text-brand-charcoal">Breakfast</span>
                  <span>{restaurantData.hours.mealSlots.breakfast}</span>
                </div>
                <div className="p-2 rounded bg-gray-50">
                  <span className="font-semibold block text-brand-charcoal">Lunch</span>
                  <span>{restaurantData.hours.mealSlots.lunch}</span>
                </div>
                <div className="p-2 rounded bg-gray-50">
                  <span className="font-semibold block text-brand-charcoal">Evening Snacks</span>
                  <span>{restaurantData.hours.mealSlots.snacks}</span>
                </div>
                <div className="p-2 rounded bg-gray-50">
                  <span className="font-semibold block text-brand-charcoal">Dinner</span>
                  <span>{restaurantData.hours.mealSlots.dinner}</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Phone */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                <span>Phone & Counter Orders</span>
              </span>
              <div>
                <a
                  href={restaurantData.phone.telUri}
                  className="text-xl sm:text-2xl font-black text-brand-charcoal hover:text-brand-green font-sans transition-colors block"
                >
                  {restaurantData.phone.display}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">
                  Call for takeout packaging, table inquiries, and directions.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <a
                href={restaurantData.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={restaurantData.phone.telUri}
                className="btn-secondary flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed + Arrival Guidance (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-card bg-white">
              <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                  <span className="text-xs font-bold text-brand-charcoal">
                    Google Maps • Balaji Pure Veg Kharadi
                  </span>
                </div>
                <a
                  href={restaurantData.address.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
                >
                  <span>Open in App</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Responsive Map Embed */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11]">
                <iframe
                  title="Balaji Pure Veg Kharadi Google Map Location"
                  src={restaurantData.address.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-white text-xs text-gray-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Two-wheeler & four-wheeler roadside parking available</span>
                </div>
                <span className="text-brand-green font-semibold">
                  Pin: 411014
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
