"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setOverHero(isHome && y < window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const cls = [
    "header",
    overHero && !open ? "header--light" : "",
    scrolled && !overHero ? "header--solid" : "",
    open ? "header--open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={cls}>
        <nav className="header__side" aria-label="Основное меню">
          <button
            className="header__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu"
          >
            <span className="header__burger-lines" aria-hidden />
            <span>{open ? "Закрыть" : "Меню"}</span>
          </button>
          <Link href="/catalog" className="header__link">
            Каталог
          </Link>
          <Link href="/catalog?c=new" className="header__link">
            Новинки
          </Link>
          <Link href="/about" className="header__link">
            О нас
          </Link>
        </nav>

        <Link href="/" className="header__logo" aria-label={`${site.label} — на главную`}>
          {site.name}
        </Link>

        <div className="header__side header__side--end">
          <Link href="/contacts" className="header__link">
            Бутик
          </Link>
          <a href={whatsappLink()} className="header__link" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </header>

      <div id="menu" className={`menu ${open ? "menu--open" : ""}`} aria-hidden={!open}>
        <div className="menu__inner">
          <ul className="menu__main">
            <li><Link href="/catalog">Каталог</Link></li>
            <li><Link href="/catalog?c=new">Новинки</Link></li>
            <li><Link href="/about">О нас</Link></li>
            <li><Link href="/contacts">Бутик</Link></li>
          </ul>
          <ul className="menu__cats">
            {categories.map((c) => (
              <li key={c.key}>
                <Link href={`/catalog?c=${c.key}`}>{c.title}</Link>
              </li>
            ))}
          </ul>
          <div className="menu__foot">
            <p>{site.address}</p>
            <a href={whatsappLink()} target="_blank" rel="noopener">{site.phone}</a>
          </div>
        </div>
      </div>
    </>
  );
}
