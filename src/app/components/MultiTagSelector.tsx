import { useState } from "react";

export default function MultiTagSelector({
  options,
  selectedOptions,
  setSelectedOptions,
  selectMode,
}: {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectMode?: "multiple" | "single";
}) {
  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => {
          return selectedOption !== option;
        })
      );
    } else {
      selectMode === "single"
        ? setSelectedOptions([option])
        : setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="w-full flex flex-row gap-4 ">
      {options.map((option: any) => (
        <div
          key={option}
          onClick={() => handleOptionClick(option)}
          className={`flex items-center py-2 px-4 border-[0.5px] text-[12px] font-weight-500 rounded-md border-[#BAC8FF] cursor-pointer hover:bg-[#BAC8FF] ${
            selectedOptions.includes(option) ? "bg-[#BAC8FF]" : ""
          }`}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
