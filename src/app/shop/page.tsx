import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Shop | Anjani Farms",
  description: "Browse our premium selection of farm-fresh products including mangoes, mosambi, and spices.",
};

export default function Shop() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        <header className="text-center mb-8 md:mb-16">
          <h1 className="font-serif text-3xl md:text-6xl text-forest mb-3 md:mb-6">
            Shop Anjani Farms
          </h1>
          <p className="text-charcoal-light max-w-2xl mx-auto text-sm md:text-lg">
            Our products are harvested in limited quantities to ensure the highest quality. 
            Browse our current offerings below.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-8 md:gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 md:mt-24 max-w-3xl mx-auto bg-softgreen p-6 md:p-12 text-center rounded-xl md:rounded-none">
          <h2 className="font-serif text-xl md:text-3xl text-forest mb-3 md:mb-4">Looking for bulk orders?</h2>
          <p className="text-charcoal-light text-sm md:text-base mb-6 md:mb-8">
            We supply select restaurants, boutique hotels, and specialty retailers.
          </p>
          <a href="/contact" className="inline-block border border-forest text-forest px-6 md:px-8 py-2.5 md:py-3 uppercase tracking-widest text-xs md:text-sm hover:bg-forest hover:text-offwhite transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
