import React, { memo } from "react";
import { ParagraphSize } from "./paragraph";
import { greatDeals } from "@/constants";

export const GreatDeals: React.FC = memo(() => {
  return (
    <section className="min-h-screen md:mt-20 mt-10 px-4">
      <div className="max-container m-auto">
        <ParagraphSize
          className="text-gray-800 font-sans max-w-lg text-center m-auto py-3 text-balancetext-3xl font-bold tracking-tight text-3xl md:text-4xl lg:text-6xl"
          text="Почему выбирают нас?"
          size="xl"
        />
        <p className="mx-auto mt-6 font-bold max-w-2xl text-center text-pretty text-gray-800 ">
          Начните совершать выгодные покупки уже сегодня с нами это просто,
          удобно и честно
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="col-span-1 md:col-span-2 bg-gray-100 rounded-4xl p-8 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
              <div className="md:flex-1 md:pr-8">
                <ParagraphSize
                  className="text-gray-800 font-sans font-bold max-w-lg py-3 text-balance text-3xl tracking-tight md:text-4xl"
                  text="Оформляйте рассрочку моментально"
                  size="md"
                />
                <p className="text-gray-800 max-w-lg">
                  Минимум документов, мгновенное решение достаточно лишь
                  стабильного дохода
                </p>
                <p className="text-gray-800 max-w-lg mt-3">
                  Забудьте о долгой процедуре согласования и будьте уверены в своем выборе вместе с нами
                </p>
              </div>
              <img
                width={350}
                height={350}
                className="py-5"
                src="/6998fb9e1a46c0c079cb432b.webp"
                alt=""
              />
            </div>
          </div>
          {greatDeals.map((item, index) => (
            <div
              key={index}
              className="col-span-1 bg-gray-100 relative rounded-4xl p-8"
            >
              <ParagraphSize
                className="text-gray-800 font-sans max-w-md py-3 text-balancetext-3xl font-bold tracking-tight md:text-4xl"
                text={item.title}
                size="md"
              />
              <p className="text-gray-800 relative">{item.description}</p>
              <img
                className="mt-10 object-cover"
                src={item.imageUrl}
                alt={item.title}
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

GreatDeals.displayName = "GreatDeals";