import React from "react";
import { MainCalculateInstallments } from "@/components/shared/main-calculate-installments";
import { IslamicInstallmentPlan } from "@/components/shared/Islamic-installment-plan";
import { GreatDeals } from "@/components/shared/great-deals";
import { IbrMarketplace } from "@/components/shared/ibr-marketplace";
import { Calculator } from "@/components/shared/calculator";
import ScrollToTop from "@/components/shared/scroll-top";
import AdditionalInformationPlan from "@/components/shared/additional-Information-plan";
import MainLayout from "@/components/shared/main-layout";
import CookieConsent from "@/components/shared/сookie-сonsent";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <MainCalculateInstallments />
      <IslamicInstallmentPlan />
      <Calculator title="Рассчитайте комфортные условия рассрочки" />
      <IbrMarketplace />
      <GreatDeals />
      <AdditionalInformationPlan />
      <CookieConsent />
      <ScrollToTop />
    </MainLayout>
  );
};

export default Home;
