export const ContributionResultDisplay: React.FC<{
  result: number;
  profit: number;
  rate: number;
}> = ({ result, profit, rate }) => {
  const formatNumber = (value: number) => value.toLocaleString("ru-RU");

  return (
    <div className="bg-white lg:bg-[#fefefe00] p-5 mt-3 rounded-3xl">
      <div className="flex mb-1 justify-between items-center">
        <h3 className="font-[500] text-gray-500">Сумма в конце срока</h3>
        <h3 className="font-[500] text-gray-500">Доходность</h3>
      </div>
      <div className="flex justify-between items-center">
        <p className="lg:text-3xl md:text-2xl text-xl font-bold">{formatNumber(result)} ₽</p>
        <p className="lg:text-3xl md:text-2xl text-xl font-bold">до {Math.round(rate * 100)}%</p>
      </div>
      <div className="bg-[#75757d3d] h-[1px] mt-6"></div>
      <div className="flex justify-between items-center py-5">
        <p className="text-[16px] text-gray-500">Ожидаемая прибыль</p>
        <span className="lg:text-3xl md:text-2xl text-[16px] font-bold">{formatNumber(profit)} ₽</span>
      </div>
    </div>
  );
};
