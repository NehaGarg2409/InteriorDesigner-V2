"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const handleStickyNavbar = () => setSticky(window.scrollY >= 80);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
        sticky
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Website Name */}
         <div className="px-4 text-5xl font-bold text-white whitespace-nowrap transition-transform duration-300 hover:scale-110 cursor-pointer">
          AR TEEKSHA GUPTA
        </div>

          {/* Navbar */}
          <div className="flex items-center justify-end w-full px-4">
            {/* Mobile Menu Button */}
            <button
              onClick={navbarToggleHandler}
              className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span className={`block h-0.5 w-[30px] my-1.5 bg-black dark:bg-white transition-all duration-300 ${navbarOpen ? "rotate-45 top-[7px] relative" : ""}`} />
              <span className={`block h-0.5 w-[30px] my-1.5 bg-black dark:bg-white transition-all duration-300 ${navbarOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-[30px] my-1.5 bg-black dark:bg-white transition-all duration-300 ${navbarOpen ? "-rotate-45 top-[-8px] relative" : ""}`} />
            </button>

            {/* Navigation Links */}
            <nav
              className={`navbar absolute right-0 z-30 w-[250px] rounded border border-body-color/50 bg-white py-4 px-6 transition-all dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:space-x-12">
                {menuData.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="flex py-2 text-base text-dark hover:text-white hover:underline dark:text-white lg:py-6"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
