import { useEffect, useState } from 'react'

const navItems = [
  { id: 'overview', label: 'Deck', icon: 'sailing' },
  { id: 'arsenal', label: 'Skills & Haki', icon: 'terminal' },
  { id: 'journey', label: 'Logbook', icon: 'history_edu' },
  { id: 'treasures', label: 'Projects', icon: 'diamond' },
  { id: 'den-den-mushi', label: 'Contact', icon: 'mail' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportOffset = window.innerHeight * 0.28
      let currentSection = 'overview'
      let closestDistance = Number.POSITIVE_INFINITY

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top - viewportOffset)

        if (rect.top <= viewportOffset && rect.bottom > 0) {
          if (distance < closestDistance) {
            closestDistance = distance
            currentSection = id
          }
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a href="#overview" className="flex items-center gap-3 group">
            <img
              alt="Sharath Dev Pirate Logo"
              className="h-9 w-auto rounded border border-primary-container/40 p-0.5 group-hover:border-primary transition-colors shadow-[0_0_12px_rgba(246,179,50,0.2)]"
              src="/sharath_tech_jolly_roger_logo.png"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline text-lg font-bold tracking-tight text-primary">SHARATH K.</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-surface-high border border-outline-variant/40 font-code text-[10px] text-on-surface-variant uppercase">
                  SDE-2 // FULL STACK
                </span>
              </div>
            </div>
          </a>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 font-code text-[11px] whitespace-nowrap">
          {navItems.map(({ id, label, icon }) => {
            const isActive = activeSection === id

            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={[
                  'inline-flex items-center gap-1.5 leading-none border-b-2 pb-1.5 transition-all duration-200 whitespace-nowrap',
                  isActive
                    ? 'text-primary border-primary-container font-semibold'
                    : 'text-on-surface-variant hover:text-primary border-transparent font-medium',
                ].join(' ')}
              >
                <span className={`material-symbols-outlined text-[16px] ${isActive ? 'text-primary' : ''}`}>
                  {icon}
                </span>
                <span>{label}</span>
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">

          <button aria-label="Toggle Drums of Liberation ambient sound" class="haki-trigger flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-high border border-primary/30 hover:border-primary text-xs font-code transition-all shadow-sm group" id="drumsAudioBtn" title="Play soft, peaceful Drums of Liberation heartbeat rhythm">
<span class="text-sm">🥁</span>
<div class="flex items-end gap-[3px] h-3.5 w-3.5 pb-0.5" id="audioEqualizer">
<span class="w-[2px] h-1.5 bg-outline-variant group-hover:bg-primary transition-colors rounded-full bar-1"></span>
<span class="w-[2px] h-3 bg-outline-variant group-hover:bg-primary transition-colors rounded-full bar-2"></span>
<span class="w-[2px] h-2 bg-outline-variant group-hover:bg-primary transition-colors rounded-full bar-3"></span>
</div>
<span class="text-[11px] text-primary font-medium hidden sm:inline" id="drumsStatusText">Drums (Ambient)</span>
</button>
          {/* <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded bg-surface-low border border-outline-variant/40">
            <span className="font-code text-xs text-primary-container font-bold">BOUNTY:</span>
            <span className="font-code text-xs text-primary font-bold">₿ 3,000,000,000 EXP</span>
          </div> */}
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-primary-container text-surface font-code text-xs font-bold uppercase tracking-wider hover:bg-primary transition-all shadow-[0_0_16px_rgba(246,179,50,0.3)]"
            href="#den-den-mushi"
          >
            <span className="material-symbols-outlined text-[16px]">anchor</span>Hire
          </a>
        </div>
      </div>
    </header>
  )
}
