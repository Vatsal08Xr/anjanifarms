"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { User } from "firebase/auth";

export default function LoginPage() {
  const [method, setMethod] = useState<"options" | "phone" | "email">("options");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"input" | "verify">("input");
  
  const { user, setMockUser } = useAuth();
  const router = useRouter();

  // If already logged in, redirect to home or cart
  if (user) {
    router.push("/cart");
    return null;
  }

  // Simulated login for demo purposes until Firebase keys are provided
  const handleMockLogin = (type: "google" | "phone" | "email") => {
    // We mock a Firebase User object
    const mockFirebaseUser = {
      uid: "mock-uid-123",
      email: type === "email" || type === "google" ? "user@example.com" : null,
      phoneNumber: type === "phone" ? "+919876543210" : null,
      displayName: type === "google" ? "Anjani Shopper" : null,
    } as unknown as User;
    
    setMockUser(mockFirebaseUser);
    router.push("/cart");
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length > 9) {
      setStep("verify");
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      handleMockLogin("phone");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-offwhite flex items-center justify-center">
      <div className="w-full max-w-md p-8 md:p-12 bg-white rounded-2xl border border-charcoal/10 shadow-xl mx-4">
        <h1 className="font-serif text-3xl text-forest text-center mb-2">
          Welcome to Anjani Farms
        </h1>
        <p className="text-charcoal-light text-center mb-8">
          Sign in or create an account to checkout
        </p>

        {method === "options" && (
          <div className="space-y-4">
            <button 
              onClick={() => handleMockLogin("google")}
              className="w-full flex items-center justify-center gap-3 border border-charcoal/20 py-3 rounded-full hover:bg-charcoal/5 transition-colors font-medium text-charcoal"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            <button 
              onClick={() => setMethod("phone")}
              className="w-full flex items-center justify-center gap-3 bg-forest text-offwhite py-3 rounded-full hover:bg-forest-light transition-colors font-medium"
            >
              Continue with Phone Number
            </button>
            <button 
              onClick={() => handleMockLogin("email")}
              className="w-full flex items-center justify-center gap-3 border border-charcoal/20 py-3 rounded-full hover:bg-charcoal/5 transition-colors font-medium text-charcoal"
            >
              Continue with Email
            </button>
          </div>
        )}

        {method === "phone" && step === "input" && (
          <form onSubmit={handlePhoneSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-light mb-2">Mobile Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 border border-r-0 border-charcoal/20 bg-offwhite text-charcoal rounded-l-md">
                  +91
                </span>
                <input 
                  type="tel" 
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  className="w-full border border-charcoal/20 px-4 py-3 rounded-r-md focus:outline-none focus:border-forest transition-colors"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-forest text-offwhite py-3 rounded-full hover:bg-forest-light transition-colors font-semibold tracking-wide uppercase text-sm"
            >
              Send OTP
            </button>
            <button 
              type="button"
              onClick={() => setMethod("options")}
              className="w-full text-center text-sm text-charcoal-light hover:text-charcoal"
            >
              Back to options
            </button>
          </form>
        )}

        {method === "phone" && step === "verify" && (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-light mb-2">
                Enter OTP sent to +91 {phoneNumber}
              </label>
              <input 
                type="text" 
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full border border-charcoal/20 px-4 py-3 rounded-md focus:outline-none focus:border-forest transition-colors text-center text-xl tracking-[0.5em]"
                placeholder="------"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-forest text-offwhite py-3 rounded-full hover:bg-forest-light transition-colors font-semibold tracking-wide uppercase text-sm"
            >
              Verify & Login
            </button>
            <button 
              type="button"
              onClick={() => setStep("input")}
              className="w-full text-center text-sm text-charcoal-light hover:text-charcoal"
            >
              Change phone number
            </button>
          </form>
        )}
        
        <p className="text-center text-xs text-charcoal-light/70 mt-8">
          By continuing, you agree to Anjani Farms' Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
