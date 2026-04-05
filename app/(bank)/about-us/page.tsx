import React from "react";
import SystemInfo from "@/components/shared/system-info";
import { CooperationAdvantages } from "@/components/shared/сooperation-advantages";
import ClientDecisionComponent from "@/components/shared/client-decision-component";
import CookieConsent from "@/components/shared/сookie-сonsent";
import ScrollToTop from "@/components/shared/scroll-top";
import { AdvantagesComponent } from "@/components/shared/advantages-component";

const Page = () => {
  return (
    <React.Fragment>
      <SystemInfo />
      <CooperationAdvantages />
      <ClientDecisionComponent />
      <AdvantagesComponent/>
      <CookieConsent />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Page;
