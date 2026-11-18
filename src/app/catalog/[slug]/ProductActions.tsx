"use client";

import { useState } from "react";
import { reachGoal } from "@/components/Analytics";
import { site, whatsappLink } from "@/data/site";

export default function ProductActions({
  name,
  color,
  sizes,
}: {
  name: string;
  color: string;
  sizes: string[];
}) {
  const single = sizes.length === 1;
  const [size, setSize] = useState<string | null>(single ? sizes[0] : null);
  const [copied, setCopied] = useState(false);

  const message =
    `Здравствуйте! Хочу заказать: ${name}, ${color.toLowerCase()}` +
    (size ? `, размер ${size}` : "") +
    `.`;

  // В Telegram нельзя передать текст по ссылке на номер: копируем заказ в буфер, чат открывается сам.
  const copyForTelegram = () => {
    reachGoal("order_telegram");
    navigator.clipboard?.writeText(message).then(
      () => setCopied(true),
      () => setCopied(false),
    );
  };

  return (
    <>
      {sizes.length > 0 ? (
        <div className="sizes">
          <div className="sizes__head">
            <span className="label">Размер</span>
            {size && !single && <span className="label" style={{ color: "var(--ink)" }}>{size}</span>}
          </div>
          <div className="sizes__list" role="group" aria-label="Выбор размера">
            {sizes.map((s) => (
              <button key={s} aria-pressed={size === s} onClick={() => setSize(size === s ? (single ? s : null) : s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="pdp__note">Размеры и наличие уточните у менеджера — ответим и подберём ваш размер.</p>
      )}

      <div className="pdp__actions">
        <a href={whatsappLink(message)} className="btn btn--block" target="_blank" rel="noopener" onClick={() => reachGoal("order_whatsapp")}>
          {size ? "Заказать в WhatsApp" : "Написать в WhatsApp"}
        </a>
        <div className="pdp__alt">
          <a href={site.telegramManager} className="btn btn--ghost" target="_blank" rel="noopener" onClick={copyForTelegram}>
            Telegram
          </a>
          <a href={`tel:+${site.whatsapp}`} className="btn btn--ghost" onClick={() => reachGoal("order_call")}>
            Позвонить
          </a>
        </div>
        {copied && (
          <p className="pdp__note" role="status">
            Текст заказа скопирован — вставьте его в чат Telegram.
          </p>
        )}
      </div>

      <p className="pdp__note">
        Менеджер подтвердит наличие и пришлёт ссылку на оплату. Телефон: {site.phone}, {site.hours.toLowerCase()}.
      </p>
    </>
  );
}
