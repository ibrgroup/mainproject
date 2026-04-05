import React from "react";
import MainLayout from "@/components/shared/main-layout";
import AgencyDevelopment from "@/components/shared/agency-development";
import AboutAgency from "@/components/shared/about-agency";
import ScrollToTop from "@/components/shared/scroll-top";
import Advantages from "@/components/shared/advantages";
import SiteDescription from "@/components/shared/good-to-know";
import Investigation from "@/components/shared/investigation";
import Todolist from "@/components/shared/todolist";
import { WebDevPriceList } from "@/components/shared/web-dev-price-list";
import CookieConsent from "@/components/shared/сookie-сonsent";
import WebDevelopmentForm from "@/components/shared/web-development-form";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <AgencyDevelopment />
      <Advantages />
      <AboutAgency />
      <SiteDescription />
      <Investigation />
      <WebDevPriceList />
      <WebDevelopmentForm />
      <Todolist />
      <CookieConsent />
      <ScrollToTop />
    </MainLayout>
  );
};

export default Home;
