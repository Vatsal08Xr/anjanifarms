import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-offwhite py-10 md:py-16 mt-12 md:mt-20">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Anjani Farms" 
              className="h-12 w-auto object-contain mb-6 brightness-0 invert" 
            />
          </Link>
          <p className="text-offwhite/80 text-sm leading-relaxed">
            From our farm to your home. Premium quality, carefully cultivated, and freshly harvested.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-6">Explore</h3>
          <ul className="space-y-4 text-sm text-offwhite/80">
            <li>
              <Link href="/" className="hover:text-offwhite transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-offwhite transition-colors">Blog</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-offwhite transition-colors">Shop</Link>
            </li>
            <li>
              <Link href="/our-farm" className="hover:text-offwhite transition-colors">Our Farm</Link>
            </li>
            <li>
              <Link href="/why-anjani" className="hover:text-offwhite transition-colors">Why Anjani</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-offwhite/80">
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} />
              <span>hello@anjanifarms.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>Anjani Farms Estate,<br />Karnataka, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-6">Connect</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/anjanifarmsofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-offwhite/10 flex items-center justify-center hover:bg-offwhite/20 transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-12 mt-8 md:mt-16 pt-6 md:pt-8 border-t border-offwhite/20 text-center md:text-left text-xs text-offwhite/60 flex flex-col md:flex-row justify-between">
        <p>&copy; {new Date().getFullYear()} Anjani Farms. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <Link href="#" className="hover:text-offwhite">Privacy Policy</Link>
          <Link href="#" className="hover:text-offwhite">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
