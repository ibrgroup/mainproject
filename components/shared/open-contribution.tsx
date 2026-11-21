import React, { memo } from "react";
import { ParagraphSize } from "./paragraph";
import { cardslist2 } from "@/constants/index";

const OpenContribution: React.FC = () => {
  return (
    <section className="max-container m-auto mt-10 md:mt-20 px-4">
      <ParagraphSize
        className="text-gray-800 max-w-lg m-auto text-center text-balance font-bold tracking-tight text-4xl lg:text-6xl"
        text="Как начать инвестировать?"
        size="xl"
      />
      <div className="grid lg:grid-cols-3 mt-10 md:grid-cols-2 grid-cols-1 gap-6 md:gap-10">
        {cardslist2.map((card) => (
          <article
            key={card.id}
            className={`p-8 rounded-4xl min-h-[240px] ${card.bgColor} ${card.textColor}`}
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-tiffany text-white text-2xl font-bold">
              {card.id}
            </span>
            <h3 className="mt-8 font-bold tracking-tight text-2xl py-3">
              {card.title}
            </h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

OpenContribution.displayName = "OpenContribution";

export default memo(OpenContribution);
