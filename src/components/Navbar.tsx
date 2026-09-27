"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Our Farm", href: "/our-farm" },
  { name: "Why Anjani", href: "/why-anjani" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { user } = useAuth();

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
            ? "bg-offwhite/90 backdrop-blur-md py-3 md:py-4 shadow-sm"
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
          {/* Mobile: Hamburger left */}
          <div className="md:hidden flex items-center z-50">
            <button
              className={cn("transition-colors p-1", useLightText ? "text-offwhite" : "text-forest")}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Logo - centered on mobile, left on desktop */}
          <Link href="/" className="z-50 md:order-first">
            <h1 className={cn(
              "font-serif text-lg md:text-2xl font-bold tracking-wider transition-colors",
              useLightText ? "text-offwhite" : "text-forest"
            )}>
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

          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={user ? "/account" : "/login"}
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                useLightText 
                  ? "bg-offwhite/10 hover:bg-offwhite/20 text-offwhite" 
                  : "bg-forest/5 hover:bg-forest/10 text-forest"
              )}
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            
            <Link
              href="/cart"
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                useLightText 
                  ? "bg-offwhite/10 hover:bg-offwhite/20 text-offwhite" 
                  : "bg-forest/5 hover:bg-forest/10 text-forest"
              )}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-earthy text-offwhite text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile: User & Cart icons right */}
          <div className="md:hidden flex items-center gap-3 z-50">
            <Link
              href={user ? "/account" : "/login"}
              className={cn("relative transition-colors p-1", useLightText ? "text-offwhite" : "text-forest")}
            >
              <User size={22} />
            </Link>
            <Link
              href="/cart"
              className={cn("relative transition-colors p-1", useLightText ? "text-offwhite" : "text-forest")}
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-earthy text-offwhite text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
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
                    "font-serif text-3xl transition-colors",
                    pathname === link.href ? "text-forest" : "text-charcoal"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
