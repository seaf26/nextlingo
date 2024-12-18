import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aceternity.com', 'assets.aceternity.com'], // Add the external domains here

  },
};

export default withNextIntl(nextConfig);