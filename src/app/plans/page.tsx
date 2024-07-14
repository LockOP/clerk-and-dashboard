"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/extensions/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaAngleRight, FaCheckCircle } from "react-icons/fa";

export default function Page() {
  const router = useRouter();
  const sections: {
    section: string;
    type: "single" | "multiple";
    plans: {
      title: string;
      description: string;
      price: string;
      priceDetails: string;
      listHeading: string;
      list: {
        label: string;
        description: string;
      }[];
    }[];
  }[] = [
    {
      section: "Business plans",
      type: "single",
      plans: [
        {
          title: "Launch",
          description:
            "Perfect for soloprenours  and new businesses ads ads da sd asd asd asd as da d sa",
          price: "$59/month",
          priceDetails: "Billed annually",
          listHeading: "You'll get",
          list: [
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features sdsd s sd sd s ds sd sd sd",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ],
        },
        {
          title: "Scale",
          description:
            "Perfect for soloprenours  and new businesses ads ads da sd asd asd asd as da d sa",
          price: "$59/month",
          priceDetails: "Billed annually",
          listHeading: "You'll get",
          list: [
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features sdsd s sd sd s ds sd sd sd",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ],
        },
        {
          title: "Scale",
          description:
            "Perfect for soloprenours  and new businesses ads ads da sd asd asd asd as da d sa",
          price: "$59/month",
          priceDetails: "Billed annually",
          listHeading: "You'll get",
          list: [
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features sdsd s sd sd s ds sd sd sd",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ],
        },
      ],
    },
    {
      section: "Enterprise plans",
      type: "single",
      plans: [
        {
          title: "Scale",
          description:
            "Perfect for soloprenours  and new businesses ads ads da sd asd asd asd as da d sa",
          price: "$59/month",
          priceDetails: "Billed annually",
          listHeading: "You'll get",
          list: [
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              label: "Basic AI features sdsd s sd sd s ds sd sd sd",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ],
        },
        {
          title: "Scale",
          description:
            "Perfect for soloprenours  and new businesses ads ads da sd asd asd asd as da d sa",
          price: "$59/month",
          priceDetails: "Billed annually",
          listHeading: "You'll get",
          list: [
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ],
        },
      ],
    },
    {
      section: "Enterprise plans",
      type: "single",
      plans: [
        {
          title: "Scale",
          description:
            "Perfect for soloprenours  and new businesses ads ads da sd asd asd asd as da d sa",
          price: "$59/month",
          priceDetails: "Billed annually",
          listHeading: "You'll get",
          list: [
            {
              label: "Basic AI features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-screen h-dvh bg-[white] flex flex-col justify-start items-center overflow-y-auto gap-16 pb-[132px]">
      <div className="w-full bg-gradient-to-r from-[#546FFF] to-[#9747FF] shrink-0 flex flex-col gap-6 justify-start items-center py-12">
        <div className="flex flex-col gap-6 justify-start items-center w-full max-w-[644px]">
          <p className="text-[32px] font-semibold leading-[40px] text-center text-white">
            Get an entire suite built for you for less than the price of 3 apps.
          </p>
          <p className="text-[16px] leading-[24px] text-center text-white">
            The All Apps plan includes 20+ apps and services plus 20,000 fonts,
            storage, templates, and tutorials for less than the price of
            Acrobat, Photoshop, and Premiere Pro sold separately.
          </p>
          <Button
            onClick={() => router.push("/sign-up")}
            size="lg"
            variant="outlineLight"
          >
            Get Started
          </Button>
        </div>
      </div>

      <Carousel
        orientation="horizontal"
        className="flex flex-col items-center gap-2 w-full max-w-[942px] h-max"
      >
        <CarouselThumbsContainer
          parentClassName="w-full max-w-[550px]"
          className="h-max w-full flex flex-row justify-center"
        >
          {sections.map((item, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              parentClassName="group px-2"
              className="h-12"
              activeParentClassName="activated"
              inactiveParentClassName=""
              customChildren={({ isSlideActive }) => (
                <span
                  className={`bg-background text-center text-sm flex flex-col items-center justify-center h-full w-full transition-all relative ${
                    isSlideActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  <span>{item.section}</span>
                  <span
                    className={`absolute group-hover:w-full transition-all h-[2px] rounded-full bg-primary bottom-0 has-[activated]:w-full ${
                      isSlideActive
                        ? "w-full"
                        : "w-0 group-hover:w-4/5 opacity-40"
                    }`}
                  ></span>
                </span>
              )}
            />
          ))}
        </CarouselThumbsContainer>
        <CarouselMainContainer
          parentClassName="w-full overflow-visible overflow-x-clip"
          className="h-max"
        >
          {sections.map((item, index) => (
            <SliderMainItem
              key={index}
              className="flex flex-row gap-4 items-center justify-center h-max rounded-md"
            >
              {item.plans.map((card) => (
                <Card className="w-[280px] h-max">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium line-clamp-1">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold line-clamp-1">
                      {card.price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {card.priceDetails}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 items-start">
                    <p className="text-sm line-clamp-1">{card.listHeading}</p>
                    <ul className="flex flex-col gap-1 w-full">
                      {card.list.map((listItem) => {
                        if (index > 3) return <></>;
                        return (
                          <li>
                            <HoverCard>
                              <HoverCardTrigger className="h-12 p-3 w-full text-sm bg-primary-foreground flex flex-row items-center gap-2 rounded">
                                <FaCheckCircle className="text-base text-primary font-normal shrink-0" />
                                <span className="line-clamp-1 flex-grow">
                                  {listItem.label}
                                </span>
                                <FaAngleRight className="text-base text-foreground font-normal shrink-0" />
                              </HoverCardTrigger>
                              <HoverCardContent
                                className="text-sm"
                                align="center"
                              >
                                {listItem.description}
                              </HoverCardContent>
                            </HoverCard>
                          </li>
                        );
                      })}
                      {(() => {
                        const elements = [];
                        let remaining = 0;
                        if (card.list.length < 4) {
                          remaining = 4 - card.list.length;
                        }
                        for (let i = 0; i < remaining; i++) {
                          elements.push(
                            <li>
                              <HoverCard>
                                <HoverCardTrigger className="h-12 p-3 w-full text-sm bg-primary-transparent flex flex-row items-center gap-2 rounded">
                                  <FaCheckCircle className="text-base text-transparent font-normal shrink-0" />
                                  <span className="line-clamp-1 flex-grow text-transparent">
                                    {i}
                                  </span>
                                  <FaAngleRight className="text-base text-transparent font-normal shrink-0" />
                                </HoverCardTrigger>
                              </HoverCard>
                            </li>
                          );
                        }
                        return elements;
                      })()}
                    </ul>
                  </CardFooter>
                </Card>
              ))}
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </Carousel>
    </div>
  );
}
