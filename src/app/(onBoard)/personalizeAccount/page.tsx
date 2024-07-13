"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      personalizeAccount
      <button onClick={() => router.push("/dashboard")}>dashboard</button>
    </>
  );
}
