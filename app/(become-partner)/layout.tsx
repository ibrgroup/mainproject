import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IBR-GROUP | Партнёрство",
  description:
    "Станьте партнёром IBR GROUP. Прозрачные финансовые схемы, сертифицированные товары, соблюдение норм шариата. Откройте новые возможности для бизнеса.",
  openGraph: {
    title: "IBR GROUP | Партнёрство",
    description: "Сотрудничество на принципах честности и соответствия исламским нормам.",
    url: "/become-partner",
    type: "website",
  },
};

export default function BecomePartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
