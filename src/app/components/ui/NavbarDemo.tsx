"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
{/* <CiMenuFries /> */}


export function NavbarDemo() {

  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2"  />
    </div>
  );
}

function Navbar({ className,  }: { className?: string;  }) {
  const [active, setActive] = useState<string | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    // Set the initial screen width on the client side
    setScreenWidth(window.innerWidth);

    // Add event listener to update screen width on resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // const [bigMenu, setBigMenu] = useState(false);

  // const menuChange = () => {
  //   setBigMenu(!bigMenu);
  // }
  // useEffect(()=>{
  //   if (!bigMenu) {
  //     document.body.style.overflow = 'auto';
  //   } else {
  //     document.body.style.overflow = 'hidden';
  //   }
  // },[bigMenu]);
  return (
    <div
      className={cn(
        "fixed top-10 items-center  inset-x-0 max-w-2xl max-[890px]:max-w-xl max-[680px]:w-fit mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex  gap-10 max-[680px]:gap-5 mx-auto">
          <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="الصفحة الرئيسية">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href={'/'}>تطوير الويب</HoveredLink>
              {/* <HoveredLink href={`/${locale}/interface-design`}>
                Interface Design
              </HoveredLink>
              <HoveredLink href={`/${locale}/seo`}>
                Search Engine Optimization
              </HoveredLink>
              <HoveredLink href={`/${locale}/branding`}>Branding</HoveredLink> */}
              {screenWidth < 768 && (
                <>
                  <DarkModeToggle />
                  
                </>
              )}
            </div>
          </MenuItem>
          </Link>

          {/* <MenuItem setActive={setActive} active={active} item="المشاريع"> */}
            {/* <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href={'/about'}
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href={'/about'}
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href={'/about'}
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href={'/about'}
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div> */}
          {/* </MenuItem> */}
          
          <div className="text-black dark:text-white">
            <Link
              className="hover:text-gray-300 transition duration-200"
              href={'/about'}
            >
             المشاريع
            </Link>
          </div>
          <div className="text-black dark:text-white ">
            <Link
              className="hover:text-gray-300 transition duration-200"
              href={'/blog'}
            >
المدونة            </Link>
          </div>
          <div className="text-black dark:text-white">
            <Link
              className="hover:text-gray-300 transition duration-200"
              href={'/contact'}
            >
              اتصل بنا
            </Link>
          </div>
        </div>
        {screenWidth > 768 && (
                <>
                  <DarkModeToggle />
                </>
              )}
        {/* { (
          bigMenu ? (
            <AiOutlineClose onClick={menuChange} size={30} />
          ) : (
            <CiMenuFries onClick={menuChange} className="menu" size={48} />
          )
        ) } */}
      </Menu>
    </div>
  );
}
