"use client";
import { Button } from "@/components/ui/button";
import ColorInput from "@/components/ui/colorInput";
import ImageUpload from "@/components/ui/imageUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { MdCheck, MdCheckCircle } from "react-icons/md";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="w-screen h-[100dvh] flex justify-center items-center flex-row gap-14">
        <div className="flex flex-col gap-6 items-start justify-start w-[300px]">
          <div className="flex flex-col items-start justify-start gap-1 w-full">
            <p className="text-3xl font-semibold line-clamp-2 text-foreground">
              Activate your workspace
            </p>
            <p className="text-base text-muted-foreground line-clamp-2">
              Here&apos;s what you will get with the small business plan
            </p>
            <div className="flex flex-col w-full items-start p-4 gap-3">
              <div className="w-full flex flex-row justify-start items-center gap-1">
                <MdCheckCircle className="text-[20px] text-primary" />
                <span className="text-sm text-muted-foreground">
                  Unlimited access
                </span>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-1">
                <MdCheckCircle className="text-[20px] text-primary" />
                <span className="text-sm text-muted-foreground">
                  200 GB storage
                </span>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-1">
                <MdCheckCircle className="text-[20px] text-primary" />
                <span className="text-sm text-muted-foreground">
                  Sync all your devices
                </span>
              </div>
            </div>
          </div>
          <Button variant="default" size="lg" className="w-full">
            Launch Dashboard
          </Button>
        </div>
        <img
          className="w-[500px] h-[500px] object-contain"
          src={"/launchDashboard.png" || "/imageNotFound.png"}
          alt="Uploaded"
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = "/imageNotFound.png";
          }}
        />
      </div>
    </>
  );
}
