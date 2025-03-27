/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { tw } from "@/common/common";
import clsx from "clsx";
import { get, isArray } from "lodash";
import { Menu, X } from "lucide-react"; // Mobil menyu uchun ikonalar
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useGetAllQuery from "../hooks/api/useGetAllQuery";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data } = useGetAllQuery({
    key: "navigation",
    url: "/navigation/"
  })

  const navItems = isArray(get(data, "data.results")) ? get(data, "data.results") : []

  return (
    <nav className="sticky w-full z-10 flex items-center justify-between bg-white shadow-md">
      {/* Logo */}
      <div className="text-white w-[455px] h-[103px] bg-black py-2 text-lg flex justify-end items-center px-[30px]">
        <p className={`${tw.config.font.black} text-[24px]`}>Whitespace</p>
      </div>

      {/* Mobil menyu tugmasi */}
      <button
        className="lg:hidden text-black p-2 mr-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop menyu */}
      <ul className="hidden lg:flex space-x-6 justify-start w-1/2 px-[30px]">
        {navItems.map((item: any) => (
          <li key={item.label}>
            <Link href={item.url} className={`relative font-medium text-[16px] ${tw.config.font.black}`}>
              <span
                className={clsx(
                  "transition-all duration-300",
                  pathname === item.label ? "text-black font-semibold" : "hover:text-black"
                )}
              >
                {item.label}
              </span>
              {pathname === item.url && (
                <span className="absolute left-0 bottom-0 h-1 w-full bg-yellow-400"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <ul className="lg:hidden absolute top-[103px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          {navItems.map((item: any) => (
            <li key={item.label}>
              <Link
                href={item.url}
                className="block text-[16px] font-medium text-black py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
