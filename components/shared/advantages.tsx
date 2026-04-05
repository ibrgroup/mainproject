import React from "react";
import { ParagraphSize } from "./paragraph";
import { advantagesData } from "@/constants";

const Advantages = () => {
  return (
    <section className="max-container mx-auto px-4 mt-10 md:mt-20 bg-gradient-to-rrelative">
      <ParagraphSize
        className="text-gray-800 max-w-lg m-auto font-sans text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Почему клиенты выбирают нас?"
        size="xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 md:gap-12">
        {advantagesData.map((adv, index) => (
          <div
            key={index}
            className="p-8 rounded-4xl bg-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:rotate-1 backdrop-blur-sm bg-opacity-70 border-2 border-transparent hover:border-tiffany"
          >
            <p className="w-16 h-16 font-bold flex items-center justify-center mb-6 text-2xl text-white rounded-full bg-gradient-to-tr from-blue-500 to-tiffany hover:scale-110">
              {adv.number}
            </p>
            <h2 className="text-xl md:text-2xl font-sans text-gray-800 mb-4 font-bold">
              {adv.title}
            </h2>
            <p className="text-gray-800">
              {adv.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
