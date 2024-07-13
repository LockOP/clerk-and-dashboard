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
        <div className="w-full max-w-[1000px] flex flex-col items-center  gap-8 pt-16">
          <div className="w-full flex flex-col items-center gap-3">
            <div className="text-[40px] font-semibold font-weight-600 text-center text-[#141522]">
              The
              <span className="bg-gradient-to-r from-[#546FFF]  to-[#9747FF] inline-block text-transparent bg-clip-text">
                growth plan
              </span>
              is the perfect plan for you
            </div>
            <div className="text-[24px] font-weight-500 text-[#54577A]">
              This plan includes a 7 day free trial - no charges until the 7th
              day.
            </div>
          </div>

          <div className=" w-full flex flex-row gap-4 border rounded-[5px]">
            <div className="flex items-center pl-4"><img src="/AI Icon.png" className="w-[16px] h-[16px]"/></div>
            <div className="text-[18px]  py-4 pr-4 font-weight-400 text-[#161317]">
              We chose this plan for you because lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore consecte. Consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </div>
          </div>
          <div className="w-full items-center flex pt-8">
            <div className="w-full flex flex-col items-center pt-6 shadow">
              <div className="flex flex-col items-center gap-2">
                <div className="flex text-[18px] font-weight-500 text-[#9A96B4]">
                  Growth
                </div>
                <div className="flex text-[24px] font-weight-600 text-[#161317]">
                  Starting at $79/seat
                </div>
                <div className="flextext-[14px] font-weight-400 text-[#9A96B4]">
                  Base license fee: $250/month
                </div>
              </div>
              <div className="flex flex-col w-full items-center py-8">
                <div className=" w-full h-[1px] max-w-[824.02px] bg-[#DCE4FF]"></div>
              </div>
              <div className="flex flex-col gap-6 ">
                <div className="w-full flex flex-row gap-10">
                  <div className="flex flex-row gap-4 pr-8">
                    <div className="flex items-center pl-8">img</div>
                    <div className="flex flex-col py-3 ">
                      <div className="text-[18px] font-weight-400 text-[#0F1728]">
                        Feature
                      </div>
                      <div className="text-[16px] font-weight-400 text-[#9A96B4]">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed d
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 pr-8">
                    <div className="flex items-center pl-8">img</div>
                    <div className="flex flex-col py-3">
                      <div className="text-[18px] font-weight-400 text-[#0F1728]">
                        Feature
                      </div>
                      <div className="text-[16px] font-weight-400 text-[#9A96B4]">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed d
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 pr-8">
                    <div className="flex items-center pl-8">img</div>
                    <div className="flex flex-col py-3">
                      <div className="text-[18px] font-weight-400 text-[#0F1728]">
                        Feature
                      </div>
                      <div className="text-[16px] font-weight-400 text-[#9A96B4]">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed d
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row gap-10">
                  <div className="flex flex-row gap-4 pr-8">
                    <div className="flex items-center pl-8">img</div>
                    <div className="flex flex-col py-3">
                      <div className="text-[18px] font-weight-400 text-[#0F1728]">
                        Feature
                      </div>
                      <div className="text-[16px] font-weight-400 text-[#9A96B4]">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed d
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 pr-8">
                    <div className="flex items-center pl-8">img</div>
                    <div className="flex flex-col py-3">
                      <div className="text-[18px] font-weight-400 text-[#0F1728]">
                        Feature
                      </div>
                      <div className="text-[16px] font-weight-400 text-[#9A96B4]">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed d
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 pr-8">
                    <div className="flex items-center pl-8">img</div>
                    <div className="flex flex-col py-3">
                      <div className="text-[18px] font-weight-400 text-[#0F1728]">
                        Feature
                      </div>
                      <div className="text-[16px] font-weight-400 text-[#9A96B4]">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed d
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center gap-6 py-6">
                  <button className="px-6 py-3 border text-[16px] rounded-[10px] font-weight-500 text-[#463F4B] ">
                    Choose a different plan
                  </button>
                  <button className="px-6 py-3 border bg-[#3D53DB] rounded-[10px] text-[16px] font-weight-500 text-[#FFFFFF] ">
                    Proceed with this plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
