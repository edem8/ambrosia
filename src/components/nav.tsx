"use client";
import { ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./menu";
import useIsScroll from "@/hooks/useScroll";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { scrolled } = useIsScroll();

  const navLinkClass =
    "text-xs xl:text-sm 3xl:text-base 3xl:tracking-wider  tracking-wide hover:opacity-70 opacity-70 transition-opacity";

  return (
    <header className="w-full">
      <nav
        className={`flex items-center justify-around py-10 px-10 lg:py-14 2xl:py-10 lg:px-0 xl:px-8 3xl:px-12 md:fixed w-full z-20 duration-300 ${
          scrolled ? "md:bg-white/5  backdrop-blur-xs text-black" : "text-white"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex font-semibold items-center space-x-6 lg:space-x-8 xl:space-x-20 3xl:space-x-30 lg:px-20"></div>

        {/* Centered bag svg*/}
        <div className="absolute  inset-x-0 top-0 bottom-0 hidden md:flex items-center justify-center"></div>

        {/* Desktop Navigation (Second set of links) */}
        <div className="hidden  md:flex items-center gap-4">
          {/* <FiSearch size={22} /> */}
          {/* <div className="bg-gray-300 px-6 flex items-center justify-between  py-3 rounded-full">
            <p>Shop</p>
            <HiOutlineShoppingBag size={22} />
          </div> */}
        </div>

        {/* Mobile Menu Button */}
        {!mobileMenu && (
          <Menu
            mobileMenuState={mobileMenu}
            setMobileMenuState={setMobileMenu}
          />
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white text-black flex flex-col p-8 overflow-x-hidden transition-all duration-300 ${
          mobileMenu
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        {/* Close Section */}
        <div className="w-full flex justify-around items-center pb-8 border-b border-black">
          <h1 className="font-[Bellefair] font-medium tracking-widest text-2xl text-gray-600  w-full text-center">
            AMBROSIA
          </h1>
        </div>

        {/* Mobile Links */}
        <div className="text-center flex flex-col w-full items-center mt-10">
          <Link
            href="#businesses"
            className="block text-xs tracking-wide w-full mb-2 p-4 border-b border-gray-300"
          >
            ABOUT
          </Link>
          <Link
            href="#businesses"
            className="block text-xs tracking-wide mb-2 w-full p-4 border-b border-gray-300"
          >
            TESTIMONIAL
          </Link>
          <Link
            href="#businesses"
            className="block text-xs tracking-wide mb-2 w-full p-4 border-b border-gray-300"
          >
            BLOGS
          </Link>
          <Link
            href="#businesses"
            className="block text-xs tracking-wide mb-2 w-full p-4 border-b border-gray-300"
          >
            NEWSLETTER
          </Link>
          <Link
            href="#businesses"
            className="block text-xs tracking-wide mb-2 w-full p-4 border-b border-gray-300"
          >
            SHOP
          </Link>
          <Link
            href="#businesses"
            className="block text-xs tracking-wide mb-2 w-full p-4 border-b border-gray-300"
          >
            CONTACT
          </Link>

          {/* Close Button */}
          <button
            className="flex text-xs space-x-2 tracking-wide mb-2 p-4"
            onClick={() => setMobileMenu(false)}
          >
            CLOSE <X size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
