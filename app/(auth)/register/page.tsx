"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Check, ArrowRight, Activity, MapPin, Search, Mail } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Password validation rules
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const strengthCount = Object.values(checks).filter(Boolean).length;
  const strengthPercentage = (strengthCount / 5) * 100;
  
  let strengthColor = "bg-zinc-600";
  if (strengthCount > 1) strengthColor = "bg-red-500";
  if (strengthCount > 3) strengthColor = "bg-yellow-500";
  if (strengthCount === 5) strengthColor = "bg-brand-green";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000); // Simulate network
  };

  return (
    <div dir="rtl" className="min-h-screen flex bg-[#0a0a0a] text-white selection:bg-brand-green selection:text-black font-sans overflow-hidden">
      
      {/* Right Side - Visual Graphic (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden bg-[#121212] border-l border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[150px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[120px] -z-10" />

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

        {/* Floating Interactive Elements */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          
          <div className="animate-fade-in hover:-translate-y-2 transition-transform duration-500 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 pr-6 flex items-center gap-4 w-96 shadow-2xl relative overflow-hidden">
             <Search className="w-5 h-5 text-zinc-500" />
             <div className="flex-1 text-sm text-zinc-400">ابحث عن ملعب بادل...</div>
             <div className="bg-brand-green text-black px-6 py-3 rounded-full font-bold text-sm">بحث</div>
          </div>

          <div className="animate-fade-in [animation-delay:200ms] -ml-24 hover:-translate-y-2 transition-transform duration-500 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-80 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">ملعب أرينا</h4>
                  <p className="text-[10px] text-zinc-400">اليوم، 8:00 مساءً</p>
                </div>
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
               <div className="h-full bg-blue-500 w-3/4 rounded-full" />
            </div>
          </div>
          
        </div>

        <div className="relative z-10 mt-auto">
          <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
            انضم إلى آلاف اللاعبين الذين يثقون في منصتنا لحجز أفضل الملاعب الرياضية في ثوانٍ.
          </p>
        </div>
      </div>

      {/* Left Side - Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-24 relative overflow-y-auto">
        <Link href="/" className="absolute top-8 right-8 lg:hidden flex items-center gap-2 group cursor-pointer z-50">
          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-black font-bold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </Link>

        <div className="w-full max-w-md space-y-8 animate-fade-in py-12">
          
          {success ? (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto border border-brand-green/20 mb-8 shadow-[0_0_40px_rgba(55,215,64,0.2)]">
                <Mail className="w-10 h-10 text-brand-green" />
              </div>
              <h1 className="text-4xl font-black mb-3 tracking-tight">تحقق من <span className="text-brand-green">بريدك</span></h1>
              <p className="text-zinc-400 leading-relaxed max-w-sm mx-auto">
                لقد أرسلنا رمز التحقق إلى بريدك الإلكتروني. يرجى إدخال الرمز لتفعيل حسابك والبدء في حجز الملاعب.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="w-full h-14 mt-8 bg-brand-green text-black rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(55,215,64,0.2)]"
              >
                العودة للتسجيل
              </button>
            </div>
          ) : (
            <>
              <div>
                <h1 className="text-4xl font-black mb-3 tracking-tight">إنشاء <span className="text-brand-green">حساب</span></h1>
                <p className="text-zinc-400">انضم إلينا وابدأ حجز ملاعبك المفضلة اليوم.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 relative group">
                  <label htmlFor="name" className="text-sm font-bold text-zinc-300 ml-2 block transition-colors group-focus-within:text-brand-green">الاسم الكامل</label>
                  <input 
                    id="name" 
                    type="text" 
                    placeholder="محمد عبدالله" 
                    required
                    className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                  />
                </div>

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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                  
                  {/* Password Strength Indicator */}
                  {password.length > 0 && (
                    <div className="pt-2 animate-fade-in">
                      <div className="flex gap-1 h-1.5 mb-2">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`flex-1 rounded-full transition-colors duration-300 ${
                              (strengthCount / 5) * 4 > i ? strengthColor : "bg-white/10"
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-500 mt-2">
                        <span className={`flex items-center gap-1 ${checks.length ? "text-brand-green" : ""}`}>
                          <Check className="w-3 h-3" /> 8 أحرف على الأقل
                        </span>
                        <span className={`flex items-center gap-1 ${checks.uppercase && checks.lowercase ? "text-brand-green" : ""}`}>
                          <Check className="w-3 h-3" /> أحرف كبيرة وصغيرة
                        </span>
                        <span className={`flex items-center gap-1 ${checks.number ? "text-brand-green" : ""}`}>
                          <Check className="w-3 h-3" /> أرقام
                        </span>
                        <span className={`flex items-center gap-1 ${checks.special ? "text-brand-green" : ""}`}>
                          <Check className="w-3 h-3" /> رموز خاصة
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-3 pt-2 group">
                  <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-white/20 bg-white/5 group-hover:border-brand-green transition-colors cursor-pointer shrink-0">
                    <input type="checkbox" required className="peer sr-only" id="terms" />
                    <Check className="w-3 h-3 text-transparent peer-checked:text-brand-green transition-colors" strokeWidth={4} />
                  </div>
                  <label htmlFor="terms" className="text-sm text-zinc-400 leading-relaxed cursor-pointer group-hover:text-white transition-colors">
                    أوافق على <Link href="#" className="text-white hover:text-brand-green underline transition-colors">الشروط والأحكام</Link> و <Link href="#" className="text-white hover:text-brand-green underline transition-colors">سياسة الخصوصية</Link> الخاصة بمنصة Z Sports.
                  </label>
                </div>

                <button 
                  disabled={loading || strengthCount < 3}
                  className="w-full h-14 mt-6 bg-brand-green text-black rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(55,215,64,0.2)] hover:shadow-[0_0_40px_rgba(55,215,64,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      إنشاء حساب
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-sm text-zinc-400 mt-8">
                لديك حساب بالفعل؟{" "}
                <Link href="/login" className="text-white font-bold hover:text-brand-green transition-colors">
                  تسجيل الدخول
                </Link>
              </p>
            </>
          )}

        </div>
      </div>

    </div>
  );
}

// Mail icon component since we are using lucide-react, but we can just import it if needed.
// Added Mail to the imports at the top.
