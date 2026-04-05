import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "lucide-react";

interface Errors {
  fullName?: string;
  phone?: string;
  terms?: string;
}

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg">
      <div className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close modal"
        >
         x
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <button
          className="bg-tiffany px-5 py-3 rounded-md text-white font-semibold hover:bg-[#57cfcbef] transition"
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

// Переименовано с кириллической "С" на латинскую "C"
export const ContributionForm: React.FC<{
  fullName: string;
  setFullName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  termsAccepted: boolean;
  setTermsAccepted: (value: boolean) => void;
  // Удалил errors, т.к. не используется в компоненте
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}> = ({
  fullName,
  setFullName,
  phone,
  setPhone,
  termsAccepted,
  setTermsAccepted,
  handleSubmit,
}) => {
  const [formErrors, setFormErrors] = useState<Errors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!fullName) newErrors.fullName = "ФИО обязательно заполнить";
    if (!phone) newErrors.phone = "Введите номер телефона";
    if (!termsAccepted) newErrors.terms = "Вы должны согласиться с условиями";

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      handleSubmit(event);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="relative z-0">
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
          <span className="text-red-500 text-base px-3">{formErrors.fullName}</span>
        )}
        <label className="flex flex-col w-full p-4 bg-white mt-3 relative rounded-[20px] border hover:border-black transition-all border-gray-100">
          <InputMask
            className="bg-white outline-none placeholder:text-black"
            placeholder="+7 (___) ___-__-__"
            id="phone"
            mask="+7 (999) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value ?? "")}
          />
        </label>

        {formErrors.phone && (
          <span className="text-red-500 text-base px-3">{formErrors.phone}</span>
        )}
        <div className="flex mt-5 gap-3 space-x-2 items-center">
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
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none py-2"
          >
            Я соглашаюсь с{" "}
            <a href="/soglas.pdf" target="_blank" className="underline-offset-2 underline">
            политикой конфиденциальности
            </a>
          </label>
        </div>
        {formErrors.terms && (
          <span className="text-red-500 text-base">{formErrors.terms}</span>
        )}
        <div className="mt-10 md:flex items-center justify-center gap-x-6 lg:justify-start">
          <button
            type="submit"
            className="w-full rounded-2xl bg-tiffany mb-5 px-8 py-5 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Открыть вклад
          </button>
        </div>
      </form>

      <Modal
        title="Спасибо за заявку!"
        description="Менеджер свяжется с вами скоро!"
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};