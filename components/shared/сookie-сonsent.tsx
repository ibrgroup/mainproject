"use client";
import { useEffect, useState } from "react";

interface CookieConsentProps {
  onAccept?: () => void;
}

const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  const [showCookieBanner, setShowCookieBanner] = useState(
    null as boolean | null,
  );

  useEffect(() => {
    const accepted = window.localStorage.getItem("cookiesAccepted");
    setShowCookieBanner(!accepted);
  }, []);

  const handleAcceptCookies = () => {
    if (onAccept) {
      onAccept();
    }
    window.localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  return showCookieBanner === null ? null : (
    <>
      {showCookieBanner && (
        <div className="cookie-banner rounded-2xl fixed bottom-5 w-fit left-50 right-50 m-10 bg-gray-800 text-white p-4 z-50">
          <h4 className="max-w-md text-[14px]">
            Мы используем файлы cookie для улучшения вашего опыта на сайте.
            Продолжая просмотр, вы соглашаетесь с нашей политикой
            конфиденциальности
          </h4>
          <button
            type="button"
            className="bg-tiffany font-bold text-[14px] px-3 py-1 rounded-md mt-2"
            onClick={handleAcceptCookies}
          >
            Принять
          </button>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
