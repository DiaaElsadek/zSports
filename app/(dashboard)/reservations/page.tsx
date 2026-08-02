"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, CalendarCheck, Circle, DollarSign, Eye, Clock, History, ArrowLeft, ArrowRight } from "lucide-react";

type Reservation = {
  id: string;
  clientName: string;
  clientAvatar: string;
  stadiumName: string;
  sportType: string;
  date: string;
  time: string;
  amount: string;
  status: string;
};

type ReservationsData = {
  stats: {
    totalReservations: { title: string; value: string; trend: string };
    activeReservations: { title: string; value: string; trend: string };
    expectedRevenue: { title: string; value: string; currency: string; trend: string };
  };
  reservations: Reservation[];
  recentActivities: {
    id: number;
    clientName: string;
    action: string;
    time: string;
    status: string;
  }[];
  distribution: {
    name: string;
    percentage: number;
  }[];
};

export default function ReservationsPage() {
  const [data, setData] = useState<ReservationsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reservations-mock")
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
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">إدارة الحجوزات</h1>
          <p className="text-zinc-400 text-sm">تتبع وجدولة جميع الأنشطة الرياضية في ملاعبك.</p>
        </div>
        
        {/* Export Button */}
        <button className="flex items-center gap-2 bg-[#1a1a1a] border border-brand-border hover:bg-brand-border transition-colors rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm w-fit">
          <Download className="w-4 h-4 text-zinc-400" />
          تصدير البيانات
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        
        {/* Total Reservations */}
        <div className="bg-[#121212] rounded-3xl p-6 md:p-8 flex flex-col items-end border border-brand-border/50 relative overflow-hidden h-40 justify-center">
          <p className="text-zinc-400 font-medium z-10">{data.stats.totalReservations.title}</p>
          <h2 className="text-4xl font-bold text-white tracking-tight z-10 my-1">{data.stats.totalReservations.value}</h2>
          <div className="flex items-center gap-1 z-10 text-brand-green text-sm font-bold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V4M5 11l7-7 7 7" />
            </svg>
            <span>{data.stats.totalReservations.trend}</span>
          </div>
          <CalendarCheck className="absolute left-[-5%] bottom-[-10%] w-40 h-40 text-zinc-800 opacity-20 pointer-events-none" />
        </div>

        {/* Active Reservations */}
        <div className="bg-[#121212] rounded-3xl p-6 md:p-8 flex flex-col items-end border border-brand-border/50 relative overflow-hidden h-40 justify-center">
          <p className="text-zinc-400 font-medium z-10">{data.stats.activeReservations.title}</p>
          <h2 className="text-4xl font-bold text-white tracking-tight z-10 my-1">{data.stats.activeReservations.value}</h2>
          <div className="flex items-center gap-1.5 z-10 text-brand-green text-sm font-bold">
            <Clock className="w-4 h-4" />
            <span>{data.stats.activeReservations.trend}</span>
          </div>
          <Circle className="absolute left-[-5%] bottom-[-10%] w-40 h-40 text-zinc-800 opacity-20 pointer-events-none" />
        </div>

        {/* Expected Revenue */}
        <div className="bg-[#121212] rounded-3xl p-6 md:p-8 flex flex-col items-end border border-brand-border/50 relative overflow-hidden h-40 justify-center">
          <p className="text-zinc-400 font-medium z-10">{data.stats.expectedRevenue.title}</p>
          <div className="flex items-baseline gap-1 z-10 my-1">
            <h2 className="text-4xl font-bold text-white tracking-tight">{data.stats.expectedRevenue.value}</h2>
            <span className="text-2xl font-bold text-white">{data.stats.expectedRevenue.currency}</span>
          </div>
          <div className="flex items-center gap-1.5 z-10 text-[#73c2fb] text-sm font-bold">
            <Eye className="w-4 h-4" />
            <span>{data.stats.expectedRevenue.trend}</span>
          </div>
          <DollarSign className="absolute left-[-5%] bottom-[-10%] w-40 h-40 text-zinc-800 opacity-20 pointer-events-none" />
        </div>

      </div>

      {/* Main Table Area */}
      <div className="bg-[#121212] border border-brand-border/50 rounded-[2rem] overflow-hidden">
        
        {/* Top Filter Tabs & Info */}
        <div className="px-6 sm:px-8 py-5 border-b border-brand-border/30 flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-6 text-sm font-bold text-zinc-500">
            <button className="text-brand-green border-b-2 border-brand-green pb-1">الكل</button>
            <button className="hover:text-white transition-colors pb-1">مؤكد</button>
            <button className="hover:text-white transition-colors pb-1">قيد الانتظار</button>
            <button className="hover:text-white transition-colors pb-1">ملغي</button>
          </div>
          <span className="text-xs text-zinc-500 font-medium">عرض 1-4 من أصل 24 حجز اليوم</span>
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-1 sm:grid-cols-6 px-6 sm:px-8 py-4 border-b border-brand-border/30 text-xs font-bold text-zinc-500 bg-[#0f0f0f]">
          <div className="text-right">معرف الحجز</div>
          <div className="text-right">العميل</div>
          <div className="text-right">الملعب / الرياضة</div>
          <div className="text-right">التاريخ والوقت</div>
          <div className="text-right">المبلغ</div>
          <div className="text-left">الحالة</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col divide-y divide-brand-border/30">
          {data.reservations.map((reservation) => (
            <div key={reservation.id} className="grid grid-cols-1 sm:grid-cols-6 items-center px-6 sm:px-8 py-4 hover:bg-[#161616] transition-colors">
              
              {/* Booking ID */}
              <div className="text-right">
                <span className="text-brand-green font-bold text-sm">{reservation.id}</span>
              </div>
              
              {/* Client Info */}
              <div className="flex items-center gap-3 justify-start">
                {reservation.clientAvatar.length <= 2 ? (
                  <div className="w-8 h-8 rounded-full bg-zinc-800 text-xs text-zinc-300 font-bold flex items-center justify-center shrink-0">
                    {reservation.clientAvatar}
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden relative shrink-0">
                    <Image src={reservation.clientAvatar} alt={reservation.clientName} fill className="object-cover" />
                  </div>
                )}
                <span className="text-white text-sm font-bold">{reservation.clientName}</span>
              </div>
              
              {/* Stadium / Sport */}
              <div className="flex flex-col text-right">
                <span className="text-white text-sm font-bold">{reservation.stadiumName}</span>
                <span className="text-zinc-500 text-[10px]">{reservation.sportType}</span>
              </div>

              {/* Date & Time */}
              <div className="flex flex-col text-right">
                <span className="text-white text-sm font-bold">{reservation.date}</span>
                <span className="text-brand-green text-[10px]">{reservation.time}</span>
              </div>
              
              {/* Amount */}
              <div className="text-right">
                <span className="text-white text-sm font-bold">{reservation.amount}</span>
              </div>
              
              {/* Status Badge */}
              <div className="flex justify-end">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  reservation.status === "مؤكد" 
                    ? "bg-brand-green/10 text-brand-green border-brand-green/20" 
                    : "bg-red-500/10 text-red-500 border-red-500/20"
                }`}>
                  {reservation.status}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Footer / Pagination */}
        <div className="px-6 sm:px-8 py-4 border-t border-brand-border/30 flex items-center justify-between bg-[#0f0f0f]">
          <button className="flex items-center gap-1 text-sm font-bold text-zinc-500 hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4" />
            السابق
          </button>
          
          <div className="flex items-center gap-4 text-sm font-bold">
            <button className="w-8 h-8 rounded-full bg-brand-green text-black flex items-center justify-center">1</button>
            <button className="text-white hover:text-brand-green transition-colors">2</button>
            <button className="text-white hover:text-brand-green transition-colors">3</button>
            <span className="text-zinc-600">...</span>
          </div>

          <button className="flex items-center gap-1 text-sm font-bold text-zinc-500 hover:text-white transition-colors">
            التالي
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Section: Stadium Distribution (In RTL, this is col 1 or 3?) */}
        {/* Wait, "توزيع الملاعب" is on the left in the design, and "النشاط الأخير" is on the right. In RTL, right is first in DOM if using flex/grid without modifications. Let's place Activity first so it's on the right. */}
        
        {/* Activity (Right side in RTL) */}
        <div className="lg:col-span-2 bg-[#121212] border border-brand-border/50 rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-8 justify-end">
            <h2 className="text-xl font-bold text-white">النشاط الأخير</h2>
            <History className="w-5 h-5 text-brand-green" />
          </div>
          
          <div className="flex flex-col gap-8 relative text-right">
            {/* Vertical Timeline Line */}
            <div className="absolute right-2 top-2 bottom-2 w-px bg-brand-border" />

            {data.recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 relative z-10 justify-end flex-row-reverse">
                <div className="flex-1">
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                    <span className="font-bold text-white">{activity.clientName}</span> {activity.action}
                  </p>
                  <span className="text-[10px] text-zinc-500 block mt-1">{activity.time}</span>
                </div>
                <div className="w-4 h-4 shrink-0 rounded-full flex items-center justify-center border-4 border-[#121212] relative top-1">
                   <div className={`w-2 h-2 rounded-full ${activity.status === "confirmed" ? "bg-brand-green shadow-[0_0_8px_#37d740]" : "bg-red-500 shadow-[0_0_8px_#ef4444]"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution (Left side in RTL) */}
        <div className="bg-[#121212] border border-brand-border/50 rounded-[2rem] p-6 sm:p-8 flex flex-col">
          <h2 className="text-xl font-bold text-white mb-8 text-center">توزيع الملاعب</h2>
          
          <div className="flex flex-col gap-6 flex-1">
            {data.distribution.map((item, i) => (
              <div key={item.name} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className={`
                    ${i === 0 ? "text-brand-green" : i === 1 ? "text-[#73c2fb]" : "text-white"}
                  `}>{item.percentage}%</span>
                  <span className="text-zinc-400">{item.name}</span>
                </div>
                <div className="w-full h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden flex justify-end">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      i === 0 ? "bg-brand-green" : i === 1 ? "bg-[#73c2fb]" : "bg-zinc-400"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center border-t border-brand-border/30 pt-4">
            <span className="text-[10px] text-zinc-500">أكثر الأوقات إشغالاً: 8:00 م - 11:00 م</span>
          </div>
        </div>

      </div>

    </div>
  );
}
