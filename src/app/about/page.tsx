import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { img } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "О нас",
  description: "Grisha — бренд женской одежды из Москвы. Работаем с 2017 года, бутик — на Плющихе.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <p className="label" style={{ gridColumn: "1 / -1" }} data-reveal>
          О нас
        </p>
        <h1 className="about-hero__title" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          Небольшой бутик на&nbsp;Плющихе, где одежду выбирают <em>без спешки</em>
        </h1>
      </section>

      <div className="about-pair">
        <div className="about-pair__a frame frame--wide" data-reveal>
          <Image src={img("shirt-tencel", 2)} alt="Рубашка из тенсела" fill sizes="(max-width: 768px) 100vw, 58vw" />
        </div>
        <div className="about-pair__b frame" data-reveal style={{ "--d": "200ms" } as React.CSSProperties}>
          <Image src={img("trousers-lowrise-grey", 1)} alt="Укороченные брюки" fill sizes="(max-width: 768px) 50vw, 25vw" />
        </div>
      </div>

      <section className="prose">
        <p className="label" data-reveal>История</p>
        <div className="prose__body" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <p>Мы открылись в&nbsp;{site.since} году как мультибрендовый магазин русских дизайнеров. Последние три года наш бутик находится на&nbsp;Плющихе, в&nbsp;историческом центре Москвы.</p>
          <p>
            Со&nbsp;временем мы поняли, каких вещей не&nbsp;хватает нашим покупательницам, и&nbsp;начали делать их сами. Так появился {site.label}: брюки, трикотаж, рубашки и&nbsp;деним, которые носят годами и&nbsp;легко сочетают между собой.
          </p>
          <p>
            Мы по-прежнему любим живое общение. В&nbsp;бутике можно спокойно примерить всё, что понравилось на&nbsp;сайте, а&nbsp;мы поможем с&nbsp;размером и&nbsp;соберём образ.
          </p>
          <div>
            <Link href="/contacts" className="link-line">
              Как нас найти <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <ul className="values">
        <li data-reveal>
          <span className="label">01</span>
          <h3>Материалы</h3>
          <p>Шерсть, тенсел, плотный хлопок и&nbsp;деним. Выбираем ткани, которые приятно носить и&nbsp;которые хорошо держат форму.</p>
        </li>
        <li data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <span className="label">02</span>
          <h3>Крой</h3>
          <p>Широкие брюки, свободные рубашки, объёмный трикотаж. Простые силуэты, которые не&nbsp;выходят из&nbsp;моды.</p>
        </li>
        <li data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
          <span className="label">03</span>
          <h3>Сделано в&nbsp;России</h3>
          <p>Вещи {site.label} производятся в&nbsp;России.</p>
        </li>
      </ul>
    </>
  );
}
