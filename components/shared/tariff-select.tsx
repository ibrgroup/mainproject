import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TariffSelect: React.FC<{
  discount: number;
  setDiscount: (value: number) => void;
  onChange: (value: number) => void;
}> = ({ setDiscount, onChange }) => {
  return (
    <Select
      onValueChange={(value) => {
        const newDiscount = Number(value);
        setDiscount(newDiscount);
        onChange(newDiscount);
      }}
    >
      <SelectTrigger className="w-full rounded-[20px] border hover:border-black transition-all py-7 border-gray-100 mt-10">
        <SelectValue placeholder="Комфорт " />
      </SelectTrigger>
      {/* <SelectContent className="text-2xl rounded-[20px] bg-white">
        <SelectGroup>
          <SelectItem
            className="py-3 hover:bg-gray-100 rounded-xl cursor-pointer"
            value="0.03"
          >
            Комфорт
          </SelectItem>
          <SelectItem
            className="py-3 hover:bg-gray-100 rounded-xl cursor-pointer"
            value="0.04"
          >
            Стандарт
          </SelectItem>
        </SelectGroup>
      </SelectContent> */}
    </Select>
  );
};
