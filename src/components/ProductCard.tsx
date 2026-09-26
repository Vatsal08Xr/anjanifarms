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
        <div className="relative aspect-[4/5] overflow-hidden bg-lightbrown mb-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!product.available && (
            <div className="absolute top-4 left-4 bg-offwhite/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider z-10">
              Out of Stock
            </div>
          )}
          
          {product.available && (
            <div 
              className="absolute top-4 right-4 z-10 transition-transform duration-300 transform translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100" 
              onClick={(e) => e.stopPropagation()}
            >
              {cartItem ? (
                <div className="flex items-center border border-charcoal/20 bg-white/95 rounded-full overflow-hidden shadow-md h-9">
                  <button 
                    onClick={() => updateQuantity(product.id, cartItem.quantity - 1)} 
                    className="w-8 h-full flex items-center justify-center text-charcoal hover:bg-charcoal/5 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-xs font-medium text-charcoal">
                    {cartItem.quantity}
                  </span>
                  <button 
                    onClick={() => updateQuantity(product.id, cartItem.quantity + 1)} 
                    className="w-8 h-full flex items-center justify-center text-charcoal hover:bg-charcoal/5 transition-colors"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => addToCart(product, 1)} 
                  className="w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all text-charcoal hover:scale-105"
                  aria-label="Add to cart"
                >
                  <Plus size={18} />
                </button>
              )}
            </div>
          )}
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-earthy uppercase tracking-widest mb-2">
            {product.category}
          </p>
          <h3 className="font-serif text-xl mb-2 group-hover:text-forest transition-colors">
            {product.name}
          </h3>
          <p className="text-charcoal-light text-sm mb-4 line-clamp-2">
            {product.shortDescription}
          </p>
          <p className="font-serif text-lg mb-4">{product.price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="inline-block border border-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-forest hover:border-forest hover:text-offwhite transition-colors"
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
