"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const manifestItems = [
  "Make your vision explode. ",

  "Flip the game, and never settle. ",

  "The future’s your playground—take it by force. ",

  "Real change? It starts inside. ",

  "Think savage. Move fearless. ",

  "Stay hungry. Stay raw. ",
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Manifest = () => {
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const triggers = gsap.utils.toArray<HTMLElement>(".index-trigger");

    triggers.forEach((trigger, index) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".manifest-right",
      // pinSpacing: true,
      scrub: true,
      // markers: true,
    });
  }, []);

  return (
    <div
      id="manifest"
      ref={container}
      className="bg-black text-white text-4xl flex relative w-full"
    >
      <h2 className="text-sm whitespace-nowrap p-8">● Our Manifest</h2>

      {/* LEFT SCROLLING INDEXES */}
      <div className="flex flex-col w-full">
        <div className="h-[30vh]"></div>
        {manifestItems.map((_, i) => (
          <div
            key={i}
            className={cn(
              "manifest-index relative text-[16vw] font-semibold leading-none transition duration-300",
              activeIndex === i
                ? "opacity-100 translate-x-16"
                : "opacity-20 translate-x-0"
            )}
          >
            <div className="index-trigger absolute top-1/2 left-0 w-full h-1 pointer-events-none" />
            0{i + 1}
          </div>
        ))}
        <div className="h-[30vh]"></div>
      </div>

      {/* RIGHT PINNED MANIFEST TEXTS */}
      <div className="manifest-right w-full h-screen items-center flex justify-start py-8 pr-8">
        <div className="max-w-[20ch] text-pretty">
          {manifestItems.map((item, i) => (
            <span
              key={i}
              className={cn(
                "transition-opacity duration-300",
                activeIndex === i ? "opacity-100" : "opacity-20"
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manifest;
