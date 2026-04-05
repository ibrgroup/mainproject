import React from "react";
import { additionalInformation } from "@/constants/index";
import { ParagraphSize } from "./paragraph";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const AdditionalInformation = () => {
  const parseWidth = (width: string | number): number => {
    if (typeof width === "number") return width;
    const numeric = width.replace(/[^0-9]/g, "");
    return Number(numeric);
  };

  return (
    <section className="mt-10 md:mt-20 px-4">
      <div className="max-w-screen-xl max-container mx-auto">
        <ParagraphSize
          className="text-gray-800 text-center font-sans max-w-lg m-auto text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
          text="Дополнительная информация "
          size="xl"
        />
        <div className="max-w-screen-xl m-auto mt-10">
          <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-10">
            {additionalInformation.map((product) => {
              const widthNumber = parseWidth(product.width);
              return (
                <Link key={product.id} href={product.link}>
                  <div
                    style={{ transition: "0.8s" }}
                    className={`col-span-1 sm:col-span-2 overflow-hidden h-[450px] ${
                      product.title === "Переводы без комиссии"
                        ? "col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 bg-[#041121]"
                        : "bg-[#E2E8F0]"
                    } p-8 rounded-4xl transition-transform transform hover:scale-105 cursor-pointer relative`}
                  >
                    <h1
                      className={`text-${
                        product.title === "Переводы без комиссии"
                          ? "white"
                          : "gray-900"
                      }  text-2xl py-3 font-sans font-bold tracking-tight`}
                    >
                      {product.title}
                    </h1>
                    <p
                      className={`text-base ${
                        product.title === "Переводы без комиссии"
                          ? "text-gray-100"
                          : "text-gray-800"
                      }`}
                    >
                      {product.description}
                    </p>
                    <img
                      className="absolute top-40 md:top-20 p-10 right-[-1rem] rounded-lg"
                      src={`/${product.imageUrl}`}
                      alt={product.alt}
                      width={widthNumber}
                      height={widthNumber}
                      loading="lazy"
                      />
                    <button className="rounded-full flex justify-center items-center absolute right-6 bottom-6 bg-white p-5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100">
                      <SlArrowRight size={20} />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AdditionalInformation);