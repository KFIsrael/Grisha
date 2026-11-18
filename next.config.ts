import type { NextConfig } from "next";

// Сайт собирается в статичные файлы (папка out/) и заливается на обычный хостинг nic.ru:
// Node.js на сервере не нужен. Фото уже в webp, поэтому оптимизация картинок отключена.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
