import Link from "next/link";
import type { ReactNode } from "react";

export const legalDocs = [
  { href: "/delivery", title: "Оплата, доставка и возврат" },
  { href: "/offer", title: "Публичная оферта" },
  { href: "/privacy", title: "Политика обработки персональных данных" },
  { href: "/consent", title: "Согласие на обработку персональных данных" },
] as const;

export const LEGAL_EDITION = "Редакция от 19 ноября 2026 года";

export default function LegalDoc({
  current,
  title,
  lead,
  children,
}: {
  current: (typeof legalDocs)[number]["href"];
  title: string;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="doc">
      <nav className="doc__nav" aria-label="Покупателям">
        <p className="label">Покупателям</p>
        <ul>
          {legalDocs.map((d) => (
            <li key={d.href}>
              <Link href={d.href} aria-current={d.href === current ? "page" : undefined}>
                {d.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <article className="doc__main">
        <h1 className="doc__title">{title}</h1>
        {lead ? <div className="doc__lead">{lead}</div> : <p className="doc__meta label">{LEGAL_EDITION}</p>}
        <div className="doc__body">{children}</div>
      </article>
    </div>
  );
}
