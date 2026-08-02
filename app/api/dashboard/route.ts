import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    stats: {
      revenue: {
        title: "إجمالي الإيرادات",
        value: "8,850 ج.م",
        trend: "+12.5%",
        isPositive: true,
      },
      activeBookings: {
        title: "الحجوزات النشطة",
        value: "15",
        trend: "+8%",
        isPositive: true,
      },
      newUsers: {
        title: "المستخدمون الجدد",
        value: "68",
        trend: "+24%",
        isPositive: true,
      },
      operatingHours: {
        title: "ساعات التشغيل",
        value: "78%",
        trend: "ثابت",
        isPositive: null,
      }
    },
    bookingsTrend: [
      { day: "السبت", value: 30 },
      { day: "الأحد", value: 40 },
      { day: "الاثنين", value: 35 },
      { day: "الثلاثاء", value: 50 },
      { day: "الأربعاء", value: 45 },
      { day: "الخميس", value: 60 },
      { day: "الجمعة", value: 80 }
    ],
    mostRequestedStadiums: [
      {
        id: 1,
        name: "ملعب الملوك",
        type: "كرة قدم",
        percentage: 98,
        image: "https://images.unsplash.com/photo-1518605368461-1e1e1fd51ed4?auto=format&fit=crop&q=80&w=400"
      },
      {
        id: 2,
        name: "سلة الاهرامات",
        type: "سلة",
        percentage: 85,
        image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=400"
      }
    ],
    recentActivities: [
      {
        id: 1,
        type: "booking",
        title: "تم تأكيد حجز",
        description: "ملعب الابطال - الكابتن خالد",
        time: "منذ 5 دقائق",
      },
      {
        id: 2,
        type: "user",
        title: "عضو جديد انضم",
        description: "فيصل سالم",
        time: "منذ 12 دقيقة",
      },
      {
        id: 3,
        type: "payment",
        title: "عملية دفع ناجحة",
        description: "بقيمة 250 ج.م - ملعب تنس بروسيا",
        time: "منذ 45 دقيقة",
      },
      {
        id: 4,
        type: "maintenance",
        title: "بلاغ صيانة",
        description: "إضاءة ملعب سلة الحريف تحتاج فحص",
        time: "منذ ساعتين",
      }
    ]
  };

  return NextResponse.json(data);
}
