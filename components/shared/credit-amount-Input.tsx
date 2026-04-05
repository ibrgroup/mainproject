export const CreditAmountInput: React.FC<{
  count: number;
  setCount: (value: number) => void;
  countInput: number;
  setCountInput: (value: number) => void;
  onChange: (value: number) => void;
}> = ({ count, setCount, countInput, setCountInput, onChange }) => {
  
  const formatNumber = (value: number) => {
    return value.toLocaleString("ru-RU"); // Форматируем число с пробелами
  };

  const parseNumber = (value: string) => {
    const cleaned = value.replace(/[^0-9]/g, ""); // Удаляем все нецифровые символы
    return cleaned ? Number(cleaned) : 0; // Преобразуем в число или возвращаем 0
  };

  const handleChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseNumber(event.target.value); // Парсим введенное значение
    setCountInput(value);
    setCount(value);
    onChange(value);
  };

  const handleInputCount = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = parseNumber((event.target as HTMLInputElement).value);
      if (value > 150000) {
        setCount(150000);
        setCountInput(150000);
      } else if (value < 10000) {
        setCount(10000);
        setCountInput(10000);
      } else {
        setCount(value);
        setCountInput(value);
      }
      onChange(value);
    }
  };

  return (
    <figure className="relative z-100 mb-14">
      <label className="flex flex-col bg-[#FFFFFF] border border-b-0 hover:border-black transition-all p-2 px-4 relative rounded-[12px] rounded-t-[20px]">
        <span className="text-[12px]">Сумма</span>
        <input
          min={10000}
          max={150000}
          value={formatNumber(countInput)} // Отображаем отформатированное значение
          onChange={handleChangeCount} 
          onKeyDown={handleInputCount}
          className="bg-[#FFFFFF] [-moz-appearance:_textfield] outline-none font-bold"
          type="text" // Изменяем тип на text
        />
        <input
          type="range"
          min={10000}
          max={150000}
          step={100}
          className="w-full left-0 z-10 absolute bottom-0 custom-range"
          value={count}
          onChange={handleChangeCount}
        />
        <p className="absolute right-5 top-5 text-xl font-bold">₽</p>
      </label>
      <figcaption className="flex justify-between mt-2">
        <div className="absolute left-0 top-[4.5rem] text-xs">10 тыс.</div>
        <div className="absolute right-0 top-[4.5rem] text-xs">150 тыс.</div>
      </figcaption>
    </figure>
  );
};
