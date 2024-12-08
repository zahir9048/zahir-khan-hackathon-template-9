'use client'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`bg-[#0D0D0DF2] text-[#FFF] pt-[25px] font-inter fixed top-0 left-0 right-0 z-30 lg:relative`}>
      <div className="max-w-[1320px] px-[20px] sm:px-[60px] h-[90px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="w-[110px] h-[20px]">
          <img src="/logo.png" className="w-[100%] h-[100%] object-center object-contain" alt="" />
        </a>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i className="bi bi-list"></i>
        </button>

        <div
          className={`lg:flex flex-col lg:flex-row items-center gap-[20px] w-full lg:w-auto ${
            isMenuOpen ? "flex" : "hidden"
          } lg:static fixed top-[90px] left-0 bg-[#0D0D0DF2] lg:bg-transparent px-[20px] lg:px-0 z-20`}
        >
          <ul className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">Menu</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">Pages</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Shop</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="min-w-[310px] bg-transparent mt-4 lg:mt-0">
            <div className="relative bg-transparent flex">
              <input
                type="search"
                id="default-search"
                className="block bg-transparent p-4 text-white border border-[#FF9F0D] rounded-[27px] w-[100%]"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                className="text-white p-3 bg-transparent absolute inset-y-0 end-0 pe-3"
              >
                <div className="flex items-center pointer-events-none">
                  <i className="bi bi-search"></i>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}
