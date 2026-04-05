"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { Checkbox } from "@headlessui/react";
import { InputMask } from "primereact/inputmask";
import { AnimatePresence } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CheckIcon } from "lucide-react";
import axios from "axios"; // Подключаем axios для отправки запроса

interface Errors {
  fullName?: string;
  phone?: string;
  terms?: string;
}


export const CreditForm: React.FC<{
  fullName: string;
  setFullName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  termsAccepted: boolean;
  setTermsAccepted: (value: boolean) => void;
  errors: Errors;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}> = ({
  fullName,
  setFullName,
  phone,
  setPhone,
  termsAccepted,
  setTermsAccepted,
}) => {
  const [formErrors, setFormErrors] = React.useState<Errors>({});
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () =>
    handleClose()
  );

  const handleClose = () => {
    setOpen(false);
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!fullName) newErrors.fullName = "ФИО обязательно заполнить";
    if (!phone) newErrors.phone = "Введите номер телефона";
    if (!termsAccepted) newErrors.terms = "Вы должны согласиться с условиями";

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      const serviceId = "service_3g43hf6";
      const templateId = "template_5433emf";
      const publicKey = "ercY0qK77hNQPz518";

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: fullName,
          from_email: phone, // Здесь можно использовать email или телефон
          to_name: "IBR GROUP",
          message: phone,
        },
      };

      try {
        const res = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          data
        );
        console.log(res.data);
        
        // Очищаем форму после успешной отправки
        setFullName("");
        setPhone("");
        setTermsAccepted(false);
        
        setOpen(true); // Открываем модальное окно
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <React.Fragment>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 px-4 h-screen overflow-auto">
            <div className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg" />
            <div
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 text-white ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black"
                onClick={handleClose}
              >
               x
              </button>
              <p className="text-base font-medium text-gray-800">
                Спасибо за заявку!
              </p>
              <p className="mt-4 text-2xl font-semibold text-gray-800 md:text-5xl">
                Менеджер свяжется с вами скоро!
              </p>
              <div className="py-10 flex items-center gap-1">
            <img className="rounded-2xl" src="/logo.webp" alt="Описание GIF" width={60} height={60} />
            <h4 className="font-bold text-xl text-gray-800 font-saira">IBR GROUP</h4>
          </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <form onSubmit={handleFormSubmit}>
        <label className="flex flex-col w-full p-4 lg:mt-0 mt-3 bg-white relative rounded-[20px] border hover:border-black transition-all border-gray-100">
          <input
            className="bg-white outline-none placeholder:text-gray-800"
            type="text"
            placeholder="ФИО"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        {formErrors.fullName && (
          <span className="text-red-500 text-base px-3">
            {formErrors.fullName}
          </span>
        )}
        <label className="flex flex-col w-full p-4 bg-white mt-3 relative rounded-[20px] border hover:border-black transition-all border-gray-100">
          <InputMask
            className="bg-white outline-none placeholder:text-gray-800"
            placeholder="+7 (___) ___-__-__"
            id="phone"
            mask="+7 (999) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value ?? "")}
          />
        </label>
        {formErrors.phone && (
          <span className="text-red-500 text-base px-3">
            {formErrors.phone}
          </span>
        )}
        <div className="text-sm font-medium leading-none px-3 mt-5 flex items-center gap-3">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className={`group outline-none w-8 rounded-md h-7 cursor-pointer border border-[#57cfcb] 
          ${termsAccepted ? "bg-tiffany" : "bg-white/10"} transition duration-200`}
          >
            <CheckIcon
              className={`hidden text-white m-auto justify-center items-center group-data-[checked]:block`}
            />
          </Checkbox>
          <label htmlFor="terms">
            Я соглашаюсь с{" "}
            <a
              href="/Пользовательское соглашение сервиса IBR Group.pdf"
              target="_blank"
              className="underline-offset-2 underline"
            >
              политикой конфиденциальности
            </a>
          </label>
        </div>
        {formErrors.terms && (
          <span className="text-red-500 text-base px-3">
            {formErrors.terms}
          </span>
        )}
        <div className="mt-10 md:flex items-center justify-center gap-x-6 lg:justify-start">
          <Button
            variant={"flat"}
            type="submit"
            className="w-full rounded-2xl bg-tiffany mb-5 px-8 py-7 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Подать заявку
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};