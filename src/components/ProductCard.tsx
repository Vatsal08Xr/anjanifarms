import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-lightbrown mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!product.available && (
          <div className="absolute top-4 left-4 bg-offwhite/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Out of Stock
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-xs font-semibold text-earthy uppercase tracking-widest mb-2">
          {product.category}
        </p>
        <h3 className="font-serif text-xl mb-2 group-hover:text-forest transition-colors">
          {product.name}
        </h3>
        <p className="text-charcoal-light text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        <p className="font-serif text-lg mb-4">{product.price}</p>
        <Link
          href={`/shop`}
          className="inline-block border border-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-forest hover:border-forest hover:text-offwhite transition-colors"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
