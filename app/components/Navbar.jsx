"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "About", path: "#about", imgSrc: "/images/aboutNav.svg" },
  { title: "Projects", path: "#services", imgSrc: "/images/servicesNav.svg" },
  { title: "Contact", path: "#contact", imgSrc: "/images/contactNav.svg" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [fixedPosition, setFixedPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetScrollYDesktop = 600;
      const targetScrollYMobile = 500;
      const targetScrollY =
        window.innerWidth < 768 ? targetScrollYMobile : targetScrollYDesktop;

      setFixedPosition(window.scrollY > targetScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navbarClass = fixedPosition
    ? "fixed top-0 left-0 transform translate-x-0 md:w-52 w-28"
    : "absolute top-2 left-1/2 transform -translate-x-1/2 transition-transform md:w-52 w-34";

  const logoSrc = fixedPosition
    ? "/images/andy-logo.svg"
    : "/images/panettiere-logo.svg";

  return (
    <>
      <div
        className={
          navbarOpen ? "fixed inset-0 bg-black bg-opacity-80 z-40" : "hidden"
        }
      ></div>
      <nav
        className={`${navbarClass} z-40 md:w-42 md:px-4 md:py-3 transition-transform`}
      >
        <div className="flex flex-col items-center justify-between pt-4">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Andrew Panettiere"
              width={250}
              height={150}
              className="rounded-lg"
            />
          </Link>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`flex items-center px-1 py-1 md:px-2 md:py-2 border rounded ${
              navbarOpen
                ? " text-white border-white"
                : "border-black text-black hover:bg-accent"
            }`}
          >
            {navbarOpen ? (
              <XMarkIcon className="h-3 w-3" />
            ) : (
              <Bars3Icon className="h-3 w-3" />
            )}
          </button>
        </div>
        <div
          className={`${
            navbarOpen
              ? " text-black border-black"
              : "border-white text-white"
          } rounded mt-4`}
        >
          {navbarOpen && <MenuOverlay links={navLinks} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
