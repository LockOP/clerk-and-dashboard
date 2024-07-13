"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { Router } from 'next/router';

export default function Page() {
  const router = useRouter();
    return (
        <>
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-[717px] flex flex-col items-center  gap-8 pt-16">
              <div className="text-[40px] font-semibold font-weight-150 text-center ">
              Describe your business and Omni will<br/> choose a plan that suits your needs
              </div>
              <button onClick={()=>{router.push("/buildPlan3")}} className="bg-[#3D53DB] w-full py-[13px] text-[white] font-semibold text-[16px] font-weight-600 rounded-[10px] items-center justify-center">
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
