import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    general: {
      siteTitle: "Z Sports Booking",
      contactEmail: "admin@gmail.com",
      maxAdvanceBooking: "10",
      defaultLanguage: "العربية",
    },
    security: {
      passwordLastChanged: "آخر تغيير منذ 3 أشهر",
      twoFactorEnabled: true,
    },
    roles: [
      {
        id: "admin",
        label: "مدير (Admin)",
        count: 3,
        roleName: "Admin",
      },
      {
        id: "moderator",
        label: "مشرف (Moderator)",
        count: 8,
        roleName: "Moderator",
      },
      {
        id: "accountant",
        label: "محاسب (Accountant)",
        count: 2,
        roleName: "Accountant",
      }
    ],
    payment: {
      defaultCurrency: "جنية - مصري",
      gateways: [
        {
          id: "cash",
          name: "دفع نقدي (عند الوصول)",
          active: true,
        },
        {
          id: "instapay",
          name: "انستا باي",
          active: true,
        }
      ]
    }
  };

  return NextResponse.json(data);
}
