"use client";
import React, { useState } from "react";
import MultiTagSelector from "@/app/components/MultiTagSelector";
import { GrHelpOption } from "react-icons/gr";

export default function page() {
  const [helpOptins, sethelpOptins] = useState<string[]>([]);
  const options = [, ,];
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[717px] flex flex-col items-center  gap-8 pt-16">
          <div className="text-[40px] font-semibold font-weight-150 text-center ">
            How can we help you?
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full font-weight-400 text-[12px] text-[#141522]">Select all that apply</div>
            <div className="flex flex-row">
              <MultiTagSelector
                options={[
                  "Order management",
                  "Grow my business",
                  "I need my orders in one place",
                  "I want a quicker way to ship",
                ]}
                selectedOptions={helpOptins}
                setSelectedOptions={sethelpOptins}
                selectMode="multiple"
              />
              </div>
              <div>
              <MultiTagSelector
                options={[
                  "I need help with product mockups",
                  "I need help writing captions",
                  "I need help handling customer inquiries",
                ]}
                selectedOptions={helpOptins}
                setSelectedOptions={sethelpOptins}
                selectMode="multiple"
              />
              </div><div>
              <MultiTagSelector
                options={[
                  "I need to manage my team",
                  "I'd like to cross list",
                  "I want to enhance my website ",
                  "Other",
                ]}
                selectedOptions={helpOptins}
                setSelectedOptions={sethelpOptins}
                selectMode="multiple"
              />
              
            </div>
          </div>
          <button className="bg-[#3D53DB] w-full py-[13px] text-[white] font-semibold text-[16px] font-weight-600 rounded-[10px] items-center justify-center">
            Next
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
