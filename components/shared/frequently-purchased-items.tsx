"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonialsMoving } from "@/constants/index";
export function FrequentlyPurchasedItems() {
  return (
    <InfiniteMovingCards
      items={testimonialsMoving}
      direction="right"
      speed="slow"
    />
  );
}
