import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Rail from "@/components/Rail";
import { img, products } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

const tiles = [
  { href: "/catalog?c=trousers", title: "Брюки", src: "/images/p/look-palazzo.webp", cls: "tile--a" },
  { href: "/catalog?c=knit", title: "Трикотаж", src: "/images/p/look-hoodie-grey.webp", cls: "tile--b" },
  { href: "/catalog?c=denim", title: "Деним", src: "/images/p/look-white-tank.webp", cls: "tile--c" },
];

const looks = [
  { src: "look-stripe-graphite", slug: "jeans-wide-graphite", cap: "Лонгслив в полоску, джинсы на кулиске" },
  { src: "look-biker-skirt", slug: "biker-jacket", cap: "Косуха из эко-кожи, юбка миди" },
  { src: "look-red-turtleneck", slug: "jeans-wide-black", cap: "Широкие джинсы, чёрные" },
  { src: "look-white-shirt", slug: "trousers-lowrise-black", cap: "Укороченные брюки, белая рубашка" },
  { src: "look-hoodie-beige", slug: "hoodie-zip-beige", cap: "Худи на молнии, джинсы" },
  { src: "look-red-skirt", slug: "skirt-pleated-red", cap: "Юбка миди со складками" },
  { src: "look-stripe-crouch", slug: "longsleeve-stripe", cap: "Лонгслив в полоску" },
];

export default function Home() {
  const fresh = products.filter((p) => p.isNew).concat(products.filter((p) => !p.isNew)).slice(0, 8);

  return (
    <>
      {/* Первый экран */}
      <section className="hero">
        <div className="hero__media">
          <div className="hero__frame">
            <div className="hero__parallax">
              <Image src={img("skirt-drape", 1)} alt="Юбка-карандаш с драпировкой и белая рубашка" fill priority sizes="(max-width: 768px) 100vw, 50vw" quality={85} />
            </div>
          </div>
          <div className="hero__frame">
            <div className="hero__parallax">
              <Image src="/images/p/look-stripe-crouch.webp" alt="Лонгслив в полоску" fill priority sizes="50vw" quality={85} />
            </div>
          </div>
        </div>
        <div className="hero__overlay">
          <p className="hero__kicker label" style={{ color: "inherit" }}>
            Осень — зима 2026
          </p>
          <h1 className="hero__word" aria-label={site.name}>
            {site.name.split("").map((l, i) => (
              <span key={i} style={{ "--i": i } as React.CSSProperties} aria-hidden>
                {l}
              </span>
            ))}
          </h1>
          <div className="hero__foot">
            <span>Бутик на Плющихе · с {site.since}</span>
            <Link href="/catalog" className="link-line">
              Смотреть коллекцию <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Манифест */}
      <section className="section">
        <div className="intro">
          <p className="label" data-reveal>О нас</p>
          <p className="intro__text" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            Вещи, к&nbsp;которым возвращаешься <em>каждый день</em>. Спокойные цвета, точный крой и&nbsp;ткани, которые хочется трогать.
          </p>
          <div className="intro__aside" data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
            <p>
              {site.label} — бренд женской одежды и&nbsp;бутик в&nbsp;историческом центре Москвы. С&nbsp;{site.since} года мы собираем гардероб из&nbsp;базовых вещей, которые легко сочетаются между собой. Коллекция производится в&nbsp;России.
            </p>
            <Link href="/about" className="link-line">
              История бутика <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Редакционная сетка категорий */}
      <section className="section section--tight">
        <div className="editorial">
          {tiles.map((t, i) => (
            <Link key={t.href} href={t.href} className={`tile ${t.cls}`} data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties}>
              <div className="tile__media">
                <Image src={t.src} alt={t.title} fill sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"} />
              </div>
              <div className="tile__cap">
                <span className="tile__num">0{i + 1}</span>
                <span className="tile__name">{t.title}</span>
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Новинки */}
      <section className="section">
        <div className="section__head" data-reveal>
          <h2 className="section__title">Новинки</h2>
          <Link href="/catalog?c=new" className="link-line">
            Смотреть всё <span aria-hidden>→</span>
          </Link>
        </div>
        <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <Rail label="Новинки">
            {fresh.map((p) => (
              <ProductCard key={p.slug} product={p} sizes="(max-width: 768px) 72vw, 25vw" />
            ))}
          </Rail>
        </div>
      </section>

      {/* О коллекции */}
      <section className="section section--tight">
        <div className="label-split">
          <div className="label-split__main" data-reveal>
            <Image src={img("biker-jacket", 2)} alt="Косуха из эко-кожи" fill sizes="(max-width: 768px) 100vw, 58vw" />
          </div>
          <div className="label-split__body">
            <div data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
              <p className="label">Сделано в&nbsp;России</p>
              <h2 className="label-split__title">{site.label}</h2>
              <p className="label-split__text">
                Лаконичный крой, спокойная палитра и&nbsp;честные материалы: шерсть, тенсел, плотный хлопок и&nbsp;деним. Вещи, которые работают сезон за&nbsp;сезоном.
              </p>
              <Link href="/catalog" className="link-line">
                Вся коллекция <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="label-split__small" data-reveal style={{ "--d": "300ms" } as React.CSSProperties}>
              <Image src={img("palazzo-wool", 3)} alt="Брюки-палаццо из шерсти" fill sizes="20vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Образы */}
      <section className="section">
        <div className="section__head" data-reveal>
          <h2 className="section__title">
            Как мы <em style={{ fontStyle: "italic" }}>это носим</em>
          </h2>
          <span className="label">Образы сезона</span>
        </div>
        <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <Rail label="Образы" className="rail--looks">
            {looks.map((l, i) => (
              <Link key={l.src} href={`/catalog/${l.slug}`} className="look">
                <div className="look__media">
                  <Image src={`/images/p/${l.src}.webp`} alt={l.cap} fill sizes="(max-width: 768px) 78vw, 28vw" />
                </div>
                <div className="look__cap">
                  <span className="look__num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{l.cap}</span>
                </div>
              </Link>
            ))}
          </Rail>
        </div>
      </section>

      {/* Бутик */}
      <section className="boutique">
        <div className="boutique__lead" data-reveal>
          <p className="label">Бутик</p>
          <h2 className="boutique__title">
            Приходите <em>примерить</em>
          </h2>
          <p className="boutique__addr">
            {site.address}
            <br />
            <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
          </p>
        </div>
        <div className="boutique__side" data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
          <ol className="steps">
            <li>Выберите вещь и размер на сайте.</li>
            <li>Напишите нам в WhatsApp — подтвердим наличие и отложим.</li>
            <li>Примерьте в бутике на Плющихе или закажите на Wildberries.</li>
          </ol>
          <div className="boutique__btns">
            <a href={whatsappLink("Здравствуйте! Хочу прийти на примерку.")} className="btn btn--light" target="_blank" rel="noopener">
              Написать в WhatsApp
            </a>
            <a href={site.mapUrl} className="btn btn--light-ghost" target="_blank" rel="noopener">
              Построить маршрут
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
