"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, Camera, MapPin, Eye } from "lucide-react";

export const GalleryGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-12 sm:py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Restaurant Visuals"
          marathiBadge="छायाचित्रे"
          title="Inside Balaji Pure Veg"
          subtitle="Explore authentic photography of our Kharadi storefront, comfortable indoor dining tables, and freshly prepared vegetarian food."
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-6">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-brand-green text-white shadow-xs"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-soft hover:shadow-card hover:border-brand-green/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-white font-semibold flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to view</span>
                  </span>
                </div>

                {img.badge && (
                  <div className="absolute top-3 left-3 bg-brand-charcoal/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                    {img.badge}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-green transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="700px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-brand-charcoal">
                    {selectedImage.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="p-1 rounded-full text-gray-400 hover:text-gray-700 text-sm font-bold"
                  >
                    ✕ Close
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>Balaji Pure Veg • Kharadi Pune</span>
                  {selectedImage.badge && (
                    <span className="font-bold text-brand-green">
                      {selectedImage.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
