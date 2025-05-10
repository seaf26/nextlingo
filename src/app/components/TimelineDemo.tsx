import Image from "next/image"
import Link from "next/link"
import educhain from "../../../public/images/educhaini.png"
import educhain2 from "../../../public/images/educhain2.png"
import educhain3 from "../../../public/images/educhain3.png"
import educhain4 from "../../../public/images/educhain4.png"
import outseller from "../../../public/images/outseller.png"
import outseller1 from "../../../public/images/outseller1.png"
import outseller2 from "../../../public/images/outseller2.png"
import outseller3 from "../../../public/images/outseller3.png"
import ourkids from "../../../public/images/ourkids.png"
import ourkids2 from "../../../public/images/ourkids2.png"
import ourkids3 from "../../../public/images/ourkids3.png"
import ourkids4 from "../../../public/images/ourkids4.png"
import inovent from "../../../public/images/inovent1.png"
import inovent2 from "../../../public/images/inovent2.png"
import inovent3 from "../../../public/images/inovent3.png"
import inovent4 from "../../../public/images/inovent4.png"
import manart from "../../../public/images/manarat1.png"
import manart2 from "../../../public/images/mananrt2.png"
import manart3 from "../../../public/images/manart3.png"
import manart4 from "../../../public/images/mananrt4.png"
import erp from "../../../public/images/erp.png"
import erp2 from "../../../public/images/erp.png"
import erp3 from "../../../public/images/erp.png"
import erp4 from "../../../public/images/erp.png"
import { Timeline } from "../components/ui/timeline"

export function TimelineDemo() {
  const data = [
    //manart
    {
      id: "manarat",
      title: "منارات الهدي",
      content: (
        <div dir="rtl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            منارات الهدي هو موقع تعريفي ل شركة طباعة البوسترات
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "manarat1", src: manart, alt: "منارات الهدي - الصفحة الرئيسية" },
              { id: "manarat2", src: manart2, alt: "منارات الهدي - خدماتنا" },
              { id: "manarat3", src: manart3, alt: "منارات الهدي - معرض الأعمال" },
              { id: "manarat4", src: manart4, alt: "منارات الهدي - تواصل معنا" },
            ].map((image) => (
              <Link
                key={image.id}
                href={`/about/manarat/${image.id}`}
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    //inovent
    {
      id: "inovent",
      title: "Inovent",
      content: (
        <div dir="rtl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Inovent هي موقع ل حضور المؤتمرات و الفعاليات عن طريق الواقع الافتراضي
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "inovent1", src: inovent, alt: "Inovent - الصفحة الرئيسية" },
              { id: "inovent2", src: inovent2, alt: "Inovent - المؤتمرات" },
              { id: "inovent3", src: inovent3, alt: "Inovent - الواقع الافتراضي" },
              { id: "inovent4", src: inovent4, alt: "Inovent - التسجيل" },
            ].map((image) => (
              <Link
                key={image.id}
                href={`/about/inovent/${image.id}`}
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    // edu chain
    {
      id: "educhain",
      title: "Edu Chains",
      content: (
        <div dir="rtl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Edu Chain هي منصة تعليمية ل تطوير مهارات الموظفين في المؤسسات والشركات الكبيرة. تم تصميمها لتكون سهلة
            الاستخدام ومرنة لتلبية احتياجات الشركات المختلفة. يمكن للموظفين الوصول إلى المواد التعليمية والدورات
            التدريبية عبر الإنترنت والتعلم على مدار الساعة.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "educhain1", src: educhain, alt: "Edu Chain - الصفحة الرئيسية" },
              { id: "educhain2", src: educhain2, alt: "Edu Chain - الدورات التدريبية" },
              { id: "educhain3", src: educhain3, alt: "Edu Chain - لوحة التحكم" },
              { id: "educhain4", src: educhain4, alt: "Edu Chain - التقارير" },
            ].map((image) => (
              <Link
                key={image.id}
                href={`/about/educhain/${image.id}`}
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    // outseller
    {
      id: "outseller",
      title: "Out Seller",
      content: (
        <div dir="rtl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            OutSeller هي منصة مبيعات تساعد الشركات قي توظيف الموظفين وايضا في ادارة حسابات الشركات
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "outseller1", src: outseller, alt: "Out Seller - الصفحة الرئيسية" },
              { id: "outseller2", src: outseller1, alt: "Out Seller - إدارة المبيعات" },
              { id: "outseller3", src: outseller2, alt: "Out Seller - التوظيف" },
              { id: "outseller4", src: outseller3, alt: "Out Seller - الحسابات" },
            ].map((image) => (
              <Link
                key={image.id}
                href={`/about/outseller/${image.id}`}
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    // our kids
    {
      id: "ourkids",
      title: "اولادنا",
      content: (
        <div dir="rtl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            موقع اولادنا التجاري هو موقع ل بيع العاب الاطفال وبه الكثير من المميزات انصحكم بزيارته
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "ourkids1", src: ourkids, alt: "اولادنا - الصفحة الرئيسية" },
              { id: "ourkids2", src: ourkids2, alt: "اولادنا - المنتجات" },
              { id: "ourkids3", src: ourkids3, alt: "اولادنا - سلة التسوق" },
              { id: "ourkids4", src: ourkids4, alt: "اولادنا - الحساب الشخصي" },
            ].map((image) => (
              <Link
                key={image.id}
                href={`/about/ourkids/${image.id}`}
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    // ERP
    {
      id: "erp",
      title: "ERP System",
      content: (
        <div dir="rtl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            ERP System هو نظام ادارة الموارد البشرية والمالية والمخازن والمبيعات
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "erp1", src: erp || "/placeholder.svg", alt: "ERP - لوحة التحكم" },
              { id: "erp2", src: erp2 || "/placeholder.svg", alt: "ERP - الموارد البشرية" },
              { id: "erp3", src: erp3 || "/placeholder.svg", alt: "ERP - المالية" },
              { id: "erp4", src: erp4 || "/placeholder.svg", alt: "ERP - المخازن" },
            ].map((image) => (
              <Link
                key={image.id}
                href={`/about/erp/${image.id}`}
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </Link>
            ))}
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}

