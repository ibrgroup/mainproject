import Link from "next/link";
import React from "react";
import { IoMoonSharp } from "react-icons/io5";
import { ROUTES } from "@/constants";

export const Services = () => {
  return (
    <div className="bg-white p-5">
      <div className="flex justify-between max-container m-auto items-center">
        <div className="flex items-center justify-between gap-10">
          <Link href={ROUTES.home} className="flex justify-center items-center gap-3">
            <IoMoonSharp size={30} className="text-" />
            <h4 className="font-[900] text-gray-800">БАНК</h4>
          </Link>
        </div>
        <ul className="flex text-sm transition-all items-center gap-3">
          <li className="text-gray-500 hover:text-black cursor-pointer">
            Банк
          </li>
          <li className="text-gray-500 hover:text-black cursor-pointer">
            Вклады
          </li>
          <li className="text-gray-500 hover:text-black cursor-pointer">
            Маркетплейс
          </li>
          <li className="text-gray-500 hover:text-black cursor-pointer">
            Бизнес
          </li>
        </ul>
        <div className="flex justify-center items-center gap-2">
          <p className="text-gray-500 hover:text-black cursor-pointer text-sm">
            Личный кабинет
          </p>

          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            width="25"
            height="25"
          >
            <defs>
              <linearGradient
                id="dsId_oI51lNfiIF0_linear_1525_526"
                x1="10.5"
                y1="1"
                x2="10.5"
                y2="10.608"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#"></stop>
                <stop offset="1" stopOpacity=".5" stopColor="#"></stop>
              </linearGradient>
            </defs>
            <path
              d="M3 19a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3H3v-3Z"
              fill="#"
            ></path>
            <path
              opacity=".35"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.223 2.952a2.454 2.454 0 0 1-2.177 1.32H11.59a2.455 2.455 0 0 0-2.454 2.455v3.88A4.5 4.5 0 0 0 16.5 7.137V4.273c0-.47-.1-.917-.278-1.32Z"
              fill="#"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.223 2.952A3.274 3.274 0 0 0 13.227 1H7.5v6.136a4.49 4.49 0 0 0 1.636 3.472v-3.88a2.455 2.455 0 0 1 2.455-2.455h2.455c.946 0 1.767-.536 2.177-1.32Z"
              fill="url(#dsId_oI51lNfiIF0_linear_1525_526)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
