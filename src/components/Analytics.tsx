"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

// Яндекс Метрика загружается сразу, плашка про cookie только уведомляет (см. Политику, раздел 7).
// Кто раньше нажал «Отказаться» (значение "necessary"), тому Метрика по-прежнему не загружается.
// Пока в site.metrikaId нет номера счётчика, нет ни Метрики, ни плашки.

type Ym = ((id: number, method: string, ...args: unknown[]) => void) & { a?: unknown[]; l?: number };
declare global {
  interface Window {
    ym?: Ym;
  }
}

const KEY = "grisha-cookie-consent"; // "all" — уведомление закрыто; "necessary" — отказ из прежней версии плашки

// Код счётчика из кабинета Метрики (те же настройки)
function loadMetrika(id: number) {
  if (window.ym) return;
  const ym = function () {
    // eslint-disable-next-line prefer-rest-params
    (ym.a = ym.a || []).push(arguments);
  } as unknown as Ym;
  ym.l = Date.now();
  window.ym = ym;
  const src = `https://mc.yandex.ru/metrika/tag.js?id=${id}`;
  if (![...document.scripts].some((s) => s.src === src)) {
    const s = document.createElement("script");
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  }
  ym(id, "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  });
}

/** Цель в Метрике: клики по кнопкам заказа и т. п. Если Метрика не загружена, ничего не отправляет. */
export function reachGoal(goal: string) {
  if (site.metrikaId && window.ym) window.ym(site.metrikaId, "reachGoal", goal);
}

export default function Analytics() {
  const id = site.metrikaId;
  const pathname = usePathname();
  // undefined — localStorage ещё не прочитан
  const [consent, setConsent] = useState<string | null | undefined>(undefined);
  const lastPath = useRef<string | null>(null);
  const tracking = consent !== undefined && consent !== "necessary";

  useEffect(() => {
    setConsent(localStorage.getItem(KEY));
  }, []);

  useEffect(() => {
    if (id && tracking) loadMetrika(id);
  }, [id, tracking]);

  // Переходы внутри сайта без перезагрузки страницы (первый просмотр Метрика считает сама при init)
  useEffect(() => {
    if (!id || !tracking || !window.ym) return;
    if (lastPath.current !== null && lastPath.current !== pathname) window.ym(id, "hit", window.location.href);
    lastPath.current = pathname;
  }, [id, tracking, pathname]);

  if (!id || consent !== null) return null;

  const close = () => {
    localStorage.setItem(KEY, "all");
    setConsent("all");
  };

  return (
    <div className="cookie" role="region" aria-label="Файлы cookie">
      <p>
        Мы используем cookie и Яндекс Метрику, чтобы понимать, как работает сайт. Продолжая пользоваться сайтом, вы
        соглашаетесь с этим. Подробнее — в <Link href="/privacy">Политике обработки персональных данных</Link>.
      </p>
      <div className="cookie__actions">
        <button className="btn" onClick={close}>
          Понятно
        </button>
      </div>
    </div>
  );
}
