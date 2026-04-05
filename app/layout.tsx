import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "IBR GROUP | Исламская рассрочка",
  icons: {
    icon: "/logo.webp",
  },
  manifest: "/manifest.json",
  description: "IBR GROUP — это не просто площадка объявлений, а целая экосистема, объединяющая продавцов товаров в рассрочку и покупателей, ищущих комфортный и доступный способ покупки",
  keywords: ["Исламская", "рассрочка", "IBR-GROUP"],
  language: "ru",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106991664','ym');
            
            ym(106991664, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87JHGMNT74"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-87JHGMNT74');
          `}
        </Script>
      </head>
      <body>
        <main className="min-h-screen">
          <Providers>{children}</Providers>
          <NextTopLoader />
        </main>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106991664"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}