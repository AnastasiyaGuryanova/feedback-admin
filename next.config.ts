/** @type {import('next').NextConfig} */

const nextConfig = {
  // Включаем строгий режим React
  reactStrictMode: true,

  // Настройки для оптимизации изображений
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
