import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogView from "./CatalogView";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Каталог Grisha: платья, верхняя одежда, трикотаж, деним и юбки.",
};

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogView />
    </Suspense>
  );
}
