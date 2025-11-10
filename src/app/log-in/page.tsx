"use client";

import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <>
      <NavigationHeader />

      <main className="py-20 min-w-7/12  bg-[#f8fafc] min-h-[70vh]">
        <div className="mx-auto px-6">
          <h1 className="text-3xl font-display text-slate-900 font-extrabold text-center">Welcome back</h1>
          <p className="text-center text-slate-600 mt-4">Log in to access your account or register for a new one.</p>

          <div className="mt-8 flex justify-center">
            <AuthForm defaultTab="login" maxWidthClass="max-w-[560px]" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
