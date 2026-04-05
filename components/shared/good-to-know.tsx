"use client";
import React from "react";
import { tiers } from "@/constants/index";
import { ParagraphSize } from "./paragraph";
import { TierCard } from "./tier-card";

const GoodToKnow: React.FC = () => (
  <div className="md:mt-20 px-4">
    <div className="text-center">
      <ParagraphSize
        className="text-gray-800 max-w-lg m-auto font-sans text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Наши цифровые решения"
        size="xl"
      />
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center font-bold text-pretty text-gray-800 ">
      От корпоративных сайтов до интернет-магазинов — мы создаем решения под
      любые задачи
    </p>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 text-gray-800 items-center gap-y-6  sm:gap-y-10 lg:max-w-6xl lg:grid-cols-3">
      {tiers.map((tier) => (
        <TierCard key={tier.id} tier={tier} />
      ))}
    </div>
  </div>
);

export default GoodToKnow;
