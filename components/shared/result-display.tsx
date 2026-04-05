export const ResultDisplay: React.FC<{
  result: number;
  monthPayment: number;
  firstPayment: number;
  markUp: number;
  discount: number;
}> = ({ result, monthPayment, firstPayment, markUp, discount }) => {
  const formatNumber = (value: number | undefined) => {
    return value !== undefined ? value.toLocaleString("ru-RU") : "0"; // Форматируем число или возвращаем "0"
  };

  return (
    <div className="bg-white lg:bg-[#fefefe00] p-5 mt-3 rounded-3xl">
      <div className="flex mb-1 justify-between items-center">
        <h3 className="font-bold text-xl text-gray-800">Общая стоимость</h3>
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
          {formatNumber(result)} ₽
        </h1>
      </div>
      <div className="bg-[#75757d3d] h-[1px] mt-6"></div>
      <div className="flex mt-5 justify-between items-center mb-3">
        <p className="text-base text-gray-800">Ежемесячный платеж</p>
        <span className="lg:text-3xl md:text-2xl text-base font-bold">
          {formatNumber(monthPayment)} ₽
        </span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <p className="text-base text-gray-800">Первоначальный взнос</p>
        <span className="lg:text-3xl md:text-2xl text-base font-bold">
          {discount === 0.01 ? (
            <span className="lg:text-3xl md:text-2xl text-base font-bold">
              0 ₽
            </span>
          ) : (
            <p>{formatNumber(firstPayment)} ₽</p>
          )}
        </span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <p className="text-base text-gray-800">Торговая наценка</p>
        <span className="lg:text-3xl md:text-2xl text-base font-bold">
          {formatNumber(markUp)} ₽
        </span>
      </div>
    </div>
  );
};
