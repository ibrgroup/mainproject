import type { Metadata } from "next";
import IBRMain from "@/components/shared/ibr-main";
import { Recommendation } from "@/components/shared/recommendation";
import { IBRCalculator } from "@/components/shared/calculatortTabs";
import MainLayout from "@/components/shared/main-layout";
import AdditionalInformation from "@/components/shared/additional-Information";
import { AppleCardsCarouselDemo } from "@/components/shared/apple-cards-carousel-demo";
import ScrollToTop from "@/components/shared/scroll-top";
import CookieConsent from "@/components/shared/сookie-сonsent";
import { WebSiteJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "IBR-GROUP | Исламская рассрочка и финансовые услуги",
  description:
    "IBR-GROUP: рассрочка без процентов, маркетплейс IBR MARKET, партнёрство и банковские услуги по нормам шариата. Честные условия, прозрачные сделки.",
  openGraph: {
    title: "IBR-GROUP | Исламская рассрочка без процентов",
    description:
      "Рассрочка мурабаха, маркетплейс, партнёрство. Финансовые услуги в соответствии с шариатом.",
    url: "/",
    type: "website",
  },
};



export default function Home() {
  return (
    <MainLayout>
      <WebSiteJsonLd />
      <IBRMain />
      <Recommendation />
      <IBRCalculator />
      <AdditionalInformation />
      <AppleCardsCarouselDemo />
      <CookieConsent />
      <ScrollToTop />
    </MainLayout>
  );
}
