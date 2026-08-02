"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Banknote,
  Users,
  CalendarCheck,
  Clock,
  CheckCircle2,
  UserPlus,
  CreditCard,
  AlertTriangle
} from "lucide-react";

type DashboardData = {
  stats: {
    revenue: { title: string; value: string; trend: string; isPositive: boolean };
    activeBookings: { title: string; value: string; trend: string; isPositive: boolean };
    newUsers: { title: string; value: string; trend: string; isPositive: boolean };
    operatingHours: { title: string; value: string; trend: string; isPositive: boolean | null };
  };
  bookingsTrend: { day: string; value: number }[];
  mostRequestedStadiums: { id: number; name: string; type: string; percentage: number; image: string }[];
  recentActivities: { id: number; type: string; title: string; description: string; time: string }[];
};

export default function HomePage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
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

  const getIconForActivity = (type: string) => {
    switch (type) {
      case "booking":
        return <CheckCircle2 className="w-5 h-5 text-brand-green" />;
      case "user":
        return <UserPlus className="w-5 h-5 text-blue-400" />;
      case "payment":
        return <CreditCard className="w-5 h-5 text-brand-green" />;
      case "maintenance":
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-zinc-400" />;
    }
  };

  const getIconBgForActivity = (type: string) => {
    switch (type) {
      case "booking":
        return "bg-brand-green/10";
      case "user":
        return "bg-blue-400/10";
      case "payment":
        return "bg-brand-green/10";
      case "maintenance":
        return "bg-red-500/10";
      default:
        return "bg-zinc-800";
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">أهلاً بك مجدداً، أحمد</h1>
          <p className="text-zinc-400 text-sm">إليك ما يحدث في الملاعب اليوم.</p>
        </div>
        <div className="flex items-center gap-2 bg-brand-card border border-brand-border px-4 py-2 rounded-full w-fit">
          <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="text-xs font-medium text-zinc-300">الحالة المباشرة:</span>
          <span className="text-xs font-bold text-zinc-300">14 مباراة جارية</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Revenue */}
        <div className="bg-brand-card rounded-[1.5rem] p-6 border border-brand-border/50 flex flex-col justify-between aspect-square lg:aspect-auto h-40">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-brand-green/10 rounded-xl">
              <Banknote className="w-5 h-5 text-brand-green" />
            </div>
            <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded-md">
              {data.stats.revenue.trend}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-400 font-medium mb-1">{data.stats.revenue.title}</p>
            <h3 className="text-2xl font-bold text-white">{data.stats.revenue.value}</h3>
          </div>
        </div>

        {/* Active Bookings */}
        <div className="bg-brand-card rounded-[1.5rem] p-6 border border-brand-border/50 flex flex-col justify-between aspect-square lg:aspect-auto h-40">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-brand-border rounded-xl">
              <CalendarCheck className="w-5 h-5 text-zinc-300" />
            </div>
            <span className="text-xs font-bold text-zinc-400 bg-brand-border px-2 py-1 rounded-md">
              {data.stats.activeBookings.trend}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-400 font-medium mb-1">{data.stats.activeBookings.title}</p>
            <h3 className="text-2xl font-bold text-white">{data.stats.activeBookings.value}</h3>
          </div>
        </div>

        {/* New Users */}
        <div className="bg-brand-card rounded-[1.5rem] p-6 border border-brand-border/50 flex flex-col justify-between aspect-square lg:aspect-auto h-40">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-brand-border rounded-xl">
              <Users className="w-5 h-5 text-zinc-300" />
            </div>
            <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded-md">
              {data.stats.newUsers.trend}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-400 font-medium mb-1">{data.stats.newUsers.title}</p>
            <h3 className="text-2xl font-bold text-white">{data.stats.newUsers.value}</h3>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-brand-card rounded-[1.5rem] p-6 border border-brand-border/50 flex flex-col justify-between aspect-square lg:aspect-auto h-40">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-brand-border rounded-xl">
              <Clock className="w-5 h-5 text-zinc-300" />
            </div>
            <span className="text-xs font-bold text-zinc-400 bg-brand-border px-2 py-1 rounded-md">
              {data.stats.operatingHours.trend}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-400 font-medium mb-1">{data.stats.operatingHours.title}</p>
            <h3 className="text-2xl font-bold text-white">{data.stats.operatingHours.value}</h3>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Right Section (in RTL) / Spans 2 cols */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          
          {/* Trend Chart */}
          <div className="bg-brand-card rounded-[2rem] p-6 sm:p-8 border border-brand-border/50 relative overflow-hidden h-[400px]">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">اتجاهات الحجوزات</h2>
                <p className="text-sm text-zinc-400">تحليل النشاط الأسبوعي للملاعب</p>
              </div>
              <div className="flex items-center bg-brand-border rounded-full p-1">
                <button className="px-4 py-1.5 text-xs font-bold bg-brand-green text-black rounded-full transition-all shadow-sm">
                  أسبوعي
                </button>
                <button className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-all">
                  شهري
                </button>
              </div>
            </div>
            
            {/* SVG Chart Mock */}
            <div className="absolute inset-0 top-32 flex items-end">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#37d740" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#37d740" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path 
                  d="M0,150 C150,130 200,160 300,140 C450,110 500,50 650,60 C800,70 900,120 1000,30 L1000,200 L0,200 Z" 
                  fill="url(#gradient)" 
                />
                <path 
                  d="M0,150 C150,130 200,160 300,140 C450,110 500,50 650,60 C800,70 900,120 1000,30" 
                  fill="none" 
                  stroke="#37d740" 
                  strokeWidth="3"
                  className="drop-shadow-[0_0_8px_rgba(55,215,64,0.8)]"
                />
              </svg>
            </div>
            
            {/* Chart X Axis Labels */}
            <div className="absolute bottom-6 left-8 right-8 flex justify-between text-xs text-zinc-500 font-medium z-10">
              {data.bookingsTrend.map((item, index) => (
                <span key={index}>{item.day}</span>
              ))}
            </div>
          </div>

          {/* Most Requested Stadiums */}
          <div className="bg-brand-card rounded-[2rem] p-6 sm:p-8 border border-brand-border/50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">الملاعب الأكثر طلباً</h2>
              <span className="text-sm text-zinc-400">آخر 30 يوم</span>
            </div>
            <div className="flex flex-col gap-4">
              {data.mostRequestedStadiums.map((stadium) => (
                <div key={stadium.id} className="flex items-center justify-between p-4 bg-brand-border/30 rounded-2xl border border-brand-border/50 hover:bg-brand-border/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 rounded-lg bg-zinc-800 overflow-hidden relative">
                      <Image 
                        src={stadium.image} 
                        alt={stadium.name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{stadium.name}</h3>
                      <p className="text-xs text-zinc-400">{stadium.type}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-lg font-bold text-brand-green">{stadium.percentage}%</span>
                    <p className="text-[10px] text-zinc-500">نسبة الإشغال</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Section (in RTL) / Timeline */}
        <div className="bg-brand-card rounded-[2rem] p-6 sm:p-8 border border-brand-border/50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">آخر الأنشطة</h2>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute right-6 top-2 bottom-6 w-px bg-brand-border" />
            
            <div className="flex flex-col gap-6">
              {data.recentActivities.map((activity, index) => (
                <div key={activity.id} className="flex items-start gap-4 relative z-10">
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center border-4 border-brand-card ${getIconBgForActivity(activity.type)}`}>
                    {getIconForActivity(activity.type)}
                  </div>
                  <div className="flex-1 pt-2 pb-6">
                    <h3 className="text-sm font-bold text-white mb-1">
                      {activity.title.split(' ').map((word, i) => (
                        <span key={i} className={i === activity.title.split(' ').length - 1 && activity.type === 'booking' ? 'text-brand-green' : i === 1 && activity.type === 'user' ? 'text-brand-green' : i === 1 && activity.type === 'payment' ? 'text-brand-green' : i === 1 && activity.type === 'maintenance' ? 'text-red-500' : ''}>
                          {word}{' '}
                        </span>
                      ))}
                    </h3>
                    <p className="text-xs text-zinc-400 mb-2 leading-relaxed">{activity.description}</p>
                    <span className="text-[10px] text-zinc-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="w-full mt-2 py-3 text-sm font-bold text-brand-green bg-brand-green/5 hover:bg-brand-green/10 border border-brand-green/20 rounded-xl transition-colors flex items-center justify-center gap-2">
            عرض كافة الأنشطة
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 rtl:rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
