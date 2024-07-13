// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return <SignIn />;
// }

'use client';
import * as React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { OAuthStrategy } from "@clerk/types";
import { useSignIn } from "@clerk/nextjs";

// export default function OauthSignIn() {
//   const { signIn } = useSignIn();

//   if (!signIn) return null;

//   const signInWith = (strategy: OAuthStrategy) => {
//     return signIn.authenticateWithRedirect({
//       strategy,
//       redirectUrl: '/sign-up/sso-callback',
//       redirectUrlComplete: '/',
//     });
//   };

//   // Render a button for each supported OAuth provider
//   // you want to add to your app. This example uses only Google.
//   return (
//     <div>
//       <button onClick={() => signInWith('oauth_google')}>
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  // Handle the submission of the sign-in form

  const [fullName, setfullName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [createHidePassword, setcreateHidePassword] = useState(true);
  

  if (!signIn) return null;

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sign-up/sso-callback',
      redirectUrlComplete: '/dashboard',
    });
  };

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfullName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setconfirmPassword(event.target.value);
  };

   const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/dashboard");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Display a form to capture the user's email and password
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[413px] items-center ">
          <div className="w-full flex flex-col items-center ">
            <div className="text-[40px] font-semibold ">
              Create an account
            </div>
            <div className=" w-full flex flex-col gap-4 pt-13 pt-10">
              <button onClick={() => {
            signIn.authenticateWithRedirect({
              redirectUrl: "/sign-up/sso-callback",
              redirectUrlComplete: "/dashboard",
              strategy: "oauth_google",
            });
          }}  className=" w-full hover:border-[#3D53DB] flex flex-row text-[14px] font-semibold border-[1px] border-[#F5F5F7] rounded-[10px] px-5 pt-4 pb-[13px] items-center justify-center gap-4">
                <div className="">
                  <img
                    className="w-[19px] h-[19px] object-contain"
                    src="/signInUp/google.png"
                    alt="Sample Image"
                  />
                </div>
                <div className="">Sign in with Google</div>
              </button>

              <button onClick={() => {
            signIn.authenticateWithRedirect({
              redirectUrl: "/sign-up/sso-callback",
              redirectUrlComplete: "/dashboard",
              strategy: "oauth_facebook",
            });
          }}
          className="w-full hover:border-[#3D53DB] flex flex-row gap-2 text-[14px] font-semibold border-[1px] border-[#F5F5F7] rounded-[10px] px-5 pt-4 pb-[13px] items-center justify-center ">
                <div>
                  <img
                    src="/signInUp/facebook.png"
                    className="w-[19px] h-[19px] object-contain"
                    alt="Sample Image"
                  />
                </div>
                <div>Sign in with Facebook</div>
              </button>
            </div>
            <div className="w-full flex flex-row pt-4 gap-2 items-center justify-center">
              <div className="h-px bg-[#DFE1F3] border-[1px] flex-grow"></div>
              <div className="text-[14px] font-normal justify-center">
                or sign in with email
              </div>
              <div className="h-px bg-[#DFE1F3] border-[1px] flex-grow"></div>
            </div>

            <div className="w-full flex flex-col flex-grow gap-3 pt-4">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full text-[14px] font-semibold">Email</div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="name@email.com"
                  className="w-full outline-[#3D53DB] border-[1px] border-[#F5F5F7] rounded-[10px] px-5 pt-[14.5px] pb-[14.5px] "
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="w-full text-[14px] font-semibold">Password</div>
                <span className="relative flex flex-row items-center">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type={createHidePassword ? "password" : "text"}
                    value={password}
                    placeholder="Enter Password"
                    className="w-full pr-12 outline-[#3D53DB] border-[1px] border-[#F5F5F7] rounded-[10px] px-5 pt-[14.5px] pb-[14.5px] "
                  />
                  <button
                    onClick={() => {
                      setcreateHidePassword(!createHidePassword);
                    }}
                    className="absolute right-5"
                  >
                    {createHidePassword ? (
                      <FaEyeSlash className="text-[16px] text-[#8E92BC]" />
                    ) : (
                      <FaEye className="text-[16px] text-[#8E92BC]" />
                    )}
                  </button>
                </span>
                
              </div>
            </div>
            <div className="w-full flex flex-col pt-6">

              <div className="w-full flex flex-col pt-4">
                <button onClick={handleSubmit} className="w-full hover:border-[#3D53DB] bg-[#FFFFFF] border-[#C2C6E8] border-[1px] px-[163.5px] py-[13px] rounded-[10px] text-[#54577A] text-4 font-semibold">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>Sign in</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Enter email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Enter password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            value={password}
          />
        </div>
        <button type="submit">Sign in</button>
      </form> */}
    </>
  );
}