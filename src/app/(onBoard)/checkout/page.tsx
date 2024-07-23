"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LuBox } from "react-icons/lu";
import { cloneElement, useState } from "react";
import { cn } from "@/lib/utils";
import {
  MdAdd,
  MdDelete,
  MdDeleteOutline,
  MdLock,
  MdLockOutline,
} from "react-icons/md";
import { BsApple, BsCreditCard, BsGoogle, BsPaypal } from "react-icons/bs";
import { FaApplePay, FaCcMastercard, FaGooglePay } from "react-icons/fa";
import { ChevronRightIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";

export default function Page() {
  const router = useRouter();
  const additionalPlans: {
    id: number;
    icon: JSX.Element;
    title: string;
    price: string;
  }[] = [
    {
      id: 1,
      icon: <LuBox />,
      title: "Additional Plan",
      price: "$20.33",
    },
    {
      id: 2,
      icon: <LuBox />,
      title: "Additional Plan",
      price: "$20.33",
    },
    {
      id: 3,
      icon: <LuBox />,
      title: "Additional Plan",
      price: "$20.33",
    },
    {
      id: 4,
      icon: <LuBox />,
      title: "Additional Plan",
      price: "$20.33",
    },
  ];
  const paymentMethods: {
    id: number;
    icon: JSX.Element;
    title: string;
    paymentMode: "paypal" | "applePay" | "googlePay" | "masterCard";
  }[] = [
    {
      id: 1,
      icon: <BsPaypal />,
      title: "Paypal",
      paymentMode: "paypal",
    },
    {
      id: 2,
      icon: <BsApple />,
      title: "Apple Pay",
      paymentMode: "applePay",
    },
    {
      id: 3,
      icon: <BsGoogle />,
      title: "Google Pay",
      paymentMode: "googlePay",
    },
    {
      id: 4,
      icon: <BsCreditCard />,
      title: "MasterCard",
      paymentMode: "masterCard",
    },
  ];
  const [paymentMode, setPaymentMode] = useState<
    "paypal" | "applePay" | "googlePay" | "masterCard" | null
  >(null);

  const [billingAddress, setBillingAddress] = useState<{
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phoneNumber: string;
  }>({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const [apiLoading, setApiLoading] = useState<boolean>(false);

  return (
    <>
      {apiLoading ? (
        <div className="flex flex-col gap-2 items-center h-full justify-center py-10">
          <Loader />
          <p className="text-4xl font-medium text-foreground">
            Processing your order...
          </p>
          <p className="text-2xl text-muted-foreground">
            This wil only take a moment
          </p>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              router.push("/personalizeAccount");
            }}
            variant="ghost"
            size="lg"
            className="w-max mt-4"
          >
            Next
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center py-10">
          <div className="w-full max-w-full px-32">
            <div className="w-full flex flex-col items-center gap-6">
              <div className="w-full text-4xl text-center font-medium">
                Checkout
              </div>
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-row h-max gap-16">
                  <div className="flex-grow overflow-auto p-8 gap-8 flex flex-col">
                    <span className="w-full flex flex-col gap-2">
                      <p className="text-lg font-medium">Payment Method</p>
                      <span className="w-full flex flex-row items-center justify-start gap-2 text-muted-foreground">
                        <MdLockOutline />
                        <span>All transactions are secured and encrypted</span>
                      </span>
                    </span>
                    <div className="flex w-full flex-col gap-4">
                      <p className="text-foreground text-sm">
                        Choose a payment method
                      </p>
                      {paymentMethods.map((method) => (
                        <Button
                          onClick={() => {
                            setPaymentMode(method.paymentMode);
                          }}
                          key={method.id}
                          variant="outlineDark"
                          size="lg"
                          className="w-full flex flex-row gap-2"
                        >
                          {cloneElement(method.icon, {
                            className: cn("shrink-0 h-4 w-4 text-foreground"),
                          })}
                          <p>{method.title}</p>
                        </Button>
                      ))}
                    </div>
                    {paymentMode === "masterCard" && (
                      <>
                        <div className="w-full flex flex-row items-start justify-start gap-3 p-4 shadow-md rounded-md">
                          <BsCreditCard className="shrink-0 h-8 w-8" />
                          <div className="flex-grow flex flex-col items-start gap-2">
                            <p className="text-sm font-medium text-muted-foreground line-clamp-1">
                              Mastercard ending with 1234
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              Expires 12/24
                            </p>
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="w-max px-2 h-full items-center justify-center bg-transparent hover:bg-transparent group flex flex-row gap-2"
                          >
                            <MdDeleteOutline className="shrink-0 h-6 w-6 text-muted-foreground group-hover:text-destructive transition-all" />
                          </Button>
                        </div>
                        <div className="w-full flex flex-row items-start justify-start gap-3 p-4 shadow-md rounded-md">
                          <BsCreditCard className="shrink-0 h-8 w-8" />
                          <div className="flex-grow flex flex-col items-start gap-2">
                            <p className="text-sm font-medium text-muted-foreground line-clamp-1">
                              Mastercard ending with 1234
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              Expires 12/24
                            </p>
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="w-max px-2 h-full items-center justify-center bg-transparent hover:bg-transparent group flex flex-row gap-2"
                          >
                            <MdDeleteOutline className="shrink-0 h-6 w-6 text-muted-foreground group-hover:text-destructive transition-all" />
                          </Button>
                        </div>
                        <div className="w-full flex flex-row items-center justify-start gap-3 p-4 shadow-md rounded-md">
                          <BsCreditCard className="shrink-0 h-8 w-8 text-muted-foreground" />
                          <div className="flex-grow  flex flex-col items-start gap-2">
                            <p className="text-sm font-medium text-muted-foreground line-clamp-1">
                              Add New Card
                            </p>
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="w-max px-2 h-full items-center justify-center bg-transparent hover:bg-transparent group flex flex-row gap-2"
                          >
                            <MdAdd className="shrink-0 h-6 w-6 text-muted-foreground group-hover:text-primary transition-all" />
                          </Button>
                        </div>
                        <div className="flex w-full flex-col gap-4">
                          <p className="text-foreground text-sm">
                            Billing Address
                          </p>
                          <span className="w-full flex flex-row items-start justify-start gap-4">
                            <div className="grid basis-1/2 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="firstName"
                                className="flex flex-row items-center"
                              >
                                First Name&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="]firstName"
                                name="firstName"
                                value={billingAddress.firstName}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    firstName: e.target.value,
                                  })
                                }
                                placeholder="John"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                            <div className="grid basis-1/2 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="lastName"
                                className="flex flex-row items-center"
                              >
                                Last Name&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={billingAddress.lastName}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    lastName: e.target.value,
                                  })
                                }
                                placeholder="Doe"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                          </span>
                          <span className="w-full flex flex-row items-start justify-start gap-4">
                            <div className="grid basis-1/2 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="addressLine1"
                                className="flex flex-row items-center"
                              >
                                Address Line 1&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="addressLine1"
                                name="addressLine1"
                                value={billingAddress.addressLine1}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    addressLine1: e.target.value,
                                  })
                                }
                                placeholder="123 Main St"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                            <div className="grid basis-1/2 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="addressLine2"
                                className="flex flex-row items-center"
                              >
                                Address Line 2&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="addressLine2"
                                name="addressLine2"
                                value={billingAddress.addressLine2}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    addressLine2: e.target.value,
                                  })
                                }
                                placeholder="123 Main St"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                          </span>
                          <span className="w-full flex flex-row items-start justify-start gap-4">
                            <div className="grid basis-1/3 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="city"
                                className="flex flex-row items-center"
                              >
                                City&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="city"
                                name="city"
                                value={billingAddress.city}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    city: e.target.value,
                                  })
                                }
                                placeholder="New York"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                            <div className="grid basis-1/3 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="state"
                                className="flex flex-row items-center"
                              >
                                State&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="state"
                                name="state"
                                value={billingAddress.state}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    state: e.target.value,
                                  })
                                }
                                placeholder="NY"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                            <div className="grid basis-1/3 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="zipCode"
                                className="flex flex-row items-center"
                              >
                                Zip Code&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={billingAddress.zipCode}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    zipCode: e.target.value,
                                  })
                                }
                                placeholder="10001"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                          </span>
                          <span className="w-full flex flex-row items-start justify-start gap-4">
                            <div className="grid basis-1/2 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="country"
                                className="flex flex-row items-center"
                              >
                                Country&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="country"
                                name="country"
                                value={billingAddress.country}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    country: e.target.value,
                                  })
                                }
                                placeholder="United States"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                            <div className="grid basis-1/2 w-full max-w-full items-center gap-1.5">
                              <Label
                                htmlFor="phoneNumber"
                                className="flex flex-row items-center"
                              >
                                Phone Number&nbsp;
                                <div className="h-1 w-1 bg-primary rounded-full shrink-0"></div>
                              </Label>
                              <Input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={billingAddress.phoneNumber}
                                onChange={(e) =>
                                  setBillingAddress({
                                    ...billingAddress,
                                    phoneNumber: e.target.value,
                                  })
                                }
                                placeholder="123-456-7890"
                                className={`${
                                  false ? "border-destructive" : ""
                                }`}
                              />
                            </div>
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="shrink-0 w-[448px] p-8 gap-8 flex flex-col">
                    <p className="text-lg font-medium">Order Summary</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        className="border-transparent shadow-md rounded-md"
                        value="order-summary"
                      >
                        <AccordionTrigger className="flex flex-row gap-2 hover:no-underline p-4">
                          <p className="flex-grow line-clamp-1 text-start">
                            <span>Plan</span>&nbsp;
                            <span className="text-muted-foreground font-light">
                              (Growth)
                            </span>
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border-t border-input flex flex-col gap-6">
                          <div className="w-full flex flex-col gap-1">
                            <p className="text-base">Growth</p>
                            <p className="text-lg font-medium text-accent-foreground">
                              $79/seat
                            </p>
                            <p className="text-sm font-light text-muted-foreground">
                              Base License Fee: $250/month
                            </p>
                          </div>
                          <div className="w-full flex flex-col gap-3">
                            <Button
                              variant="outlineDark"
                              size="lg"
                              className="w-full"
                            >
                              View plan details
                            </Button>
                            <Button
                              variant="outlineDark"
                              size="lg"
                              className="w-full border-transparent"
                            >
                              Choose other plans
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        className="border-transparent shadow-md rounded-md"
                        value="additional-modules"
                      >
                        <AccordionTrigger className="flex flex-row gap-2 hover:no-underline p-4">
                          <p className="flex-grow line-clamp-1 text-start">
                            <span>Additional Modules</span>&nbsp;
                            <span className="text-muted-foreground font-light">
                              (4)
                            </span>
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className="border-t border-input flex flex-col w-full p-0">
                          <div className="w-full flex flex-col p-4 border-b border-input">
                            {additionalPlans.map((plan) => (
                              <div key={plan.id} className="w-full flex h-8 flex-row justify-between items-center gap-2.5">
                                <span className="flex-grow flex flex-row items-center justify-start gap-2.5">
                                  {cloneElement(plan.icon, {
                                    className: cn(
                                      "shrink-0 h-4 w-4 text-foreground"
                                    ),
                                  })}
                                  <p>{plan.title}</p>
                                </span>
                                <span className="w-max text-sm shrink-0">
                                  {plan.price}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="w-full flex flex-col gap-3 p-4">
                            <Button
                              variant="outlineDark"
                              size="lg"
                              className="w-full border-transparent"
                            >
                              Change modules
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Accordion
                      type="single"
                      collapsible
                      defaultValue="payment-summary"
                    >
                      <AccordionItem
                        className="border-transparent shadow-md rounded-md"
                        value="payment-summary"
                      >
                        <AccordionTrigger className="flex flex-row gap-2 hover:no-underline p-4">
                          <p className="flex-grow line-clamp-1 text-start">
                            <span>Payment Summary</span>&nbsp;
                            <span className="text-muted-foreground font-light"></span>
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className="border-t border-input flex flex-col w-full p-0">
                          <div className="w-full flex flex-col p-4 border-b border-input gap-3">
                            <span className="w-full">
                              <p className="w-full text-sm">
                                Amount due on June 30, 2024
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Charges will occur every 30 days
                              </p>
                            </span>
                            <div className="flex flex-row items-center gap-2 p-4">
                              <div className="h-2 w-2 bg-muted-foreground rounded-full shrink-0"></div>
                              <p className="flex-grow overflow-auto text-sm">
                                Growth Plan
                              </p>
                              <p className="text-sm shrink-0">$79</p>
                            </div>
                            <div className="flex flex-row items-center gap-2 p-4">
                              <div className="h-2 w-2 bg-muted-foreground rounded-full shrink-0"></div>
                              <p className="flex-grow overflow-auto text-sm">
                                Growth Plan
                              </p>
                              <p className="text-sm shrink-0">$79</p>
                            </div>
                            <div className="flex flex-row items-center gap-2 p-4">
                              <div className="h-2 w-2 bg-muted-foreground rounded-full shrink-0"></div>
                              <p className="flex-grow overflow-auto text-sm">
                                Growth Plan
                              </p>
                              <p className="text-sm shrink-0">$79</p>
                            </div>
                            <Button
                              variant="link"
                              size="sm"
                              className="flex flex-row w-max justify-start gap-2 items-center text-muted-foreground"
                            >
                              <p>See More Details </p>
                              <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="w-full flex flex-col p-4 border-b border-input gap-3">
                            <span className="w-full">
                              <p className="w-full text-sm">
                                Amount due on June 30, 2024
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Charges will occur every 30 days
                              </p>
                            </span>
                            <div className="flex flex-row items-center gap-2 p-4">
                              <div className="h-2 w-2 bg-primary rounded-full shrink-0"></div>
                              <p className="flex-grow overflow-auto text-sm">
                                Free Trial
                              </p>
                              <p className="text-sm shrink-0">$79</p>
                            </div>
                          </div>
                          <div className="w-full flex flex-col gap-3 p-4">
                            <Button
                              variant="outlineDark"
                              size="lg"
                              className="w-full border-transparent"
                            >
                              Change modules
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setApiLoading(true);
                      }}
                      variant="default"
                      size="lg"
                      className="w-full"
                    >
                      Start Free Trial
                    </Button>
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        className="border-transparent shadow-md rounded-md"
                        value="cancellation-policy"
                      >
                        <AccordionTrigger className="flex flex-row gap-2 hover:no-underline p-4">
                          <p className="flex-grow line-clamp-1 text-start">
                            <span>Cancellation Policy</span>&nbsp;
                            <span className="text-muted-foreground font-light"></span>
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className="border-t border-input flex flex-col w-full p-0">
                          some content
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                <div className="flex flex-col w-full max-w-full items-start gap-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
