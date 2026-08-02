import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    stats: {
      totalReservations: {
        title: "إجمالي الحجوزات",
        value: "270",
        trend: "من ٪13 هذا الشهر",
      },
      activeReservations: {
        title: "الحجوزات النشطة",
        value: "9",
        trend: "5 حجوزات قادمة",
      },
      expectedRevenue: {
        title: "الإيرادات المتوقعة",
        value: "18,000",
        currency: "ج.م",
        trend: "بانتظار التحصيل",
      }
    },
    reservations: [
      {
        id: "#BK-9042",
        clientName: "سالم محمد",
        clientAvatar: "SM",
        stadiumName: "ملعب الملوك",
        sportType: "كرة قدم",
        date: "16 أكتوبر 2025",
        time: "8:00 م - 9:00 م",
        amount: "250 ج.م",
        status: "مؤكد",
      },
      {
        id: "#BK-9043",
        clientName: "علي قحطاني",
        clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
        stadiumName: "تنس بروسيا",
        sportType: "تنس أرضي",
        date: "16 أكتوبر 2025",
        time: "6:00 م - 7:00 م",
        amount: "250 ج.م",
        status: "مؤكد",
      },
      {
        id: "#BK-9044",
        clientName: "فهد العتيبي",
        clientAvatar: "FA",
        stadiumName: "سلة الحريف",
        sportType: "كرة سلة",
        date: "16 أكتوبر 2025",
        time: "9:00 م - 11:00 م",
        amount: "250 ج.م",
        status: "مؤكد",
      },
      {
        id: "#BK-9045",
        clientName: "خالد الشهري",
        clientAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100",
        stadiumName: "تنس الاحلام",
        sportType: "تنس",
        date: "16 أكتوبر 2025",
        time: "5:00 م - 6:00 م",
        amount: "250 ج.م",
        status: "ملغي",
      }
    ],
    recentActivities: [
      {
        id: 1,
        clientName: "سالم محمد",
        action: "أكد حجزه لملعب كرة القدم في الغد.",
        time: "منذ 10 دقيقة",
        status: "confirmed"
      },
      {
        id: 2,
        clientName: "خالد الشهري",
        action: "قام بإلغاء حجزه لملعب البادل.",
        time: "منذ ساعة واحدة",
        status: "cancelled"
      }
    ],
    distribution: [
      { name: "كرة القدم", percentage: 70 },
      { name: "سلة", percentage: 20 },
      { name: "تنس", percentage: 10 }
    ]
  };

  return NextResponse.json(data);
}
