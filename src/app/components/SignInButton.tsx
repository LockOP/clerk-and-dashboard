"use client";
import React from "react";
import { SignIn } from "@clerk/nextjs";

export const SignInButton=()=> {
  return (
    <div>
      <button onClick={() => SignIn({ redirectUrl: "/sign-up" })}>
        Click to Sign-Up/Sign-In
      </button>
    </div>
  );
}
