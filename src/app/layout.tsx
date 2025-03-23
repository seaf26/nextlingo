import { Amiri } from "next/font/google"; // Import Amiri font
import "./globals.css";
import "./css/style.css";
import Footer from "./components/ui/footer";
import ClientWrapper from "./components/ClientWrapper";
import { NavbarDemo } from "./components/ui/NavbarDemo";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin", "arabic"], // Ensure Arabic support
  weight: ["400", "700"], // Choose available weights
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className="dark">
      <body
        className={`${amiri.variable} dark:bg-black overflow-x-hidden bg-white text-black text-base dark:text-gray-200 antialiased mx-auto`}
      >
        <ClientWrapper>
          <NavbarDemo />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
