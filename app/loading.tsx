export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-20"></span>
          <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green shadow-[0_0_20px_rgba(55,215,64,0.4)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <p className="text-sm font-bold tracking-widest text-brand-green animate-pulse">جاري التحميل...</p>
      </div>
    </div>
  );
}
