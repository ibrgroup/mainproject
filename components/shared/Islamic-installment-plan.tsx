import React, { memo } from "react";
import { ParagraphSize } from "./paragraph";
import { islamicInstallmentPlan } from "@/constants/index";

const IslamicInstallmentPlanComponent: React.FC = () => {
  return (
    <section className="max-container m-auto mt-10 md:mt-20 mb-20 px-4">
      <ParagraphSize
        className="text-gray-800 font-sans max-w-lg m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Исламская рассрочка"
        size="xl"
      />
      <div className="grid md:grid-cols-2 mt-10 sm:grid-cols-2 grid-cols-1 gap-10">
        {islamicInstallmentPlan.map((card) => (
          <div
            key={card.id}
            className={`p-8 rounded-4xl ${card.bgColor} ${card.textColor}`}
          >
            <img src={card.image} alt={card.title} width={100} height={100} />
            <h3
              className={`text-balancetext-4xl font-bold font-sans tracking-tight text-2xl mt-3 py-2`}
            >
              {card.title}
            </h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div id="InstallmentPlan"></div>
    </section>
  );
};

export const IslamicInstallmentPlan = memo(IslamicInstallmentPlanComponent);