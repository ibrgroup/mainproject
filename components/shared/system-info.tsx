import React from "react";
import { ParagraphSize } from "./paragraph";
import Image from 'next/image'

const SystemInfo: React.FC = () => {
  return (
    <section className="bg-cyan-blue rounded-b-4xl">
      <div className="max-container m-auto relative isolate overflow-hidden pt-16 lg:flex lg:gap-x-20 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/3 md:top-1/2 -z-10 size-[64rem] -translate-y-1/3 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle r="512" cx="512" cy="512" fill="#40E0D0" fillOpacity="0.7" />
        </svg>
        <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <ParagraphSize
            className="text-white m-auto font-sans text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
            text="Всё о работе системы"
            size="xl"
          />
          <p className="mt-5 text-white">
            IBR GROUP — это не просто площадка объявлений, а целая экосистема,
            объединяющая продавцов товаров в рассрочку и покупателей, ищущих
            комфортный и доступный способ покупки
          </p>
        </div>
        <div className="md:w-[1800px] m-auto object-cover lg:mt-8">
          <Image
            className=""
            src="/howtowork.webp"
            alt="close"
            width={800}
            height={800}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SystemInfo;
