// Каталог собран из карточек бренда Grisha Official на Wildberries (фото и состав — оттуда)
// и студийных фото из Telegram-канала бутика (пуховик, парка).
// Цены не указаны: их нужно получить у клиента. Поле price необязательное —
// как только появится число, оно само выведется на карточке и в каталоге.

export type CategoryKey =
  | "outerwear"
  | "knit"
  | "tops"
  | "trousers"
  | "denim"
  | "skirts";

export const categories: { key: CategoryKey; title: string }[] = [
  { key: "outerwear", title: "Верхняя одежда" },
  { key: "knit", title: "Трикотаж" },
  { key: "tops", title: "Рубашки и топы" },
  { key: "trousers", title: "Брюки" },
  { key: "denim", title: "Деним" },
  { key: "skirts", title: "Юбки" },
];

export type Product = {
  slug: string;
  name: string;
  category: CategoryKey;
  color: string;
  price?: number;
  isNew?: boolean;
  sizes: string[];
  composition: string;
  care?: string;
  description: string;
  fit?: string;
  wb?: number; // артикул на Wildberries, откуда взяты фото; на сайте не показывается
  images: number; // количество фото: /images/p/{slug}-{1..n}.webp
};

export const products: Product[] = [
  {
    slug: "puffer-down",
    name: "Пуховик с капюшоном",
    category: "outerwear",
    color: "Графит",
    isNew: true,
    sizes: [],
    composition: "Наполнитель — натуральный пух белой утки",
    description:
      "Объёмный пуховик свободного кроя с высоким воротом и капюшоном. Лёгкий и тёплый — рассчитан на морозы до −15 °C.",
    images: 4,
  },
  {
    slug: "parka-fur",
    name: "Утеплённая парка с мехом",
    category: "outerwear",
    color: "Хаки",
    isNew: true,
    sizes: [],
    composition: "Утеплённая модель на меховой подстёжке-жилете, капюшон с меховой отделкой",
    description:
      "Удлинённая парка с меховой отделкой капюшона, кулиской на талии и накладными карманами. С джинсами и клетчатой рубашкой — на всю зиму.",
    images: 4,
  },
  {
    slug: "palazzo-wool",
    name: "Брюки-палаццо из шерсти",
    category: "trousers",
    color: "Серый меланж",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    composition: "100% шерсть",
    care: "Только химчистка. Гладить при температуре до 110 °C.",
    description:
      "Широкие брюки со складками у пояса и высокой посадкой. Плотная шерсть держит форму и красиво двигается при ходьбе — с футболкой днём, с жакетом вечером.",
    fit: "Рост модели 175 см, размер S",
    wb: 994211263,
    images: 4,
  },
  {
    slug: "skirt-drape",
    name: "Юбка-карандаш с драпировкой",
    category: "skirts",
    color: "Чёрный",
    sizes: ["S", "M", "L", "XL"],
    composition: "95% полиэстер, 5% спандекс",
    care: "Деликатная химчистка. Гладить с изнанки до 100 °C.",
    description:
      "Юбка миди по фигуре с мягкой драпировкой на бедре и разрезом спереди. Молния сзади. Строгий силуэт, который выглядит празднично.",
    fit: "Рост модели 176 см, размер S",
    wb: 988257337,
    images: 4,
  },
  {
    slug: "longsleeve-stripe",
    name: "Лонгслив в полоску",
    category: "tops",
    color: "Чёрный / белый",
    isNew: true,
    sizes: ["One size"],
    composition: "94% хлопок, 6% эластан",
    care: "Ручная стирка до 40 °C. Гладить до 110 °C.",
    description:
      "Наша самая узнаваемая вещь — тельняшка свободного кроя из плотного хлопка. Со спущенным плечом и длиной, которую можно заправить или носить навыпуск.",
    fit: "Рост модели 175 см, один размер",
    wb: 1175698854,
    images: 4,
  },
  {
    slug: "biker-jacket",
    name: "Косуха из эко-кожи",
    category: "outerwear",
    color: "Чёрный",
    sizes: ["S", "M", "L", "XL", "2XL"],
    composition: "45% полиуретан, 55% полиэстер",
    care: "Деликатная химчистка. Не гладить, допускается отпаривание.",
    description:
      "Укороченная косуха с косой молнией и отложным воротником. Мягкая матовая эко-кожа и посадка по фигуре — вещь на все межсезонья.",
    fit: "Рост модели 175 см",
    wb: 920515757,
    images: 4,
  },
  {
    slug: "shirt-tencel",
    name: "Рубашка из тенсела",
    category: "tops",
    color: "Синий деним",
    isNew: true,
    sizes: ["S", "M", "L", "XL", "2XL"],
    composition: "100% тенсел",
    care: "Деликатная стирка. Допускается отпаривание.",
    description:
      "Выглядит как деним, а ощущается как шёлк. Тенсел мягкий, гладкий и хорошо пропускает воздух. Полуприлегающий крой и закруглённый низ.",
    fit: "Рост модели 175 см, размер S",
    wb: 1421965073,
    images: 4,
  },
  {
    slug: "hoodie-zip-grey",
    name: "Худи на молнии с начёсом",
    category: "knit",
    color: "Серый меланж",
    isNew: true,
    sizes: ["S", "M", "L", "XL", "2XL"],
    composition: "51% хлопок, 49% полиэстер",
    care: "Деликатная стирка. Гладить с изнанки до 100 °C.",
    description:
      "Объёмное худи из плотного хлопкового трикотажа с мягким начёсом. Металлическая молния, вышивка Grisha на груди и надпись Crème de la crème на спине.",
    fit: "Рост модели 175 см, размер S",
    wb: 1527145348,
    images: 4,
  },
  {
    slug: "joggers-wide",
    name: "Широкие брюки с начёсом",
    category: "knit",
    color: "Светло-серый меланж",
    isNew: true,
    sizes: ["S", "M", "L", "XL", "2XL"],
    composition: "84% хлопок, 16% полиэстер",
    care: "Деликатная стирка до 30 °C.",
    description:
      "Прямые широкие брюки на кулиске из тёплого трикотажа. Комплект с худи на молнии — или отдельно, с рубашкой и кедами.",
    fit: "Рост модели 175 см, размер S",
    wb: 1527334418,
    images: 4,
  },
  {
    slug: "hoodie-zip-beige",
    name: "Худи на молнии с начёсом",
    category: "knit",
    color: "Бежевый",
    sizes: ["S", "M", "L", "XL", "2XL"],
    composition: "51% хлопок, 49% полиэстер",
    care: "Деликатная стирка. Гладить с изнанки до 100 °C.",
    description:
      "Тёплое худи свободного кроя в мягком бежевом цвете. Надпись But first, coffee на спине и вышитый логотип на груди.",
    fit: "Рост модели 175 см, размер S",
    wb: 1524007830,
    images: 4,
  },
  {
    slug: "trousers-lowrise-black",
    name: "Укороченные брюки",
    category: "trousers",
    color: "Чёрный",
    sizes: ["S", "M", "L", "XL", "2XL"],
    composition: "64% полиэстер, 26% вискоза, 8% шерсть, 2% спандекс",
    care: "Деликатная стирка или химчистка. Гладить до 100 °C.",
    description:
      "Классические брюки с низкой посадкой и длиной до щиколотки. Застёжка на крючки и молнию, боковые карманы. Базовая вещь, которая работает каждый день.",
    fit: "Рост модели 170 см, размер S",
    wb: 920451222,
    images: 4,
  },
  {
    slug: "trousers-lowrise-grey",
    name: "Укороченные брюки",
    category: "trousers",
    color: "Серый графит",
    sizes: ["S", "M", "L", "XL", "2XL"],
    composition: "64% полиэстер, 26% вискоза, 8% шерсть, 2% спандекс",
    care: "Деликатная стирка или химчистка. Гладить до 100 °C.",
    description:
      "Те же брюки с низкой посадкой — в глубоком сером. С белой футболкой и кедами или с рубашкой и каблуком.",
    fit: "Рост модели 170 см, размер S",
    wb: 922544596,
    images: 4,
  },
  {
    slug: "jeans-wide-graphite",
    name: "Широкие джинсы на кулиске",
    category: "denim",
    color: "Графит",
    sizes: ["XS", "S", "M", "L", "XL"],
    composition: "98% хлопок, 2% эластан",
    care: "Стирка до 40 °C изнанкой наружу.",
    description:
      "Прямые широкие джинсы длиной до щиколотки с эластичным поясом на кулиске. Удобство спортивных брюк в плотном хлопковом дениме.",
    fit: "Рост модели 170 см, размер S",
    wb: 1181402256,
    images: 4,
  },
  {
    slug: "jeans-wide-black",
    name: "Широкие джинсы на кулиске",
    category: "denim",
    color: "Чёрный",
    sizes: ["XS", "S", "M", "L", "XL"],
    composition: "98% хлопок, 2% эластан",
    care: "Стирка до 40 °C изнанкой наружу.",
    description:
      "Чёрная версия наших джинсов на кулиске. Носите с трикотажем и ботинками или с футболкой и сандалиями.",
    fit: "Рост модели 170 см, размер S",
    wb: 1326444237,
    images: 4,
  },
  {
    slug: "jeans-boyfriend",
    name: "Джинсы бойфренд",
    category: "denim",
    color: "Тёмно-синий",
    sizes: ["S", "M", "L"],
    composition: "88% хлопок, 12% полиэстер",
    care: "Стирка до 40 °C изнанкой наружу.",
    description:
      "Свободные джинсы с прямой штаниной и подворотом. Глубокий тёмно-синий цвет без потёртостей.",
    fit: "Рост модели 175 см, размер S",
    wb: 1150716522,
    images: 4,
  },
  {
    slug: "skirt-pleated-red",
    name: "Юбка миди со складками",
    category: "skirts",
    color: "Красный",
    sizes: ["S", "M", "L"],
    composition: "100% полиэстер",
    care: "Деликатная стирка или химчистка.",
    description:
      "Пышная юбка миди с глубокими складками. Яркий акцент для простых образов: с белой футболкой и кедами.",
    fit: "Рост модели 175 см, размер S",
    wb: 494955571,
    images: 4,
  },
];

export const img = (slug: string, n: number) => `/images/p/${slug}-${n}.webp`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const categoryTitle = (key: CategoryKey) =>
  categories.find((c) => c.key === key)?.title ?? "";

export const formatPrice = (price?: number) =>
  price ? `${price.toLocaleString("ru-RU")} ₽` : "";
