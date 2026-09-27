import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { blogs } from "@/data/blogs";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: `${blog.title} | Anjani Farms`,
    description: blog.excerpt,
  };
}

// Generate static params for build time
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="pt-24 md:pt-32 pb-16 md:pb-24 bg-offwhite min-h-screen">
      <div className="container mx-auto px-4 md:px-12 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-charcoal-light hover:text-forest transition-colors mb-8 md:mb-12 text-sm md:text-base"
        >
          <ChevronLeft size={18} />
          <span>Back to Articles</span>
        </Link>
        
        <header className="mb-8 md:mb-12">
          <div className="flex items-center gap-4 text-xs md:text-sm text-charcoal-light uppercase tracking-widest mb-4 md:mb-6">
            <span>{blog.date}</span>
            <span>&bull;</span>
            <span>{blog.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-forest mb-6 md:mb-8 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-forest rounded-full flex items-center justify-center text-offwhite font-serif font-bold text-lg">
              A
            </div>
            <div>
              <p className="font-semibold text-charcoal text-sm md:text-base">{blog.author}</p>
              <p className="text-xs md:text-sm text-charcoal-light">Anjani Farms</p>
            </div>
          </div>
        </header>

        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 md:mb-16">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div 
          className="prose prose-lg md:prose-xl prose-stone max-w-none prose-headings:font-serif prose-headings:text-forest prose-h2:text-2xl md:prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl md:prose-h3:text-2xl prose-p:text-charcoal-light prose-p:leading-relaxed prose-a:text-earthy hover:prose-a:text-forest prose-li:text-charcoal-light"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <hr className="my-16 border-forest/10" />

        <div className="bg-softgreen rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-forest mb-4">Want to experience these benefits?</h3>
          <p className="text-charcoal-light mb-8 max-w-xl mx-auto">
            Order our premium, farm-direct produce today and get the maximum nutritional value delivered straight to your door.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-forest text-offwhite px-8 py-3 uppercase tracking-widest text-sm hover:bg-forest-light transition-colors"
          >
            Shop the Farm
          </Link>
        </div>
      </div>
    </article>
  );
}
