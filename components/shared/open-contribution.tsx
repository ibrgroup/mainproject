import React, { memo } from "react";
import { ParagraphSize } from "./paragraph";
import { cardslist2 } from "@/constants/index";

interface Card {
  id: string | number;
  bgColor: string;
  textColor: string;
  title: string;
  description: string;
  image: string; // важно указывать корректный тип (src должен быть строкой)
}

const OpenContribution: React.FC = () => {
  return (
    <section className="max-container m-auto mt-10 md:mt-20 mb-20 px-4">
      <ParagraphSize
        className="text-gray-800 max-w-lg m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Как открыть вклад?"
        size="xl"
      />
      <div className="grid lg:grid-cols-3 mt-10 md:grid-cols-2 grid-cols-1 gap-10">
        {cardslist2.map((card: Card) => (
          <div
            key={card.id}
            className={`px-8 rounded-4xl ${card.bgColor} ${card.textColor}`}
          >
            <h3 className="text-balancetext-4xl mt-8 font-bold tracking-tight text-2xl py-3">
              {card.title}
            </h3>
            <p>{card.description}</p>
            <img
              className="mt-10"
              src={card.image}
              alt={card.title}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// Добавим displayName для удобства отладки
OpenContribution.displayName = "OpenContribution";

export default memo(OpenContribution);