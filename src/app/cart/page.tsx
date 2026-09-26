"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, cartCount } = useCart();

  return (
    <div className="pt-32 pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h1 className="font-serif text-4xl md:text-5xl text-forest mb-12">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-charcoal/10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">Your cart is empty</h2>
            <p className="text-charcoal-light mb-8">Looks like you haven't added anything from our farm yet.</p>
            <Link 
              href="/shop"
              className="inline-block bg-forest text-offwhite px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-forest-light transition-colors"
            >
              Back to Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-2xl border border-charcoal/10 items-center">
                  <div className="relative w-full sm:w-32 aspect-square rounded-xl overflow-hidden bg-lightbrown shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <p className="text-xs font-semibold text-earthy uppercase tracking-widest mb-1">
                      {item.product.category}
                    </p>
                    <h3 className="font-serif text-xl text-forest mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-charcoal-light mb-4">Qty: {item.quantity}</p>
                  </div>
                  <div className="flex flex-col items-center sm:items-end gap-4 shrink-0">
                    <p className="font-serif text-lg">{item.product.price}</p>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-earthy hover:text-red-700 transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl border border-charcoal/10 sticky top-32">
                <h3 className="font-serif text-2xl text-forest mb-6">Order Summary</h3>
                <div className="flex justify-between mb-4 text-charcoal-light">
                  <span>Items ({cartCount})</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between mb-8 text-charcoal-light">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <hr className="border-charcoal/10 mb-8" />
                <button className="w-full flex items-center justify-center gap-2 bg-forest text-offwhite px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-forest-light transition-colors">
                  Checkout <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
