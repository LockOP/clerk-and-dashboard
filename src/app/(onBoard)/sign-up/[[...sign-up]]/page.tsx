"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { SignInButton, SignUp, useSignUp } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
import { useSignIn, SignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// import { error } from "console";

export default function SignUpForm() {
  const { signIn } = useSignIn();
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = React.useState("");
  const [verifying, setVerifying] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle the submission of the sign-in form

  const [fullName, setfullName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [createHidePassword, setcreateHidePassword] = useState(true);
  const [confirmHidePassword, setconfirmHidePassword] = useState(true);
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // const signInWith = (strategy: OAuthStrategy) => {
  //   return signIn.authenticateWithRedirect({
  //     strategy,
  //     redirectUrl: "/sign-up/sso-callback",
  //     redirectUrlComplete: "/dashboard",
  //   });
  // };

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfullName(event.target.value);
  };

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    validatePasswords(event.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setconfirmPassword(event.target.value);
    validatePasswords(password, event.target.value);
  };

  const validatePasswords = (password: string, confirmPassword: string) => {
    console.log(password, confirmPassword, password != confirmPassword);
    if (password != confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const validateForm = () => {
    const isValid =
      fullName.trim() !== "" &&
      emailAddress.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      password === confirmPassword &&
      isChecked;
    // !error;
    setIsFormValid(isValid);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    // Start the sign-up process using the email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send the user an email with the verification code
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      // Set 'verifying' true to display second form
      // and capture the OTP code
      setVerifying(true);
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/buildPlan");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  const handleClick = () => {
    router.push("/sign-in");
  };

  useEffect(() => {
    validateForm();
  }, [fullName, emailAddress, password, confirmPassword]);

  if (!signIn) return null;

  // Display the verification form to capture the OTP code
  if (verifying) {
    return (
      <>
        <div className="flex flex-col items-center py-10">
          <div className="w-full max-w-[420px] ">
            <div className="w-full flex flex-col gap-6">
              <div className="w-full text-4xl text-center font-medium">
                Confirm your email
              </div>
              <div className="w-full text-sm text-muted-foreground text-center font-medium">
                Enter the 6-digit code we sent to your email
              </div>
              <div className="w-full flex flex-col items-center">
                <InputOTP maxLength={6} value={code} onChange={setCode}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button variant="default" size="lg" onClick={handleVerify}>
                Verify
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center py-10">
        <div className="w-full max-w-[420px]">
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full text-4xl text-center font-medium">
              Create an account
            </div>
            <div className="w-full flex flex-col gap-6">
              {/* FcGoogle */}
              <Button
                onClick={() => {
                  signIn.authenticateWithRedirect({
                    redirectUrl: "/sign-up/sso-callback",
                    redirectUrlComplete: "/buildPlan",
                    strategy: "oauth_google",
                  });
                }}
                size="lg"
                variant="outlineDark"
                className="w-full flex flex-row gap-2 items-center justify-center"
              >
                <FcGoogle className="text-xl" />
                <p className="text-sm font-medium text-foreground">
                  Sign up with Google
                </p>
              </Button>

              <Button
                onClick={() => {
                  signIn.authenticateWithRedirect({
                    redirectUrl: "/sign-up/sso-callback",
                    redirectUrlComplete: "/buildPlan",
                    strategy: "oauth_facebook",
                  });
                }}
                size="lg"
                variant="outlineDark"
                className="w-full flex flex-row gap-2 items-center justify-center"
              >
                {/* #1877F2 */}
                <FaFacebook className="text-xl text-[#1877F2]" />
                <p className="text-sm font-medium text-foreground">
                  Sign up with Facebook
                </p>
              </Button>
            </div>
            <div className="w-full max-w-full flex flex-row gap-2 items-center justify-center relative">
              <Separator />
              <div className="text-[14px] shrink-0 font-normal justify-center absolute px-4 bg-white">
                or sign up with email
              </div>
            </div>
            <div className="w-full flex flex-col flex-grow gap-6">
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="fullName"> Full Name</Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleFullNameChange}
                  placeholder="Johnny Mobbin"
                  className={`${false ? "border-destructive" : ""}`}
                />
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="jhonny@me.com"
                  className={`${false ? "border-destructive" : ""}`}
                />
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create Password"
                  className={`${false ? "border-destructive" : ""}`}
                />
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirm Password"
                  className={`${false ? "border-destructive" : ""}`}
                />
              </div>
              <div className="flex items-center space-x-4">
                <Checkbox
                  id="terms"
                  className="w-5 h-5"
                  checked={isChecked}
                  onClick={() => setIsChecked(!isChecked)}
                />
                <Label className="text-sm text-muted-foreground">
                  I've read and agree with the&nbsp;
                  <a
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                  &nbsp;and the&nbsp;
                  <a
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Privacy Policy.
                  </a>
                </Label>
              </div>
              <div className="flex items-center space-x-4">
                <Checkbox id="notifications" className="w-5 h-5" />
                <Label className="text-sm text-muted-foreground">
                  Sign up to receive email notifications on our latest updates
                </Label>
              </div>
              <div className="w-full flex flex-col gap-6">
                <Button
                  onClick={handleSubmit}
                  variant="default"
                  size="lg"
                  disabled={
                    !isChecked ||
                    emailAddress.length <= 0 ||
                    password !== confirmPassword
                  }
                >
                  Get Started
                </Button>
                <div className="w-full max-w-full flex flex-row gap-2 items-center justify-center relative">
                  <Separator />
                  <div className="text-[14px] shrink-0 font-normal justify-center absolute px-4 bg-white">
                    Have an account already?
                  </div>
                </div>
                <Button onClick={handleClick} variant="outlineDark" size="lg">
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
