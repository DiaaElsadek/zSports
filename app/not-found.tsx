import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div dir="rtl" className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-brand-green/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-green to-brand-green/20 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          عذراً، هذه الصفحة غير موجودة
        </h2>
        <p className="text-zinc-400 max-w-md mb-10 text-lg">
          يبدو أنك وصلت إلى نهاية الملعب! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        
        <Link 
          href="/" 
          className="group flex items-center gap-3 bg-brand-green text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(55,215,64,0.3)]"
        >
          <ArrowRight className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
