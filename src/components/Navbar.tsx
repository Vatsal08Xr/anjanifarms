"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Our Farm", href: "/our-farm" },
  { name: "Why Anjani", href: "/why-anjani" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isDarkHeader = pathname === "/" || pathname === "/our-farm";
  const useLightText = isDarkHeader && !scrolled && !isOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-offwhite/90 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="z-50">
            <h1 className={cn("font-serif text-2xl font-bold tracking-wider transition-colors", useLightText ? "text-offwhite" : "text-forest")}>
              ANJANI FARMS
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors hover:opacity-100",
                  useLightText 
                    ? pathname === link.href ? "text-offwhite font-semibold" : "text-offwhite/80 hover:text-offwhite"
                    : pathname === link.href ? "text-forest font-semibold" : "text-charcoal-light hover:text-forest"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/shop"
              className={cn(
                "flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors",
                useLightText 
                  ? "bg-offwhite text-forest hover:bg-offwhite/90" 
                  : "bg-forest text-offwhite hover:bg-forest-light"
              )}
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn("md:hidden z-50 transition-colors", useLightText ? "text-offwhite" : "text-forest")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-offwhite flex flex-col justify-center items-center h-screen"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-serif text-4xl transition-colors",
                    pathname === link.href ? "text-forest" : "text-charcoal"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/shop"
                className="mt-8 flex items-center gap-2 bg-forest text-offwhite px-8 py-3 rounded-full text-lg hover:bg-forest-light transition-colors"
              >
                Order Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
