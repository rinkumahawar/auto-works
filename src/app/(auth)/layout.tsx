import type { Metadata } from "next";
import LoginHeader from "@/components/LoginHeader";

export const metadata: Metadata = {
  title: "Auto-Works - Authentication",
  description: "Sign in to your Auto-Works account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <LoginHeader />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
