import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

const locales = ["en", "ar"];

export default getRequestConfig(async () => {
  const localeHeader = (await headers()).get('X-NEXT-INTL-LOCALE');
  const locale = localeHeader || 'en'; // Default to 'en' if locale is not found

  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});