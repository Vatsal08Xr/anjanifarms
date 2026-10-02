"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { 
  User, 
  Package, 
  MapPin, 
  Settings, 
  LogOut, 
  ChevronRight, 
  CheckCircle2, 
  Clock 
} from "lucide-react";

export default function AccountPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("orders");
  
  const [profileForm, setProfileForm] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      // Initialize form with user data if available
      const nameParts = (user.displayName || "").split(" ");
      setProfileForm({
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        email: user.email || ""
      });
    }
  }, [user, router]);

  if (!user) return null;

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          
          {/* Sidebar */}
          <div className="w-full md:w-1/4 shrink-0">
            <div className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden sticky top-28">
              <div className="p-6 bg-forest text-offwhite">
                <div className="w-16 h-16 bg-offwhite/20 rounded-full flex items-center justify-center mb-4">
                  <User size={32} />
                </div>
                <h2 className="font-serif text-xl font-semibold">
                  {profileForm.firstName ? `${profileForm.firstName} ${profileForm.lastName}` : (user.displayName || "Valued Customer")}
                </h2>
                <p className="text-offwhite/80 text-sm mt-1">
                  {user.phoneNumber || user.email || "Guest"}
                </p>
              </div>
              
              <nav className="p-2 space-y-1">
                {[
                  { id: "orders", label: "My Orders", icon: Package },
                  { id: "profile", label: "Profile Information", icon: User },
                  { id: "addresses", label: "Saved Addresses", icon: MapPin },
                  { id: "settings", label: "Settings & Support", icon: Settings },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors text-left ${
                        activeTab === item.id 
                          ? "bg-forest/5 text-forest font-semibold" 
                          : "text-charcoal-light hover:bg-charcoal/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} className={activeTab === item.id ? "text-forest" : "text-charcoal-light"} />
                        <span className="text-sm md:text-base">{item.label}</span>
                      </div>
                      <ChevronRight size={16} className="opacity-50" />
                    </button>
                  );
                })}
                
                <hr className="my-2 border-charcoal/10 mx-4" />
                
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 p-4 rounded-xl text-red-600 hover:bg-red-50 transition-colors text-left text-sm md:text-base"
                >
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-3/4">
            
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <h1 className="font-serif text-2xl md:text-3xl text-forest mb-6">Order History</h1>
                
                {/* Mock Active Order (Multiple items) */}
                <div className="bg-white rounded-2xl border border-charcoal/10 p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-widest font-semibold mb-1">Order #ANJ-84920</p>
                      <p className="text-sm text-charcoal-light">Placed on: Today, 10:30 AM</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
                      <Clock size={14} /> Processing
                    </span>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 border-t border-charcoal/10 pt-6">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-lightbrown rounded-lg shrink-0 overflow-hidden shadow-sm">
                      <Image
                        src="/images/mangoes.jpg"
                        alt="Alphonso Mangoes"
                        fill
                        className="object-cover"
                      />
                      {/* +n Indicator for multiple items */}
                      <div className="absolute bottom-0 right-0 bg-charcoal/80 text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded-tl-md backdrop-blur-sm">
                        +1
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-serif text-base md:text-lg text-charcoal line-clamp-1">Alphonso Mango Box & 1 more item</p>
                      <p className="text-sm text-charcoal-light mt-1">Total: ₹2,550</p>
                    </div>
                  </div>
                </div>

                {/* Mock Past Order (Single item) */}
                <div className="bg-white rounded-2xl border border-charcoal/10 p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-widest font-semibold mb-1">Order #ANJ-73821</p>
                      <p className="text-sm text-charcoal-light">Placed on: May 12, 2024</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
                      <CheckCircle2 size={14} /> Delivered
                    </span>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 border-t border-charcoal/10 pt-6">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-lightbrown rounded-lg shrink-0 overflow-hidden shadow-sm">
                      <Image
                        src="/images/moringa.jpg"
                        alt="Moringa Powder"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="font-serif text-base md:text-lg text-charcoal line-clamp-1">Organic Moringa Powder</p>
                      <p className="text-sm text-charcoal-light mt-1">Qty: 1 • ₹450</p>
                    </div>
                    <button className="hidden sm:block border border-forest text-forest px-4 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-forest hover:text-offwhite transition-colors whitespace-nowrap">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl border border-charcoal/10 p-6 md:p-8">
                <h1 className="font-serif text-2xl md:text-3xl text-forest mb-6">Profile Information</h1>
                <form className="space-y-6 max-w-xl" onSubmit={handleProfileSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium text-charcoal-light uppercase tracking-widest mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={profileForm.firstName}
                        onChange={handleProfileChange}
                        className="w-full border border-charcoal/20 px-4 py-3 rounded-lg focus:outline-none focus:border-forest transition-colors" 
                        placeholder="e.g. John" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-charcoal-light uppercase tracking-widest mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={profileForm.lastName}
                        onChange={handleProfileChange}
                        className="w-full border border-charcoal/20 px-4 py-3 rounded-lg focus:outline-none focus:border-forest transition-colors" 
                        placeholder="e.g. Doe" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal-light uppercase tracking-widest mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full border border-charcoal/20 px-4 py-3 rounded-lg bg-offwhite text-charcoal cursor-not-allowed" 
                      value={user.phoneNumber || ""} 
                      disabled 
                    />
                    <p className="text-xs text-charcoal-light mt-1">Phone number cannot be changed directly.</p>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal-light uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={profileForm.email}
                      onChange={handleProfileChange}
                      className="w-full border border-charcoal/20 px-4 py-3 rounded-lg focus:outline-none focus:border-forest transition-colors" 
                      placeholder="your@email.com" 
                    />
                  </div>
                  <button type="submit" className="bg-forest text-offwhite px-8 py-3 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-forest-light transition-colors">
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-serif text-2xl md:text-3xl text-forest">Saved Addresses</h1>
                  <button className="bg-forest text-offwhite px-4 md:px-6 py-2 md:py-3 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-forest-light transition-colors whitespace-nowrap">
                    + Add New
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mock Address */}
                  <div className="bg-white rounded-2xl border border-forest p-6 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 bg-forest text-offwhite px-3 py-1 rounded-bl-lg text-[10px] uppercase tracking-widest font-bold">
                      Default
                    </div>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin size={20} className="text-forest shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-charcoal">Home</p>
                        <p className="text-sm text-charcoal-light mt-1 leading-relaxed">
                          123 Green Valley Road, Phase 2<br />
                          Indiranagar, Bangalore<br />
                          Karnataka - 560038
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button className="text-forest text-sm font-semibold hover:underline">Edit</button>
                      <button className="text-red-600 text-sm font-semibold hover:underline">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="bg-white rounded-2xl border border-charcoal/10 p-6 md:p-8">
                <h1 className="font-serif text-2xl md:text-3xl text-forest mb-6">Settings & Support</h1>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-xl p-6">
                    <h3 className="font-semibold text-charcoal mb-2">Need Help?</h3>
                    <p className="text-sm text-charcoal-light mb-4">Have an issue with your order? Our support team is here to help you.</p>
                    <button className="border border-forest text-forest px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-forest hover:text-offwhite transition-colors">
                      Contact Support
                    </button>
                  </div>
                  <div className="border border-charcoal/10 rounded-xl p-6">
                    <h3 className="font-semibold text-charcoal mb-2">Notifications</h3>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-charcoal-light">Email Updates (Offers & News)</span>
                      <input type="checkbox" className="w-4 h-4 accent-forest" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-charcoal-light">SMS Alerts (Order Tracking)</span>
                      <input type="checkbox" className="w-4 h-4 accent-forest" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
