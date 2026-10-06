import React from "react";

interface SectionHeadingProps {
  badge?: string;
  marathiBadge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark" | "green";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  marathiBadge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const isGreen = theme === "green";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {(badge || marathiBadge) && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
            isDark
              ? "bg-white/10 text-brand-green border border-brand-green/30"
              : isGreen
              ? "bg-brand-green-deep text-brand-green-light border border-white/20"
              : "bg-brand-green-light text-brand-green-forest border border-brand-green/20"
          }`}
        >
          {badge && <span>{badge}</span>}
          {badge && marathiBadge && <span className="opacity-50">•</span>}
          {marathiBadge && (
            <span className="font-normal font-sans tracking-normal">
              {marathiBadge}
            </span>
          )}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal tracking-tight leading-tight ${
          isDark || isGreen ? "text-white" : "text-brand-charcoal"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            isDark || isGreen ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
