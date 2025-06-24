"use client";

import { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import { cn } from "@/lib/utils";

const menuItems = [
  "About us",
  "Build What’s Next.",
  "Purpose",
  "Manifest",
  "Team",
  "KPIs",
  "Contact",
];

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 200);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        `fixed flex top-0 z-50 inset-x-0 w-full transition duration-500 text-white px-8 py-5 justify-between items-center`,
        scrolled ? "bg-black" : "bg-transparent",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Logo />

      <ul className="flex gap-6 text-sm">
        {menuItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
