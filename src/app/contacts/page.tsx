import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Бутик и контакты",
  description: `Бутик «Апрель»: ${site.address}. Заказ и примерка через WhatsApp ${site.phone}.`,
};

export default function ContactsPage() {
  return (
    <>
      <header className="page-head">
        <p className="label" data-reveal style={{ marginBottom: 18 }}>
          Бутик
        </p>
        <h1 className="page-head__title" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          Плющиха, 20/2
        </h1>
      </header>

      <section className="contacts">
        <div className="contacts__list" data-reveal>
          <div className="contacts__row">
            <span className="label">Адрес</span>
            <a href={site.mapUrl} target="_blank" rel="noopener">{site.address}</a>
          </div>
          <div className="contacts__row">
            <span className="label">Телефон</span>
            <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
          </div>
          <div className="contacts__row">
            <span className="label">WhatsApp</span>
            <a href={whatsappLink()} target="_blank" rel="noopener">Написать</a>
          </div>
          <div className="contacts__row">
            <span className="label">Telegram</span>
            <a href={site.telegram} target="_blank" rel="noopener">@april_moscow</a>
          </div>
          <div className="contacts__row">
            <span className="label">Instagram</span>
            <a href={site.instagram} target="_blank" rel="noopener">@aprilmoscow</a>
          </div>
          <div className="contacts__row">
            <span className="label">Wildberries</span>
            <a href={site.wildberries} target="_blank" rel="noopener">{site.label} Official</a>
          </div>
        </div>
        <a href={site.mapUrl} target="_blank" rel="noopener" className="contacts__map" data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
          <Image src={img("trousers-lowrise-black", 1)} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <span className="contacts__map-cta">
            <span className="label">Как добраться</span>
            <span className="contacts__map-title">Открыть в Яндекс Картах →</span>
          </span>
        </a>
      </section>

      <section className="order" id="order">
        <h2 className="section__title" data-reveal>
          Как заказать
        </h2>
        <ol className="order__steps" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <li>
            <div>
              <strong>Выберите вещь</strong>
              В каталоге отметьте нужный размер и нажмите «Заказать в WhatsApp» — сообщение с названием и размером заполнится само.
            </div>
          </li>
          <li>
            <div>
              <strong>Мы подтвердим наличие</strong>
              Ответим в WhatsApp и отложим вещь в бутике.
            </div>
          </li>
          <li>
            <div>
              <strong>Примерка или доставка</strong>
              Заберите заказ на Плющихе или оформите его с доставкой на Wildberries.
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}
