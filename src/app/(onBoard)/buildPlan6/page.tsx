"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";

export default function Page() {
  const router = useRouter();
  const sections: ("Business plans" | "Website builder plans" | "All apps")[] =
    ["Business plans", "Website builder plans", "All apps"];
  const [section, setSection] = useState<
    "Business plans" | "Website builder plans" | "All apps"
  >("Business plans");
  return (
    <div className="w-screen h-dvh bg-[white] flex flex-col justify-start items-center overflow-y-auto pt-16 gap-16 pb-[132px]">
      <div className="w-full flex flex-col justify-start items-center gap-8 shrin-0">
        <div className=" flex flex-col gap-2 items-center justify-center">
          <div className="text-[40px] text-[#141522] font-weight-600 text-6 font-semibold ">
            Choose a plan
          </div>
          <div className="font-weight-500 text-6 text-[#54577A] font-medium">
            Get a 7 day free trial - no charges until the 7th day.
          </div>
        </div>
        <div className="w-full h-max overflow-x-clip relative flex flex-row">
          <div
            className={`w-full h-max shrink-0 flex flex-row ani`}
            style={{
              transform: `translateX(-${100 * sections.indexOf(section)}%)`,
            }}
          >
            {sections.map((item, index) => (
              <div
                className={
                  "w-full h-max bg-transparent shrink-0 z-10 flex flex-row justify-center items-start gap-[21px]"
                }
              >
                <PlanCard
                  title="Launch"
                  billing="$59/month"
                  billingType="Billed annually"
                  featureLabel="You'll get"
                  features={[
                    "Basic AI features",
                    "Hosting + API calls",
                    "Stock + order management",
                  ]}
                  subtitle="Perfect for soloprenours and new businesses"
                  bestValue={true}
                />
                <PlanCard
                  title="Growth "
                  billing="Starting at $79/seat"
                  billingType="Base license fee: $250/month"
                  featureLabel="You'll get all launch plan features plus:"
                  features={[
                    "Team management",
                    "Hosting + API calls",
                    "3 additional ERP modules",
                    "Priority support",
                  ]}
                  subtitle="Perfect for small to medium businesses"
                  bestValue={false}
                />
                <PlanCard
                  title="Enterprise"
                  billing="Starting at $99/seat"
                  billingType="Base license fee: $250/month"
                  featureLabel="You'll get all growth plan features plus:"
                  features={[
                    "Team management",
                    "Advanced AI features",
                    "3 additional ERP modules",
                    "Priority  support",
                    "Priority  support",
                  ]}
                  subtitle="Customizable for large businesses"
                  bestValue={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-2 items-center justify-center">
          <div className="text-[40px] text-[#141522] font-weight-600 text-6 font-semibold ">
          Looking for something simple?
          </div>
          <div className="font-weight-500 text-6 text-[#54577A] font-medium">
          We also offer basic website builder plans for the everyday seller. 
          </div>
          <div className="w-full h-max overflow-x-clip relative flex flex-row">
          <div
            className={`w-full h-max shrink-0 flex flex-row ani`}
            style={{
              transform: `translateX(-${100 * sections.indexOf(section)}%)`,
            }}
          >
            {sections.map((item, index) => (
              <div
                className={
                  "w-full h-max bg-transparent shrink-0 z-10 flex flex-row justify-center items-start gap-[21px]"
                }
              >
                <PlanCard
                  title="AI website editor"
                  billing="$29/month"
                  billingType=""
                  featureLabel="You'll get"
                  features={[
                    "Website builder",
                    "Domain + hosting",
                    "Stock + order management",
                    "50 product listings"
                  ]}
                  subtitle=""
                  bestValue={true}
                />
                <PlanCard
                  title="Basic "
                  billing="$12/month"
                  billingType=""
                  featureLabel="You'll get"
                  features={[
                    "Website builder",
                    "Our domain + watermark",
                    "Basic stock management",
                    "25 product listings",
                  ]}
                  subtitle=""
                  bestValue={false}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
// .slice(0, 4)
function PlanCard({
  title,
  subtitle,
  bestValue = false,
  billing,
  billingType,
  featureLabel,
  features,
}: {
  title: string;
  subtitle: string;
  bestValue?: boolean;
  billing: string;
  billingType: string;
  featureLabel: string;
  features: string[];
}) {
  return (
    <div className="w-[300px] shadow-md hover:shadow-2xl hover:scale-105 flex flex-col rounded gap-3 p-6 bg-[#FFF] ani select-none">
      <span className="flex w-full flex-col gap-1">
        <span className="w-full flex flex-row items-center justify-between h-[28px]">
          <p className="text-[18px] leading-6 font-medium text-[#463F4B]">
            {title}
          </p>
          {bestValue && (
            <div className="bg-[#E8FAA6] rounded-full px-3 py-1 text-[14px] leading-5 text-[#3B6506]">
              Best value
            </div>
          )}
        </span>
        <p className="text-[14px] leading-5 text-[#9A96B4] h-10">{subtitle}</p>
      </span>
      <span className="flex w-full flex-col gap-1">
        <p className="text-[24px] leading-8 text-[#161317] font-semibold">
          {billing}
        </p>
        <p className="text-[14px] leading-5 text-[#9A96B4]">{billingType}</p>
      </span>
      <span className="w-full flex flex-col gap-2">
        <p className="text-[14px] leading-4 text-[#161317] font-medium">
          {featureLabel}
        </p>
        {features.map((feature, index) => {
          if (index > 3) return <></>;
          return (
            <span
              key={index}
              className="flex flex-row justify-start items-center gap-[6px] p-3 bg-[#fafafa] rounded shrink-0"
            >
              <MdCheckCircle className="text-[14px] text-[#546FFF]" />
              <p className="text-[14px] leading-5">{feature}</p>
            </span>
          );
        })}
        {(() => {
          const elements = [];
          let remaining = 0;
          if (features.length < 4) {
            remaining = 4 - features.length;
          }
          for (let i = 0; i < remaining; i++) {
            elements.push(
              <span
                key={i}
                className="flex flex-row justify-start items-center gap-[6px] p-3 bg-transparent rounded shrink-0"
              >
                <MdCheckCircle className="text-[14px] text-transparent" />
                <p className="text-[14px] leading-5 text-transparent">
                  feature
                </p>
              </span>
            );
          }
          return elements;
        })()}
        <p className="text-[14px] leading-5 text-right pr-2 h-5 text-[#9A96B4]">{`${
          features.length - 4 > 0 ? "+" + (features.length - 4).toString() : ""
        }`}</p>
      </span>
    </div>
  );
}
