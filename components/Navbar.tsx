"use client";

import { Search, Bell } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <header dir="ltr" className="h-20 bg-transparent flex items-center justify-between px-8 border-b border-brand-border/50">
      {/* Right side: User Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-border overflow-hidden relative border border-brand-border/50">
          <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white">أحمد المسلمي</span>
          <span className="text-xs text-zinc-400">مدير المنشأة</span>
        </div>
      </div>

      {/* Middle: Navigation Tabs */}
      <div className="hidden md:flex items-center gap-8">
        <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors pb-2">
          المباريات الحالية
        </button>
        <button className="text-sm font-bold text-brand-green border-b-2 border-brand-green pb-2">
          نظرة عامة
        </button>
      </div>

      {/* Left side: Search */}
      <div className="relative w-64 lg:w-80">
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-zinc-400" />
        </div>
        <input
          type="text"
          placeholder="البحث عن ملاعب..."
          className="w-full h-10 bg-brand-card border border-brand-border rounded-full pr-10 pl-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all "
          dir="rtl"
        />
      </div>
    </header>
  );
}
