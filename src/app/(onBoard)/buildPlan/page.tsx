"use client";


import DropDown from "@/app/components/Dropdown";
import MultiTagSelector from "@/app/components/MultiTagSelector";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [employees, setEmployees] = useState<string[]>([]);
  const [order, setOrder] = useState<string[]>([]);
  const [revenue, setRevenue] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const router = useRouter();

  const categories = ["Categories", "Category 1", "Category 2", "Category 3"];
  const handleSelect = (selectedOption: any) => {
    console.log("Selected:", selectedOption);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[717px] flex flex-col items-center  gap-8 pt-16">
          <div className="text-[40px] font-semibold font-weight-150 text-center ">
            Tell us about your business so that we <br />
            can find the right plan for you
          </div>

          <div className="w-full flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="text-[#141522] font-semibold text-[14px] font-weight-600 ">
                Where is your business located?
              </div>
              <div className="flex flex-row gap-4">
              <DropDown
                      label="State"
                      options={[
                        "State 1",
                        "State 2",
                        "State 3",
                        "State 4",
                      ]}
                      selected={status}
                      setSelected={setStatus}
                      // hidden={selectedRows.length}
                    />
                <DropDown
                      label="Country"
                      options={[
                        "Country 1",
                        "Country 2",
                        "Country 3",
                        "Country 4",
                      ]}
                      selected={status}
                      setSelected={setStatus}
                    />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#141522] font-semibold text-[14px] font-weight-600">
                How many employees do you have?
              </div>
              <div className="flex flex-row">
                <MultiTagSelector
                  options={["Just me", "2-50", "51-250", "251-1,000", "1,000+"]}
                  selectedOptions={employees}
                  setSelectedOptions={setEmployees}
                  selectMode="single"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#141522] font-semibold text-[14px] font-weight-600">
                What is your monthly order volume?
              </div>
              <div className="flex flex-row">
                <MultiTagSelector
                  options={[
                    "Unknown",
                    "0-500 orders",
                    "500-5,000 orders",
                    "5000+ orders",
                  ]}
                  selectedOptions={order}
                  setSelectedOptions={setOrder}
                  selectMode="single"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="text-[#141522] font-semibold text-[14px] font-weight-600">
                What is your annual revenue volume?
              </div>
              <div className="w-full flex flex-row">
                <MultiTagSelector
                  options={[
                    "Unknown",
                    "Up to $250,000",
                    "$250,000 - $1,000,000",
                    "$1,000,000+",
                  ]}
                  selectedOptions={revenue}
                  setSelectedOptions={setRevenue}
                  selectMode="single"
                />
              </div>
            </div>
          </div>
          <button onClick={() => router.push("/buildPlan2")} className="bg-[#3D53DB] w-full py-[13px] text-[white] font-semibold text-[16px] font-weight-600 rounded-[10px] items-center justify-center">
            Next: Describe your business
          </button>
          <div className="flex flex-row items-center text-[#54577A] text-[16px] font-weight-600">
            <div className="font-normal">Have an account already?</div>
            <button className="font-semibold "> LogIn</button>
          </div>
        </div>
      </div>
    </>
  );
}
