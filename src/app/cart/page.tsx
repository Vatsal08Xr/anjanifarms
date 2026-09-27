"use client";

import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, cartCount } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const subtotal = cart.reduce((total, item) => {
    const priceNum = parseInt(item.product.price.replace(/[^\d]/g, ''), 10) || 0;
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-4 md:px-12 max-w-5xl">
        <h1 className="font-serif text-3xl md:text-5xl text-forest mb-8 md:mb-12">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-12 md:py-20 bg-white rounded-xl md:rounded-2xl border border-charcoal/10 px-4">
            <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-3 md:mb-4">Your cart is empty</h2>
            <p className="text-charcoal-light text-sm md:text-base mb-6 md:mb-8">Looks like you haven't added anything from our farm yet.</p>
            <Link 
              href="/shop"
              className="inline-block bg-forest text-offwhite px-6 md:px-8 py-2.5 md:py-3 uppercase tracking-widest text-xs md:text-sm font-semibold hover:bg-forest-light transition-colors rounded-none"
            >
              Back to Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex flex-row gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-charcoal/10 items-center relative">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg md:rounded-xl overflow-hidden bg-lightbrown shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow text-left">
                    <p className="text-[10px] md:text-xs font-semibold text-earthy uppercase tracking-widest mb-1">
                      {item.product.category}
                    </p>
                    <h3 className="font-serif text-sm md:text-xl text-forest mb-1 md:mb-2 line-clamp-2 pr-8">
                      {item.product.name}
                    </h3>
                    <p className="text-charcoal-light text-xs md:text-base mb-2 md:mb-4">Qty: {item.quantity}</p>
                    <p className="font-serif text-sm md:text-lg hidden sm:block">{item.product.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 md:gap-4 shrink-0 absolute top-4 right-4 sm:static">
                    <p className="font-serif text-sm md:text-lg sm:hidden">{item.product.price}</p>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-earthy hover:text-red-700 transition-colors p-1 md:p-2"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} className="md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-charcoal/10 sticky top-24 md:top-32">
                <h3 className="font-serif text-xl md:text-2xl text-forest mb-4 md:mb-6">Order Summary</h3>
                <div className="flex justify-between items-center mb-3 md:mb-4 text-charcoal-light text-sm md:text-base">
                  <span>Subtotal ({cartCount})</span>
                  <span className="font-semibold text-charcoal">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-start mb-4 md:mb-6 text-charcoal-light text-xs md:text-sm">
                  <span className="mt-1">Shipping</span>
                  <span className="text-right">Calculated<br/>at checkout</span>
                </div>
                <hr className="border-charcoal/10 mb-4 md:mb-6" />
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <span className="font-serif text-lg md:text-xl text-charcoal">Total</span>
                  <span className="font-serif text-xl md:text-2xl font-semibold text-forest">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <button 
                  onClick={() => {
                    if (user) {
                      // Proceed to actual checkout stripe/razorpay etc
                      alert("Proceeding to payment gateway...");
                    } else {
                      router.push("/login");
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-forest text-offwhite px-6 md:px-8 py-3 md:py-4 uppercase tracking-widest text-xs md:text-sm font-semibold hover:bg-forest-light transition-colors rounded-full md:rounded-none"
                >
                  Checkout <ArrowRight size={16} className="md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
