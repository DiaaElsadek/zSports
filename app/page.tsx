"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, MapPin, Calendar, ShieldCheck, Star, 
  Heart, CreditCard, Clock, Phone, Mail, 
  ChevronDown, ChevronUp, Play, Trophy, Activity, Target, Circle
} from "lucide-react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#0a0a0a] text-white selection:bg-brand-green selection:text-black overflow-hidden font-sans">
      
      {/* 1. Sticky Transparent Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">Z Sports</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#" className="hover:text-white transition-colors">الرئيسية</Link>
            <Link href="#" className="hover:text-white transition-colors">استكشف الملاعب</Link>
            <Link href="#" className="hover:text-white transition-colors">الفئات</Link>
            <Link href="#" className="hover:text-white transition-colors">من نحن</Link>
            <Link href="#" className="hover:text-white transition-colors">اتصل بنا</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-brand-green transition-colors hidden sm:block">تسجيل الدخول</Link>
            <Link href="/register" className="bg-brand-green text-black px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(55,215,64,0.3)]">
              ابدأ الآن
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto space-y-8 z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-green backdrop-blur-sm mb-4 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            المنصة الأولى لحجز الملاعب الرياضية
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            العب <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green to-[#73c2fb]">رياضتك المفضلة</span> <br/>
            في أفضل الملاعب
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            تجربة حجز فاخرة، فورية، ومضمونة. اكتشف آلاف الملاعب حولك، احجز بضغطة زر، واستمتع باللعب مع أصدقائك في أي وقت.
          </p>

          {/* Premium Search Component */}
          <div className="mt-12 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col sm:flex-row items-center gap-2 max-w-3xl mx-auto shadow-2xl relative">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
              <MapPin className="w-5 h-5 text-zinc-500" />
              <input type="text" placeholder="أين تريد اللعب؟ (مثال: الرياض)" className="bg-transparent border-none outline-none text-white w-full text-sm placeholder:text-zinc-500" />
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
              <Calendar className="w-5 h-5 text-zinc-500" />
              <input type="text" placeholder="اختر التاريخ" className="bg-transparent border-none outline-none text-white w-full text-sm placeholder:text-zinc-500" />
            </div>
            <button className="w-full sm:w-auto bg-brand-green text-black px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(55,215,64,0.4)]">
              <Search className="w-4 h-4" />
              بحث
            </button>
          </div>

          {/* Hero Stats */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/5 mt-16">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-xs text-zinc-500 font-medium">ملعب معتمد</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white">50K+</span>
              <span className="text-xs text-zinc-500 font-medium">حجز شهرياً</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white">100K+</span>
              <span className="text-xs text-zinc-500 font-medium">لاعب سعيد</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white">12</span>
              <span className="text-xs text-zinc-500 font-medium">مدينة مغطاة</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trusted By */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-xs font-bold text-zinc-600 mb-6 uppercase tracking-widest">موثوق من قبل أفضل الأكاديميات</p>
          <div className="flex items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Logo Placeholders */}
            {['Nike Academy', 'Real Madrid FC', 'Pro Padel', 'Fitness First', 'Saudi Sports'].map((name) => (
              <div key={name} className="flex items-center gap-2 font-bold text-xl tracking-tight text-white/80">
                <ShieldCheck className="w-6 h-6" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose ZSports (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">لماذا تختار <span className="text-brand-green">Z Sports</span>؟</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">صممنا منصتنا لتكون الأسرع والأكثر أماناً لتجربة حجز لا تضاهى.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#121212] rounded-[2rem] p-8 border border-white/5 hover:border-brand-green/30 transition-colors group relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-green/5 blur-[80px] rounded-full group-hover:bg-brand-green/10 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 border border-brand-green/20">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">حجز فوري في ثوانٍ</h3>
            <p className="text-zinc-400 max-w-md">لا داعي للانتظار أو المكالمات الهاتفية. اختر ملعبك، حدد الوقت، وادفع بأمان في أقل من 30 ثانية.</p>
          </div>
          
          <div className="bg-[#121212] rounded-[2rem] p-8 border border-white/5 hover:border-[#73c2fb]/30 transition-colors group relative overflow-hidden">
             <div className="w-12 h-12 rounded-xl bg-[#73c2fb]/10 flex items-center justify-center text-[#73c2fb] mb-6 border border-[#73c2fb]/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">ملاعب معتمدة</h3>
            <p className="text-zinc-400 text-sm">جميع الملاعب المدرجة تخضع لفحص جودة صارم لضمان أفضل تجربة لعب.</p>
          </div>

          <div className="bg-[#121212] rounded-[2rem] p-8 border border-white/5 hover:border-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">دفع آمن ومدعوم</h3>
            <p className="text-zinc-400 text-sm">ادعم مختلف وسائل الدفع مثل مدى، فيزا، ابل باي بكل أمان وموثوقية.</p>
          </div>

          <div className="md:col-span-2 bg-[#121212] rounded-[2rem] p-8 border border-white/5 hover:border-brand-green/30 transition-colors flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 border border-yellow-500/20">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">برنامج نقاط ومكافآت</h3>
              <p className="text-zinc-400 max-w-sm">العب أكثر، اكسب أكثر. استبدل نقاطك بخصومات أو حجوزات مجانية في مئات الملاعب.</p>
            </div>
            {/* Visual Placeholder */}
            <div className="w-full md:w-64 h-32 rounded-xl bg-gradient-to-r from-brand-green/20 to-yellow-500/20 border border-white/10 flex items-center justify-center">
               <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-yellow-500">10,000 Pt</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Categories */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">اكتشف الرياضات</h2>
              <p className="text-zinc-400">ملاعب مجهزة لجميع شغفك الرياضي.</p>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-brand-green hover:underline font-bold text-sm">
              عرض الكل <ArrowLeftIcon />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "كرة القدم", count: "120 ملعب", icon: Circle, color: "from-green-500/20" },
              { name: "البادل", count: "45 ملعب", icon: Activity, color: "from-blue-500/20" },
              { name: "كرة السلة", count: "30 ملعب", icon: Trophy, color: "from-orange-500/20" },
              { name: "التنس", count: "25 ملعب", icon: Target, color: "from-yellow-500/20" },
            ].map((cat, i) => (
              <div key={i} className="group relative aspect-square rounded-[2rem] bg-[#161616] border border-white/5 p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <cat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center relative z-10">
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                  <span className="text-xs text-zinc-500">{cat.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Stadiums */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">ملاعب مميزة</h2>
            <p className="text-zinc-400">أفضل الملاعب تقييماً وحجوزات هذا الأسبوع.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group bg-[#161616] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-green/30 transition-all duration-300 flex flex-col">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold">4.9</span>
                </div>
                <button className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                {/* Fallback pattern since we can't load real images */}
                <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">ملعب القمة الرياضي</h3>
                  <div className="text-brand-green font-bold text-lg">250 <span className="text-xs text-zinc-500">ج.م/س</span></div>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
                  <MapPin className="w-4 h-4" /> الرياض، حي الياسمين
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-xs text-zinc-400">متاح اليوم 8:00 م</span>
                  </div>
                  <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-green transition-colors">
                    احجز الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Booking Timeline */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-[800px] h-[300px] bg-brand-green/5 blur-[120px] -translate-y-1/2 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">كيف يعمل <span className="text-brand-green">ZSports</span>؟</h2>
            <p className="text-zinc-400">خطوات بسيطة تفصلك عن أرضية الملعب.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 right-12 left-12 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "اختر الملعب", desc: "تصفح الملاعب وقارن الأسعار والتقييمات بكل سهولة.", icon: Search },
              { step: "02", title: "حدد الوقت", desc: "اختر التاريخ والوقت المناسب لك من الجدول المباشر.", icon: Calendar },
              { step: "03", title: "ادفع بأمان", desc: "أكمل عملية الدفع بطرق آمنة ومتعددة في ثوانٍ.", icon: CreditCard },
              { step: "04", title: "العب واستمتع", desc: "توجه للملعب واقضِ وقتاً رائعاً مع فريقك.", icon: Play },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-green group-hover:shadow-[0_0_20px_rgba(55,215,64,0.2)] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
                <div className="absolute top-4 -right-4 text-8xl font-black text-white/[0.02] -z-10 group-hover:text-brand-green/[0.05] transition-colors">
                  {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">ماذا يقول <span className="text-brand-green">اللاعبون</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "أحمد عبدالله", role: "كابتن فريق", text: "أفضل منصة لحجز الملاعب! وفرت علينا الكثير من الوقت والتنسيق، وكل شيء يتم بضغطة زر." },
            { name: "سالم فهد", role: "لاعب بادل", text: "تصميم التطبيق خيالي وتجربة الدفع سريعة جداً. أنصح بها كل من يلعب بانتظام." },
            { name: "محمد خالد", role: "منظم بطولات", text: "أعتمد على المنصة بشكل كامل لتنظيم حجوزات بطولاتي. دعم فني رائع وملاعب ممتازة." },
          ].map((test, i) => (
            <div key={i} className="bg-[#121212] rounded-3xl p-8 border border-white/5 relative">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-zinc-300 leading-relaxed mb-8">"{test.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-sm">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{test.name}</h4>
                  <span className="text-xs text-zinc-500">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Mobile App Promotion */}
      <section className="py-24 bg-brand-green rounded-[3rem] mx-6 md:mx-auto max-w-7xl relative overflow-hidden my-10">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-12">
          <div className="flex-1 text-black">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">حمّل التطبيق الآن<br/>واحجز في ثوانٍ</h2>
            <p className="text-black/80 text-lg mb-8 max-w-md font-medium">تجربة مخصصة لهاتفك مع إشعارات بالحجوزات وعروض حصرية لمستخدمي التطبيق.</p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                <div className="text-right">
                  <div className="text-[10px] text-zinc-400">Download on the</div>
                  <div className="font-bold text-lg leading-none">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                <div className="text-right">
                  <div className="text-[10px] text-zinc-400">GET IT ON</div>
                  <div className="font-bold text-lg leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            {/* Phone Mockup Placeholder */}
            <div className="w-[280px] h-[580px] bg-black rounded-[3rem] border-8 border-black/20 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-xl z-20 w-40 mx-auto" />
              <div className="w-full h-full bg-[#121212] p-6 pt-12 text-white">
                <div className="w-full h-12 bg-white/10 rounded-full mb-6" />
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="h-32 bg-brand-green/20 rounded-2xl" />
                  <div className="h-32 bg-white/5 rounded-2xl" />
                </div>
                <div className="h-48 bg-white/5 rounded-2xl w-full mb-4" />
                <div className="h-16 bg-brand-green rounded-2xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">الأسئلة الشائعة</h2>
          <p className="text-zinc-400">كل ما تحتاج معرفته عن منصتنا.</p>
        </div>

        <div className="space-y-4">
          {[
            { q: "كيف يمكنني تأكيد حجزي؟", a: "بمجرد إتمام الدفع عبر المنصة، سيصلك تأكيد فوري عبر البريد الإلكتروني ورسالة نصية تحتوي على تفاصيل الحجز." },
            { q: "هل يمكنني استرداد المبلغ في حال الإلغاء؟", a: "نعم، يمكنك إلغاء الحجز واسترداد المبلغ بالكامل إذا تم الإلغاء قبل 24 ساعة من موعد الحجز." },
            { q: "ما هي طرق الدفع المتاحة؟", a: "نقبل الدفع عبر بطاقات مدى، فيزا، ماستركارد، Apple Pay، بالإضافة لخيار الدفع عند الوصول في بعض الملاعب." },
          ].map((faq, i) => (
            <div key={i} className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-right font-bold text-lg hover:bg-white/5 transition-colors"
              >
                {faq.q}
                {openFaq === i ? <ChevronUp className="w-5 h-5 text-brand-green" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brand-green/5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-green/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-black">جاهز للعب؟</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">انضم إلى آلاف اللاعبين اليوم واستمتع بتجربة حجز الملاعب الأسهل والأسرع.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/register" className="w-full sm:w-auto bg-brand-green text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(55,215,64,0.4)]">
              أنشئ حسابك مجاناً
            </Link>
            <Link href="#" className="w-full sm:w-auto bg-white/5 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors border border-white/10">
              استكشف الملاعب
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Modern Footer */}
      <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-black font-bold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight">Z Sports</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                المنصة التقنية الأولى لحجز وإدارة المنشآت الرياضية. نصنع تجربة رياضية متكاملة.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors text-zinc-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors text-zinc-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors text-zinc-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">المنصة</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link href="#" className="hover:text-brand-green transition-colors">عن الشركة</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">استكشف الملاعب</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">الأسعار</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">تطبيق الجوال</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">الدعم</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link href="#" className="hover:text-brand-green transition-colors">مركز المساعدة</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">الشروط والأحكام</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">سياسة الخصوصية</Link></li>
                <li><Link href="#" className="hover:text-brand-green transition-colors">تواصل معنا</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">تواصل معنا</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4" /> support@zsports.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4" /> 920000000
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> الرياض، المملكة العربية السعودية
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-medium">
            <p>© 2026 Z Sports. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">شروط الخدمة</Link>
              <Link href="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);
