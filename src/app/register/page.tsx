"use client";

import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <>
      <NavigationHeader />

      <main className="py-20 bg-[#f8fafc] min-h-[70vh]">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl font-display text-slate-900 font-extrabold text-center">Create an account</h1>
          <p className="text-center text-slate-600 mt-4">Register now to start trading with FXGT.</p>

          <div className="mt-8 flex justify-center">
            <AuthForm defaultTab="register" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
