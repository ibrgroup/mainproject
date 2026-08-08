
import ServiceMain from "@/components/shared/service-main";
import ScrollToTop from "@/components/shared/scroll-top";
import ServicesSection from "@/components/shared/services-section";
import CookieConsent from "@/components/shared/сookie-сonsent";
import MainLayout from "@/components/shared/main-layout";
import AboutCompany from "@/components/shared/about-company";
import { ServicePrice } from "@/components/shared/service-price";

const ServicePage: React.FC = () => {
  return (
    <MainLayout>
      <ServiceMain />
      <ServicesSection />
      <ServicePrice />
      <AboutCompany/>
      <CookieConsent />
      <ScrollToTop />
    </MainLayout>
  );
};

export default ServicePage;
