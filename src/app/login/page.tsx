"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ConfirmationResult } from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

export default function LoginPage() {
  const [method, setMethod] = useState<"options" | "phone" | "email">("options");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"input" | "verify">("input");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [isSending, setIsSending] = useState(false);
  
  const { user } = useAuth();
  const router = useRouter();

  // If already logged in, redirect to home or cart
  if (user) {
    router.push("/cart");
    return null;
  }

  const handleGoogleLogin = async () => {
    try {
      const { auth } = await import("@/lib/firebase");
      if (!auth) throw new Error("Firebase auth not initialized");
      
      const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/cart");
    } catch (error: any) {
      console.error("Google sign in error", error);
      alert(`Google Sign-In Error: ${error?.code || error?.message || "Unknown error"}`);
    }
  };

  useEffect(() => {
    // Cleanup function
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    };
  }, []);

  const setupRecaptcha = async () => {
    if (!window.recaptchaVerifier) {
      const { auth } = await import("@/lib/firebase");
      const { RecaptchaVerifier } = await import("firebase/auth");
      
      if (!auth) throw new Error("Firebase auth not initialized");

      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      });
    }
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) return;
    
    try {
      setIsSending(true);
      await setupRecaptcha();
      
      const { auth } = await import("@/lib/firebase");
      const { signInWithPhoneNumber } = await import("firebase/auth");
      
      if (!auth) throw new Error("Firebase auth not initialized");

      const formattedPhone = `+91${phoneNumber}`;
      const appVerifier = window.recaptchaVerifier;
      
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
      setStep("verify");
    } catch (error) {
      console.error("SMS sending error", error);
      alert("Failed to send SMS. Please try again.");
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6 && confirmationResult) {
      try {
        setIsSending(true);
        await confirmationResult.confirm(otp);
        router.push("/cart");
      } catch (error) {
        console.error("OTP Verification Error", error);
        alert("Invalid OTP. Please try again.");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite flex items-center justify-center">
      <div className="w-full max-w-md p-6 md:p-12 bg-white rounded-2xl border border-charcoal/10 shadow-xl mx-4">
        <h1 className="font-serif text-2xl md:text-3xl text-forest text-center mb-2">
          Welcome to Anjani Farms
        </h1>
        <p className="text-charcoal-light text-center mb-6 md:mb-8 text-sm md:text-base">
          Sign in or create an account to checkout
        </p>

        {method === "options" && (
          <div className="space-y-3 md:space-y-4">
            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 border border-charcoal/20 py-2.5 md:py-3 rounded-full hover:bg-charcoal/5 transition-colors font-medium text-charcoal text-sm md:text-base"
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
              className="w-full flex items-center justify-center gap-3 bg-forest text-offwhite py-2.5 md:py-3 rounded-full hover:bg-forest-light transition-colors font-medium text-sm md:text-base"
            >
              Continue with Phone Number
            </button>
            <button 
              onClick={() => alert("Email login UI coming soon!")}
              className="w-full flex items-center justify-center gap-3 border border-charcoal/20 py-2.5 md:py-3 rounded-full hover:bg-charcoal/5 transition-colors font-medium text-charcoal text-sm md:text-base"
            >
              Continue with Email
            </button>
          </div>
        )}

        {method === "phone" && step === "input" && (
          <form onSubmit={handlePhoneSubmit} className="space-y-4 md:space-y-6">
            <div id="recaptcha-container"></div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-charcoal-light mb-1.5 md:mb-2">Mobile Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 md:px-4 border border-r-0 border-charcoal/20 bg-offwhite text-charcoal rounded-l-md text-sm md:text-base">
                  +91
                </span>
                <input 
                  type="tel" 
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  className="w-full border border-charcoal/20 px-3 md:px-4 py-2.5 md:py-3 rounded-r-md focus:outline-none focus:border-forest transition-colors text-sm md:text-base"
                  placeholder="Enter your number"
                  disabled={isSending}
                />
              </div>
            </div>
            <button 
              type="submit"
              disabled={isSending}
              className="w-full bg-forest text-offwhite py-2.5 md:py-3 rounded-full hover:bg-forest-light transition-colors font-semibold tracking-wide uppercase text-xs md:text-sm disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send OTP"}
            </button>
            <button 
              type="button"
              onClick={() => setMethod("options")}
              className="w-full text-center text-xs md:text-sm text-charcoal-light hover:text-charcoal"
            >
              Back to options
            </button>
          </form>
        )}

        {method === "phone" && step === "verify" && (
          <form onSubmit={handleOtpSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-xs md:text-sm font-medium text-charcoal-light mb-1.5 md:mb-2">
                Enter OTP sent to +91 {phoneNumber}
              </label>
              <input 
                type="text" 
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full border border-charcoal/20 px-3 md:px-4 py-2.5 md:py-3 rounded-md focus:outline-none focus:border-forest transition-colors text-center text-lg md:text-xl tracking-[0.3em] md:tracking-[0.5em]"
                placeholder="------"
                disabled={isSending}
              />
            </div>
            <button 
              type="submit"
              disabled={isSending}
              className="w-full bg-forest text-offwhite py-2.5 md:py-3 rounded-full hover:bg-forest-light transition-colors font-semibold tracking-wide uppercase text-xs md:text-sm disabled:opacity-50"
            >
              {isSending ? "Verifying..." : "Verify & Login"}
            </button>
            <button 
              type="button"
              onClick={() => setStep("input")}
              className="w-full text-center text-xs md:text-sm text-charcoal-light hover:text-charcoal"
            >
              Change phone number
            </button>
          </form>
        )}
        
        <p className="text-center text-[10px] md:text-xs text-charcoal-light/70 mt-6 md:mt-8">
          By continuing, you agree to Anjani Farms' Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
