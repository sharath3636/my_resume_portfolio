import { useEffect, useState } from 'react'

const MILESTONES = [
  { progress: 0.15, name: 'East Blue (Command Deck)', knots: '22 KTS // NE' },
  { progress: 0.35, name: 'Calm Belt (Haki Arsenal)', knots: '14 KTS // W' },
  { progress: 0.55, name: 'Water 7 (Expeditions)', knots: '28 KTS // SSW' },
  { progress: 0.8, name: 'Sabaody (Flagship Projects)', knots: '36 KTS // SW' },
  { progress: 1.0, name: 'Laugh Tale (Den Den Comms)', knots: '42 KTS // S' },
]

function getCurrentMilestone(percent) {
  for (let i = 0; i < MILESTONES.length; i++) {
    if (percent <= MILESTONES[i].progress) return MILESTONES[i]
  }
  return MILESTONES[MILESTONES.length - 1]
}

export default function VoyageHUD() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    function updateVoyageProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const rawPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setPercent(Math.min(Math.max(rawPercent, 0), 1))
    }

    window.addEventListener('scroll', updateVoyageProgress, { passive: true })
    window.addEventListener('resize', updateVoyageProgress)
    updateVoyageProgress()

    return () => {
      window.removeEventListener('scroll', updateVoyageProgress)
      window.removeEventListener('resize', updateVoyageProgress)
    }
  }, [])

  const displayPercent = Math.round(percent * 100)
  const barWidth = Math.max(percent * 100, 4)
  const shipPos = Math.min(Math.max(percent * 92 + 4, 4), 96)
  const current = getCurrentMilestone(percent)

  return (
    <aside
      aria-label="Grand Line Voyage Navigation"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end pointer-events-none select-none max-w-[92vw]"
    >
      <div
        id="ship-hud"
        className="pointer-events-auto transition-all duration-300 p-4 rounded-xl bg-surface/95 backdrop-blur-md border border-outline-variant/60 shadow-[0_8px_32px_rgba(0,0,0,0.7)] w-72 max-w-full flex flex-col gap-2.5"
      >
        {/* HUD Title Bar */}
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
            </span>
            <span className="font-code text-[11px] uppercase tracking-wider text-primary font-bold">
              THOUSAND SUNNY // VOYAGE
            </span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-code text-[10px] font-bold">
            {displayPercent}% EXP
          </span>
        </div>

        {/* Live Coordinates */}
        <div className="grid grid-cols-2 gap-2 font-code text-[11px] text-on-surface-variant">
          <div className="flex flex-col">
            <span className="text-outline uppercase text-[9px] tracking-wider">CURRENT SEA</span>
            <span className="text-on-surface font-semibold truncate">{current.name}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-outline uppercase text-[9px] tracking-wider">WIND SPEED</span>
            <span className="text-tertiary font-bold">{current.knots}</span>
          </div>
        </div>

        {/* Sailing Progress Bar with Ship Riding on Top */}
        <div className="relative w-full pt-6 pb-1">
          <div className="w-full h-2 rounded-full bg-surface-lowest overflow-hidden border border-outline-variant/40">
            <div
              className="h-full bg-gradient-to-r from-primary-container via-tertiary to-secondary rounded-full transition-[width] duration-150"
              style={{ width: `${barWidth}%` }}
            ></div>
          </div>

          {/* Waypoint Island Labels */}
          <div className="flex justify-between items-center text-[9px] font-code text-outline mt-1.5 px-0.5">
            <span>PORT</span>
            <span>HAKI</span>
            <span>LOG</span>
            <span>LOOT</span>
            <span className="text-primary font-bold">ONE PIECE</span>
          </div>

          {/* Animated Pirate Ship riding the scroll bar */}
          <div
            className="absolute top-0 transform -translate-x-1/2 transition-[left] duration-150 pointer-events-auto cursor-pointer"
            style={{ left: `${shipPos}%` }}
            title="Thousand Sunny sailing the Grand Line"
          >
            <div className="relative anim-ship">
              <svg className="w-7 h-7 drop-shadow-[0_2px_10px_rgba(246,179,50,0.6)]" viewBox="0 0 64 64" fill="none">
                <path d="M32 8V44M18 20H46M22 32H42" stroke="#504534" strokeWidth="2.5" strokeLinecap="round" />
                <path
                  className="anim-sail"
                  d="M20 18C26 15 38 15 44 18C42 28 38 31 32 31C26 31 22 28 20 18Z"
                  fill="#dce3f2"
                  stroke="#f6b332"
                  strokeWidth="1.5"
                />
                <path d="M32 7L38 10L32 13V7Z" fill="#ad0224" />
                <circle cx="32" cy="24" r="3.5" fill="#f6b332" />
                <path d="M12 40C16 48 48 48 52 40C48 45 16 45 12 40Z" fill="#684700" stroke="#f6b332" strokeWidth="1.5" />
                <circle className="anim-sunny-head" cx="50" cy="38" r="4.5" fill="#f6b332" />
                <circle cx="50" cy="38" r="2" fill="#ad0224" />
                <ellipse className="anim-foam" cx="32" cy="47" rx="18" ry="2" fill="#7bd0ff" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Anchor Controls */}
        <div className="flex items-center justify-between pt-1 border-t border-outline-variant/20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] font-code text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[13px]">north</span> Helm (Top)
          </button>
          <a href="#den-den-mushi" className="text-[10px] font-code text-primary hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px]">anchor</span> Port: Comms
          </a>
        </div>
      </div>
    </aside>
  )
}
