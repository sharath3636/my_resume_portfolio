export default function SectionDivider({ label }) {
  return (
    <div className="w-full py-1 flex items-center justify-center opacity-70">
      <div className="w-full h-6 flex items-center justify-between text-outline-variant/40">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary-container/40"></div>
        <div className="px-4 flex items-center gap-3 text-primary">
          <span className="material-symbols-outlined text-[18px] anim-ship">sailing</span>
          <span className="font-code text-[11px] tracking-widest uppercase text-outline whitespace-nowrap">{label}</span>
          <span className="material-symbols-outlined text-[18px]">water</span>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary-container/40"></div>
      </div>
    </div>
  )
}
