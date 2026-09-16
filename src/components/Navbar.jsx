export default function Navbar() {
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
                  LVL 2 FULL STACK // SDE-2
                </span>
              </div>
            </div>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-6 font-code text-xs">
          <a className="text-primary border-b-2 border-primary-container pb-1 font-semibold flex items-center gap-1.5" href="#overview">
            <span className="material-symbols-outlined text-[16px]">sailing</span>Deck
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#arsenal">
            Arsenal // Haki
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#journey">
            Logbook // SDE-2
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#treasures">
            Treasures // Projects
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#den-den-mushi">
            Comms
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded bg-surface-low border border-outline-variant/40">
            <span className="font-code text-xs text-primary-container font-bold">BOUNTY:</span>
            <span className="font-code text-xs text-primary font-bold">₿ 3,000,000,000 EXP</span>
          </div>
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-primary-container text-surface font-code text-xs font-bold uppercase tracking-wider hover:bg-primary transition-all shadow-[0_0_16px_rgba(246,179,50,0.3)]"
            href="#den-den-mushi"
          >
            <span className="material-symbols-outlined text-[16px]">anchor</span>Hire Captain
          </a>
        </div>
      </div>
    </header>
  )
}
