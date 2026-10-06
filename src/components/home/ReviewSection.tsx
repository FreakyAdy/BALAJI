import React from "react";
import { reviewsData } from "@/data/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Star,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export const ReviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credible Public Feedback"
          marathiBadge="ग्राहकांचे अनुभव"
          title="Rated on Google"
          subtitle="Real dining scores and verified community feedback from local diners across Kharadi and Pune."
        />

        {/* Transparent Platform Breakdown Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
          {/* Card 1: Google Reviews (Primary) */}
          <div className="p-6 rounded-2xl bg-brand-off-white border-2 border-brand-green/30 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                  Google Maps
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Verified Local
                </span>
              </div>

              <div className="flex items-baseline gap-3 my-3">
                <span className="text-4xl sm:text-5xl font-black text-brand-charcoal font-sans">
                  {reviewsData.google.rating}
                </span>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(reviewsData.google.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-amber-100 text-amber-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-semibold mt-0.5">
                    out of 5.0
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                Based on approximately {reviewsData.google.reviewCount} customer reviews submitted on Google Maps for Balaji Pure Veg Kharadi.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <a
                href={reviewsData.google.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1.5"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Zomato Ratings (Stored Separately) */}
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Zomato
                </span>
                <span className="text-xs text-gray-400">Separate Metrics</span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="p-3 rounded-xl bg-white border border-gray-200">
                  <span className="text-[11px] font-bold text-gray-400 uppercase block">
                    Dining Score
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-2xl font-black text-brand-charcoal">
                      {reviewsData.zomato.diningRating}
                    </span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-gray-200">
                  <span className="text-[11px] font-bold text-gray-400 uppercase block">
                    Delivery Score
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-2xl font-black text-brand-charcoal">
                      {reviewsData.zomato.deliveryRating}
                    </span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                Platforms show distinct dining versus delivery scores. We display them transparently rather than blending into a misleading number.
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-gray-200 text-xs text-gray-400">
              Listing verified on Zomato Pune
            </div>
          </div>

          {/* Card 3: Sentiment Overview (Positive + Constructive) */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-soft flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Public Review Themes
              </span>
              <p className="text-xs text-gray-500 mt-1 mb-3">
                Key patterns from local reviews:
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Consistent Taste:</strong> Popular for Sev Bhaji, Paneer & Dosas.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Generous Value:</strong> Honest portions at ~₹400 for two.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Clean Ambience:</strong> Hygienic tables & friendly service.</span>
                </div>
                <div className="flex items-start gap-2 text-amber-800 bg-amber-50/80 p-2 rounded-lg border border-amber-200">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Helpful Note:</strong> Peak evening takeaway orders can take extra time; calling ahead is recommended.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curated Customer Quotes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviewsData.curatedFeedback.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-xl bg-brand-off-white border border-gray-200/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-gray-600 border border-gray-200">
                    {rev.source}
                  </span>
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic line-clamp-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-200/80">
                <span className="text-xs font-bold text-brand-charcoal block">
                  {rev.author}
                </span>
                <span className="text-[11px] text-gray-400 block">
                  {rev.date}
                </span>
                {rev.highlightDish && (
                  <span className="text-[10px] text-brand-green font-semibold mt-1 block">
                    Dish: {rev.highlightDish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
