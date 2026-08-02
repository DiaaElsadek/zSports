import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    stats: {
      revenue: {
        title: "إجمالي الإيرادات",
        value: "142,500",
        currency: "ج.م",
        trend: "+12%",
        isPositive: true,
      },
      systemStatus: {
        title: "حالة النظام",
        statusText: "جميع الأنظمة تعمل",
        activeCount: 8,
        maintenanceCount: 2,
      }
    },
    stadiums: [
      {
        id: 1,
        name: "ملعب الملوك",
        sportType: "كرة القدم",
        utilization: 88,
        status: "نشط",
      },
      {
        id: 2,
        name: "تنس بروسيا",
        sportType: "تنس",
        utilization: 94,
        status: "نشط",
      },
      {
        id: 3,
        name: "سلة الحريف",
        sportType: "كرة السلة",
        utilization: 0,
        status: "صيانة",
      },
      {
        id: 4,
        name: "تنس الاحلام",
        sportType: "تنس",
        utilization: 62,
        status: "نشط",
      }
    ]
  };

  return NextResponse.json(data);
}
