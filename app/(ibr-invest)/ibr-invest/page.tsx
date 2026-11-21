import IbrInvestMain from "@/components/shared/ibr-invest-main";
import InvestCalculator from "@/components/shared/invest-calculator";
import MainLayout from "@/components/shared/main-layout";

const Home = () => {
  return (
    <MainLayout>
      <IbrInvestMain/>
      <InvestCalculator/>
    </MainLayout>
  );
};

export default Home;
