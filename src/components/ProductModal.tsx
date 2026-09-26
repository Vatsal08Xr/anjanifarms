"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import { type Product } from "@/data/products";
import Link from "next/link";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsFullScreen(false);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
      // Prevent body scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    // Switch to fullscreen on scroll, but never switch back as requested
    if (scrollTop > 10 && !isFullScreen) {
      setIsFullScreen(true);
    }
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-charcoal/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ y: "100%", top: "5%" }}
            animate={{ y: "0%", top: isFullScreen ? "0%" : "5%" }}
            exit={{ y: "100%", top: "5%" }}
            transition={{ 
              y: { type: "spring", damping: 25, stiffness: 200 },
              top: { duration: 0.4, ease: "easeOut" }
            }}
            className="fixed bottom-0 left-0 right-0 z-[70] flex justify-center pointer-events-none"
          >
            <div 
              className={`w-full bg-offwhite shadow-2xl pointer-events-auto flex flex-col h-full mx-auto transition-[max-width,border-radius] duration-500 ${
                isFullScreen ? "rounded-none max-w-full" : "rounded-t-3xl sm:rounded-t-[40px] max-w-5xl"
              }`}
            >
              {/* Drag Handle & Close Button */}
              <div className="relative flex justify-center items-center p-4 border-b border-charcoal/10 bg-offwhite shrink-0 z-10 transition-all duration-500">
                {!isFullScreen && (
                  <div className="w-12 h-1.5 bg-charcoal/20 rounded-full absolute top-3" />
                )}
                <h2 className="font-serif text-lg text-forest font-semibold opacity-0 transition-opacity duration-300">
                  {isFullScreen ? product.name : ""}
                </h2>
                <button 
                  onClick={onClose}
                  className="absolute right-4 p-2 bg-charcoal/5 rounded-full hover:bg-charcoal/10 transition-colors"
                >
                  <X size={20} className="text-charcoal" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="overflow-y-auto flex-grow pb-32"
              >
                <div className="relative aspect-[4/3] md:aspect-[21/9] w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="px-6 md:px-12 py-8 max-w-4xl mx-auto">
                  <div className="mb-8">
                    <p className="text-earthy text-sm font-semibold tracking-widest uppercase mb-2">
                      {product.category}
                    </p>
                    <h1 className="font-serif text-3xl md:text-5xl text-forest mb-4">
                      {product.name}
                    </h1>
                    <p className="text-xl font-serif text-charcoal mb-6">
                      {product.price}
                    </p>
                    <p className="text-charcoal-light leading-relaxed text-lg">
                      {product.description}
                    </p>
                  </div>

                  {product.availableSizes.length > 0 && (
                    <div className="mb-10">
                      <h3 className="font-semibold text-charcoal mb-3">Available Sizes</h3>
                      <div className="flex flex-wrap gap-3">
                        {product.availableSizes.map(size => (
                          <span key={size} className="border border-charcoal/20 px-4 py-2 text-sm text-charcoal-light rounded-md">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <hr className="border-charcoal/10 my-10" />

                  {/* Health Benefits */}
                  {product.healthBenefits && product.healthBenefits.length > 0 && (
                    <div className="mb-10">
                      <h2 className="font-serif text-2xl text-forest mb-6">Health Benefits</h2>
                      <ul className="space-y-4">
                        {product.healthBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-earthy mt-1 shrink-0" />
                            <span className="text-charcoal-light leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Cultivation / How it's grown */}
                  {product.growingMethods && (
                    <div className="bg-softgreen p-8 md:p-10 rounded-2xl relative overflow-hidden group mb-10">
                      <div className="relative z-10">
                        <p className="text-earthy text-sm font-semibold tracking-widest uppercase mb-2">
                          Transparency
                        </p>
                        <h2 className="font-serif text-2xl text-forest mb-4">How It's Grown</h2>
                        <p className="text-charcoal-light leading-relaxed mb-8 max-w-2xl">
                          {product.growingMethods}
                        </p>
                        
                        <Link 
                          href="/cultivation"
                          onClick={onClose}
                          className="inline-flex items-center gap-2 bg-forest text-offwhite px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-forest-light transition-colors"
                        >
                          Watch Cultivation Videos
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Fixed Bottom CTA */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6 bg-offwhite border-t border-charcoal/10 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                  <div>
                    <p className="text-sm text-charcoal-light font-medium">Total</p>
                    <p className="font-serif text-xl font-semibold text-forest">{product.price}</p>
                  </div>
                  <button className="bg-forest text-offwhite px-8 md:px-12 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-forest-light transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
