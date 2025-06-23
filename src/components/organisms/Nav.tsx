"use client";

import { useEffect, useState } from "react";

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
      <div className="p-4 flex gap-1.5 items-center text-2xl shrink font-semibold bg-white text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 872.75"
          fill="currentColor"
          className="w-[1.2em] h-[1.2em] rounded-full -translate-y-[0.15em]"
        >
          <path d="M801.27 312.91c-81.84 0-152.07 49.5-182.53 120.17-1.4 2.55-2.8 5.1-4.11 7.71-18.71 36.35-24.59 46.86-47.95 46.86h-27.07c-9.43 0-16.39-6.96-16.39-16.4V443.1c0-23.36 12.84-31.55 50.27-50.27 31.25-15.67 58.76-37.24 78.18-66.07 29.2-34.6 46.87-79.24 46.87-128.05C698.54 88.97 609.56 0 499.81 0S301.08 88.97 301.08 198.73c0 55.79 23.06 106.14 60.09 142.23 18.46 21.85 42.07 38.91 68.48 51.88 37.43 18.71 50.27 26.91 50.27 50.27v28.15c0 9.28-6.96 16.4-16.39 16.4h-26.91c-23.35 0-30.47-10.52-49.18-46.86-4.38-8.73-9.33-17.14-14.76-25.19-33.87-61.21-99.04-102.68-173.94-102.68C88.97 312.91 0 401.88 0 511.64s88.97 198.73 198.73 198.73c83.31 0 154.54-51.31 184.08-124.02 1.59-2.87 3.15-5.75 4.62-8.68 18.72-36.35 25.68-46.86 49.18-46.86h26.91c9.28 0 16.39 6.96 16.39 14.07v41.6c0 109.97-159.93 251.03-221.95 251.03v35.24h486.12v-35.24c-60.78 0-220.71-140.9-220.71-251.03v-41.6c0-6.96 6.96-14.07 16.39-14.07h26.91c22.42 0 28.85 9.94 45.87 42.87 26.07 79.35 100.65 136.69 188.72 136.69 109.75 0 198.73-88.98 198.73-198.73s-88.97-198.73-198.73-198.73Z" />
        </svg>

        <p className="font-semibold">
          Panzel <span className="text-gray-400">Family Office</span>
        </p>
      </div>

      <div className="p-4 text-sm grow bg-black text-white flex items-center justify-between">
        {/* <p className="text-2xl font-semibold">
          Panzel <span className="text-gray-400">Family Office</span>
        </p> */}

        <span></span>

        <ul className="flex gap-3">
          {menuItems.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
