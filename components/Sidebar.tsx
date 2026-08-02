"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Settings,
  HelpCircle,
  LogOut,
  Tent,
  Menu,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const mainNav = [
  {
    title: "لوحة التحكم",
    href: "/home",
    icon: LayoutDashboard,
  },
  {
    title: "الملاعب",
    href: "/stadiums",
    icon: Tent,
  },
  {
    title: "الحجوزات",
    href: "/reservations",
    icon: CalendarDays,
  },
  {
    title: "الإعدادات",
    href: "/settings",
    icon: Settings,
  },
];

const bottomNav = [
  {
    title: "مركز المساعدة",
    href: "/help",
    icon: HelpCircle,
  },
  {
    title: "تسجيل الخروج",
    href: "/login",
    icon: LogOut,
    isDestructive: true,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside 
      className={`bg-brand-card h-screen flex flex-col border-l border-brand-border flex-shrink-0 sticky top-0 hidden lg:flex transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute cursor-pointer -left-3 top-6 bg-brand-card border border-brand-border rounded-full p-1 text-zinc-400 hover:text-white z-50 transition-colors"
      >
        {isOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Logo Area */}
      <div className="h-20 flex items-center justify-center border-b border-brand-border/50">
        <div className={`flex items-center ${isOpen ? "gap-2" : "justify-center w-full"}`}>
          <div className="w-8 h-8 shrink-0 rounded-full bg-brand-green flex items-center justify-center text-black font-bold text-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          {isOpen && (
            <div className="flex flex-col text-right overflow-hidden whitespace-nowrap transition-all duration-300">
              <span className="text-xl font-bold tracking-tight text-white flex items-center justify-end gap-1">
                Z Sports
              </span>
              <span className="text-[10px] text-zinc-400">نبض الملاعب</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-hidden">
        {mainNav.map((item) => {
          const isActive = pathname.includes(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 text-sm font-medium transition-all relative ${
                isActive
                  ? "text-brand-green"
                  : "text-zinc-400 hover:text-white hover:bg-white/5 rounded-md"
              } ${!isOpen && "justify-center"}`}
              title={!isOpen ? item.title : undefined}
            >
              {isActive && (
                <div className={`absolute top-0 bottom-0 w-1 bg-brand-green rounded-l-full ${isOpen ? "-right-4" : "-right-4"}`} />
              )}
              <item.icon className="w-5 h-5 shrink-0" />
              {isOpen && <span className="whitespace-nowrap">{item.title}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Nav */}
      <div className="p-4 space-y-2 mb-4 overflow-hidden">
        {bottomNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all hover:bg-white/5 rounded-md ${
              item.isDestructive
                ? "text-[#FF4C4C] hover:text-red-400"
                : "text-zinc-400 hover:text-white"
            } ${!isOpen && "justify-center"}`}
            title={!isOpen ? item.title : undefined}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {isOpen && <span className="whitespace-nowrap">{item.title}</span>}
          </Link>
        ))}
      </div>
    </aside>
  );
}
