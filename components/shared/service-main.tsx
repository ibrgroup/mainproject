"use client";

import React from "react";
import { Button } from "@heroui/react";
import Image from 'next/image'

const ServiceMain: React.FC = () => {
  return (
    <section className="bg-cyan-blue rounded-b-4xl font-montserrat">
      <div className="max-container m-auto relative isolate overflow-hidden px-6 pt-16 lg:flex lg:gap-x-20 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle r="512" cx="512" cy="512" fill="#40E0D0" fillOpacity="0.7" />
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h1
            id="main-title"
            className="text-white max-w-lg m-auto text-balancetext-4xl font-sans font-bold tracking-tight text-4xl lg:text-6xl"
          >
            Техническое
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              обслуживание
            </span>
          </h1>

          <p className="mt-5 text-white">
            Быстро. Качественно. С гарантией до 2 лет на все виды работ
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-6 lg:justify-start">
            <a href="#TechniCalonsultation">
              <Button
                className="rounded-2xl outline-none bg-tiffany px-8 py-7 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Подать заявку
              </Button>
            </a>
          </div>
        </div>
        <div className="mt-16 p-10 w-full md:w-[500px] m-auto object-cover lg:mt-8">
          <Image
            className="object-cover"
            src="/img/6998fb9e1a46c0c079cb432b3dq.webp"
            alt="close"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceMain;