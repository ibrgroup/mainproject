import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас",
  description:
    "Узнайте о IBR GROUP: исламские банковские услуги, принципы работы, вклады и партнёрство в соответствии с нормами шариата. Прозрачность и надёжность.",
  openGraph: {
    title: "IBR GROUP | О нас — исламские финансовые услуги",
    description: "Принципы работы, вклады, партнёрство. Честность и соответствие шариату.",
    url: "/about-us",
    type: "website",
  },
};

export default function BankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
