"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import img from "../../../public/images/1731345137489.jpeg";
import img2 from "../../../public/images/OIP.jpeg";
import img3 from "../../../public/images/op.jpeg";
import img4 from "../../../public/images/download.jpeg";
import img5 from "../../../public/images/WhatsApp Image 2024-12-21 at 14.46.26_70873d30.jpg";
import img6 from "../../../public/images/WhatsAppImage2024-12-21at15.05.48_09493752.jpg";
import img7 from "../../../public/images/cyber.jpg";
const inter = Inter({ subsets: ["latin"] });

export function TracingBeamDemo() {
  const dummyContent = [
    {
      title: "توافق المتصفح",
      description: (
        <>
          <p>
            أحيانًا تكتب الكود، ويعمل بشكل مثالي على Chrome، ولكن على Safari أو
            Firefox، يصبح كل شيء فوضويًا! هذه المشكلة تحدث بسبب اختلاف محركات
            التصفح ودعم الميزات، لذا من المهم اختبار الكود على أكثر من متصفح
            لضمان التوافق.
          </p>
        </>
      ),
      badge: "تطوير الويب",
      image: img,
    },
    {
      title: "ميزات وتحسينات Laravel 11 الجديدة",
      description: (
        <>
          <p>
            Lazy Collections توفر طريقة فعالة للتعامل مع كميات كبيرة من البيانات
            دون استهلاك الذاكرة بالكامل. يمكن استخدام lazy() مع where لتصفية
            البيانات تدريجيًا، مما يحسن الأداء ويقلل الحمل على الخادم.
          </p>
        </>
      ),
      badge: "Laravel",
      image: img2,
    },
    {
      title: "Micro Frontend",
      description: (
        <>
          <p>
            يسمح Micro Frontend بتقسيم المشروع إلى أجزاء مستقلة، مما يسهل دمج
            أطر عمل مختلفة مثل React وAngular وVue. هذه التقنية تعزز المرونة
            وتسمح لكل فريق بالعمل على جزء منفصل دون التأثير على بقية المشروع.
          </p>
        </>
      ),
      badge: "الواجهة الأمامية",
      image: img3,
    },
    {
      title: "ما هو CSRF؟",
      description: (
        <>
          <p>
            CSRF هو هجوم يتيح للمهاجم إرسال طلبات غير مصرح بها نيابة عن المستخدم
            المسجل الدخول. يتم الحماية منه باستخدام رموز CSRF، كوكيز SameSite،
            والتحقق من مصدر الطلب لمنع تنفيذ العمليات غير المقصودة.
          </p>
        </>
      ),
      badge: "الأمان",
      image: img4,
    },
    {
      title: "ما مدى أهمية SEO للأعمال اليوم؟",
      description: (
        <>
          <p>
            لا SEO = لا رؤية لذا، لا تخاطر بأن تكون غير مرئي على الإنترنت. حتى
            مع المنتجات أو الخدمات الرائعة، لن يجد العملاء المحتملون موقعك إذا
            لم يكن محسنًا. SEO هو ما يجعل عملك ملحوظًا، ويجلب الجمهور المناسب،
            ويبني الثقة من خلال تحسين ترتيب البحث. بدونه، أنت غير مرئي. معه، أنت
            الخيار المفضل. نظرًا لأهميته الكبيرة في التسويق الرقمي، ينمو قطاع
            SEO بسرعة، ومن المتوقع أن يصل حجمه السوقي العالمي إلى 157.41 مليار
            دولار بحلول عام 2032. دعونا نستكشف بعض البيانات لفهم دور سحر SEO
            بشكل أفضل: بحلول عام 2025، من المتوقع أن تكون 50% من عمليات البحث
            مفعلة بالصوت، مما يتطلب من شركات SEO تحسين الاستفسارات الطويلة
            والمحادثات. اعتبارًا من عام 2023، يأتي 58% من إجمالي حركة المرور على
            المواقع من الأجهزة المحمولة، 
          </p>
        </>
      ),
      badge: "SEO",
      image: img5,
    },
    {
      title: "الطباعة الرجعية الجذابة",
      description: (
        <>
          <p>
            في السنوات الأخيرة، شهد عالم التصميم هيمنة الطباعة الكبيرة والجريئة
            في مجال واجهات المستخدم، مما يضع النص في المقدمة لجذب الانتباه. يجلب
            عام 2024 أيضًا موجة جديدة من الإبداع من خلال إعادة تصور جماليات
            العصور القديمة بطرق مثيرة ومبتكرة، مثل العودة إلى الطباعة الرجعية
            والجذابة والفقاعية. الفكرة وراء هذا الاتجاه هي استحضار ذكريات من
            تصاميم السبعينيات والثمانينيات القديمة والحيوية مع جعلها تبدو خالدة
            وممتعة. يتأثر هذا النمط التصميمي بالماضي ويمنح الواجهات المعاصرة
            شعورًا بالحنين إلى التصاميم القديمة.
          </p>
        </>
      ),
      badge: "تصميم واجهات المستخدم وتجربة المستخدم",
      image: img6,
    },
    {
      title: "حراس الأمن السيبراني",
      description: (
        <>
          <p>
            تدريب الأمن السيبراني: قوة المعرفة في مشهد رقمي مليء بالتهديدات،
            المعرفة هي حليفك الأكبر. يزود تدريب الأمن السيبراني الأفراد
            والمنظمات بالوعي والمهارات اللازمة لتحديد ومنع والاستجابة للتهديدات
            السيبرانية بفعالية. أهمية التدريب الدوري على الأمان 1. توسيع
            المعرفة: التعلم المستمر حول التهديدات والتقنيات الناشئة أمر حيوي
            للبقاء في مقدمة المجرمين السيبرانيين. 2. تمكين المستخدم: تعليم
            المستخدمين أفضل الممارسات يمكّنهم من لعب دور نشط في الأمن السيبراني.
            3. تقليل المخاطر: الأفراد المدربون جيدًا أقل عرضة للوقوع ضحية
            للاحتيال، مما يقلل من الملف الشخصي للمخاطر العامة للمنظمة.
          </p>
        </>
      ),
      badge: "الأمان",
      image: img7,
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
