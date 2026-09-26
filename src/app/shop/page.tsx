import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Shop | Anjani Farms",
  description: "Browse our premium selection of farm-fresh products including mangoes, mosambi, and spices.",
};

export default function Shop() {
  return (
    <div className="pt-32 pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-forest mb-6">
            Shop Anjani Farms
          </h1>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
            Our products are harvested in limited quantities to ensure the highest quality. 
            Browse our current offerings below.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-24 max-w-3xl mx-auto bg-softgreen p-12 text-center">
          <h2 className="font-serif text-3xl text-forest mb-4">Looking for bulk orders?</h2>
          <p className="text-charcoal-light mb-8">
            We supply select restaurants, boutique hotels, and specialty retailers.
          </p>
          <a href="/contact" className="inline-block border border-forest text-forest px-8 py-3 uppercase tracking-widest text-sm hover:bg-forest hover:text-offwhite transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
