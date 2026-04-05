"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const MonthSelect: React.FC<{
    month: number;
    setMonth: (value: number) => void;
    onChange: (value: number) => void;
  }> = ({ month, setMonth, onChange }) => {
    const handleChangeMonth = (value: string) => {
      const monthValue = Number(value);
      setMonth(monthValue);
      onChange(monthValue);
    };
  
    return (
      <Select value={String(month)} onValueChange={handleChangeMonth}>
        <SelectTrigger className="w-full rounded-[20px] border hover:border-black transition-all py-7 border-gray-100">
          <SelectValue placeholder="Выберите срок" />
        </SelectTrigger>
        <SelectContent className="text-2xl h-[250px] rounded-[20px] bg-white">
          <SelectGroup>
            {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
              <SelectItem
                key={m}
                value={String(m)}
                className="py-3 hover:bg-gray-100 rounded-xl cursor-pointer"
              >
                {m} {m === 1 ? "месяц" : "месяца"}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };