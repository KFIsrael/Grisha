import Link from "next/link";
import { legalDocs } from "@/components/LegalDoc";
import Logo from "@/components/Logo";
import { categories } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

// Порядок категорий в подвале «ёлочкой»: от самой короткой строки к самой длинной.
// Категории, которых нет в этом списке, встанут в конец, а не пропадут.
const footerOrder: string[] = ["skirts", "trousers", "denim", "dresses", "knit", "tops", "outerwear"];
const footerCategories = [...categories].sort((a, b) => {
  const ia = footerOrder.indexOf(a.key);
  const ib = footerOrder.indexOf(b.key);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col footer__col--lead">
          <p className="footer__lead">
            Бренд женской одежды и&nbsp;бутик в&nbsp;историческом центре Москвы.
          </p>
        </div>
        <div className="footer__col">
          <p className="label">Каталог</p>
          <ul>
            {/* «ёлочкой»: от короткого названия к длинному (по ширине на экране) */}
            {footerCategories.map((c) => (
              <li key={c.key}>
                <Link href={`/catalog?c=${c.key}`}>{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <p className="label">{site.label}</p>
          <ul>
            <li><Link href="/about">О нас</Link></li>
            <li><Link href="/contacts">Бутик</Link></li>
            <li><Link href="/contacts#order">Как заказать</Link></li>
            <li><Link href="/delivery">Оплата и доставка</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <p className="label">Связь</p>
          <ul>
            <li><a href={site.telegram} target="_blank" rel="noopener">Telegram</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <p className="label">Адрес</p>
          <ul>
            <li><a href={`tel:+${site.whatsapp}`}>{site.phone}</a></li>
            <li>{site.hours}</li>
            <li><a href={site.mapUrl} target="_blank" rel="noopener">{site.address}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__word" aria-hidden>
        <Logo />
      </div>

      <div className="footer__legal">
        <p>
          {site.legal.name} · ИНН {site.legal.inn} · ОГРН {site.legal.ogrn} · {site.legal.address}
        </p>
        <ul>
          {legalDocs
            .filter((d) => d.href !== "/delivery")
            .map((d) => (
              <li key={d.href}>
                <Link href={d.href}>{d.title}</Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {site.label}</span>
        <span>Работаем с {site.since} года</span>
      </div>
    </footer>
  );
}
