"use client";

import CountUp from "@/components/atoms/CountUp";
import { cn } from "@/lib/utils";

type SubItem = {
  from: number | string;
  to: number | string;
  suffix?: string;
};

type StatsItemProps = {
  title: string;
  subtitle: string;
  color: string;
  subItems: SubItem[];
};

const statsItems: StatsItemProps[] = [
  {
    title: "Pitch Decks Received",
    subtitle: "The breakdown of pitch decks that we've received as of 22/04/25",
    color: "blue",
    subItems: [
      { from: 0, to: 30, suffix: "%" }, // main stat
      { from: 30, to: 60, suffix: "%" },
      { from: 60, to: 90, suffix: "%" },
    ],
  },
  {
    title: "Meetings Held",
    subtitle:
      "Of pitch decks reviewed, this is a breakdown of those that progressed to meetings with us as of 22/04/2025",
    color: "cyan",
    subItems: [
      { from: 0, to: 30, suffix: "%" }, // main stat
      { from: 30, to: 60, suffix: "%" },
      { from: 60, to: 90, suffix: "%" },
    ],
  },
];

const COLOR_SHADE_MAP: Record<string, string[]> = {
  cyan: [
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
  ],
  amber: [
    "bg-amber-200",
    "bg-amber-300",
    "bg-amber-400",
    "bg-amber-500",
    "bg-amber-600",
    "bg-amber-700",
  ],
  blue: [
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
  ],
  red: [
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
  ],
};

const getTailwindShades = (color: string) => COLOR_SHADE_MAP[color] || [];

const StatsItem = ({ title, subtitle, color, subItems }: StatsItemProps) => {
  const fullShades = getTailwindShades(color);
  const wrapperShade = fullShades[3] ?? "bg-gray-300";

  const mainItem = subItems[0];
  const otherItems = subItems.slice(1);

  const subItemShades = otherItems.map(
    (_, i) => fullShades[i % fullShades.length] ?? "bg-gray-100"
  );

  return (
    <li className="flex w-full bg-gray-100 group hover:bg-gray-200 transition-colors duration-300">
      <div className="flex flex-col px-8 py-8 min-h-52 gap-3 max-w-md">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={cn("flex-1 flex flex-col justify-end", wrapperShade)}>
        {/* MAIN ITEM — FIRST SUBITEM */}
        {mainItem && (
          <div className="px-3 text-8xl pt-24 py-6 flex items-baseline gap-2">
            <CountUp from={+mainItem.from} to={+mainItem.to} />
            {mainItem.suffix && <span>{mainItem.suffix}</span>}
          </div>
        )}

        {/* REMAINING SUBITEMS */}
        {otherItems.length > 0 && (
          <div className="w-full flex text-4xl">
            {otherItems.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "w-full flex items-end justify-start p-3 min-h-24",
                  subItemShades[i]
                )}
              >
                <CountUp from={+item.from} to={+item.to} />
                {item.suffix && <span>{item.suffix}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

const StatsSection = () => {
  return (
    <ul className="w-full flex flex-col bg-gray-100">
      {statsItems.map((item, i) => (
        <StatsItem {...item} key={i} />
      ))}
    </ul>
  );
};

export default StatsSection;
