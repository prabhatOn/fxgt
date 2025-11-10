"use client";

import { useState } from "react";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("Onboarding / Account Opening");

  const maxChars = 1500;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder - no backend wired. Show an alert for now.
    // In a real app we'd POST to an API route.
    alert("Request submitted. (Demo only)");
  }

  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        <section className="py-20 text-center">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-display text-slate-900 font-extrabold">Contact Us</h1>
            <p className="mt-6 text-xl text-slate-600">If you have any questions about our products or services, or you’d like help opening an account, get in touch with us.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="bg-[#f8fafb] rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl text-slate-900 font-semibold">Get in touch</h2>
              <p className="mt-4 text-lg text-slate-700">Our 24/7 multilingual support team are here to help.</p>
              <p className="mt-4 text-slate-600">You can also use our <a href="#" className="underline text-[#0f766e]">Resource Center</a> to find answers to some of the most frequently asked questions.</p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" stroke="#0f766e" strokeWidth="1.2" fill="none"/></svg>
                </div>
                <div>
                  <div className="font-semibold">Send us an email</div>
                  <div className="text-slate-600">Clients: <a href="mailto:support@fxgt.com" className="text-[#0f766e] underline">support@fxgt.com</a></div>
                  <div className="text-slate-600">Partners: <a href="mailto:partners@fxgt.com" className="text-[#0f766e] underline">partners@fxgt.com</a></div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l6-6" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 3v6" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="font-semibold">Ask our support team in live chat</div>
                  <div className="text-slate-600">Click the chat icon at the bottom-right of the screen to start a conversation.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submit a request form */}
        <section className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md">
            <h3 className="text-2xl text-slate-900 font-semibold">Submit a request</h3>
            <p className="mt-2 text-slate-600">Send us a message and we’ll get back to you as quickly as we can.</p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm text-slate-600">First Name</label>
                  <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="" />
                </div>

                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="" />
                </div>

                <div>
                  <label className="text-sm text-slate-600">Type of enquiry</label>
                  <Select onValueChange={(v) => setEnquiry(v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue>{enquiry}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Onboarding / Account Opening">Onboarding / Account Opening</SelectItem>
                      <SelectItem value="Deposits & Withdrawals">Deposits & Withdrawals</SelectItem>
                      <SelectItem value="Technical Support">Technical Support</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm text-slate-600">Your message (optional)</label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="" />
                <div className="mt-2 text-sm text-slate-400">{maxChars - message.length} Characters allowed</div>
              </div>

              <div className="mt-8 text-center">
                <Button type="submit" className="bg-[#0f766e] text-white px-8 py-3 rounded-md">Submit</Button>
              </div>

              <p className="mt-6 text-center text-slate-600">By clicking on submit, you acknowledge and consent on processing your data as per our <a href="/legal#privacy" className="underline text-[#0f766e]">Privacy Policy</a></p>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
