"use client";

import React from "react";
import { Carousel } from "../ui/apple-cards-carousel"
import { ParagraphSize } from "./paragraph";
import { data } from './data'
import { CardImage } from "./card-image";


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <CardImage key={card.src} card={card} index={index} />
  ));

  return (
    <section className="bg-cyan-blue mt-10 md:mt-20 py-10">
      <ParagraphSize
        className="text-white text-center font-sans font-bold mt-10 max-w-lg m-auto text-balancetext-4xl tracking-tight text-4xl lg:text-6xl"
        text="Что купить на маркетплейсе?"
        size="xl"
      />
      <Carousel items={cards} />
    </section>
  );
}


