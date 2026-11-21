import React from "react";
import MainLayout from "@/components/shared/main-layout";
import { MainIbrInvest } from "@/components/shared/main-ibr-invest";
import ContributionConditions from "@/components/shared/contribution-conditions";
import { InvestCalculator } from "@/components/shared/invest-calculator";
import OpenContribution from "@/components/shared/open-contribution";
import InvestFaq from "@/components/shared/invest-faq";
import ScrollToTop from "@/components/shared/scroll-top";
import CookieConsent from "@/components/shared/сookie-сonsent";

const Page = () => {
  return (
    <MainLayout>
      <MainIbrInvest />
      <ContributionConditions />
      <InvestCalculator />
      <OpenContribution />
      <InvestFaq />
      <CookieConsent />
      <ScrollToTop />
    </MainLayout>
  );
};

export default Page;
