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
        <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-xl border border-outline-variant/40 bg-surface relative">
          <img
            src="/onepiecesharath.png"
            alt="Sharath One Piece inspired poster"
            className="h-full w-full object-cover block"
          />
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
                className="hidden sm:flex shrink-0 p-1.5 rounded-xl bg-surface-high/80 border border-outline-variant/40 anim-ship"
                title="Thousand Sunny - Flagship of the Full Stack Fleet"
              >
                <img
                  src="/Sunny.gif"
                  alt="Thousand Sunny ship"
                  className="h-20 w-24 object-cover scale-x-[-1] rounded"
                />
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
