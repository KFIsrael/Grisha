import Image from "next/image";
import Link from "next/link";
import { formatPrice, img, type Product } from "@/data/products";

export default function ProductCard({
  product,
  sizes = "(max-width: 768px) 50vw, 25vw",
  priority = false,
}: {
  product: Product;
  sizes?: string;
  priority?: boolean;
}) {
  const price = formatPrice(product.price);
  return (
    <Link href={`/catalog/${product.slug}`} className="card">
      <div className="card__media">
        <Image
          src={img(product.slug, 1)}
          alt={`${product.name}, ${product.color.toLowerCase()}`}
          fill
          sizes={sizes}
          className="card__img"
          priority={priority}
        />
        {product.images > 1 && (
          <Image
            src={img(product.slug, 2)}
            alt=""
            aria-hidden
            fill
            sizes={sizes}
            className="card__img card__img--alt"
          />
        )}
        {product.isNew && <span className="card__tag">Новинка</span>}
      </div>
      <div className="card__meta">
        <span className="card__name">{product.name}</span>
        {price && <span className="card__price">{price}</span>}
      </div>
      <span className="card__color">{product.color}</span>
    </Link>
  );
}
