import React from "react";
import { ParagraphSize } from "./paragraph";

export const CooperationAdvantages: React.FC = () => {
  return (
    <div className="md:mt-20 mt-10 max-container m-auto px-4">
      <ParagraphSize
        className="text-gray-800 max-w-lg font-sans m-auto text-balancetext-4xl text-center font-bold tracking-tight text-4xl lg:text-6xl"
        text="Преимущества сотрудничества"
        size="xl"
      />
      <div className="flex flex-col justify-center items-center lg:flex-row bg-gray-100 p-8 md:p-24 rounded-4xl mt-10">
        <div className="flex-1 m-auto">
          <ul className="list-disc pl-5">
            <li className="text-gray-800 py-2">
              Эксклюзивные условия поставок продукции
            </li>
            <li className="text-gray-800 py-2">
              Специализированные ресурсы и инструменты для развития бизнеса
            </li>
            <li className="text-gray-800 py-2">
              Квалифицированная поддержка на каждом этапе взаимодействия
            </li>
            <li className="text-gray-800 py-2">
              Продвижение услуг на нашем маркетплейсе
            </li>
            <li className="text-gray-800 py-2">
              Исламская рассрочка для комфортного ведения бизнеса
            </li>
          </ul>
        </div>
        <img
          src="/6998fb5e4ce7086d267ea7a1.webp"
          alt=""
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
    </div>
  );
};
