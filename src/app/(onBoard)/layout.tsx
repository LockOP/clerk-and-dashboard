"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();

  const paths = [
    {
      path: "sign-up",
      label: "Create account",
    },
    {
      path: "buildPlan",
      label: "Build Plan",
    },
    {
      path: "checkout",
      label: "Checkout",
    },
    {
      path: "personalizeAccount",
      label: "Personlize Account",
    },
  ];

  return (
    <div className="w-screen h-dvh flex flex-col justify-start items-center pt-10">
      <div className="bg-[white] shrink-0 w-full max-w-[1000px] flex flex-row items-start justify-center relative h-[76px]">
        {paths.map((item, index) => (
          <div className="flex-1 flex flex-col items-center justify-start gap-2 ">
            <div
              className={`w-[28px] h-[28px] rounded-full text-[12px] leading-4 font-medium flex justify-center items-center ani ${
                index <=
                paths.findIndex((obj) => obj.path === pathname.split("/")[1])
                  ? "text-[#FFF] bg-[#3D53DB]"
                  : "text-[#9A96B4] bg-[#F3F0FA]"
              }`}
            >
              {index + 1}
            </div>
            <p
              className={`text-[16px] leading-6 ani text-center text-nowrap text-ellipsis truncate ${
                index <=
                paths.findIndex((obj) => obj.path === pathname.split("/")[1])
                  ? "text-[#463F4B]"
                  : "text-[#F3F0FA]"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
        <div
          className="h-1 bottom-0 absolute bg-[#3D53DB] shrink-0 left-0 z-20 ani"
          style={{
            width: `${
              (paths.findIndex((obj) => obj.path === pathname.split("/")[1]) /
                paths.length) *
              100
            }%`,
          }}
        />
        <div className="h-1 w-full bottom-0 absolute bg-[#C2C6E8] shrink-0" />
      </div>
      <div className="w-full flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}
