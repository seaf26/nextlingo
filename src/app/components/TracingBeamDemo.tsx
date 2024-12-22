"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { useTranslations } from "next-intl";
import img from "../../../public/images/1731345137489.jpeg";
import img2 from "../../../public/images/OIP.jpeg";
import img3 from "../../../public/images/op.jpeg";
import img4 from "../../../public/images/download.jpeg";
import img5 from "../../../public/images/WhatsApp Image 2024-12-21 at 14.46.26_70873d30.jpg";
import img6 from "../../../public/images/WhatsAppImage2024-12-21at15.05.48_09493752.jpg";
import img7 from "../../../public/images/cyber.jpg";
const inter = Inter({ subsets: ["latin"] });

export function TracingBeamDemo() {
  const t = useTranslations("home_blog.blog");

  const dummyContent = [
    {
      title: t("card1.title"),
      description: (
        <>
          <p>{t("card1.parg1")}</p>
        </>
      ),
      badge: t("card1.badge"),
      image: img,
    },
    {
      title: t("card2.title"),
      description: (
        <>
          <p>{t("card2.parg")}</p>
        </>
      ),
      badge: t("card2.badge"),
      image: img2,
    },
    {
      title: t("card3.title"),
      description: (
        <>
          <p>{t("card3.parg")}</p>
        </>
      ),
      badge: t("card3.badge"),
      image: img3,
    },
    {
      title: t("card4.title"),
      description: (
        <>
          <p>{t("card4.parg")}</p>
        </>
      ),
      badge: t("card4.badge"),
      image: img4,
    },
    {
      title: t("card5.title"),
      description: (
        <>
          <p>{t("card5.parg")}</p>
        </>
      ),
      badge: t("card5.badge"),
      image: img5,
    },
    {
      title: t("card6.title"),
      description: (
        <>
          <p>{t("card6.parg")}</p>
        </>
      ),
      badge: t("card6.badge"),
      image: img6,
    },
    {
      title: t("card7.title"),
      description: (
        <>
          <p>{t("card7.parg")}</p>
        </>
      ),
      badge: t("card7.badge"),
      image: img7,
    }
  ];

  return (
    <TracingBeam className="px-6 mt-36">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge(inter.className, "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
