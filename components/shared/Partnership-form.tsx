"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Checkbox } from "@headlessui/react";
import { InputMask } from "primereact/inputmask";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { IoClose } from "react-icons/io5";

// Хук для клика вне
function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

interface Errors {
  fullName?: string;
  phone?: string;
  terms?: string;
}

export default function PartnershipForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Для закрытия модального при клике вне
  // @ts-ignore
  useOutsideClick(modalRef, () => setOpen(false));

  const handleClose = () => setOpen(false);

  // Функция отправки формы через API
  const handleFormSubmission = async () => {
    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("phone", phone); // добавляем номер телефона из состояния
    formData.append("access_key", "8f35a319-c32d-4c35-9318-b35ae13d9edd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Форма успешно отправлена");
        if (formRef.current) {
          formRef.current.reset();
        }
        setFullName("");
        setPhone("");
        setTermsAccepted(false);
        setErrors({});
        setOpen(true);
      } else {
        setResult("Ошибка");
        alert("Ошибка при отправке: " + data.message);
      }
    } catch (error) {
      setResult("Ошибка");
      alert("Произошла ошибка: " + error);
    }
  };

  const [result, setResult] = useState("");

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!fullName.trim()) newErrors.fullName = "ФИО обязательно заполнить";
    if (!phone.trim()) newErrors.phone = "Введите номер телефона";
    if (!termsAccepted) newErrors.terms = "Вы должны согласиться с условиями";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      handleFormSubmission();
    }
  };

  return (
    <div>
      {/* Ваша форма */}
      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        {/* ФИО */}
        <label className="flex flex-col w-full p-4 bg-white mt-3 relative rounded-2xl border hover:border-black transition-all border-gray-100">
          <input
            type="text"
            placeholder="ФИО"
            className=" outline-none"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            name="fullName"
            required
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </label>

        {/* Телефон */}
        <label className="flex flex-col w-full p-4 bg-white mt-3 relative rounded-2xl border hover:border-black transition-all border-gray-100 ">
          <InputMask
            className=" outline-none"
            placeholder="+7 (___) ___-__-__"
            mask="+7 (999) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value ?? "")}
            name="phone"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </label>

        {/* Согласие */}
        <div className="flex items-center mt-3">
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
          <label className="text-sm ml-2">
            Я соглашаюсь с{" "}
            <a
              href="/Пользовательское соглашение сервиса IBR Group.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              политикой конфиденциальности
            </a>
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mb-4">{errors.terms}</p>
        )}

        {/* Кнопка */}
        <div className="mt-5 md:flex items-center justify-center gap-x-6 lg:justify-start">
          <Button
            variant={"flat"}
            type="submit"
            className="w-full rounded-2xl bg-tiffany mb-5 px-8 py-7 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef]"
          >
            Подать заявку
          </Button>
        </div>
        <span>{result}</span>
      </form>

      {/* Анимация благодарности */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          >
            <div
              ref={modalRef}
              className="absolute top-9 m-1 bg-white p-6 rounded-3xl max-w-5xl md:w-full"
            >
              <button className="absolute bg-gray-900 p-1 text-white rounded-full top-3.5 right-3.5" onClick={handleClose}>
                <IoClose size={22}/>
              </button>
              <p className="text-md mb-4">Спасибо за заявку!</p>
              <p className="text-2xl font-roboto font-bold">
                Менеджер свяжется с вами скоро! 
              </p>
                <div className="mt-2 flex items-center gap-2">
                  <img className="rounded-2xl" width={60} height={60} src="/logo.webp" alt="logo" />
                  <h2 className="text-xl font-roboto font-bold text-gray-900">IBR GROUP</h2>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
