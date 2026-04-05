import React from "react";
import { ParagraphSize } from "./paragraph";
import { aboutagency } from "@/constants/index";

const statsData = [
  { value: "6+", label: "лет\nопыта" },
  { value: "199+", label: "довольных\nклиентов" },
  { value: "99.9%", label: "положительных\nотзывов" },
];

const AboutAgency: React.FC = () => {
  return (
    <div className="max-container px-4 m-auto">
      <ParagraphSize
        className="text-gray-800 font-sans mt-10 md:mt-20 max-w-lg m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="О нас"
        size="xl"
      />
      <div className="flex flex-col   mt-10 justify-between lg:flex-row items-center gap-10">
      <div className="block md:hidden w-fit rounded-4xl">
          <img
            className="object-cover px-3"
            width={700}
            height={700}
            src="/6998fb961a46c0c079cb42e3.webp"
            alt="О нас"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          {aboutagency.map((item, index) => (
            <div key={index} className="md:bg-[#ffffff00] rounded-3xl">
              <h3 className="text-gray-800 font-sans text-balancetext-4xl font-bold tracking-tight text-2xl py-4">
                {item.title}
              </h3>
              <p className="max-w-md">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 hidden md:block w-fit p-10 rounded-4xl">
          <img
            className="object-cover"
            width={700}
            height={700}
            src="/6998fb961a46c0c079cb42e3.webp"
            alt="О нас"
            loading="lazy"
          />
        </div>
      </div>
      <div className="max-w-[800px] mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row justify-around items-center">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center mb-8 md:mb-0 flex-1">
              <h1 className="text-5xl font-extrabold font-sans md:text-6xl m-auto  text-gray-800 py-2">
                {stat.value}
              </h1>
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 m-auto text-center leading-relaxed">
                {stat.label.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;
