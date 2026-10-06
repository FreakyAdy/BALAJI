"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BalajiLogo } from "@/components/brand/BalajiLogo";
import { restaurantData } from "@/data/restaurant";
import {
  Phone,
  Clock,
  MapPin,
  Menu as MenuIcon,
  X,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export const RestaurantHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Location & Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Bar with Real Business Signals */}
      <div className="bg-brand-charcoal text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-brand-green font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Pure Vegetarian Restaurant
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-brand-green" />
              Daily {restaurantData.hours.display}
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-brand-green" />
              Kharadi–Hadapsar Bypass Road
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={restaurantData.phone.telUri}
              className="flex items-center gap-1.5 text-gray-200 hover:text-brand-green font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-green" />
              <span>Call: {restaurantData.phone.display}</span>
            </a>
            <span className="text-gray-500">•</span>
            <span className="text-xs bg-brand-green/20 text-brand-green px-2 py-0.5 rounded font-medium">
              Google ★ 4.2
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-header py-3"
            : "bg-white border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-md">
            <BalajiLogo variant="header" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-brand-green font-bold"
                      : "text-brand-charcoal hover:text-brand-green"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={restaurantData.phone.telUri}
              className="btn-primary flex items-center gap-2 px-4 py-2 text-sm"
              aria-label={`Call Balaji Pure Veg at ${restaurantData.phone.display}`}
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>

            <a
              href={restaurantData.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 px-3.5 py-2 text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Directions</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={restaurantData.phone.telUri}
              className="p-2 rounded-lg bg-brand-green-light text-brand-green-forest hover:bg-brand-green hover:text-white transition-colors"
              aria-label="Call Restaurant"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-charcoal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-green"
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <div className="pb-2 border-b border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Shop No. 1, Kharadi Bypass</span>
                <span className="text-brand-green font-semibold">Open 9AM – 11:30PM</span>
              </div>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold ${
                      isActive
                        ? "bg-brand-green-light text-brand-green-forest font-bold"
                        : "text-brand-charcoal hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-brand-green" : "text-gray-400"}`} />
                  </a>
                );
              })}

              <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
                <a
                  href={restaurantData.phone.telUri}
                  className="btn-primary flex items-center justify-center gap-2 py-3 text-sm text-center font-bold"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL</span>
                </a>
                <a
                  href={restaurantData.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2 py-3 text-sm text-center font-bold"
                >
                  <MapPin className="w-4 h-4" />
                  <span>DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
