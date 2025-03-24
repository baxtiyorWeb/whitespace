"use client"
import { tw } from "@/common/common";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky w-full z-10 flex items-center justify-between  bg-white shadow-md">
      <div className="text-white w-[455px] h-[103px] bg-black  py-2 text-lg flex justify-end items-center px-[30px]">
        <p className={`${tw.config.font.black} text-[24px] `}>Whitespace</p>
      </div>

      <ul className="flex space-x-6 justify-start w-1/2 px-[30px]">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={`relative font-medium  text-[16px] ${tw.config.font.black} `}>
              <span
                className={clsx(
                  "transition-all duration-300",
                  pathname === item.href ? "text-black font-semibold" : "hover:text-black"
                )}
              >
                {item.name}
              </span>
              {pathname === item.href && (
                <span className="absolute left-0 bottom-0 h-1 w-full bg-yellow-400"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;