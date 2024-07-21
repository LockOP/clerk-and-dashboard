"use client";
import { Button } from "@/components/ui/button";
import ColorInput from "@/components/ui/colorInput";
import ImageUpload from "@/components/ui/imageUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState<string>("");
  const [color, setColor] = useState<string | null>(null);
  const colorOptions = [
    "#16878C",
    "#218471",
    "#FF8498",
    "#FF7F60",
    "#FFD11A",
    "#785CC7",
    "#3D53DB",
  ];
  return (
    <>
      <div className="flex flex-col gap-6 items-center py-10">
        <div className="w-full flex flex-col items-center gap-3">
          <p className="w-full text-4xl text-center font-medium">
            Welcome! you are officially part of the club
          </p>
          <p className="text-base text-muted-foreground">
            Customize your account here
          </p>
        </div>
        <div className="w-full max-w-[600px]">
          <div className="w-full flex flex-col items-center gap-6">
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                type="text"
                id="businessName"
                name="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Handmade & Happy"
                className={`${false ? "border-destructive" : ""}`}
              />
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="logoImage">Upload your business logo</Label>
              <ImageUpload id="logoImage" />
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="color">Color</Label>
              <div className="flex flex-row gap-2 w-full">
                {colorOptions.map((option) => (
                  <button
                    className={`w-8 h-8 rounded-full shrink-0 ${
                      option === color
                        ? "outline outline-offset-1 outline-primary"
                        : ""
                    }`}
                    style={{ backgroundColor: option }}
                    onClick={() => setColor(option)}
                  />
                ))}
                <ColorInput
                  id="color"
                  color={
                    color
                      ? !colorOptions.includes(color)
                        ? color
                        : "#FFF"
                      : "#FFF"
                  }
                  setColor={setColor}
                />
              </div>
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                router.push("/inviteMembers");
              }}
              variant="default"
              size="lg"
              className="w-full"
            >
              Next
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                router.push("/inviteMembers");
              }}
              variant="outlineDark"
              size="lg"
              className="w-full"
            >
              Do this later
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
