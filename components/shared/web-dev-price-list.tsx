"use client";

import React from "react";
import { ParagraphSize } from "./paragraph";
import { pricingdata } from "@/constants";

interface Service {
  service: string;
  price: string;
}

interface PricingGroup {
  title: string;
  services: Service[];
}


const PricingGroupComponent: React.FC<{ group: PricingGroup }> = ({
  group,
}) => (
  <>
    <tr key={`title-${group.title}`}>
      <td
        colSpan={2}
        className="px-6 py-3 text-sm font-bold text-center capitalize bg-gray-100"
      >
        {group.title}
      </td>
    </tr>
    {group.services.map((item, i) => (
      <tr
        key={`${group.title}-${i}`}
        className="hover:bg-gray-50 transition-colors"
      >
        <td className="px-1 md:px-6 py-4 text-gray-900">{item.service}</td>
        <td className="px-1 md:px-6 py-4 text-right font-semibold text-gray-900">
          {item.price}
        </td>
      </tr>
    ))}
  </>
);

export const WebDevPriceList: React.FC = () => (
  <section id="pricing" className="px-4 md:px-0 max-container m-auto mt-20 bg-white/50">
    <div className="max-container mx-auto">
      <div className="text-center mb-10">
        <ParagraphSize
          className="text-gray-800 max-w-lg font-sans mt-10 md:mt-20 m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
          text="Прайс-лист"
          size="xl"
        />
        <p className="text-gray-800 font-bold mt-4">
          Честные цены без скрытых платежей
        </p>
      </div>

      <div className="card-gradient rounded-3xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                   Услуги
                </th>
                <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider">
                  Цена
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pricingdata.map((group) => (
                <React.Fragment key={group.title}>
                  <PricingGroupComponent group={group} />
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-700 text-center">
            <strong>Обратите внимание:</strong> Указаны базовые цены. Точная
            стоимость определяется после диагностики. Гарантия на все работы до
            2 лет.
          </p>
        </div>
      </div>
    </div>
  </section>
);
