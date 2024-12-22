import Image from "next/image";
import WorflowImg01 from "../../../public/images/workflow-01.png";
import WorflowImg02 from "../../../public/images/workflow-02.png";
import WorflowImg03 from "../../../public/images/workflow-03.png";
import Spotlight from "../components/spotlight";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Workflows() {
  const t = useTranslations();
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                {t("workflows.title")}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-black dark:text-transparent md:text-4xl">
            {t("workflows.content")}
            </h2>
            <p className="text-lg dark:text-indigo-200/65  text-gray-800">
              {t("workflows.description")}
            </p>
          </div>
          {/* Spotlight items */}
          <div className="grid gap-12 lg:gap-16">
            <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
              {/* Card 1 */}
              <Link
                className="group/card relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-200/80 dark:before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-200 dark:after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
                    {/* Arrow */}
                    <div
                      className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/50 dark:border-gray-700/50 bg-gray-200/65 dark:bg-gray-800/65 text-gray-600 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={8}
                        fill="none"
                      >
                        <path
                          fill="#4B5563"
                          className="dark:fill-gray-200"
                          d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                        />
                      </svg>
                    </div>
                    {/* Image */}
                    <Image
                      className="inline-flex"
                      src={WorflowImg01}
                      width={350}
                      height={288}
                      alt="Workflow 01"
                    />
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-100/40 dark:bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.200/.15),theme(colors.gray.200/.5))_border-box] dark:before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200/60 dark:hover:bg-gray-800/60">
                          <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                            {t("workflows.card1.title")}
                          </span>
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold dark:text-indigo-200/65">
                        {t("workflows.card1.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              {/* Card 2 */}
              <Link
                className="group/card relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-200/80 dark:before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-200 dark:after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
                    {/* Arrow */}
                    <div
                      className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/50 dark:border-gray-700/50 bg-gray-200/65 dark:bg-gray-800/65 text-gray-600 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={8}
                        fill="none"
                      >
                        <path
                          fill="#4B5563"
                          className="dark:fill-gray-200"
                          d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                        />
                      </svg>
                    </div>
                    {/* Image */}
                    <Image
                      className="inline-flex"
                      src={WorflowImg01}
                      width={350}
                      height={288}
                      alt="Workflow 01"
                    />
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-100/40 dark:bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.200/.15),theme(colors.gray.200/.5))_border-box] dark:before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200/60 dark:hover:bg-gray-800/60">
                          <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                            {t("workflows.card2.title")}
                          </span>
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold dark:text-indigo-200/65">
                        {t("workflows.card2.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Card 3 */}
              <Link
                className="group/card relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-200/80 dark:before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-200 dark:after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
                    {/* Arrow */}
                    <div
                      className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/50 dark:border-gray-700/50 bg-gray-200/65 dark:bg-gray-800/65 text-gray-600 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={8}
                        fill="none"
                      >
                        <path
                          fill="#4B5563"
                          className="dark:fill-gray-200"
                          d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                        />
                      </svg>
                    </div>
                    {/* Image */}
                    <Image
                      className="inline-flex"
                      src={WorflowImg01}
                      width={350}
                      height={288}
                      alt="Workflow 01"
                    />
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-100/40 dark:bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.200/.15),theme(colors.gray.200/.5))_border-box] dark:before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200/60 dark:hover:bg-gray-800/60">
                          <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                            {t("workflows.card3.title")}
                          </span>
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold dark:text-indigo-200/65">
                        {t("workflows.card3.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </Spotlight>
            <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
              {/* card 4 */}
              <Link
                className="group/card relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-200/80 dark:before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-200 dark:after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
                    {/* Arrow */}
                    <div
                      className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/50 dark:border-gray-700/50 bg-gray-200/65 dark:bg-gray-800/65 text-gray-600 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={8}
                        fill="none"
                      >
                        <path
                          fill="#4B5563"
                          className="dark:fill-gray-200"
                          d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                        />
                      </svg>
                    </div>
                    {/* Image */}
                    <Image
                      className="inline-flex"
                      src={WorflowImg01}
                      width={350}
                      height={288}
                      alt="Workflow 01"
                    />
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-100/40 dark:bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.200/.15),theme(colors.gray.200/.5))_border-box] dark:before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200/60 dark:hover:bg-gray-800/60">
                          <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                            {t("workflows.card4.title")}
                          </span>
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold dark:text-indigo-200/65">
                        {t("workflows.card4.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Card 5 */}
              <Link
                className="group/card relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-200/80 dark:before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-200 dark:after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
                    {/* Arrow */}
                    <div
                      className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/50 dark:border-gray-700/50 bg-gray-200/65 dark:bg-gray-800/65 text-gray-600 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={8}
                        fill="none"
                      >
                        <path
                          fill="#4B5563"
                          className="dark:fill-gray-200"
                          d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                        />
                      </svg>
                    </div>
                    {/* Image */}
                    <Image
                      className="inline-flex"
                      src={WorflowImg01}
                      width={350}
                      height={288}
                      alt="Workflow 01"
                    />
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-100/40 dark:bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.200/.15),theme(colors.gray.200/.5))_border-box] dark:before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200/60 dark:hover:bg-gray-800/60">
                          <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                            {t("workflows.card5.title")}
                          </span>
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold dark:text-indigo-200/65">
                        {t("workflows.card5.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Card 6 */}
              <Link
                className="group/card relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-200/80 dark:before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-200 dark:after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
                    {/* Arrow */}
                    <div
                      className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/50 dark:border-gray-700/50 bg-gray-200/65 dark:bg-gray-800/65 text-gray-600 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={8}
                        fill="none"
                      >
                        <path
                          fill="#4B5563"
                          className="dark:fill-gray-200"
                          d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                        />
                      </svg>
                    </div>
                    {/* Image */}
                    <Image
                      className="inline-flex"
                      src={WorflowImg01}
                      width={350}
                      height={288}
                      alt="Workflow 01"
                    />
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-100/40 dark:bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.200/.15),theme(colors.gray.200/.5))_border-box] dark:before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200/60 dark:hover:bg-gray-800/60">
                          <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                            {t("workflows.card6.title")}
                          </span>
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold dark:text-indigo-200/65">
                        {t("workflows.card6.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
