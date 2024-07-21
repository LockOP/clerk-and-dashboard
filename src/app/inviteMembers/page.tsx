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

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-6 items-center py-10">
        <div className="w-full flex flex-col items-center gap-3">
          <p className="w-full text-4xl text-center font-medium">
            Invite your team to start collaborating
          </p>
          <p className="text-base text-muted-foreground">
            We recommend starting with upto 10 members and adding more later
          </p>
        </div>
        <div className="w-full max-w-[600px]">
          <div className="w-full flex flex-col items-center gap-6">
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="businessName">Business Name</Label>
              {/* <Input
                type="text"
                id="businessName"
                name="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Handmade & Happy"
                className={`${false ? "border-destructive" : ""}`}
              /> */}
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                className="border-transparent shadow-md rounded-md"
                value="member-1"
              >
                <AccordionTrigger className="flex flex-row gap-2 hover:no-underline p-4">
                  <p className="flex-grow line-clamp-1 text-start">
                    <span>Member #1</span>&nbsp;
                    <span className="text-muted-foreground font-light">
                      (Invite sent)
                    </span>
                  </p>
                </AccordionTrigger>
                <AccordionContent className="p-5 border-t border-input flex flex-col gap-6">
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <Label htmlFor="recipientName">Recipient's Name</Label>
                    <Input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      // value={businessName}
                      // onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="John Doe"
                      className={`${false ? "border-destructive" : ""}`}
                    />
                  </div>
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <Label htmlFor="recipientEmail">Recipient's Email</Label>
                    <Input
                      type="text"
                      id="recipientEmail"
                      name="recipientEmail"
                      // value={businessName}
                      // onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="xh7kH@example.com"
                      className={`${false ? "border-destructive" : ""}`}
                    />
                  </div>
                  <div className="flex flex-col w-full max-w-full items-start gap-1.5">
                    <Label>What will they be helping you with?</Label>
                    <div className="w-full flex flex-row gap-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="owner">Owner</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="teamManager">
                              Team Manager
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-row items-end w-full gap-3">
                    <div className="grid flex-grow overscroll-auto items-center gap-1.5">
                      <Label htmlFor="recipientEmail">Recipient's Email</Label>
                      <Input
                        type="text"
                        id="recipientEmail"
                        name="recipientEmail"
                        // value={businessName}
                        // onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="xh7kH@example.com"
                        className={`${false ? "border-destructive" : ""}`}
                      />
                    </div>

                    <Button
                      variant="default"
                      size="lg"
                      className="w-max shrink-0"
                    >
                      Send invite
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="member-2"
            >
              <AccordionItem
                className="border-transparent shadow-md rounded-md"
                value="member-2"
              >
                <AccordionTrigger className="flex flex-row gap-2 hover:no-underline p-4">
                  <p className="flex-grow line-clamp-1 text-start">
                    <span>Member #2</span>&nbsp;
                    <span className="text-muted-foreground font-light"></span>
                  </p>
                </AccordionTrigger>
                <AccordionContent className="p-5 border-t border-input flex flex-col gap-6">
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <Label htmlFor="recipientName">Recipient's Name</Label>
                    <Input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      // value={businessName}
                      // onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="John Doe"
                      className={`${false ? "border-destructive" : ""}`}
                    />
                  </div>
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <Label htmlFor="recipientEmail">Recipient's Email</Label>
                    <Input
                      type="text"
                      id="recipientEmail"
                      name="recipientEmail"
                      // value={businessName}
                      // onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="xh7kH@example.com"
                      className={`${false ? "border-destructive" : ""}`}
                    />
                  </div>
                  <div className="flex flex-col w-full max-w-full items-start gap-1.5">
                    <Label>What will they be helping you with?</Label>
                    <div className="w-full flex flex-row gap-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="owner">Owner</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="teamManager">
                              Team Manager
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-row items-end w-full gap-3">
                    <div className="grid flex-grow overscroll-auto items-center gap-1.5">
                      <Label htmlFor="recipientEmail">Recipient's Email</Label>
                      <Input
                        type="text"
                        id="recipientEmail"
                        name="recipientEmail"
                        // value={businessName}
                        // onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="xh7kH@example.com"
                        className={`${false ? "border-destructive" : ""}`}
                      />
                    </div>

                    <Button
                      variant="default"
                      size="lg"
                      className="w-max shrink-0"
                    >
                      Send invite
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button
              variant="ghost"
              size="lg"
              className="w-full text-muted-foreground"
            >
              + Add another member
            </Button>
            <Separator />
            <Button
              onClick={(e) => {
                e.stopPropagation();
                router.push("/launchDashboard");
              }}
              variant="default"
              size="lg"
              className="w-full"
            >
              Send all invites
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                router.push("/launchDashboard");
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
