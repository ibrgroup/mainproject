import React from "react";
import { ParagraphSize } from "./paragraph";
import { cardDataInfo } from '@/constants/index'

export const ContributionConditions: React.FC = () => {
  return (
    <section className="max-container m-auto mt-10 md:mt-20 mb-10 md:mb-20 px-4">
      <ParagraphSize
        className="text-gray-800 max-w-lg m-auto text-center py-3 mb-6 text-balance font-bold tracking-tight text-4xl lg:text-6xl"
        text="Условия инвестирования"
        size="xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-10">
        {cardDataInfo.map((card) => (
          <article
            key={card.title}
            className={`${card.colSpan} flex flex-col justify-between min-h-[220px] p-8 rounded-4xl ${card.bgColor} ${card.textColor}`}
          >
            <h3 className="mb-3 font-bold tracking-tight text-2xl lg:text-3xl">
              {card.title}
            </h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ContributionConditions);
