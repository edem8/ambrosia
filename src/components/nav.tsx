import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="w-full px-6 md:px-1 lg:px-12 py-10   ">
      <nav className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex  items-center space-x-4 lg:space-x-16">
          <Link
            href="#about"
            className="text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            ABOUT
          </Link>
          <Link
            href="#blog"
            className="text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            BLOG
          </Link>
          <Link
            href="#testimonials"
            className="text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            CREATIVE
          </Link>
        </div>

        <div className="absolute font-medium left-1/2 transform -translate-x-1/2 text-center">
          <h1 className=" font-[Bellefair] text-3xl md:text-2xl lg:text-5xl tracking-wider uppercase">
            AGATHA AMBROSE
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-16">
          <Link
            href="#businesses"
            className="text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            SHOP
          </Link>
          <Link
            href="#press"
            className="text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            PRESS
          </Link>
          <Link
            href="#contact"
            className="text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-6 z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
