import { useEffect, useRef, useState } from "react";

function DropDown({
  selected,
  setSelected,
  label,
  options,
  allowClear = true,
  hidden = false,
}: {
  selected: string;
  setSelected: any;
  label: string;
  options: string[];
  allowClear?: boolean;
  hidden?: boolean | number;
}) {
  const [open, setOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      DropDownRef.current &&
      !DropDownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={DropDownRef}
      key={"dd" + label}
      onClick={() => setOpen(!open)}
      className={`group relative box-border flex h-11 shrink-0 cursor-pointer select-none flex-row items-center gap-[260px] rounded-[10px] border bg-[#ffffff] px-5 ${
        open ? "border-[#546FFF]" : "border-[#BAC8FF] "
      } ${hidden ? "hidden" : ""} `}
    >
      <p className="pointer-events-none select-none text-[12px] font-semibold text-[#8E92BC]">
        {label}

        
      </p>
      <img src="/arrowdown.svg" />
      <div
        className={`ani absolute left-0 top-4 z-[20] box-border block w-[200px] overflow-hidden rounded-[10px] border border-[#BAC8FF] bg-[white] shadow-lg ${
          open
            ? "pointer-events-auto translate-y-11 opacity-100"
            : "pointer-events-none translate-y-[-14px] opacity-0"
        }`}
      >
        {options.map((option, index) => {
          return (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected((cur: string) =>
                  allowClear ? (cur == option ? "" : option) : option
                );
              }}
              key={index}
              className={`w-full select-none text-ellipsis p-4 text-left text-[12px] font-semibold text-[#54577A] ${
                selected === option
                  ? "bg-[#DDE2FF] hover:bg-[#d1d8fc]"
                  : "hover:bg-[#F2F4F7]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DropDown;
