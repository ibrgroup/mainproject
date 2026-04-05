import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

interface LinkItem {
  link: string;
}

interface Card {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  altText: string;
  item: LinkItem;
}

const CardComponentInner: React.FC<Card> = ({
  title,
  description,
  imageUrl,
  altText,
  item,
}) => (
  <div
    style={{ transition: "0.8s" }}
    className="transition-transform overflow-hidden h-96 duration-800 hover:scale-105 cursor-pointer bg-cyan-blue p-8 rounded-4xl relative"
  >
    <Link href={item.link}>
      <h1 className="text-center font-bold max-w-md m-auto font-sans text-2xl py-3 text-white">
        {title}
      </h1>
      {description && (
        <p className="text-gray-100 max-w-md m-auto text-center">{description}</p>
      )}
      <img
        className="mt-20 md:mt-12 m-auto absolute right-[-2rem] top-20 md:max-w-md"
        src={imageUrl}
        alt={altText}
        width={400}
        height={400}
        loading="lazy"
      />
      <button className="rounded-full flex justify-center items-center absolute right-6 bottom-6 bg-white p-5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100">
        <SlArrowRight size={20} />
      </button>
    </Link>
  </div>
);

export const CardComponent = React.memo(CardComponentInner);