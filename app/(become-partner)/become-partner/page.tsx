import MainLayout from "@/components/shared/main-layout";
import { StartPartnership } from "@/components/shared/start-partnership ";
import ScrollToTop from "@/components/shared/scroll-top";
import BecomePartner from "@/components/shared/become-partner";
import GetConsultation from "@/components/shared/get-consultation";
import WhyChooseUs from "@/components/shared/why-choose-us";
import { CooperationAdvantages } from "@/components/shared/individua";
import CookieConsent from "@/components/shared/сookie-сonsent";

const Page = () => {
  return (
    <MainLayout>
      <BecomePartner />
      <WhyChooseUs />
      <CooperationAdvantages />
      <StartPartnership />
      <GetConsultation />
      <CookieConsent />
      <ScrollToTop />
    </MainLayout>
  );
};

export default Page;
