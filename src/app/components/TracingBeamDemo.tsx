"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { useTranslations } from "next-intl";
const inter = Inter({ subsets: ["latin"] });

export function TracingBeamDemo() {
  const t = useTranslations("home_blog.blog");

  const dummyContent = [
    {
      title: t("card1.title"),
      description: (
        <>
          <p>
            {t("card1.parg1")}

          </p>
        </>
      ),
      badge: "React",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      
      title: t("card2.title"),
      description: (
        <>
          <p>{t("card2.parg")}</p>
        </>
      ),
      badge: "Changelog",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: t("card3.title"),
      description: (
        <>
          <p>{t("card3.parg")}</p>
        </>
      ),
      badge: "Launch Week",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: t("card4.title"),
      description: (
        <>
          <p>{t("card4.parg")}</p>
        </>
      ),
      badge: "Launch Week",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
