"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function AccountPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite">
      <div className="container mx-auto px-4 md:px-12 max-w-3xl">
        <div className="bg-white rounded-xl md:rounded-2xl border border-charcoal/10 p-6 md:p-12 shadow-sm">
          <h1 className="font-serif text-2xl md:text-4xl text-forest mb-6 md:mb-8">My Account</h1>
          
          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-xs md:text-sm font-medium text-charcoal-light mb-0.5 md:mb-1">Status</p>
              <p className="text-base md:text-lg text-charcoal">Logged In</p>
            </div>
            
            {user.phoneNumber && (
              <div>
                <p className="text-xs md:text-sm font-medium text-charcoal-light mb-0.5 md:mb-1">Phone Number</p>
                <p className="text-base md:text-lg text-charcoal">{user.phoneNumber}</p>
              </div>
            )}
            
            {user.email && (
              <div>
                <p className="text-xs md:text-sm font-medium text-charcoal-light mb-0.5 md:mb-1">Email</p>
                <p className="text-base md:text-lg text-charcoal">{user.email}</p>
              </div>
            )}
          </div>

          <hr className="border-charcoal/10 my-6 md:my-10" />

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link 
              href="/cart"
              className="bg-forest text-offwhite px-6 md:px-8 py-2.5 md:py-3 rounded-full text-center uppercase tracking-widest text-xs md:text-sm font-semibold hover:bg-forest-light transition-colors"
            >
              Go to Cart
            </Link>
            <button 
              onClick={() => {
                signOut();
                router.push("/");
              }}
              className="border border-charcoal/20 px-6 md:px-8 py-2.5 md:py-3 rounded-full uppercase tracking-widest text-xs md:text-sm font-semibold text-charcoal hover:bg-charcoal/5 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
