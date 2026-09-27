import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog | Anjani Farms",
  description: "Read our latest articles on health benefits, farm practices, and more.",
};

export default function BlogListingPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <header className="text-center mb-12 md:mb-20">
          <p className="text-earthy text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4">
            Farm Journal
          </p>
          <h1 className="font-serif text-3xl md:text-6xl text-forest mb-4 md:mb-6">
            The Anjani Blog
          </h1>
          <p className="text-charcoal-light max-w-2xl mx-auto text-sm md:text-lg">
            Dive deep into the health benefits of our produce, our sustainable farming practices, and ways to live a healthier life.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogs.map((blog) => (
            <article key={blog.id} className="flex flex-col group bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 transition-transform duration-300 hover:-translate-y-2">
              <Link href={`/blog/${blog.slug}`} className="relative h-64 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-charcoal-light mb-4">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
                <Link href={`/blog/${blog.slug}`}>
                  <h2 className="font-serif text-xl md:text-2xl text-forest mb-4 group-hover:text-earthy transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-charcoal-light text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                <Link 
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-forest uppercase tracking-widest group-hover:text-earthy transition-colors mt-auto"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
