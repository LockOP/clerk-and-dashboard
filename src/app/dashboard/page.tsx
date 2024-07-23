"use client";
import { SignOutButton } from "@/components/SignOutButton";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full flex items-center justify-center font-bold text-[32px] gap-4">
        Hi {user?.fullName}, this is your dashboard.
      </div>
      <div>Email : {user?.emailAddresses[0].emailAddress}</div>
      {/* <div className="hover:border-[#3D53DB] bg-[#FFFFFF] border-[#C2C6E8] border-[1px] px-[163.5px] py-[13px] rounded-[10px] text-[#54577A] text-4 font-semibold">
        {JSON.stringify(user)} 
      </div> */}
      <div className="hover:border-[#3D53DB] bg-[#FFFFFF] border-[#C2C6E8] px-20 border-[1px] rounded-[10px] text-[#54577A] text-4 font-semibold">
        <SignOutButton />
      </div>
    </div>
  );
}
