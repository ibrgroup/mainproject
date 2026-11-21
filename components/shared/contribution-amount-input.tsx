import React from "react";
import { INVEST_MAX_AMOUNT, INVEST_MIN_AMOUNT } from "@/constants/index";

export const ContributionAmountInput: React.FC<{
  count: number;
  setCount: (value: number) => void;
  countInput: string;
  setCountInput: (value: string) => void;
  onChange: (value: number) => void;
}> = ({ count, setCount, countInput, setCountInput, onChange }) => {
  const formatNumber = (value: number) =>
    value.toLocaleString("ru-RU").replace(/\u00A0/g, " "); // заменяем неразрывный пробел на обычный

  const parseNumber = (value: string) => {
    // Удаляем все символы, кроме цифр
    const cleaned = value.replace(/[^0-9]/g, "");
    return cleaned ? Number(cleaned) : 0;
  };

  const handleChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setCountInput(inputValue);

    const numericValue = parseNumber(inputValue);
    if (numericValue >= INVEST_MIN_AMOUNT && numericValue <= INVEST_MAX_AMOUNT) {
      setCount(numericValue);
      onChange(numericValue);
    }
  };

  const commitCount = () => {
    const numericValue = parseNumber(countInput);
    const valueToSet = Math.min(Math.max(numericValue, INVEST_MIN_AMOUNT), INVEST_MAX_AMOUNT);

    setCount(valueToSet);
    setCountInput(formatNumber(valueToSet));
    onChange(valueToSet);
  };

  const handleInputCount = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") commitCount();
  };

  React.useEffect(() => {
    setCountInput(formatNumber(count));
  }, [count, setCountInput]); // Добавлено setCountInput в зависимости

  return (
    <figure className="relative z-100 mb-14">
      <label className="flex flex-col bg-[#FFFFFF] border border-b-0 hover:border-black transition-all p-2 px-4 relative rounded-[12px] rounded-t-[20px]">
        <span className="text-[12px]">Сумма</span>
        <input
          value={countInput}
          onChange={handleChangeCount}
          onKeyDown={handleInputCount}
          onBlur={commitCount}
          className="bg-[#FFFFFF] [-moz-appearance:_textfield] outline-none font-bold"
          type="text"
          inputMode="numeric"
          aria-label="Сумма инвестиций"
        />
        <p className="absolute right-5 top-5 text-xl font-bold">₽</p>
        <input
          type="range"
          min={INVEST_MIN_AMOUNT}
          max={INVEST_MAX_AMOUNT}
          step={10000}
          className="w-full left-0 z-10 absolute bottom-0 custom-range"
          aria-label="Сумма инвестиций"
          value={count}
          onChange={(e) => {
            const val = Number(e.target.value);
            setCount(val);
            setCountInput(formatNumber(val));
            onChange(val);
          }}
        />
      </label>
      <figcaption className="flex justify-between mt-2">
        <div className="absolute left-0 top-[4.5rem] text-xs">250 тыс.</div>
        <div className="absolute right-0 top-[4.5rem] text-xs">3 млн.</div>
      </figcaption>
    </figure>
  );
};