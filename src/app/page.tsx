"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Intro Animation */}
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[100] bg-offwhite flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
          onAnimationComplete={() => setShowIntro(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-[0.2em] text-forest">
              ANJANI FARMS
            </h1>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80"
            alt="Anjani Farms landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: showIntro ? 2 : 0 }}
          >
            <p className="text-offwhite/90 text-xs md:text-base font-semibold tracking-[0.3em] uppercase mb-4 md:mb-6">
              Anjani Farms
            </p>
            <h1 className="font-serif text-3xl md:text-7xl lg:text-8xl text-offwhite mb-6 md:mb-8 leading-tight">
              From our farm. <br />
              <span className="italic font-light">To your home.</span>
            </h1>
            <p className="text-offwhite/90 max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-xl font-light px-4">
              Premium, carefully cultivated produce brought directly from our estate to your table.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto px-4 sm:px-0">
              <Link
                href="/shop"
                className="bg-offwhite text-forest px-8 py-3.5 md:py-4 rounded-none font-medium tracking-widest uppercase text-xs md:text-sm hover:bg-forest hover:text-offwhite transition-colors w-full sm:w-auto min-w-[200px]"
              >
                Shop Now
              </Link>
              <Link
                href="/our-farm"
                className="bg-transparent border border-offwhite text-offwhite px-8 py-3.5 md:py-4 rounded-none font-medium tracking-widest uppercase text-xs md:text-sm hover:bg-offwhite/10 transition-colors w-full sm:w-auto min-w-[200px]"
              >
                Explore Our Farm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-24 bg-offwhite">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-forest mb-3 md:mb-4">
              From Our Farm
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-sm md:text-base">
              Discover our carefully curated selection of seasonal harvests and premium estate products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-8 md:gap-y-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/shop"
              className="inline-block border-b border-charcoal pb-1 uppercase tracking-widest text-sm hover:text-forest hover:border-forest transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Anjani Section */}
      <section className="py-12 md:py-24 bg-softgreen">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-xl md:rounded-none">
              <Image
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Fresh produce from the farm"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-earthy text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4">
                The Anjani Difference
              </p>
              <h2 className="font-serif text-2xl md:text-5xl text-forest mb-6 md:mb-8">
                Carefully Grown, <br />Freshly Harvested.
              </h2>
              
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="font-serif text-lg md:text-2xl mb-1 md:mb-2">Farm-Direct</h3>
                  <p className="text-charcoal-light text-sm md:text-base">
                    We eliminate the middlemen. Every product you receive comes directly from our estate to ensure maximum freshness and quality.
                  </p>
                </div>
                <hr className="border-forest/20" />
                <div>
                  <h3 className="font-serif text-lg md:text-2xl mb-1 md:mb-2">Carefully Cultivated</h3>
                  <p className="text-charcoal-light text-sm md:text-base">
                    Our farming practices prioritize the health of the soil and the plant, resulting in superior taste and nutritional value.
                  </p>
                </div>
                <hr className="border-forest/20" />
                <div>
                  <h3 className="font-serif text-lg md:text-2xl mb-1 md:mb-2">Quality Focused</h3>
                  <p className="text-charcoal-light text-sm md:text-base">
                    We harvest only when the time is perfect. Our limited product range allows us to focus entirely on producing the best possible crop.
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-12">
                <Link
                  href="/why-anjani"
                  className="inline-block border-b border-charcoal pb-1 uppercase tracking-widest text-xs md:text-sm hover:text-forest hover:border-forest transition-colors"
                >
                  Learn More About Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-offwhite">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <p className="text-earthy text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 md:mb-12">
            From Our Customers
          </p>
          <div className="max-w-4xl mx-auto">
            <blockquote className="font-serif text-xl md:text-4xl text-forest leading-snug mb-6 md:mb-8">
              "The quality of the mangoes from Anjani Farms is simply unmatched. It's rare to find such authentic, farm-fresh produce delivered with such care."
            </blockquote>
            <cite className="not-italic text-xs md:text-sm tracking-widest uppercase text-charcoal-light">
              — Sarah M., Customer since 2023
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-forest text-center px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-5xl text-offwhite mb-6 md:mb-8">
            Bring a little bit of Anjani Farms home.
          </h2>
          <Link
            href="/shop"
            className="inline-block bg-offwhite text-forest px-8 md:px-10 py-3 md:py-4 font-medium tracking-widest uppercase text-sm hover:bg-softgreen transition-colors"
          >
            Shop Our Products
          </Link>
        </div>
      </section>
    </>
  );
}
