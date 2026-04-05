import React, { ReactNode } from "react";
import { ParagraphSize } from "./paragraph";
import { servicesMap } from "../../constants/index";

interface ServiceData {
  iconColors: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  svgPath: string;
}

const ServicesSection = () => {
  function renderServiceCard(
    [key, service]: [string, ServiceData],
  ): ReactNode {
    return (
      <div
        key={key}
        className="relative rounded-4xl bg-gray-100"
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full  bg-gradient-to-tr from-blue-400 to-tiffany flex items-center justify-center z-10">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d={service.svgPath}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>

        <div className="pt-10 px-6 pb-8 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-500 mb-4 text-sm">{service.description}</p>
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4 font-semibold text-blue-600 text-lg shadow-inner">
            {service.price}
          </div>
          <ul className="space-y-3 text-gray-700 text-sm w-full max-w-sm px-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section
      id="services"
      className="max-container mt-10 md:mt-20 mx-auto px-4 md:px-0"
    >
        <div className="text-center mb-10">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Что мы делаем
          </span>
          <ParagraphSize
            className="text-gray-900 text-center font-sans max-w-3xl mx-auto font-bold tracking-tight text-4xl lg:text-6xl mb-6"
            text="Наши услуги"
            size="xl"
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Полный спектр услуг по ремонту, обслуживанию компьютерной и офисной
            техники, видеонаблюдению — всё, что нужно для вашего комфорта.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...servicesMap.entries()].map(renderServiceCard)}
      </div>
    </section>
  );
};

export default ServicesSection;
