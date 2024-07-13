"use client";

import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <>
      checkout
      <button onClick={() => router.push("/personalizeAccount")}>
        personalizeAccount
      </button>
    </>
  );
}
