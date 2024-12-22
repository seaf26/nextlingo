import Image from "next/image";
import BlurredShape from "../../../public/images/blurred-shape.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function Cta() {
  const t = useTranslations("Cta");
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="dark:bg-gradient-to-r dark:from-transparent dark:via-gray-800/50   bg-gradient-to-r from-transparent via-gray-700/70         py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
  {t('title')}
</h2>
            <div className="mx-auto w-24 sm:flex  sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <Link
                  className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    {t('button')}
        
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
