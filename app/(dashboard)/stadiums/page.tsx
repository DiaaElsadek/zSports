"use client";

import { useEffect, useState } from "react";
import { Search, ChevronDown, List, Settings, Circle, Target, Activity } from "lucide-react";

type Stadium = {
  id: number;
  name: string;
  sportType: string;
  utilization: number;
  status: string;
};

type StadiumsData = {
  stats: {
    revenue: {
      title: string;
      value: string;
      currency: string;
      trend: string;
      isPositive: boolean;
    };
    systemStatus: {
      title: string;
      statusText: string;
      activeCount: number;
      maintenanceCount: number;
    };
  };
  stadiums: Stadium[];
};

export default function StadiumsPage() {
  const [data, setData] = useState<StadiumsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stadiums-mock")
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

  const getSportIcon = (sportType: string) => {
    switch (sportType) {
      case "كرة القدم":
        return <Circle className="w-4 h-4 text-[#73c2fb]" />;
      case "تنس":
        return <Target className="w-4 h-4 text-[#73c2fb]" />;
      case "كرة السلة":
        return <Activity className="w-4 h-4 text-[#73c2fb]" />;
      default:
        return <Circle className="w-4 h-4 text-[#73c2fb]" />;
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-10 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">إدارة الملاعب</h1>
          <p className="text-zinc-400 text-sm">إدارة ومراقبة 10 منشآت رياضية نشطة في جميع أنحاء المنطقة.</p>
        </div>
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-zinc-500" />
          </div>
          <input
            type="text"
            placeholder="بحث سريع عن الملاعب..."
            className="w-full h-10 bg-[#0f0f0f] border border-brand-border/50 rounded-full pr-10 pl-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {/* System Status Card */}
        <div className="bg-brand-card rounded-3xl p-6 md:p-8 flex items-center justify-between border border-brand-border/50 relative overflow-hidden">
          <div className="z-10 flex flex-col gap-1">
            <p className="text-zinc-400 font-medium">{data.stats.systemStatus.title}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{data.stats.systemStatus.statusText}</h2>
          </div>
          
          <div className="z-10 flex flex-col gap-1 text-center mr-8">
            <div className="flex items-center gap-6">
               <div className="flex flex-col items-center">
                 <span className="text-brand-green font-bold text-lg">{data.stats.systemStatus.activeCount}</span>
                 <span className="text-zinc-500 text-xs">نشط</span>
               </div>
               <div className="flex flex-col items-center">
                 <span className="text-orange-500 font-bold text-lg">{data.stats.systemStatus.maintenanceCount}</span>
                 <span className="text-zinc-500 text-xs">صيانة</span>
               </div>
            </div>
          </div>
          
          {/* Faded Background Icon */}
          <Settings className="absolute left-[-20%] bottom-[-20%] w-64 h-64 text-zinc-800 opacity-20 rotate-45 pointer-events-none" />
        </div>

        {/* Revenue Card */}
        <div className="bg-brand-card rounded-3xl p-6 md:p-8 flex items-center justify-between border border-brand-border/50">
          <div className="flex flex-col gap-1">
            <p className="text-zinc-400 font-medium text-lg">{data.stats.revenue.title}</p>
            <div className="flex items-baseline gap-1 mt-1">
               <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{data.stats.revenue.value}</span>
               <span className="text-2xl font-bold text-white">{data.stats.revenue.currency}</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-brand-green font-bold text-lg bg-brand-green/10 px-3 py-1 rounded-xl">
              {data.stats.revenue.trend}
            </span>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#121212] border border-brand-border/50 rounded-full h-14 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-brand-card border border-brand-border/50 hover:bg-brand-border/30 transition-colors rounded-full px-4 py-2 text-sm text-zinc-300">
            <span>جميع الحالات</span>
            <ChevronDown className="w-4 h-4 text-zinc-500" />
          </button>
          <button className="flex items-center gap-2 bg-brand-card border border-brand-border/50 hover:bg-brand-border/30 transition-colors rounded-full px-4 py-2 text-sm text-zinc-300">
            <span>جميع الرياضات</span>
            <ChevronDown className="w-4 h-4 text-zinc-500" />
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-500 hidden sm:block">العرض:</span>
          <button className="bg-brand-green/20 p-2 rounded-full border border-brand-green/30">
            <List className="w-4 h-4 text-brand-green" />
          </button>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-[#121212] border border-brand-border/50 rounded-3xl overflow-hidden">
        
        {/* Table Headers */}
        <div className="grid grid-cols-4 px-6 sm:px-10 py-5 border-b border-brand-border/30 text-sm font-bold text-zinc-400 bg-[#0f0f0f]">
          <div className="text-right">معلومات الملعب</div>
          <div className="text-center">نوع الرياضة</div>
          <div className="text-center">الاستخدام</div>
          <div className="text-left">الحالة</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col divide-y divide-brand-border/30">
          {data.stadiums.map((stadium) => (
            <div key={stadium.id} className="grid grid-cols-4 items-center px-6 sm:px-10 py-5 hover:bg-[#161616] transition-colors group">
              
              {/* Stadium Name */}
              <div className="text-right">
                <span className="text-white font-bold">{stadium.name}</span>
              </div>
              
              {/* Sport Type */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-zinc-300 text-sm font-medium">{stadium.sportType}</span>
                {getSportIcon(stadium.sportType)}
              </div>
              
              {/* Utilization Bar */}
              <div className="flex flex-col items-center justify-center gap-1.5 px-4 w-full max-w-[160px] mx-auto">
                <div className="w-full flex justify-end">
                  <span className="text-zinc-400 text-[10px] font-bold">{stadium.utilization}%</span>
                </div>
                <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${stadium.utilization > 0 ? "bg-brand-green" : "bg-zinc-600"}`} 
                    style={{ width: `${stadium.utilization}%` }}
                  />
                </div>
              </div>
              
              {/* Status Switch */}
              <div className="flex items-center justify-end gap-3">
                <span className={`text-sm font-bold ${stadium.status === "نشط" ? "text-brand-green" : "text-red-500"}`}>
                  {stadium.status}
                </span>
                
                {/* Custom Toggle Switch */}
                <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${stadium.status === "نشط" ? "bg-brand-green" : "bg-zinc-700"}`}>
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${stadium.status === "نشط" ? "-translate-x-5" : "-translate-x-1"}`} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer / Pagination */}
        <div className="px-6 sm:px-10 py-5 border-t border-brand-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0f0f0f]">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-xs text-zinc-500 hover:text-white transition-colors">السابق</button>
            <button className="w-7 h-7 rounded bg-brand-green/20 border border-brand-green/30 text-brand-green font-bold text-xs flex items-center justify-center">1</button>
            <button className="w-7 h-7 rounded text-zinc-500 hover:text-white transition-colors text-xs flex items-center justify-center">2</button>
            <button className="w-7 h-7 rounded text-zinc-500 hover:text-white transition-colors text-xs flex items-center justify-center">3</button>
          </div>
          <span className="text-xs font-medium text-zinc-500">
            عرض 1 إلى 4 من 10 ملاعب
          </span>
        </div>

      </div>

    </div>
  );
}
