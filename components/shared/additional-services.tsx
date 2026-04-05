import React from "react";
import { additionalservices } from "@/constants/index";
import { ParagraphSize } from "./paragraph";

const AdditionalServices: React.FC = () => {
  return (
    <section className="max-container px-4 m-auto">
      <ParagraphSize
        className="text-gray-800 max-w-sm md:max-w-lg text-center font-sans pt-10 md:py-20 m-auto text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Дополнительные услуги "
        size="xl"
      />

      <div className="flex flex-col justify-between lg:flex-row items-center">
        <div className="w-fit rounded-4xl">
          <img
            className="object-cover"
            width={600}
            height={600}
            src="/6998fb981a46c0c079cb42f5.webp"
            alt="Дополнительные услуги"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-10 md:gap-0">
          {additionalservices.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 md:bg-[#ffffff00] p-7 m-1 rounded-4xl"
            >
              <h3 className="text-gray-800 font-sans text-balancetext-4xl font-bold tracking-tight text-2xl py-4">
                {item.title}
              </h3>
              <p className="max-w-md">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
