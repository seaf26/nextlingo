'use client';
import { MailIcon, PhoneIcon } from "lucide-react";
// import { GetStaticPaths, GetStaticProps } from "next";
// import { useTranslations } from "next-intl";
import Link from "next/link";
const ContactPage = () => {
  // const t = useTranslations("contact_us");
  return (
    <>
      <div className="mx-auto max-w-3xl pb-12 mt-44 text-center md:pb-20 -z-0">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            اتصل بنا
            </span>
        </div>
        <h2 className="animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-black dark:text-transparent md:text-4xl">
        دعونا نتواصل
        </h2>
        <p className="text-lg dark:text-indigo-200/65  text-gray-800">
        "نحن نقدم التصميم الأكثر استجابة ووظائف تكنولوجيا المعلومات للشركات والأعمال في جميع أنحاء العالم.
        </p>
      </div>
      <div className="relative  mb-2 mx-auto">
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 dark:bg-gray-950 text-black dark:text-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-extrabold tracking-tight text-black dark:text-white  sm:text-3xl">
                تواصل معنا
                </h2>
                <p className="mt-3 text-lg leading-6 ">
                نحن نقدم التصميم الأكثر استجابة ووظائف تكنولوجيا المعلومات للشركات والأعمال في جميع أنحاء العالم.
                </p>
              <dl className="mt-8 text-base ">
                <div>
                    <dt className="sr-only">العنوان البريدي</dt>
                  <dd>
                    <p>٦ شارع أبو عجيلة، لوران، الإسكندرية</p>
                    <p>الإسكندرية - مصر</p>
                  </dd>
                </div>
                <div className="mt-6">
                    <dt className="sr-only">رقم الهاتف</dt>
                  <dd className="flex gap-1">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 "
                      aria-hidden="true"
                    />
                    <Link href="tel:+201005819141">01005819141</Link>
                  </dd>
                </div>
                <div className="mt-3">
                    <dt className="sr-only">البريد الإلكتروني</dt>
                  <dd className="flex gap-1">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 "
                      aria-hidden="true"
                    />
                    <Link href="mailto:inomtech@inom-techs.com">
                    اضغط هنا لإرسال بريد إلكتروني
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.902712345678!2d29.9771833!3d31.2477457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE0JzUxLjkiTiAyOcKwNTgnMzguMCJF!5e0!3m2!1sar!2ssa!4v1734906036576!5m2!1sar!2ssa"
            width="600"
            height="450"
            style={{ border: 0, filter: "invert(90%)", margin: "auto" }}
            allowFullScreen
            loading="lazy"
            className="map-iframe"
            ></iframe>
            <style jsx>{`
            @media (max-width: 680px) {
              .map-iframe {
              width: 100%;
              height: 300px;
              }
            }
            `}</style>
        </div>
            
      </div>
    </>
  );
}



export default ContactPage;