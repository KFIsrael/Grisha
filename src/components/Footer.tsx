import Link from "next/link";
import { categories } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

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
            {categories.map((c) => (
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
          </ul>
        </div>
        <div className="footer__col">
          <p className="label">Связь</p>
          <ul>
            <li><a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href={site.telegram} target="_blank" rel="noopener">Telegram</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <p className="label">Адрес</p>
          <ul>
            <li><a href={site.mapUrl} target="_blank" rel="noopener">{site.address}</a></li>
            <li><a href={`tel:+${site.whatsapp}`}>{site.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__word" aria-hidden>
        {site.name.split("").map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {site.label}</span>
        <span>Работаем с {site.since} года</span>
      </div>
    </footer>
  );
}
