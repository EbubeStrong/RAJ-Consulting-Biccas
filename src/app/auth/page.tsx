import { Suspense } from "react";
import AuthLayout from "@/components/auth/auth-layout"; 

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <AuthLayout />
    </Suspense>
  );
}
