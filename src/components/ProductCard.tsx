"use client";

import { useState } from "react";
import Image from "next/image";
import { type Product } from "@/data/products";
import ProductModal from "./ProductModal";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, addToCart, updateQuantity } = useCart();
  
  const cartItem = cart.find(item => item.product.id === product.id);

  return (
    <>
      <div 
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image — shorter aspect ratio on mobile for a compact 2-col grid */}
        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-lightbrown mb-3 md:mb-6 rounded-xl md:rounded-none">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!product.available && (
            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-offwhite/90 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-semibold uppercase tracking-wider z-10 rounded-md">
              Out of Stock
            </div>
          )}
          
          {product.available && (
            <div 
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 transition-transform duration-300 transform translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100" 
              onClick={(e) => e.stopPropagation()}
            >
              {cartItem ? (
                <div className="flex items-center border border-charcoal/20 bg-white/95 rounded-full overflow-hidden shadow-md h-8 md:h-9">
                  <button 
                    onClick={() => updateQuantity(product.id, cartItem.quantity - 1)} 
                    className="w-7 md:w-8 h-full flex items-center justify-center text-charcoal hover:bg-charcoal/5 transition-colors text-sm"
                  >
                    -
                  </button>
                  <span className="w-5 md:w-6 text-center text-xs font-medium text-charcoal">
                    {cartItem.quantity}
                  </span>
                  <button 
                    onClick={() => updateQuantity(product.id, cartItem.quantity + 1)} 
                    className="w-7 md:w-8 h-full flex items-center justify-center text-charcoal hover:bg-charcoal/5 transition-colors text-sm"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => addToCart(product, 1)} 
                  className="w-8 h-8 md:w-9 md:h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all text-charcoal hover:scale-105"
                  aria-label="Add to cart"
                >
                  <Plus size={16} className="md:hidden" />
                  <Plus size={18} className="hidden md:block" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="text-left md:text-center px-0.5 md:px-0">
          <p className="text-[10px] md:text-xs font-semibold text-earthy uppercase tracking-widest mb-1 md:mb-2">
            {product.category}
          </p>
          <h3 className="font-serif text-sm md:text-xl mb-1 md:mb-2 group-hover:text-forest transition-colors leading-tight line-clamp-2">
            {product.name}
          </h3>
          {/* Hide description on mobile for cleaner cards */}
          <p className="hidden md:block text-charcoal-light text-sm mb-4 line-clamp-2">
            {product.shortDescription}
          </p>
          <p className="font-serif text-base md:text-lg mb-2 md:mb-4 text-forest">{product.price}</p>
          
          {/* "View Details" only on desktop; on mobile, tapping the card opens the modal */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="hidden md:inline-block border border-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-forest hover:border-forest hover:text-offwhite transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
      
      <ProductModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
