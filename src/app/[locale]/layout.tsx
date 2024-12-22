// 'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../css/style.css";
import Footer from "../components/ui/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ClientWrapper from "../components/ClientWrapper"; // Import the ClientWrapper
import { NavbarDemo } from "../components/ui/NavbarDemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const messages = await getMessages({ locale });

  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale || "en"} dir={dir}>
      {/* bg-black in the body */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:bg-gray-950 overflow-x-hidden font-inter bg-white text-black text-base dark:text-gray-200 antialiased mx-auto`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavbarDemo locale={locale} />
          <ClientWrapper>{children}</ClientWrapper>
          <Footer />  
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
