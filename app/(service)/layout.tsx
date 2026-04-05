import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Техническое обслуживание",
  description:
    "Ремонт и обслуживание компьютеров, видеонаблюдения, офисной техники, сетей и Wi-Fi. Восстановление данных, IT-аутсорсинг. IBR GROUP — прозрачные цены и выезд специалиста.",
  openGraph: {
    title: "IBR GROUP | Техническое обслуживание",
    description:
      "Ремонт компьютеров, видеонаблюдение, офисная техника, сети, восстановление данных. Честные цены и качественный сервис.",
    url: "/service",
    type: "website",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
