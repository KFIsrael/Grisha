export const site = {
  name: "GRISHA",
  label: "Grisha",
  city: "Москва",
  since: 2017,
  address: "Москва, ул. Плющиха, 20/2",
  addressShort: "Плющиха, 20/2",
  hours: "Ежедневно, 12:00–20:00",
  phone: "+7 926 481-06-39",
  email: "clientcare@grisha.shop",
  whatsapp: "79264810639",
  telegram: "https://t.me/april_moscow", // канал бутика
  telegramManager: "https://t.me/+79264810639", // менеджер, тот же номер
  mapUrl:
    "https://yandex.ru/maps/?text=" +
    encodeURIComponent("Москва, улица Плющиха, 20/2"),
  domain: "grisha.shop",
  // Номер счётчика Яндекс Метрики. Если поставить null, Метрика и плашка про cookie пропадут.
  metrikaId: 114365806 as number | null,
  // Продавец и оператор персональных данных: выводится в подвале и в документах
  legal: {
    name: "ООО «АПРЕЛЬ ФЭШН»",
    inn: "7704409265",
    ogrn: "1177746436680",
    address: "119121, г. Москва, ул. Плющиха, д. 20/2, помещение 2/1",
  },
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

