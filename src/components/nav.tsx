import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./menu";
import useIsScroll from "@/hooks/useScroll";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { scrolled } = useIsScroll();

  const navLinkClass =
    "text-xs xl:text-sm tracking-wide hover:opacity-70 opacity-70 transition-opacity";

  return (
    <header className="w-full">
      <nav
        className={`flex items-center justify-between py-10 px-10 lg:py-18 lg:px-0 xl:px-10  fixed w-full z-20 duration-300 ${
          scrolled ? "bg-white text-black" : "text-white"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-20 lg:px-20">
          <Link href="#businesses" className={navLinkClass}>
            ABOUT
          </Link>
          <Link href="#businesses" className={navLinkClass}>
            TESTIMONIAL
          </Link>
          <Link href="#businesses" className={navLinkClass}>
            BLOGS
          </Link>
        </div>

        {/* Centered Logo */}
        <div className="absolute inset-x-0 top-0 bottom-0 hidden md:flex items-center justify-center">
          <h1 className="font-[Bellefair] tracking-wider title  w-full text-center">
            AGATHA AMBROSE
          </h1>
        </div>

        {/* Desktop Navigation (Second set of links) */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-20 lg:px-20">
          <Link href="#businesses" className={navLinkClass}>
            NEWSLETTER
          </Link>
          <Link href="#businesses" className={navLinkClass}>
            CONTACT
          </Link>
          <Link href="#businesses" className={navLinkClass}>
            SHOP
          </Link>
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
            CONTACT
          </Link>
          <Link
            href="#businesses"
            className="block text-xs tracking-wide mb-2 w-full p-4 border-b border-gray-300"
          >
            SHOP
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
