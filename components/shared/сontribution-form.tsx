'use client';

import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "lucide-react";
import { IoClose } from "react-icons/io5";

interface Errors {
  fullName?: string;
  phone?: string;
  terms?: string;
}

const WEB3FORMS_ACCESS_KEY = "d114fdda-87d3-41db-8fd6-e971022307d6";

export const ContributionForm: React.FC<{ amount: number; term: string }> = ({ amount, term }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!fullName.trim()) newErrors.fullName = "ФИО обязательно заполнить";
    if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) newErrors.phone = "Введите номер телефона";
    if (!termsAccepted) newErrors.terms = "Вы должны согласиться с условиями";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm() || isSubmitting) return;

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Заявка IBR Invest");
    formData.append("name", fullName);
    formData.append("phone", phone);
    formData.append("amount", `${amount.toLocaleString("ru-RU")} ₽`);
    formData.append("term", term);

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFullName("");
        setPhone("");
        setTermsAccepted(false);
        setErrors({});
        setIsModalOpen(true);
      } else {
        alert("Ошибка при отправке: " + data.message);
      }
    } catch (error) {
      alert("Произошла ошибка: " + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative z-0" noValidate>
        <label className="flex flex-col w-full p-4 lg:mt-0 mt-3 bg-white relative rounded-[20px] border hover:border-black transition-all border-gray-100">
          <input
            className="bg-white outline-none placeholder:text-gray-800"
            type="text"
            name="fullName"
            placeholder="ФИО"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        {errors.fullName && <span className="text-red-500 text-sm px-3">{errors.fullName}</span>}
        <label className="flex flex-col w-full p-4 bg-white mt-3 relative rounded-[20px] border hover:border-black transition-all border-gray-100">
          <InputMask
            className="bg-white outline-none placeholder:text-black"
            placeholder="+7 (___) ___-__-__"
            name="phone"
            mask="+7 (999) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value ?? "")}
          />
        </label>
        {errors.phone && <span className="text-red-500 text-sm px-3">{errors.phone}</span>}
        <div className="flex mt-5 gap-3 items-center">
          <Checkbox
            id="invest-terms"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className={`group outline-none w-8 shrink-0 rounded-md h-7 cursor-pointer border border-[#57cfcb]
          ${termsAccepted ? "bg-tiffany" : "bg-white/10"} transition duration-200`}
          >
            <CheckIcon className="hidden text-white m-auto group-data-[checked]:block" />
          </Checkbox>
          <label htmlFor="invest-terms" className="text-sm font-medium leading-none py-2">
            Я соглашаюсь с{" "}
            <a
              href="/Пользовательское соглашение сервиса IBR Group.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 underline"
            >
              политикой конфиденциальности
            </a>
          </label>
        </div>
        {errors.terms && <span className="text-red-500 text-sm">{errors.terms}</span>}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-tiffany mb-5 px-8 py-5 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {isSubmitting ? "Отправляем..." : "Оставить заявку"}
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white p-6 rounded-3xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute bg-gray-900 p-1 text-white rounded-full top-3.5 right-3.5"
              onClick={() => setIsModalOpen(false)}
              aria-label="Закрыть"
            >
              <IoClose size={22} />
            </button>
            <p className="text-md mb-4">Спасибо за заявку!</p>
            <p className="text-2xl font-bold">Менеджер свяжется с вами в ближайшее время</p>
          </div>
        </div>
      )}
    </>
  );
};
