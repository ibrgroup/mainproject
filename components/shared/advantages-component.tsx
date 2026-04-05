import React from "react";
import { ParagraphSize } from "./paragraph";
import { advantagescomponent } from "@/constants";

export const AdvantagesComponent: React.FC = () => {
  return (
    <section className="max-container m-auto px-4 mb-20 mt-10 md:mt-20">
      <ParagraphSize
        className="text-gray-800 font-sans max-w-lg m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Преимущества работы с нами"
        size="xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
        {advantagescomponent.map((value, index) => (
          <div key={index} className="bg-[#E2E8F0] p-7 rounded-4xl">
            <h3 className="text-gray-800 font-bold font-sans max-w-xs text-balancetext-4xl tracking-tight text-2xl py-4">
              {value.title}
            </h3>
            <p className="max-w-xs text-gray-800">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
