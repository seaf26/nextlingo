import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

export default function Switcher() {
  const [isPending, startTransition] = useTransition();
  const pathName = usePathname();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value as string;
    const path = pathName.split("/").slice(2).join("/");
    router.push(`/${locale}/${path}`);
  };

  return (
    <label className="text-xs">
      <select
        defaultValue={localeActive}
        className="bg-transparent dark:bg-gray-950 text-xs text-black dark:text-white"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className=" text-black dark:text-white" value="en">English</option>
        <option className=" text-black dark:text-white" value="ar">العربية</option>
      </select>
    </label>
  );
}