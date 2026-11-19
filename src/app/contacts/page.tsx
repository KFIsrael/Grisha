import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Бутик и контакты",
  description: `Бутик Grisha: ${site.address}. Заказ по телефону ${site.phone}, в WhatsApp и Telegram.`,
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
            <span className="label">Часы</span>
            <span>{site.hours}</span>
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
            <a href={site.telegramManager} target="_blank" rel="noopener">Написать</a>
          </div>
          <div className="contacts__row">
            <span className="label">Канал</span>
            <a href={site.telegram} target="_blank" rel="noopener">@april_moscow в Telegram</a>
          </div>
        </div>
        <a href={site.mapUrl} target="_blank" rel="noopener" className="contacts__map" data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
          <Image src={img("mini-dress-black", 2)} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" />
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
              Отметьте размер на странице товара и напишите нам в WhatsApp или Telegram — текст заказа подготовится сам. Можно и позвонить.
            </div>
          </li>
          <li>
            <div>
              <strong>Подтвердим заказ</strong>
              Менеджер проверит наличие и пришлёт ссылку на оплату. Если хотите сначала примерить, отложим вещь в бутике.
            </div>
          </li>
          <li>
            <div>
              <strong>Примерка или доставка</strong>
              Заберите заказ в бутике на Плющихе или договоритесь с нами о доставке.
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}
