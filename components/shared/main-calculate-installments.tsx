import React, { ReactNode } from "react";
import { features } from "@/constants/index";
import { ParagraphSize } from "./paragraph";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

const FeatureCard: React.FC<Feature> = React.memo(
  ({ title, description, icon }) => (
    <article className="bg-gray-700 relative overflow-hidden h-52 md:h-64 rounded-4xl p-8 w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-md">
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <p className="text-white">{description}</p>
      <div className="absolute text-white text-2xl p-4 rounded-2xl bg-gray-100 bottom-5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-md">
        {icon}
      </div>
    </article>
  )
);
FeatureCard.displayName = "FeatureCard";

export const MainCalculateInstallments: React.FC = () => {
  return (
    <section className="bg-cyan-blue relative rounded-b-4xl px-4">
      <div className="max-container m-auto relative isolate overflow-hidden px-6 pt-16 lg:flex lg:gap-x-20 lg:pt-0">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <ParagraphSize
            className="text-white font-bold font-sans lg:text-6xl"
            text="Рассчитайте рассрочку"
            size="xl"
          />
          <p className="mt-5 text-white">
            Узнайте свои платежи и условия, в соответствии с исламскими
            принципами
          </p>
          <a href="#InstallmentPlan" className="mt-5 flex items-center justify-center gap-x-6 lg:justify-start">
            <button className="rounded-2xl outline-none bg-tiffany px-8 py-5 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Оформить рассрочку
            </button>
          </a>
        </div>

        <div className="mt-10">
          <Image
            className="object-cover m-auto"
            src="/Installment-plan.webp"
            alt="Кредитный калькулятор"
            width={2000}
            height={2000}
            loading="lazy"
          />
        </div>
      </div>Ч

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 max-container m-auto lg:mt-[-8rem] py-6">
        {features.map((feature: Feature, index: number) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};