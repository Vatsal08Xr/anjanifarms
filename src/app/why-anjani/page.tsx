import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Why Anjani | Anjani Farms",
  description: "Learn what sets Anjani Farms apart. Our commitment to quality, transparency, and farm-direct freshness.",
};

export default function WhyAnjani() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        <header className="text-center mb-10 md:mb-20">
          <p className="text-earthy text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4">
            Our Standards
          </p>
          <h1 className="font-serif text-3xl md:text-6xl text-forest mb-3 md:mb-6">
            Why Choose Anjani Farms?
          </h1>
          <p className="text-charcoal-light max-w-2xl mx-auto text-sm md:text-lg">
            We don't just grow food. We cultivate quality. 
            Here is what makes our approach different from conventional supply chains.
          </p>
        </header>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-24 mb-12 md:mb-24">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <h2 className="font-serif text-xl md:text-3xl text-forest mb-3 md:mb-6">Zero Middlemen</h2>
            <p className="text-charcoal-light leading-relaxed text-sm md:text-base mb-3 md:mb-6">
              The traditional agricultural supply chain is long, complicated, and degrades quality. Produce sits in warehouses and travels through multiple distributors before reaching you.
            </p>
            <p className="text-charcoal-light leading-relaxed text-sm md:text-base mb-4 md:mb-8">
              At Anjani Farms, we handle the entire process. When you order from us, you are ordering directly from the estate where the product was grown.
            </p>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-2 md:gap-3 text-forest text-sm md:text-base">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Guaranteed freshness</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-forest text-sm md:text-base">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Fairer pricing for premium quality</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-forest text-sm md:text-base">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Direct accountability</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] bg-lightbrown rounded-xl md:rounded-none overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Fresh produce"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-24 mb-12 md:mb-24">
          <div className="relative aspect-[4/3] bg-lightbrown rounded-xl md:rounded-none overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Quality control"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-xl md:text-3xl text-forest mb-3 md:mb-6">Uncompromising Quality</h2>
            <p className="text-charcoal-light leading-relaxed text-sm md:text-base mb-3 md:mb-6">
              Because we focus on a small selection of specialized crops, we can dedicate obsessive attention to their development. 
            </p>
            <p className="text-charcoal-light leading-relaxed text-sm md:text-base mb-4 md:mb-8">
              We do not mass-produce. We selectively harvest. Only the best fruit and spices make it into our packaging. The rest is returned to the soil as compost.
            </p>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-2 md:gap-3 text-forest text-sm md:text-base">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Carefully selected varieties</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-forest text-sm md:text-base">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Peak-ripeness harvesting</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-forest text-sm md:text-base">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Strict visual and taste standards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Philosophy Block */}
        <div className="bg-forest text-offwhite p-8 md:p-24 text-center rounded-xl md:rounded-none">
          <h2 className="font-serif text-xl md:text-4xl mb-6 md:mb-8 leading-snug max-w-3xl mx-auto">
            "We believe that true luxury in food comes from simplicity, traceability, and uncompromising care."
          </h2>
          <Link
            href="/shop"
            className="inline-block border border-offwhite px-6 md:px-8 py-2.5 md:py-3 uppercase tracking-widest text-xs md:text-sm hover:bg-offwhite hover:text-forest transition-colors"
          >
            Experience the Quality
          </Link>
        </div>
      </div>
    </div>
  );
}
