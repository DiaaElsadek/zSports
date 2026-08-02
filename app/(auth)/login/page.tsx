"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Check, ArrowRight, ShieldCheck, Star, Trophy } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate network
  };

  return (
    <div dir="rtl" className="min-h-screen flex bg-[#0a0a0a] text-white selection:bg-brand-green selection:text-black font-sans overflow-hidden">
      
      {/* Right Side - Visual Graphic (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden bg-[#121212] border-l border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-green/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#73c2fb]/10 rounded-full blur-[100px] -z-10" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer w-fit">
            <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(55,215,64,0.3)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">Z Sports</span>
          </Link>
        </div>

        {/* Floating Stat Cards */}
        <div className="relative z-10 flex flex-col gap-6 mt-20">
          <div className="animate-fade-in translate-y-4 hover:-translate-y-1 transition-transform duration-500 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-72 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg">12,000+</h4>
                <p className="text-xs text-zinc-400">حجز شهرياً</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in [animation-delay:200ms] mr-12 hover:-translate-y-1 transition-transform duration-500 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-72 shadow-2xl">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                <Star className="w-5 h-5 fill-yellow-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg">4.9 / 5.0</h4>
                <p className="text-xs text-zinc-400">تقييم اللاعبين</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms] hover:-translate-y-1 transition-transform duration-500 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-72 shadow-2xl">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#73c2fb]/10 flex items-center justify-center text-[#73c2fb] border border-[#73c2fb]/20">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg">500+</h4>
                <p className="text-xs text-zinc-400">ملعب معتمد</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-auto pt-20">
          <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
            نجمع ملاعب النخبة وأفضل اللاعبين في منصة واحدة. استمتع بتجربة رياضية لا مثيل لها.
          </p>
        </div>
      </div>

      {/* Left Side - Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-24 relative">
        <Link href="/" className="absolute top-8 right-8 lg:hidden flex items-center gap-2 group cursor-pointer z-50">
          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-black font-bold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </Link>

        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-black mb-3 tracking-tight">مرحباً بك <span className="text-brand-green">مجدداً</span></h1>
            <p className="text-zinc-400">استمر في رحلتك واحجز مباراتك القادمة بكل سهولة.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1 relative group">
              <label htmlFor="email" className="text-sm font-bold text-zinc-300 ml-2 block transition-colors group-focus-within:text-brand-green">البريد الإلكتروني</label>
              <input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                required
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
              />
            </div>

            <div className="space-y-1 relative group">
              <label htmlFor="password" className="text-sm font-bold text-zinc-300 ml-2 block transition-colors group-focus-within:text-brand-green">كلمة المرور</label>
              <div className="relative">
                <input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 pl-12 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5 rounded border border-white/20 bg-white/5 group-hover:border-brand-green transition-colors">
                  <input type="checkbox" className="peer sr-only" />
                  <Check className="w-3 h-3 text-transparent peer-checked:text-brand-green transition-colors" strokeWidth={4} />
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">تذكرني</span>
              </label>

              <Link href="#" className="text-sm text-brand-green hover:underline font-medium">
                نسيت كلمة المرور؟
              </Link>
            </div>

            <button 
              disabled={loading}
              className="w-full h-14 mt-6 bg-brand-green text-black rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(55,215,64,0.2)] hover:shadow-[0_0_40px_rgba(55,215,64,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  تسجيل الدخول
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-zinc-500 text-sm font-medium">أو المتابعة باستخدام</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="h-14 flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="h-14 flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors font-medium">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.58-.75 1.76.08 3.01.81 3.86 2.02-3.32 1.95-2.81 6.55.51 7.9-1.12 1.77-2.31 3.19-2.85 3.9M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
              </svg>
              Apple
            </button>
          </div>

          <p className="text-center text-sm text-zinc-400 mt-8">
            ليس لديك حساب؟{" "}
            <Link href="/register" className="text-white font-bold hover:text-brand-green transition-colors">
              إنشاء حساب جديد
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}
