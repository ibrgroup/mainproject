"use client";

import React, { useState} from "react";
import { ParagraphSize } from "./paragraph";
import { InputMask } from "primereact/inputmask";
import { motion, AnimatePresence } from "framer-motion"; 
import { Button } from "@heroui/react";

interface SuccessModalProps {
  open: boolean;
  handleClose: () => void;
}

// Модальное окно успеха
const SuccessModal: React.FC<SuccessModalProps> = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 px-4 z-50 h-screen overflow-auto"
      >
        <div className="fixed inset-0 h-full w-full bg-black/80 bg-opacity-80 backdrop-blur-lg" />
        <div className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900">
          <button
            className="sticky top-4 right-0 ml-auto text-white flex h-8 w-8 items-center justify-center rounded-full bg-black"
            onClick={handleClose}
          >
            X
          </button>
          <p className="text-base font-medium text-gray-800">
            Спасибо за заявку!
          </p>
          <h1 className="mt-4 text-2xl font-semibold text-gray-800 md:text-5xl">
            Менеджер свяжется с вами скоро!
          </h1>
          <div className="py-10 flex items-center gap-1">
            <img className="rounded-2xl" src="/logo.webp" alt="Описание GIF" width={60} height={60} />
            <h4 className="font-bold text-xl text-gray-800 font-saira">IBR GROUP</h4>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

interface FormData {
  name: string;
  phone: string;
}

interface ErrorState {
  nameError: boolean;
  phoneError: boolean;
}

const GetConsultation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState<ErrorState>({
    nameError: false,
    phoneError: false,
  });

  const handleFormSubmit = async (
    event: React.FormEvent
  ): Promise<void> => {
    event.preventDefault();

    let hasErrors = false;

    // Проверка ошибок
    if (!formData.name.trim()) {
      setErrors((prev) => ({ ...prev, nameError: true }));
      hasErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, nameError: false }));
    }

    if (!formData.phone.trim()) {
      setErrors((prev) => ({ ...prev, phoneError: true }));
      hasErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, phoneError: false }));
    }

    if (hasErrors) {
      return;
    }

    try {
      await fetch("/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setOpen(true);
      setFormData({ name: "", phone: "" });
      setErrors({ nameError: false, phoneError: false });
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке формы");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="max-container px-4 m-auto py-10 md:py-20">
      <SuccessModal open={open} handleClose={handleClose} />
      <div id="BecomePartner"></div>
      <ParagraphSize
        className="text-gray-800 text-center font-sans max-w-lg m-auto text-balance font-bold tracking-tight text-4xl lg:text-6xl"
        text="Получить консультацию"
        size="xl"
      />
      <div className="bg-gray-100 md:py-16 rounded-4xl mt-10">
        <form
          className="w-full max-w-[700px] m-auto md:bg-white md:rounded-4xl p-6"
          onSubmit={handleFormSubmit}
        >
          <label
            className={`flex flex-col w-full p-4 bg-white md:bg-gray-100 mt-5 relative rounded-2xl border hover:border-black transition-all border-gray-100 ${
              errors.nameError ? "border-red-500" : ""
            }`}
          >
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="bg-white placeholder:text-gray-800 md:bg-gray-100 outline-none"
              type="text"
              placeholder="ФИО"
            />
          </label>

          <label
            className={`flex flex-col w-full p-4 bg-white md:bg-gray-100 mt-5 relative rounded-2xl border hover:border-black transition-all border-gray-100 ${
              errors.phoneError ? "border-red-500" : ""
            }`}
          >
            <InputMask
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  phone: e.target.value as string,
                }))
              }
              className="bg-white placeholder:text-gray-800 md:bg-gray-100 outline-none"
              placeholder="+7 (___) ___-__-__"
              id="phone"
              mask="+7 (999) 999-99-99"
            />
          </label>

          <div className="mt-5 flex items-center justify-center">
            <Button
              type="submit"
              className="w-full rounded-2xl bg-tiffany mb-5 px-8 py-7 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Отправить заявку
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetConsultation;