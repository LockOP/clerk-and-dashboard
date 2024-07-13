"use client";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-center font-bold text-[32px] gap-4">
        Hi there, this is home page.
      </div>
      <div>{JSON.stringify(user)}</div>
      <div className="flex flex-col gap-3">
        <div className="hover:border-[#3D53DB] bg-[#FFFFFF] border-[#C2C6E8] border-[1px] px-[163.5px] py-[13px] rounded-[10px] text-[#54577A] text-4 font-semibold">
          <SignUpButton />
        </div>
        <div className="hover:border-[#3D53DB] bg-[#FFFFFF] border-[#C2C6E8] border-[1px] px-[163.5px] py-[13px] rounded-[10px] text-[#54577A] text-4 font-semibold">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
