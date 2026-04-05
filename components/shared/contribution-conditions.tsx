import React from "react";
import { ParagraphSize } from "./paragraph";
import { cardDataInfo } from '@/constants/index'

export const ContributionConditions: React.FC = () => {
  return (
    <div className="max-container m-auto mt-10 md:mt-20 mb-10 md:mb-20 px-4">
      <ParagraphSize
        className="text-gray-800 max-w-lg m-auto text-center py-3 mb-6 text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Условия вкладов"
        size="xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
        {cardDataInfo.map((card, index) => (
          <div
            key={index}
            className={`${card.colSpan} ${card.rowSpan} relative overflow-hidden h-[370px] p-8 rounded-4xl ${card.bgColor} ${card.textColor}`}
          >
            <h3 className={`mb-3 font-bold tracking-tight text-2xl ${card.textColor}`}>
              {card.title}
            </h3>
            <p className={card.textColor}>{card.description}</p>
            <img
              className="absolute right-10"
              width={300}
              height={300}
              src={card.imageUrl}
              alt={card.title}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ContributionConditions);