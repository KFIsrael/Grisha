export const site = {
  name: "GRISHA",
  label: "Grisha",
  city: "Москва",
  since: 2017,
  address: "Москва, ул. Плющиха, 20/2",
  addressShort: "Плющиха, 20/2",
  phone: "+7 926 481-06-39",
  whatsapp: "79264810639",
  telegram: "https://t.me/april_moscow",
  instagram: "https://www.instagram.com/aprilmoscow/",
  wildberries: "https://www.wildberries.ru/brands/312200728-grisha-official",
  mapUrl:
    "https://yandex.ru/maps/?text=" +
    encodeURIComponent("Москва, улица Плющиха, 20/2"),
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function wbProductLink(nm: number) {
  return `https://www.wildberries.ru/catalog/${nm}/detail.aspx`;
}
