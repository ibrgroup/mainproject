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

export const ContributionMonthSelect: React.FC<{
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
        <SelectContent className="text-2xl h-full rounded-[20px] bg-white">
          <SelectGroup>
            {[
              { value: 3, label: "3 месяца" },
              { value: 6, label: "6 месяцев" },
              { value: 9, label: "9 месяцев" },
              { value: 12, label: "1 год" },
              { value: 24, label: "2 года" },
              { value: 36, label: "3 года" },
            ].map(({ value, label }) => (
              <SelectItem
                key={value}
                value={String(value)}
                className="py-3 hover:bg-gray-100 rounded-xl cursor-pointer"
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };