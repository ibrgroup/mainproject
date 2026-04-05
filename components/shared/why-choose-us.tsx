import React from "react";
import { ParagraphSize } from "./paragraph";
import { whychooseus } from '@/constants/index'


const WhyChooseUs: React.FC = () => {
  return (
        <section className="max-container m-auto mt-10 md:mt-20 px-4">
          <ParagraphSize
            className="text-gray-800 m-auto font-sans text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
            text="Почему выбирают нас ?"
            size="xl"
          />
          <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-10">
            {whychooseus.map((card) => (
              <div
                key={card.id}
                className={`px-8 rounded-4xl h-64 overflow-hidden relative ${card.bgColor} ${card.textColor}`}
              >
                <h3 className={`text-balancetext-4xl mt-8 font-bold font-sans tracking-tight text-2xl py-3`}>
                  {card.title}
                </h3>
                <p className="max-w-xs">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
  );
};

export default WhyChooseUs;
