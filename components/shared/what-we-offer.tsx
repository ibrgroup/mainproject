import React from "react";
import { whatweoffer } from "@/constants/index";
import { ParagraphSize } from "./paragraph";

const WhatWeOffer: React.FC = () => {
  return (
    <div className="max-container m-auto mt-10 md:mt-20 px-4">
      <ParagraphSize
        className="text-gray-800 max-w-lg font-sans m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Что мы предлагаем вам"
        size="xl"
      />
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-10">
        {whatweoffer.slice(0, 3).map((card, index) => (
          <div
            key={index}
            className={`p-8 rounded-4xl ${card.textColor} bg-[${card.bgColor}]`}
          >
            <h3
              className={`text-balancetext-4xl font-sans font-bold tracking-tight text-2xl py-3 ${card.textColor}`}
            >
              {card.title}
            </h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {whatweoffer.slice(3).map((card, index) => (
          <div
            key={index + 3}
            className={`p-7 rounded-4xl ${card.textColor} bg-[${card.bgColor}]`}
          >
            <h3
              className={`text-balancetext-4xl font-sans font-bold tracking-tight text-2xl py-5 ${card.textColor}`}
            >
              {card.title}
            </h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
