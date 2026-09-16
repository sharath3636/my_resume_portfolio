export default function Hero() {
  return (
    <section id="overview" className="flex flex-col gap-6">
      {/* Telemetry Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-surface-low border border-outline-variant/30">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
          </span>
          <span className="font-code text-xs uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">explore</span>
            LOG POSE TELEMETRY // GRAND LINE SEC-04
          </span>
        </div>
        <div className="flex items-center gap-4 text-on-surface-variant font-code text-xs">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-tertiary">speed</span>14ms Latency
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-primary">sailing</span>Techspiration Fleet
          </span>
          <span className="px-2 py-0.5 rounded bg-surface font-semibold text-primary border border-primary/20">99.98% Uptime</span>
        </div>
      </div>

      {/* Bento Hero: Wanted Poster (Left) + Logbook Helm (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Bounty Identity Sheet (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col rounded-xl bg-surface p-6 shadow-xl relative overflow-hidden border border-outline-variant/40">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-container via-primary-container to-tertiary"></div>
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">military_tech</span>
              <span className="font-code text-xs uppercase tracking-widest text-on-surface font-bold">WANTED // REWARD POSTER</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-secondary-container/30 text-secondary font-code text-[11px] font-bold uppercase tracking-wider border border-secondary/30">
              DEAD OR ALIVE
            </span>
          </div>

          {/* Dev Pirate Emblem */}
          <div className="w-full rounded-lg bg-surface-lowest p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-inner my-2 border border-outline-variant/30">
            <div className="relative w-32 h-32 mb-3 flex items-center justify-center group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-container/20 to-tertiary/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <img
                alt="Sharath Dev Pirate Jolly Roger"
                className="relative w-28 h-28 object-contain rounded-xl border border-primary-container/50 shadow-[0_0_20px_rgba(246,179,50,0.3)] transition-transform duration-300 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VsaLOHeMw2z4AxAfus8zrzAZUnolg9XImiYUJsAM-v2run32g5OgzBBVtcLVaFm3mrZA832_5LpkEg_PNbRY0DG-M2vUU7dvtb51ETl0E22qm775MABOYFiftjUXONPcRLzsU80mBmg7P8tOVo0jviDD2KGieqQtNWK6jZV5xgUhrui0MXpqJ7Zcv_-GseSW8ptsKb34oqQAEP5-tbSNHz8mHEPFGcI_uDQ4j5V5lfXJY3Q_1sXj5pQjUe"
              />
            </div>

            <div className="text-center flex flex-col items-center">
              <span className="font-headline text-xl font-bold tracking-tight text-on-surface">SHARATH K</span>
              <span className="font-code text-xs text-primary tracking-widest uppercase mt-0.5">FULL STACK &amp; CROSS-PLATFORM VOYAGER</span>
              <span className="font-code text-xs text-on-surface-variant mt-1">SDE-2 @ Techspiration India</span>
            </div>
          </div>

          {/* Bounty Value */}
          <div className="mt-4 p-4 rounded-lg bg-surface-high flex flex-col gap-1 border border-outline-variant/20">
            <span className="font-code text-[11px] uppercase tracking-widest text-outline">AUTHORITY ISSUED BOUNTY:</span>
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <span className="font-headline text-3xl font-bold text-primary-container tracking-tight">
                <span className="text-secondary font-code text-xl mr-1">฿</span>3,000,000,000
              </span>
              <span className="font-code text-xs text-on-surface-variant">EXPERIENCE UNITS</span>
            </div>
            <p className="font-code text-xs text-on-surface-variant mt-1">
              Issued for deploying resilient full-stack systems, sub-second SSR, real-time WebSocket fleets &amp; scalable databases.
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-2 mt-4 font-code text-xs">
            <div className="p-2.5 rounded bg-surface-low flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[17px]">verified</span>
              <span>4+ Products Shipped</span>
            </div>
            <div className="p-2.5 rounded bg-surface-low flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-[17px]">bolt</span>
              <span>SSR &amp; SSG Master</span>
            </div>
            <div className="p-2.5 rounded bg-surface-low flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[17px]">sync_alt</span>
              <span>WebSocket Architect</span>
            </div>
            <div className="p-2.5 rounded bg-surface-low flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[17px]">devices</span>
              <span>Microservices &amp; Native</span>
            </div>
          </div>
        </div>

        {/* Hero Mission Deck with Bobbing Flagship SVG (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-xl bg-surface shadow-xl border border-outline-variant/40 relative overflow-hidden">
          <div className="flex flex-col gap-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-high w-fit border border-primary/20">
              <span className="material-symbols-outlined text-[16px] text-primary">explore</span>
              <span className="font-code text-xs text-primary uppercase font-bold">CAPTAIN'S LOGBOOK // GRAND LINE EDITION</span>
            </div>

            {/* Main Title & Bobbing Thousand Sunny Emblem */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                Sailing across <span className="text-primary">Frontend</span>, <span className="text-tertiary">Backend</span> &amp;{' '}
                <span className="text-secondary">Mobile</span> Architectures.
              </h1>

              {/* Thousand Sunny Bobbing Flagship Icon */}
              <div
                className="hidden sm:flex shrink-0 p-2.5 rounded-xl bg-surface-high/80 border border-outline-variant/40 anim-ship"
                title="Thousand Sunny - Flagship of the Full Stack Fleet"
              >
                <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" stroke="#f6b332" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.4" />
                  <path d="M32 6V48M14 18H50" stroke="#ffd492" strokeWidth="2.5" strokeLinecap="round" />
                  <path
                    className="anim-sail"
                    d="M16 18C24 14 40 14 48 18C45 30 39 34 32 34C25 34 19 30 16 18Z"
                    fill="#151c26"
                    stroke="#f6b332"
                    strokeWidth="1.8"
                  />
                  <path d="M28 24L36 28M36 24L28 28" stroke="#ffb3b1" strokeWidth="1.5" />
                  <circle cx="32" cy="26" r="3" fill="#f6b332" />
                  <path d="M8 44C14 54 50 54 56 44C50 49 14 49 8 44Z" fill="#684700" stroke="#f6b332" strokeWidth="2" />
                  <g className="anim-sunny-head">
                    <circle cx="53" cy="42" r="6" fill="#f6b332" />
                    <path
                      d="M53 34L54 37M53 50L54 47M45 42L48 42M61 42L58 42M47 36L49 38M59 48L57 46M47 48L49 46M59 36L57 38"
                      stroke="#ad0224"
                      strokeWidth="1.5"
                    />
                  </g>
                  <circle cx="53" cy="42" r="3" fill="#ad0224" />
                  <path className="anim-foam" d="M4 52 Q 16 48, 32 52 T 60 52" stroke="#7bd0ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-body text-on-surface-variant max-w-2xl text-base leading-relaxed">
              Driven Software Engineer 2 mastering high-throughput web applications, cross-platform mobile experiences, and
              fault-tolerant microservices. Equipped with React, Next.js, Flutter, Node.js, Prisma ORM, and PostgreSQL.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-code text-xs">
              <a
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container text-surface font-bold uppercase tracking-wider shadow-lg hover:bg-primary transition-all"
                href="#treasures"
              >
                <span className="material-symbols-outlined text-[17px]">diamond</span>
                Treasures // Projects
              </a>
              <a
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-high text-on-surface font-bold uppercase tracking-wider hover:text-primary transition-all border border-outline-variant/30"
                href="#arsenal"
              >
                <span className="material-symbols-outlined text-[17px]">military_tech</span>
                Arsenal &amp; Haki
              </a>
              <a
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-low text-primary font-bold uppercase tracking-wider hover:bg-surface-high transition-all border border-primary/20"
                href="#den-den-mushi"
              >
                <span className="material-symbols-outlined text-[17px]">ring_volume</span>
                Den Den Mushi
              </a>
              <a
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-low text-on-surface-variant font-medium hover:text-on-surface transition-all border border-outline-variant/20"
                href="mailto:sharathsakshi.123@gmail.com"
              >
                <span className="material-symbols-outlined text-[17px]">download</span>
                Resume Log
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div className="w-full rounded-lg bg-surface-lowest p-4 shadow-inner flex flex-col gap-2 border border-outline-variant/30 relative z-10 font-code text-xs overflow-x-auto">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 min-w-max">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary-container"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary"></div>
                <span className="text-on-surface-variant ml-2">grand-line-nav: zsh</span>
              </div>
              <span className="text-primary font-bold flex items-center gap-1.5 ml-4">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>READY_FOR_VOYAGE
              </span>
            </div>
            <div className="space-y-1 pt-1 min-w-max">
              <p className="text-on-surface-variant">
                <span className="text-primary font-bold">pirate-king@sharath:~$</span> logpose.status()
              </p>
              <p className="text-tertiary">&gt; Initializing Log Pose vectors across Next.js 14, Node Microservices &amp; Flutter Native...</p>
              <p className="text-primary-container">&gt; Real-Time WebSockets: ONLINE [Driver Mesh &amp; Event Badges Active]</p>
              <p className="text-on-surface-variant">
                <span className="text-primary font-bold">pirate-king@sharath:~$</span> cat nakama_manifest.json | grep "ROLE"
              </p>
              <p className="text-secondary">&gt; "SDE_2", "FULL_STACK_ARCHITECT", "CROSS_PLATFORM_SPECIALIST"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
