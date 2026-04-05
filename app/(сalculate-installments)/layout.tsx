import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Рассрочка без процентов",
  description:
    "Калькулятор исламской рассрочки мурабаха. Рассчитайте ежемесячный платёж без процентов и скрытых комиссий. Честные условия от IBR GROUP.",
  openGraph: {
    title: "IBR GROUP | Калькулятор рассрочки",
    description: "Рассчитайте рассрочку без процентов. Удобный калькулятор и прозрачные условия.",
    url: "/installment",
    type: "website",
  },
};

export default function InstallmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
