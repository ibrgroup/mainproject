import React, { memo } from "react";
import { ParagraphSize } from "./paragraph";
import CustomButton from "./custom-button";
import { ROUTES } from "@/constants";

const IbrMarketplaceComponent: React.FC = () => {
  return (
    <section className="bg-cyan-blue mt-10 md:mt-20 lg:rounded-none rounded-t-4xl">
      <div className="max- m-auto relative  py-20  isolate overflow-hidden px-4 pt-10 lg:flex lg:gap-x-20 lg:pt-0">
        <div className="max-container mx-auto max-w-full lg:mt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
             <ParagraphSize
                className="text-white md:hidden block text-center font-sans text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
                text="Маркетплейс"
                size="xl"
              />
            <img
              className="object-cover h-auto"
              width={600}
              height={600}
              src="/6998fba11a46c0c079cb434f.webp"
              alt="Manager"
              loading="lazy"
            />
            <div className="flex flex-col justify-center items-center">
              <ParagraphSize
                className="text-white md:block hidden text-center font-sans text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
                text="Маркетплейс"
                size="xl"
              />
              <p className="w-full text-center text-pretty py-5 mb-5 text-white">
                Наш маркетплейс — это простор для выгодных покупок: широкий
                ассортимент, удобный поиск, сравнение цен и специальные акции
                для максимально выгодных сделок
              </p>
              <CustomButton
                className="md:w-fit w-full text-center rounded-full"
                href={ROUTES.ibrmarket}
                title="Подробнее"
              />
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 size-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r="512"
            cx="512"
            cy="512"
            fill="#40E0D0"
            fillOpacity="0.7"
          ></circle>
        </svg>
      </div>
    </section>
  );
};

export const IbrMarketplace = memo(IbrMarketplaceComponent);
IbrMarketplace.displayName = "IbrMarketplace";