"use client";
import { cn } from "@/lib/utils";
import Spotlight from "./spotlight";
import Link from "next/link";

export function CardDemo() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-16 ">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                عرض أحدث المدونات لدينا{" "}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-black dark:text-transparent md:text-4xl">
              حلول مبتكرة لنجاحك
            </h2>
            <p className="text-lg dark:text-indigo-200/65 text-gray-800">
              أحدث المدونات{" "}
            </p>
          </div>
          {/* Spotlight items */}
          <div className="grid gap-12 lg:gap-16">
            <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">

              {/* web dev */}
              <Link href="/blog/laravel-11" className="max-w-xs w-full" data-aos="fade-up">
              <div className="max-w-xs w-full" data-aos="fade-up">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://media.istockphoto.com/id/2163995739/photo/css-sass-styles-preprocessor-script-lines-abstract-screen-of-web-developer.jpg?s=2048x2048&w=is&k=20&c=KavEh87Q5oJBBlKcqRkzgd8mpeuQPc_3iGivxipvAZ4=)] bg-cover bg-center",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media.giphy.com/media/78XCFBGOlS6keY1Bil/giphy.gif?cid=790b7611dczmo3x9qippyfel6rbgjsleknlawez7gqzsrhia&ep=v1_gifs_search&rid=giphy.gif&ct=g)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media.giphy.com/media/78XCFBGOlS6keY1Bil/giphy.gif?cid=790b7611dczmo3x9qippyfel6rbgjsleknlawez7gqzsrhia&ep=v1_gifs_search&rid=giphy.gif&ct=g)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-20 ">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      تطوير الويب
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4  bg-black rounded-md p-2 ">
                      تطوير الويب يشمل إنشاء وصيانة المواقع الإلكترونية، وضمان
                      أنها تعمل بشكل جيد وجذابة بصريًا.
                    </p>
                  </div>
                </div>
              </div>
              </Link>

              {/* mobile */}
              <div className="max-w-xs w-full" data-aos="fade-up">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/424299/pexels-photo-424299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHlyZG5wOHFhMmI1bHJwY2VzMGRycm5tMG8xeGg5cmE1Z3MzdzFuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6L1FXnDD3qvHOsgxzC/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHlyZG5wOHFhMmI1bHJwY2VzMGRycm5tMG8xeGg5cmE1Z3MzdzFuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6L1FXnDD3qvHOsgxzC/giphy.gif)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-20">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      تطبيقات الجوال
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4  bg-black rounded-md p-2 ">
                    تطوير تطبيقات الجوال يشمل إنشاء برامج للهواتف الذكية، ويتضمن التصميم، البرمجة، الاختبارات.

                    </p>
                  </div>
                </div>
              </div>
              {/* cyber */}
              <Link href="/blog/cyber-security-training" >
              <div className="max-w-xs w-full" data-aos="fade-up">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://media.istockphoto.com/id/1166809872/vector/cyber-security-icon-filled-cyber-security-icon-for-website-design-and-mobile-app-development.jpg?s=2048x2048&w=is&k=20&c=Rq98wl96ilAbh0JajD1Czho5ZLJOW5ZJa48rzQVPcXE=)] bg-cover bg-center",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjY5cm02dm1zdW5rcjdiNmhnYmluc2thbjlhdGdidW1samdmdmpjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/077i6AULCXc0FKTj9s/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjY5cm02dm1zdW5rcjdiNmhnYmluc2thbjlhdGdidW1samdmdmpjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/077i6AULCXc0FKTj9s/giphy.gif)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-20">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      الأمن السيبراني{" "}
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4  bg-black rounded-md p-2">
                    الأمن السيبراني يشمل حماية الأنظمة والشبكات والبيانات من الهجمات الرقمية، مما يضمن سرية وسلامة .

                    </p>
                  </div>
                </div>
              </div>
              </Link>
              {/* marketing */}
              <Link href="/blog" >
              <div className="max-w-xs w-full" data-aos="fade-up">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://media.istockphoto.com/id/1762329323/photo/strategic-planning-plays-a-crucial-role-in-achieving-long-term-success-building-wealth.jpg?s=2048x2048&w=is&k=20&c=Ag80Zjrq233-TC0EGjY4G4DCf9D6lqUs4lvvjIhUJik=)] bg-cover bg-center",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc211bnI1aXBibnFmbHBvbTZnNGZhdWViMmlrbzA0Ym4xcjZyM3I4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gHiRWOaXGGHOY5w6f3/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc211bnI1aXBibnFmbHBvbTZnNGZhdWViMmlrbzA0Ym4xcjZyM3I4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gHiRWOaXGGHOY5w6f3/giphy.gif)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-20">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      التسويق الرقمي{" "}
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4  bg-black rounded-md p-2">
                    التسويق الرقمي يستخدم القنوات عبر الإنترنت مثل وسائل التواصل الاجتماعي وإنشاء المحتوى لتعزيز رؤية المنتج .

                    </p>
                  </div>
                </div>
              </div>
              </Link>
              {/* seo */}
              <Link href="/blog/seo" >
              <div className="max-w-xs w-full" data-aos="fade-up">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://media.istockphoto.com/id/1431925581/photo/woman-using-laptop-with-vr-seo-text-on-keyboard.jpg?s=2048x2048&w=is&k=20&c=VkYkGnYqcPIKYvauRjjqMQnKnU-0oBXIcfNBVXZgx60=)] bg-cover bg-center",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media.giphy.com/media/QfWcoZApJxmQPUTi9K/giphy.gif?cid=ecf05e47ujvxdjkja1ufearpmft674uytmkqlt7oalipznta&ep=v1_gifs_search&rid=giphy.gif&ct=g)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media.giphy.com/media/QfWcoZApJxmQPUTi9K/giphy.gif?cid=ecf05e47ujvxdjkja1ufearpmft674uytmkqlt7oalipznta&ep=v1_gifs_search&rid=giphy.gif&ct=g)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-20">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      تحسين محركات البحث{" "}
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4  bg-black rounded-md p-2">
                    تحسين محركات البحث هو عملية تحسين جودة وكمية حركة المرور إلى موقع ويب أو صفحة ويب من محركات البحث.

                    </p>
                  </div>
                </div>
              </div>
              </Link>

              {/* ui ux */}
              <Link href="/blog/ui-ux-design" >
              <div className="max-w-xs w-full" data-aos="fade-up">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://media.istockphoto.com/id/1189378904/vector/mobile-apps-creation-of-a-mobile-application-web-page-created-from-separate-blocks-user.jpg?s=612x612&w=0&k=20&c=HIiI8lu3-_-IhUS-Jj20zw0AS-w1FIKXGn_l4qdHAzQ=)] bg-cover bg-center",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media.giphy.com/media/elmmix4VAq685H1g3f/giphy.gif?cid=ecf05e47o50w14k055m4fsfxulz4q2twk4ga1qt58lmb0111&ep=v1_gifs_related&rid=giphy.gif&ct=g)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media.giphy.com/media/elmmix4VAq685H1g3f/giphy.gif?cid=ecf05e47o50w14k055m4fsfxulz4q2twk4ga1qt58lmb0111&ep=v1_gifs_related&rid=giphy.gif&ct=g)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-20">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      تصميم واجهة المستخدم{" "}
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4  bg-black rounded-md p-2">
                    تصميم واجهة المستخدم يشمل إنشاء واجهات تفاعلية وجذابة للمستخدمين، مع التركيز على تجربة المستخدم.

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
