import React from "react";
import { ParagraphSize } from "./paragraph";

const AboutCompany = () => {
  return (
    <section
      id="about"
      className="max-container mx-auto px-4 my-10 md:my-20 bg-white/50"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">

        <div className="flex-1">
          <ParagraphSize
          className="font-sans text-blue-600 text-center md:text-start mb-5 md:mb-10 font-bold tracking-tight text-4xl lg:text-6xl"
          text="О компании"
          size="xl"
        />
          <p className="text-gray-800 mb-10 text-center md:text-start">
            Мы — команда профессионалов с многолетним опытом работы в сфере
            IT-обслуживания. Наша миссия — обеспечить бесперебойную работу вашей
            техники и спокойствие вашего бизнеса
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">
                  Быстрая диагностика
                </h3>
                <p className="text-gray-800">
                  Описание или дополнительные детали
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">
                  Гарантия качества
                </h3>
                <p className="text-gray-800 text-sm">
                  Даём гарантию до 2 лет на все виды работ. Используем только
                  качественные комплектующие.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">
                  Выезд на дом
                </h3>
                <p className="text-gray-600 text-sm">
                  Мастер приедет к вам в удобное время. Большинство проблем
                  решаем на месте.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/6998fba21a46c0c079cb4361.webp"
            alt="О компании"
            className="object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
