export const ContributionResultDisplay: React.FC<{
  result: number;
  monthPayment: number;
  firstPayment: number;
  markUp: number;
  discount: number;
}> = ({ result, markUp }) => {

  
  const formatNumber = (value: number) => {
    return value.toLocaleString("ru-RU"); // Format number with spaces as thousands separators
  };

  return (
    <div className="bg-white lg:bg-[#fefefe00] p-5 mt-3 rounded-3xl">
      <div className="flex mb-1 justify-between items-center">
        <h3 className="font-[500] text-gray-500">Сумма в конце срока</h3>
        <h3 className="font-[500] text-gray-500">Доход</h3>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">{formatNumber(result)} ₽</h1>
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">21%</h1>
      </div>
      <div className="bg-[#75757d3d] h-[1px] mt-6"></div>
      <div className="flex justify-between items-center py-5">
        <p className="text-[16px] text-gray-500">Доход по вкладу</p>
        <span className="lg:text-3xl md:text-2xl text-[16px] font-bold">{formatNumber(markUp)} ₽</span>
      </div>
    </div>
  );
};
