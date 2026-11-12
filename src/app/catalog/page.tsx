import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogView from "./CatalogView";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Каталог бутика «Апрель»: брюки, трикотаж, деним, юбки, рубашки и верхняя одежда линии Grisha.",
};

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogView />
    </Suspense>
  );
}
