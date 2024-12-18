"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Switcher from "../Switcher";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle";

export function NavbarDemo({ locale }: { locale: string }) {
  const t = useTranslations("header");
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" locale={locale} />
    </div>
  );
}

function Navbar({ className, locale }: { className?: string; locale: string }) {
  const [active, setActive] = useState<string | null>(null);
  const t = useTranslations("header");

  return (
    <div
      className={cn("fixed top-10  inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      

      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item={t("home")}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href={`/${locale}/`}>Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={t("projects")}>
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href={`/${locale}/about`}
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href={`/${locale}/about`}
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href={`/${locale}/about`}
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href={`/${locale}/about`}
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={t("blog")}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <Link href={`/${locale}/contact`} className=" text-black dark:text-white ">
          {t("contact")}
        </Link>{" "}
        <DarkModeToggle />
        <Switcher />
      </Menu>
      </div>

  
  );
}
