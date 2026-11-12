"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products, type CategoryKey } from "@/data/products";

type Filter = "all" | "new" | CategoryKey;

const filters: { key: Filter; title: string }[] = [
  { key: "all", title: "Все" },
  { key: "new", title: "Новинки" },
  ...categories,
];

export default function CatalogView() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const raw = params.get("c") as Filter | null;
  const active: Filter = raw && filters.some((f) => f.key === raw) ? raw : "all";
  const [large, setLarge] = useState(false);

  const list = products.filter((p) =>
    active === "all" ? true : active === "new" ? p.isNew : p.category === active,
  );

  const select = (key: Filter) => {
    const q = key === "all" ? "" : `?c=${key}`;
    router.replace(`${pathname}${q}`, { scroll: false });
  };

  const title = filters.find((f) => f.key === active)?.title;

  return (
    <>
      <header className="page-head">
        <h1 className="page-head__title">
          {active === "all" ? "Каталог" : title}
          <sup>{list.length}</sup>
        </h1>
      </header>

      <div className="toolbar">
        <div className="filters" role="group" aria-label="Категории">
          {filters.map((f) => (
            <button key={f.key} aria-pressed={active === f.key} onClick={() => select(f.key)}>
              {f.title}
            </button>
          ))}
        </div>
        <div className="density" role="group" aria-label="Вид сетки">
          <button aria-pressed={!large} onClick={() => setLarge(false)}>
            Мелко
          </button>
          <button aria-pressed={large} onClick={() => setLarge(true)}>
            Крупно
          </button>
        </div>
      </div>

      {list.length ? (
        <div className={`grid ${large ? "grid--large" : ""}`}>
          {list.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              priority={i < 4}
              sizes={large ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 50vw, 25vw"}
            />
          ))}
        </div>
      ) : (
        <p className="empty">В этой категории пока ничего нет.</p>
      )}
    </>
  );
}
