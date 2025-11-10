"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type Tab = "login" | "register";

export default function AuthForm({ defaultTab = "login", maxWidthClass = 'max-w-[420px]' }: { defaultTab?: Tab; maxWidthClass?: string }) {
  const [tab, setTab] = useState<Tab>(defaultTab);
  const [showPassword, setShowPassword] = useState(false);

  return (
  <div className={`mx-auto ${maxWidthClass} p-6 rounded-2xl shadow-md border bg-white`}>
      <div className="flex items-center gap-6 border-b pb-4">
        <button onClick={() => setTab("login")} className={`flex-1 text-center py-2 ${tab === 'login' ? 'text-slate-700 border-b-4 border-slate-700' : 'text-slate-600'}`}>
          Login
        </button>
        <button onClick={() => setTab("register")} className={`flex-1 text-center py-2 ${tab === 'register' ? 'text-slate-700 border-b-4 border-slate-700' : 'text-slate-600'}`}>
          Register
        </button>
      </div>

      {tab === "login" ? (
        <form className="mt-6 space-y-6">
          <div>
            <label className="block text-sm text-slate-700 mb-2">Email</label>
            <Input placeholder="" />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} placeholder="" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-slate-500">
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div>
            <Button className="w-full bg-slate-300 text-slate-900 hover:bg-slate-400">Log In</Button>
          </div>

          <div className="text-center text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Forgot password?</a>
          </div>
        </form>
      ) : (
        <form className="mt-6 space-y-6">
          <div>
            <div className="flex items-center gap-4">
              <label className="inline-flex text-slate-700 items-center gap-2">
                <input type="radio" name="clientType" defaultChecked />
                <span>Individual client</span>
              </label>
              <label className="inline-flex text-slate-700 items-center gap-2">
                <input type="radio" name="clientType" />
                <span>Corporate client</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-2">Country Of Residence</label>
            <Select>
              <SelectTrigger className="w-full"><SelectValue>India</SelectValue></SelectTrigger>
              <SelectContent>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-2">Full Name</label>
            <Input placeholder="" />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-2">Email</label>
            <Input placeholder="" />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} placeholder="" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-slate-500">
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-slate-700 mb-2">Code</label>
              <Select>
                <SelectTrigger className="w-full"><SelectValue>IN (91)</SelectValue></SelectTrigger>
                <SelectContent>
                  <SelectItem value="IN">IN (91)</SelectItem>
                  <SelectItem value="US">US (1)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm text-slate-700 mb-2">Mobile</label>
              <Input placeholder="" />
            </div>
          </div>

          <div>
            <Button className="w-full bg-slate-300 text-slate-900 hover:bg-slate-400">REGISTER NOW</Button>
          </div>

          <p className="text-xs text-slate-500">By clicking 'REGISTER NOW', I confirm that I am over 18 years old and have read, understood, and agree to the <a href="/legal#terms" className="hover:text-slate-700">T&Cs</a> and <a href="/legal#privacy" className="hover:text-slate-700">Privacy Policy</a>.</p>
        </form>
      )}
    </div>
  );
}
