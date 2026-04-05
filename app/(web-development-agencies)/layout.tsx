import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Веб-разработка",
  description:
    "Разработка сайтов под ключ: лендинги, интернет-магазины, корпоративные сайты. Современный дизайн, SEO, индивидуальный подход. IBR GROUP — создаём сайты, которые работают.",
  openGraph: {
    title: "IBR GROUP | Веб-разработка — сайты под ключ",
    description: "Лендинги, интернет-магазины, корпоративные сайты. Современные технологии и результат.",
    url: "/web-development-agencies",
    type: "website",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
