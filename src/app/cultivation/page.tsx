import Link from "next/link";
import { ChevronLeft, Video } from "lucide-react";

export const metadata = {
  title: "Cultivation | Anjani Farms",
  description: "Learn about how we grow our premium produce at Anjani Farms.",
};

export default function Cultivation() {
  return (
    <div className="pt-32 pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-charcoal-light hover:text-forest transition-colors mb-12"
        >
          <ChevronLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="font-serif text-4xl md:text-6xl text-forest mb-6">
          Cultivation & Process
        </h1>
        <p className="text-charcoal-light text-lg mb-16 max-w-2xl mx-auto">
          We believe in complete transparency. We're currently documenting our entire farming process—from soil preparation to harvest.
        </p>

        <div className="bg-softgreen rounded-3xl p-12 md:p-24 border border-forest/10 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-forest text-offwhite rounded-full flex items-center justify-center mb-8">
            <Video size={32} />
          </div>
          <h2 className="font-serif text-3xl text-forest mb-4">
            Videos Coming Soon
          </h2>
          <p className="text-charcoal-light max-w-md mx-auto">
            We are working on high-quality documentaries and short videos to show exactly how your food is grown, harvested, and packaged at Anjani Farms.
          </p>
        </div>
      </div>
    </div>
  );
}
