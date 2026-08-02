"use client";

import { useEffect, useState } from "react";
import { Save, Settings, Shield, Banknote, RotateCw, Smartphone } from "lucide-react";

type SettingsData = {
  general: {
    siteTitle: string;
    contactEmail: string;
    maxAdvanceBooking: string;
    defaultLanguage: string;
  };
  security: {
    passwordLastChanged: string;
    twoFactorEnabled: boolean;
  };
  roles: {
    id: string;
    label: string;
    count: number;
    roleName: string;
  }[];
  payment: {
    defaultCurrency: string;
    gateways: {
      id: string;
      name: string;
      active: boolean;
    }[];
  };
};

export default function SettingsPage() {
  const [data, setData] = useState<SettingsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/settings-mock")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-10 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-green mb-2 tracking-tight">إعدادات النظام</h1>
          <p className="text-zinc-400 text-sm">قم بتخصيص تجربة الحجز وإدارة تفاصيل المنصة</p>
        </div>
        
        {/* Save Button */}
        <button className="flex items-center gap-2 bg-transparent border border-brand-green/30 hover:bg-brand-green/10 transition-colors rounded-full px-5 py-2.5 text-sm font-medium text-brand-green w-fit">
          <Save className="w-4 h-4" />
          حفظ كافة التغييرات
        </button>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* RIGHT COLUMN (In RTL, col-span-2 comes first to be on the right side) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* General Settings */}
          <div className="bg-[#121212] border border-brand-border/50 rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-8 justify-end">
              <h2 className="text-xl font-bold text-white">الإعدادات العامة</h2>
              <Settings className="w-5 h-5 text-brand-green" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Site Title */}
              <div className="flex flex-col gap-2 text-right">
                <label className="text-sm font-bold text-zinc-300">عنوان الموقع</label>
                <div className="bg-[#0f0f0f] border border-brand-border/30 rounded-full h-12 px-6 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{data.general.siteTitle}</span>
                </div>
              </div>

              {/* Contact Email */}
              <div className="flex flex-col gap-2 text-right">
                <label className="text-sm font-bold text-zinc-300">بريد التواصل</label>
                <div className="bg-[#0f0f0f] border border-brand-border/30 rounded-full h-12 px-6 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{data.general.contactEmail}</span>
                </div>
              </div>

              {/* Default Language */}
              <div className="flex flex-col gap-2 text-right">
                <label className="text-sm font-bold text-zinc-300">اللغة الافتراضية</label>
                <div className="bg-[#0f0f0f] border border-brand-border/30 rounded-full h-12 px-6 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{data.general.defaultLanguage}</span>
                </div>
              </div>

              {/* Max Advance Booking */}
              <div className="flex flex-col gap-2 text-right">
                <label className="text-sm font-bold text-zinc-300">الحد الأقصى للحجز المسبق (أيام)</label>
                <div className="bg-[#0f0f0f] border border-brand-border/30 rounded-full h-12 px-6 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{data.general.maxAdvanceBooking}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Security & Permissions */}
          <div className="bg-[#121212] border border-brand-border/50 rounded-[2rem] p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-8 justify-end relative z-10">
              <h2 className="text-xl font-bold text-white">الأمان والصلاحيات</h2>
              <Shield className="w-5 h-5 text-brand-green" />
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              
              {/* Change Password */}
              <div className="bg-[#0f0f0f] border border-brand-border/30 rounded-full p-4 px-6 flex items-center justify-between">
                <span className="text-brand-green text-sm font-bold cursor-pointer hover:underline">تحديث الآن</span>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col text-right">
                    <span className="text-white font-bold text-sm">تغيير كلمة المرور</span>
                    <span className="text-zinc-500 text-[10px]">{data.security.passwordLastChanged}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20">
                    <RotateCw className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* 2FA */}
              <div className="bg-[#0f0f0f] border border-brand-border/30 rounded-full p-4 px-6 flex items-center justify-between">
                {/* Custom Toggle Switch */}
                <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${data.security.twoFactorEnabled ? "bg-brand-green" : "bg-zinc-700"}`}>
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${data.security.twoFactorEnabled ? "-translate-x-5" : "-translate-x-1"}`} />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex flex-col text-right">
                    <span className="text-white font-bold text-sm">المصادقة الثنائية (2FA)</span>
                    <span className="text-zinc-500 text-[10px]">تأمين إضافي عبر رسائل SMS</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20">
                    <Smartphone className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>

            {/* User Roles */}
            <div className="mt-8 relative z-10">
              <h3 className="text-xs text-zinc-500 font-bold text-right mb-4">إدارة أدوار المستخدمين</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.roles.map((role, i) => (
                  <div key={role.id} className="bg-[#1a1a1a] border border-brand-border/50 rounded-2xl p-4 flex flex-col items-center justify-center gap-1 hover:bg-[#202020] transition-colors cursor-pointer">
                    <span className={`text-sm font-bold ${i === 0 ? "text-brand-green" : "text-white"}`}>{role.label}</span>
                    <span className="text-zinc-400 text-xs">{role.count} مستخدمين</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-0 bottom-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
          </div>

        </div>

        {/* LEFT COLUMN (In RTL, col-span-1 comes second to be on the left side) */}
        <div className="lg:col-span-1">
          
          {/* Payment Configuration */}
          <div className="bg-[#121212] border border-brand-border/50 rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 h-full">
            <div className="flex items-center gap-2 justify-end mb-2">
              <h2 className="text-xl font-bold text-white">تكوين الدفع</h2>
              <Banknote className="w-5 h-5 text-brand-green" />
            </div>

            {/* Default Currency */}
            <div className="flex flex-col gap-3 items-end border-b border-brand-border/30 pb-6">
              <span className="text-zinc-400 text-sm font-medium">العملة الافتراضية</span>
              <div className="bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5">
                <span className="text-brand-green text-sm font-bold">{data.payment.defaultCurrency}</span>
              </div>
            </div>

            {/* Payment Gateways */}
            <div className="flex flex-col gap-4 items-end pt-2">
              <span className="text-zinc-500 text-[10px] font-bold">بوابات الدفع المفعلة</span>
              
              <div className="flex flex-col gap-5 w-full">
                {data.payment.gateways.map((gateway) => (
                  <div key={gateway.id} className="flex items-center justify-between w-full">
                    {/* Custom Toggle Switch */}
                    <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${gateway.active ? "bg-brand-green" : "bg-zinc-700"}`}>
                      <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${gateway.active ? "-translate-x-5" : "-translate-x-1"}`} />
                    </div>
                    <span className="text-white text-sm font-medium">{gateway.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
