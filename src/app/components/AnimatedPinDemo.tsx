"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import sa from "../../../public/images/sa.png";
import kids from "../../../public/images/kids.png";
import mana from "../../../public/images/mana.png";
import inov from "../../../public/images/inoventhomepage.png";

import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <>
      <div className="mx-auto max-w-3xl pb-12 mt-20 text-center md:pb-20 -z-0">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            عرض أحدث أعمالنا
          </span>
        </div>
        <h2 className="animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-black dark:text-transparent md:text-4xl">
          مشاريعنا الأخيرة
        </h2>
        <p className="text-lg dark:text-indigo-200/65 text-gray-800">
          نحن نقدم التصميم الأكثر استجابة ووظائف تكنولوجيا المعلومات للشركات
          والأعمال في جميع أنحاء العالم.
        </p>
      </div>

      <div className=" w-full flex  flex-wrap  items-center justify-center ">
        <div className=" mt-16 flex items-center justify-center ">
          <PinContainer
            title="/educhains.com"
            href="https://educhains.live/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] max-[400px]:w-[16rem] max-[400px]h-[16rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base dark:text-slate-100 text-black">
                edu chains{" "}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                منصة تعليمية للمؤسسات لتطوير مهارات الموظفين                </span>
              </div>
                <Image src={sa} alt="تصوير فوتوغرافي"  className="flex flex-1 w-full rounded-lg mt-4object-cover" />
            </div>
          </PinContainer>
        </div>
        <div className=" mt-16 flex items-center justify-center ">
          <PinContainer
            title="/manarat.com"
            href="https://manarat.inom-techs.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] max-[400px]:w-[16rem] max-[400px]h-[16rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base dark:text-slate-100 text-black">
              manarat
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                واجهة احترافية تعرّف بخدمات وأعمال الطباعة.                </span>
              </div>
              <Image src={mana} alt="تصوير فوتوغرافي"  className="flex flex-1 w-full rounded-lg mt-4object-cover" />
              </div>
          </PinContainer>
        </div>
        <div className=" mt-16 flex items-center justify-center ">
          <PinContainer
            title="/kids.com"
            href="https://kids.educhains.live/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] max-[400px]:w-[16rem] max-[400px]h-[16rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base dark:text-slate-100 text-black">
                our kids
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                متجر إلكتروني يعرض ويبيع ألعابًا ترفيهية وتعليمية للأطفال.                </span>
              </div>
                <Image src={kids} alt="تصوير فوتوغرافي"  className="flex flex-1 w-full rounded-lg mt-4object-cover" />
            </div>
          </PinContainer>
        </div>
        <div className=" mt-16 flex items-center justify-center ">
          <PinContainer
            title="/outseller.com"
            href="https://outseller.inom-techs.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] max-[400px]:w-[16rem] max-[400px]h-[16rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base dark:text-slate-100 text-black">
                out seller
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  الأمن السيبراني يحمي الأنظمة والشبكات والبيانات من الهجمات
                  الرقمية، مما يضمن سرية وسلامة وتوافر المعلومات الحساسة.
                </span>
              </div>
                <Image src={sa} alt="تصوير فوتوغرافي"  className="flex flex-1 w-full rounded-lg mt-4object-cover" />
            </div>
          </PinContainer>
        </div>
        <div className=" mt-16 flex items-center justify-center ">
          <PinContainer
            title="/ui.inovent.com"
            href="https://inovent.inom-techs.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] max-[400px]:w-[16rem] max-[400px]h-[16rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  dark:text-slate-100 text-black">
                inovent
                </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                تجربة مؤتمرات افتراضية تفاعلية باستخدام الواقع الافتراضي.
                </span>
              </div>
                <Image src={inov} alt="تصوير فوتوغرافي"  className="flex flex-1 w-full rounded-lg mt-4object-cover" />
            </div>
          </PinContainer>
        </div>
        <div className=" mt-16 flex items-center justify-center  ">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://outseller.inom-techs.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] max-[400px]:w-[16rem] max-[400px]h-[16rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  dark:text-slate-100 text-black">
                teams talk 
                              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  نمو الأعمال هو وظيفة دورة حياة الأعمال، اتجاهات نمو الصناعة،
                  ورغبة المالكين في خلق قيمة الأسهم.
                </span>
              </div>
              <Image src={sa} alt="تصوير فوتوغرافي"  className="flex flex-1 w-full rounded-lg mt-4object-cover" />
              </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
}

// 288*144