"use client";

import { useEffect, useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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
      className={`fixed flex top-0 z-50 inset-x-0 w-full bg-white transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-4 px-12 text-4xl shrink font-semibold">Panzel</div>
      <div className="py-4 px-12 text-xl grow bg-black text-white flex items-center justify-between">
        <p>Family Office</p>

        <ul className="flex gap-3">
          <li>Overview</li>
          <li>Agenda</li>
          <li>Info</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
