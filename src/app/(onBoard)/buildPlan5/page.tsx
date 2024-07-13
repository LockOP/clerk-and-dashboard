"use client";
import React, { useState } from "react";
import MultiTagSelector from "@/app/components/MultiTagSelector";
import { GrHelpOption } from "react-icons/gr";

export default function page() {
  const [helpOptins, sethelpOptins] = useState<string[]>([]);
  const options = [, ,];

  function ModuleCard({
    img,
    heading,
    info,
    price,
  }: {
    img: JSX.Element;
    heading: string;
    info: string;
    price: string;
  }) {
    return (
      <div className="max-w-[240px] max-h-[318px] w-full h-full rounded-[10px] gap-4 px-6 py-6 shadow-md flex flex-col justify-center ">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-row items-center gap-[14px]">
            <div>{img}</div>
            <div className="text-[20px] font-weight-600 text-[#000000]">
              {heading}
            </div>
          </div>
          <div className="text-[18px] font-weight-400 text-[#54577A] pt-[10px]">
            {info}
          </div>
        </div>
        <button className="px-5 py-4 text-[#161317] font-weight-500 text-[14px] border rounded-[10px] border-[#BAC8FF]">
          {price}
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[778px] flex flex-col items-center  gap-8 pt-16">
          <div className="w-full flex flex-col items-center gap-3">
            <div className="text-[40px] font-semibold font-weight-600 text-center text-[#141522]">
              Need anything else?
            </div>
            <div className="text-[24px] font-weight-500 text-[#54577A]">
              You can add the following modules to your plan
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-[29px]">
              <ModuleCard
                img={<GrHelpOption />}
                heading="Marketing "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
              <ModuleCard
                img={<GrHelpOption />}
                heading="Analytics "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
              <ModuleCard
                img={<GrHelpOption />}
                heading="Warehouse "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
            </div>
            <div className="flex flex-row gap-4">
              <ModuleCard
                img={<GrHelpOption />}
                heading="POS "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
              <ModuleCard
                img={<GrHelpOption />}
                heading="Integrations "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
              <ModuleCard
                img={<GrHelpOption />}
                heading="HR "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
            </div>
            <div className="flex flex-row gap-4">
              <ModuleCard
                img={<GrHelpOption />}
                heading="Supply chain "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
              <ModuleCard
                img={<GrHelpOption />}
                heading="Sales + CRM "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
              <ModuleCard
                img={<GrHelpOption />}
                heading="Accounting "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
            </div>
            <div className="flex flex-row gap-4">
              <ModuleCard
                img={<GrHelpOption />}
                heading="Inventory "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
              <ModuleCard
                img={<GrHelpOption />}
                heading="Website editor "
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consecte"
                price="Starting at $0.00"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <button className="px-[349.5] py-[9px] rounded-[10px] bg-[#546FFF] text-[#FFFFFF]">
              Add to plan
            </button>
            <button className="px-[349.5] py-[9px] border rounded-[10px] bg-#FFFFFF] text-[#463F4B]">
              Skip this step
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
