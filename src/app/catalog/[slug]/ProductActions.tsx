"use client";

import { useState } from "react";
import { whatsappLink } from "@/data/site";

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

  const message =
    `Здравствуйте! Хочу заказать: ${name}, ${color.toLowerCase()}` +
    (size ? `, размер ${size}` : "") +
    `.`;

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
        <p className="pdp__note">Размеры и наличие уточните в WhatsApp — ответим и подберём ваш размер.</p>
      )}

      <div className="pdp__actions">
        <a href={whatsappLink(message)} className="btn btn--block" target="_blank" rel="noopener">
          {size ? "Заказать в WhatsApp" : "Уточнить в WhatsApp"}
        </a>
      </div>
    </>
  );
}
