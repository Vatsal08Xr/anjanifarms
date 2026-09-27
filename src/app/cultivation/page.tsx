import Link from "next/link";
import { ChevronLeft, Video } from "lucide-react";

export const metadata = {
  title: "Cultivation | Anjani Farms",
  description: "Learn about how we grow our premium produce at Anjani Farms.",
};

export default function Cultivation() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-4 md:px-12 max-w-4xl text-center">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-charcoal-light hover:text-forest transition-colors mb-8 md:mb-12 text-sm md:text-base"
        >
          <ChevronLeft size={18} className="md:w-5 md:h-5" />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="font-serif text-3xl md:text-6xl text-forest mb-4 md:mb-6">
          Cultivation & Process
        </h1>
        <p className="text-charcoal-light text-sm md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto">
          We believe in complete transparency. We're currently documenting our entire farming process—from soil preparation to harvest.
        </p>

        <div className="bg-softgreen rounded-2xl md:rounded-3xl p-8 md:p-24 border border-forest/10 flex flex-col items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-forest text-offwhite rounded-full flex items-center justify-center mb-6 md:mb-8">
            <Video className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-forest mb-3 md:mb-4">
            Videos Coming Soon
          </h2>
          <p className="text-charcoal-light text-sm md:text-base max-w-md mx-auto">
            We are working on high-quality documentaries and short videos to show exactly how your food is grown, harvested, and packaged at Anjani Farms.
          </p>
        </div>
      </div>
    </div>
  );
}
