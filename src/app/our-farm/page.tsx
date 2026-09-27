import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Farm | Anjani Farms",
  description: "Discover the story behind Anjani Farms. Explore our cultivation process, philosophy, and estate.",
};

export default function OurFarm() {
  return (
    <div className="bg-offwhite min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Farm landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-forest/40 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-12 text-center text-offwhite">
          <h1 className="font-serif text-3xl md:text-7xl mb-4 md:mb-6">
            Where Anjani Farms Begins
          </h1>
          <p className="text-sm md:text-xl font-light max-w-2xl mx-auto">
            A journey from our soil to your home.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl text-center">
          <p className="text-earthy text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">
            Our Story
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-forest mb-6 md:mb-10 leading-snug">
            Rooted in tradition, focused on quality. We started Anjani Farms with a simple belief: the best produce comes from healthy soil and careful attention.
          </h2>
          <p className="text-charcoal-light leading-relaxed text-sm md:text-base">
            Our estate has been carefully developed to support sustainable cultivation practices. We believe in working with nature, not against it. By focusing on a limited range of crops, we can dedicate the time, resources, and expertise required to produce truly exceptional harvests.
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-12 md:py-24 bg-softgreen">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl text-forest mb-3 md:mb-4">From Soil to Harvest</h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-sm md:text-base">
              Our process is deliberate and unhurried.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-forest/20 -z-0"></div>
            
            {[
              {
                title: "Cultivation",
                desc: "We begin with nutrient-rich soil and careful planting, ensuring each plant has the space and resources to thrive.",
              },
              {
                title: "Growth",
                desc: "Monitored daily, our crops grow naturally with minimal intervention, relying on estate water sources and organic matter.",
              },
              {
                title: "Harvest",
                desc: "We pick entirely by hand, and only when the crop has reached its absolute peak of ripeness or maturity.",
              },
              {
                title: "Delivery",
                desc: "Carefully packed and shipped directly from the farm to ensure the shortest possible time from tree to table.",
              }
            ].map((step, index) => (
              <div key={index} className="relative z-10 bg-offwhite p-4 md:p-8 border border-forest/10 text-center rounded-xl md:rounded-none">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-forest text-offwhite rounded-full flex items-center justify-center font-serif text-sm md:text-xl mx-auto mb-3 md:mb-6">
                  {index + 1}
                </div>
                <h3 className="font-serif text-sm md:text-xl text-forest mb-1.5 md:mb-3">{step.title}</h3>
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[40vh] md:h-[60vh] min-h-[250px] md:min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1595856454242-70b779a1f59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Hands working the soil"
          fill
          className="object-cover"
        />
      </section>

      {/* Team / Philosophy */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-4xl text-forest mb-4 md:mb-6">The People Behind the Produce</h2>
            <p className="text-charcoal-light leading-relaxed text-sm md:text-base mb-4 md:mb-6">
              Our team consists of experienced local farmers who understand the micro-climate and soil of our estate better than anyone else. 
            </p>
            <p className="text-charcoal-light leading-relaxed text-sm md:text-base">
              We combine traditional agricultural wisdom with modern quality control to ensure that every mango, lime, and peppercorn that leaves our farm meets our strict standards.
            </p>
          </div>
          <div className="relative aspect-[4/3] md:aspect-square bg-lightbrown rounded-xl md:rounded-none overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Farm team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-forest text-center px-4 md:px-6">
        <h2 className="font-serif text-2xl md:text-4xl text-offwhite mb-6 md:mb-8">Taste the difference for yourself.</h2>
        <Link
          href="/shop"
          className="inline-block border border-offwhite text-offwhite px-8 md:px-10 py-3 md:py-4 font-medium tracking-widest uppercase text-xs md:text-sm hover:bg-offwhite hover:text-forest transition-colors"
        >
          Explore Our Products
        </Link>
      </section>
    </div>
  );
}
