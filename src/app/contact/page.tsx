import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact | Anjani Farms",
  description: "Get in touch with Anjani Farms for orders, bulk enquiries, or questions about our products.",
};

export default function Contact() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <header className="text-center mb-10 md:mb-20">
          <h1 className="font-serif text-3xl md:text-6xl text-forest mb-3 md:mb-6">
            Let's Connect
          </h1>
          <p className="text-charcoal-light max-w-2xl mx-auto text-sm md:text-lg">
            Whether you have a question about our products, want to place a bulk order, or simply wish to say hello, we'd love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
          {/* Contact Information */}
          <div className="bg-softgreen p-6 md:p-12 rounded-xl md:rounded-none flex flex-col justify-center">
            <h2 className="font-serif text-2xl md:text-3xl text-forest mb-6 md:mb-10">Get in Touch</h2>
            
            <div className="space-y-5 md:space-y-8 mb-8 md:mb-12">
              <div className="flex items-start gap-3 md:gap-4">
                <Phone className="text-forest mt-0.5 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-charcoal text-sm md:text-base mb-0.5 md:mb-1">Phone & WhatsApp</h3>
                  <p className="text-charcoal-light text-sm md:text-base">+91 98765 43210</p>
                  <p className="text-xs md:text-sm text-charcoal-light mt-0.5 md:mt-1">Available Mon-Sat, 9am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <Mail className="text-forest mt-0.5 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-charcoal text-sm md:text-base mb-0.5 md:mb-1">Email</h3>
                  <p className="text-charcoal-light text-sm md:text-base">hello@anjanifarms.com</p>
                  <p className="text-xs md:text-sm text-charcoal-light mt-0.5 md:mt-1">We aim to respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="text-forest mt-0.5 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-charcoal text-sm md:text-base mb-0.5 md:mb-1">Farm Location</h3>
                  <p className="text-charcoal-light text-sm md:text-base">
                    Anjani Farms Estate,<br />
                    Karnataka, India
                  </p>
                  <p className="text-xs md:text-sm text-charcoal-light mt-0.5 md:mt-1 italic">*Farm visits by appointment only.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-charcoal text-sm md:text-base mb-3 md:mb-4">Follow Our Journey</h3>
              <a href="#" className="inline-flex items-center gap-2 text-forest hover:text-earthy transition-colors text-sm md:text-base">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>@anjanifarms</span>
              </a>
            </div>
          </div>

          {/* Contact Form & CTA */}
          <div className="flex flex-col">
            <div className="bg-white p-6 md:p-10 border border-forest/10 shadow-sm flex-grow rounded-xl md:rounded-none">
              <h2 className="font-serif text-xl md:text-2xl text-forest mb-4 md:mb-6">Send an Enquiry</h2>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-charcoal mb-1.5 md:mb-2">Name</label>
                    <input type="text" id="name" className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-forest transition-colors text-sm md:text-base" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-charcoal mb-1.5 md:mb-2">Email</label>
                    <input type="email" id="email" className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-forest transition-colors text-sm md:text-base" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-charcoal mb-1.5 md:mb-2">Subject</label>
                  <select id="subject" className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-forest transition-colors text-charcoal-light text-sm md:text-base">
                    <option>General Enquiry</option>
                    <option>Product Question</option>
                    <option>Bulk Order</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-charcoal mb-1.5 md:mb-2">Message</label>
                  <textarea id="message" rows={3} className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-forest transition-colors resize-none text-sm md:text-base" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="bg-forest text-offwhite px-6 md:px-8 py-3 w-full uppercase tracking-widest text-xs md:text-sm hover:bg-forest-light transition-colors rounded-full md:rounded-none">
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-4 md:mt-8 bg-lightbrown p-6 md:p-8 text-center rounded-xl md:rounded-none">
              <h3 className="font-serif text-lg md:text-xl text-forest mb-1.5 md:mb-2">Ready to order?</h3>
              <p className="text-charcoal-light mb-4 md:mb-6 text-xs md:text-sm">Browse our current availability and place your order directly.</p>
              <Link
                href="/shop"
                className="inline-block border border-forest text-forest px-6 md:px-8 py-2.5 md:py-3 uppercase tracking-widest text-xs md:text-sm hover:bg-forest hover:text-offwhite transition-colors"
              >
                Shop Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
