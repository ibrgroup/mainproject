import { MainIbrMarket } from "@/components/shared/marketplace";
import WhatWeOffer from "@/components/shared/what-we-offer";
import { FrequentlyPurchasedItems } from "@/components/shared/frequently-purchased-items";
import TimePlanInfo from "@/components/shared/answers-questions";
import React from "react";
import MainLayout from "@/components/shared/main-layout";
import ScrollToTop from "@/components/shared/scroll-top";
import AdditionalServices from "@/components/shared/additional-services";
import ProductFinancing from "@/components/shared/product-financing";
import CookieConsent from "@/components/shared/сookie-сonsent";

const Home = () => {
  return (
    <MainLayout>
      <MainIbrMarket />
      <WhatWeOffer />
      <AdditionalServices />
      <ProductFinancing />
      <FrequentlyPurchasedItems />
      <TimePlanInfo />
      <CookieConsent />
      <ScrollToTop />
    </MainLayout>
  );
};

export default Home;
