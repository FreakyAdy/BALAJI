import React from "react";

interface BalajiLogoProps {
  variant?: "header" | "mobile" | "footer" | "storefront" | "badge";
  className?: string;
  showSubtitle?: boolean;
}

export const BalajiLogo: React.FC<BalajiLogoProps> = ({
  variant = "header",
  className = "",
  showSubtitle = true,
}) => {
  const isFooter = variant === "footer";
  const isMobile = variant === "mobile";
  const isStorefront = variant === "storefront";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Authentic Green Pure Veg Brand Mark */}
      <div
        className={`relative flex items-center justify-center shrink-0 border-2 rounded ${
          isFooter
            ? "border-brand-green bg-brand-charcoal text-brand-green"
            : "border-brand-green bg-white text-brand-green shadow-xs"
        } ${isMobile ? "w-7 h-7" : "w-9 h-9"}`}
        aria-label="Pure Vegetarian Green Symbol"
        title="100% Pure Vegetarian"
      >
        <span
          className={`rounded-full bg-brand-green ${
            isMobile ? "w-3.5 h-3.5" : "w-4.5 h-4.5"
          }`}
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-black tracking-wider uppercase font-sans ${
              isFooter
                ? "text-white"
                : isStorefront
                ? "text-brand-green-forest"
                : "text-brand-green"
            } ${
              isMobile
                ? "text-lg tracking-wide leading-none"
                : isStorefront
                ? "text-3xl tracking-widest leading-tight"
                : "text-2xl leading-none"
            }`}
          >
            BALAJI
          </span>
          <span
            className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
              isFooter
                ? "bg-brand-green/20 text-brand-green"
                : "bg-brand-green-light text-brand-green-forest"
            }`}
          >
            Kharadi
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`font-bold tracking-widest uppercase font-sans ${
                isFooter
                  ? "text-gray-300"
                  : isStorefront
                  ? "text-brand-charcoal"
                  : "text-brand-charcoal"
              } ${isMobile ? "text-[10px]" : "text-[11px]"} leading-none`}
            >
              PURE VEG
            </span>
            <span className="text-[10px] text-brand-green font-semibold">
              •
            </span>
            <span
              className={`font-medium ${
                isFooter ? "text-gray-400" : "text-gray-500"
              } ${isMobile ? "text-[9px]" : "text-[10px]"} leading-none`}
            >
              बालाजी शाकाहारी
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
