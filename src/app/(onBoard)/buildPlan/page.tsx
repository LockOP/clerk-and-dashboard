"use client";

import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { cloneElement, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BsStars } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { LuBox } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const steps = [
    <Step1 key={1} onNext={() => setStep(2)} />,
    <Step2 key={2} onNext={() => setStep(3)} />,
    <Step3 key={3} onNext={() => setStep(4)} />,
    <Step4 key={4} onNext={() => setStep(5)} />,
    <Step5 key={5} onNext={() => setStep(6)} />,
    <Step6 key={6} onNext={() => router.push("/checkout")} />,
  ];
  return <>{steps[step - 1]}</>;
}

function Step1({ onNext }: { onNext: () => void }) {
  const employeeOptions: string[] = [
    "Just me",
    "2-50",
    "51-250",
    "251-1000",
    "1000+",
  ];
  const monthlyOrderVolumeOprions: string[] = [
    "Unknown",
    "0-500",
    "501-5000",
    "5000+",
  ];
  const annualRevenueOptions: string[] = [
    "Unknown",
    "Upto $250,000",
    "$250,001-$1,000,000",
    "$1,000,000+",
  ];
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-[720px]">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full text-4xl text-center font-medium">
            Tell us about your business so that we can find the right plan for
            you
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Label>Where is your business located?</Label>
              <div className="w-full flex flex-row gap-2">
                <Select>
                  <SelectTrigger className="basis-1/2">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Uttar Pradedsh</SelectItem>
                      <SelectItem value="banana">Maharashtra</SelectItem>
                      <SelectItem value="blueberry">Tripura</SelectItem>
                      <SelectItem value="grapes">Karnataka</SelectItem>
                      <SelectItem value="pineapple">Harayana</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="basis-1/2">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">India</SelectItem>
                      <SelectItem value="banana">Pakistan</SelectItem>
                      <SelectItem value="blueberry">China</SelectItem>
                      <SelectItem value="grapes">Sri Lanka</SelectItem>
                      <SelectItem value="pineapple">Mayanmar</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Label>How many employees do you have?</Label>
              <ToggleGroup
                size="lg"
                type="single"
                variant="outline"
                className="gap-2"
              >
                {employeeOptions.map((option) => (
                  <ToggleGroupItem key={option} value={option}>
                    {option}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Label>What is your monthly order volume?</Label>
              <ToggleGroup
                size="lg"
                type="single"
                variant="outline"
                className="gap-2"
              >
                {monthlyOrderVolumeOprions.map((option) => (
                  <ToggleGroupItem key={option} value={option}>
                    {option}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Label>What is your annual revenue?</Label>
              <ToggleGroup
                size="lg"
                type="single"
                variant="outline"
                className="gap-2"
              >
                {annualRevenueOptions.map((option) => (
                  <ToggleGroupItem key={option} value={option}>
                    {option}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                variant="default"
                size="lg"
                className="w-full"
              >
                Next: Describe your business
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-[720px]">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full text-4xl text-center font-medium">
            Describe your business and Omni will choose a plan that suits your
            needs
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <div className="w-full flex flex-row gap-2">
                <Textarea
                  className="resize-none min-h-24"
                  placeholder="Type your message here."
                />
              </div>
            </div>

            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                variant="default"
                size="lg"
                className="w-full"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3({ onNext }: { onNext: () => void }) {
  const helpOptions: string[] = [
    "Order management",
    "Grow my business",
    "I need my orders in one place",
    "I want a quicker way to ship",
    "I need help with product mockups",
    "I need help writing captions",
    "I need help handling customer inquiries",
    "I need help handling customer inquiries",
    "I'd like to cross list",
    "I want to enhance my website",
    "I want to enhance my website",
    "Other",
  ];
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-[720px]">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full text-4xl text-center font-medium">
            How can we help you?
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Label>Select all that apply</Label>
              <ToggleGroup
                size="lg"
                type="multiple"
                variant="outline"
                className="gap-2 flex-wrap flex justify-start items-start"
              >
                {helpOptions.map((option) => (
                  <ToggleGroupItem key={option} value={option}>
                    {option}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                variant="default"
                size="lg"
                className="w-full"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex h-full justify-center flex-col items-center py-10">
      <div className="w-full max-w-[720px]">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <BsStars className="text-4xl text-[#755BFF]" />
            <p className="text-3xl font-semibold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-r from-[#546FFF] to-[#9747FF]">
              Our AI kit is building the perfect toolkit for you
            </p>
            <p className="text-lg text-foreground">
              This will only take a moment.
            </p>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col w-full max-w-full items-start gap-1.5">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                variant="default"
                size="lg"
                className="w-full"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5({ onNext }: { onNext: () => void }) {
  const features: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[] = [
    {
      icon: <LuBox />,
      title: "Order management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
    },
    {
      icon: <LuBox />,
      title: "Grow my business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
    },
    {
      icon: <LuBox />,
      title: "I need my orders in one place",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
    },
    {
      icon: <LuBox />,
      title: "I want a quicker way to ship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
    },
    {
      icon: <LuBox />,
      title: "I need help with product mockups",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
    },
    {
      icon: <LuBox />,
      title: "I need help writing captions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
    },
  ];
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-[720px]">
        <div className="w-full flex flex-col items-center gap-14">
          <div className="w-full flex flex-col items-center gap-3">
            <div className="w-full text-4xl text-center font-medium">
              The&nbsp;
              <span className="w-max text-transparent bg-clip-text bg-gradient-to-r from-[#546FFF] to-[#9747FF]">
                growth plan
              </span>
              &nbsp;is the perfect plan for you
            </div>
            <div className="w-full text-xl text-muted-foreground text-center font-light">
              This plan includes a 7 day free trial - no charges until the 7th
              day.
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-row w-full max-w-full items-center gap-4 p-4 border border-[#755BFF] rounded-md">
                <BsStars className="text-base text-[#755BFF] shrink-0" />
                <div className="w-full flex flex-row gap-2 text-base font-light">
                  We chose this plan for you because lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore consecte.
                </div>
              </div>
            </div>
          </div>
          <Card className="w-full h-max">
            <CardContent className="flex flex-col items-center gap-8 p-8">
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg text-muted-foreground font-medium line-clamp-1">
                  Growth
                </p>
                <p className="text-2xl text-foreground">Starting at $79/seat</p>
                <p className="font-light text-muted-foreground">
                  Base license fee: $250/month
                </p>
              </div>
              <Separator className="" />
              <div className="w-full grid grid-cols-3">
                {features.map((feature) => (
                  <FeaturCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              <div className="w-full flex flex-row gap-6">
                <Button variant="outlineDark" size="lg" className="basis-1/2">
                  Choose a different plan
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  variant="default"
                  size="lg"
                  className="basis-1/2"
                >
                  Proceed with this plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Step6({ onNext }: { onNext: () => void }) {
  const planModules: {
    id: string;
    icon: JSX.Element;
    title: string;
    description: string;
    price: string;
  }[] = [
    {
      id: "1",
      icon: <LuBox />,
      title: "Order management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
      price: "$20.99",
    },
    {
      id: "2",
      icon: <LuBox />,
      title: "Grow my business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
      price: "$5.99",
    },
    {
      id: "3",
      icon: <LuBox />,
      title: "I need my orders in one place",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
      price: "$2.99",
    },
    {
      id: "4",
      icon: <LuBox />,
      title: "I want a quicker way to ship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
      price: "$19.99",
    },
    {
      id: "5",
      icon: <LuBox />,
      title: "I need help with product mockups",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
      price: "$12.99",
    },
    {
      id: "6",
      icon: <LuBox />,
      title: "I need help writing captions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
      price: "$9.99",
    },
  ];
  const [sectedPlanModuleIds, setSectedPlanModuleIds] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-[720px]">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full flex flex-col items-center gap-3">
            <p className="w-full text-4xl text-center font-medium">
              Need anything else?
            </p>
            <p className="text-base text-muted-foreground">
              You can add the following modules to your plan
            </p>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="grid grid-cols-3 w-full max-w-full gap-7">
              {planModules.map((module) => (
                <PlanModuleCard
                  key={module.id}
                  selected={sectedPlanModuleIds.includes(module.id)}
                  onSelect={({ id }) => {
                    if (sectedPlanModuleIds.includes(id)) {
                      setSectedPlanModuleIds(
                        sectedPlanModuleIds.filter((i) => i !== id)
                      );
                    } else {
                      setSectedPlanModuleIds([...sectedPlanModuleIds, id]);
                    }
                  }}
                  price={module.price}
                  id={module.id}
                  icon={module.icon}
                  title={module.title}
                  description={module.description}
                />
              ))}
            </div>
            <div className="flex flex-col w-full max-w-full items-start gap-6">
              <Button
                disabled={sectedPlanModuleIds.length === 0}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                variant="default"
                size="lg"
                className="w-full"
              >
                Add to Plan
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                variant="outlineDark"
                size="lg"
                className="w-full"
              >
                Skip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturCard({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row items-center p-4 gap-4">
      {cloneElement(icon, {
        className: cn("shrink-0 h-5 w-5 text-foreground"),
      })}

      <div className="flex flex-grow overflow-auto flex-col gap-2">
        <p className="w-full text-lg font-light line-clamp-1">{title}</p>
        <p className="w-full text-base font-light text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

function PlanModuleCard({
  id,
  icon,
  title,
  description,
  price,
  selected,
  onSelect,
}: {
  selected: boolean;
  onSelect: ({ id }: { id: string }) => void;
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect({ id });
      }}
      className={`flex flex-col items-start p-4 gap-4 shadow rounded-[calc(1.5rem-1px)] group hover:shadow-md transition-all hover:scale-105 ${
        selected
          ? "border border-transparent hover:border-input"
          : "border border-transparent hover:border-input"
      }`}
    >
      <div className="flex flex-row items-center w-full gap-3">
        {cloneElement(icon, {
          className: cn("shrink-0 h-5 w-5 text-foreground"),
        })}
        <p className="w-full text-lg font-normal line-clamp-1">{title}</p>
      </div>
      <p className="w-full h-[168px] text-lg font-light text-muted-foreground line-clamp-6">
        {description}
      </p>
      <div
        className={`rounded-md px-5 py-4 w-full h-11 ${
          selected
            ? "border border-primary"
            : "border border-input group-hover:border-primary"
        }  flex flex-row justify-end items-center`}
      >
        <p className="flex-grow line-clamp-1">{price}</p>
        {selected ? (
          <MdRadioButtonChecked className="h-5 w-5 text-primary shrink-0" />
        ) : (
          <MdRadioButtonUnchecked className="h-5 w-5 text-input group-hover:text-primary shrink-0" />
        )}
      </div>
    </div>
  );
}
