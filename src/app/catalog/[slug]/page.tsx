import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { categoryTitle, formatPrice, getProduct, img, products } from "@/data/products";
import { site } from "@/data/site";
import Gallery from "./Gallery";
import ProductActions from "./ProductActions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name}, ${p.color.toLowerCase()}`,
    description: p.description,
    openGraph: { images: [img(p.slug, 1)] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => Number(b.category === p.category) - Number(a.category === p.category))
    .slice(0, 4);

  const images = Array.from({ length: p.images }, (_, i) => img(p.slug, i + 1));
  const price = formatPrice(p.price);

  return (
    <>
      <div className="pdp">
        <Gallery images={images} alt={p.name} />

        <aside className="pdp__info">
          <nav className="crumbs" aria-label="Навигация">
            <Link href="/catalog">Каталог</Link>
            <span aria-hidden>/</span>
            <Link href={`/catalog?c=${p.category}`}>{categoryTitle(p.category)}</Link>
          </nav>

          <div>
            <h1 className="pdp__title">{p.name}</h1>
            <div className="pdp__sub">
              <span>{p.color}</span>
              {price && <span>{price}</span>}
            </div>
          </div>

          <ProductActions name={p.name} color={p.color} sizes={p.sizes} wb={p.wb} />

          <p className="pdp__note">
            Примерить можно в бутике: {site.addressShort}. Напишите заранее — отложим нужный размер.
          </p>

          <div className="details">
            <details open>
              <summary>Описание</summary>
              <div className="details__body">
                <p>{p.description}</p>
                {p.fit && <p>{p.fit}.</p>}
              </div>
            </details>
            <details>
              <summary>Состав и уход</summary>
              <div className="details__body">
                <p>{p.composition}</p>
                {p.care && <p>{p.care}</p>}
              </div>
            </details>
            <details>
              <summary>Примерка и заказ</summary>
              <div className="details__body">
                <p>
                  Подтвердим наличие и отложим вещь в бутике на Плющихе.
                  {p.wb ? " Заказать с доставкой можно на Wildberries." : " О доставке договоримся в WhatsApp."}
                </p>
              </div>
            </details>
          </div>
        </aside>
      </div>

      <section className="section">
        <div className="section__head">
          <h2 className="section__title">Вам может понравиться</h2>
          <Link href="/catalog" className="link-line">
            Весь каталог <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid" style={{ padding: 0 }}>
          {related.map((r) => (
            <ProductCard key={r.slug} product={r} />
          ))}
        </div>
      </section>
    </>
  );
}
