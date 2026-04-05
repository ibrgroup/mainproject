import React, { memo } from "react";
import { tiers } from "@/constants/index";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const TierCardComponent: React.FC<{ tier: (typeof tiers)[number] }> = ({ tier }) => (
  <div
    className={classNames(
      tier.featured ? "relative bg-gray-900" : "bg-gray-100",
      "rounded-4xl p-8 sm:p-10"
    )}
  >
    <h3
      className={classNames(
        tier.featured ? "text-white font-sans" : "text-gray-800 font-sans",
        "font-bold text-xl"
      )}
    >
      {tier.name}
    </h3>
    <p className="mt-4 flex items-baseline gap-x-2">
      <span
        className={classNames(
          tier.featured ? "text-white font-sans" : "text-gray-800 font-sans",
          "text-5xl font-bold tracking-tight"
        )}
      >
        {tier.priceMonthly}
      </span>
    </p>
    <p
      className={classNames(
        tier.featured ? "text-gray-100" : "text-gray-800",
        "mt-6 text-base/7"
      )}
    >
      {tier.description}
    </p>
    <ul
      role="list"
      className={classNames(
        tier.featured ? "text-gray-100" : "text-gray-800",
        "mt-8 space-y-3 text-sm/6 sm:mt-10"
      )}
    >
      {tier.features.map((feature) => (
        <li key={feature} className="flex gap-x-3">
          {feature}
        </li>
      ))}
    </ul>
    <a
      href={tier.href && '#FreeConsultation'}
      className={classNames(
        tier.featured
          ? "bg-tiffany px-8 py-4 rounded-xl text-white hover:opacity-90 transition-all"
          : "border border-tiffany hover:bg-tiffany transition-all hover:text-white",
        "mt-8 block px-8 py-4 rounded-xl text-center text-sm font-bold"
      )}
    >
      Приобрести
    </a>
  </div>
);

export const TierCard = memo(TierCardComponent);
TierCard.displayName = "TierCard";