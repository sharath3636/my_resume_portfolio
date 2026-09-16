const PILLARS = [
  {
    icon: 'web',
    color: 'text-primary',
    title: 'Frontend Mastery',
    body: (
      <>
        Engineered high-performance web interfaces in <strong className="text-on-surface">Next.js</strong> employing SSR and SSG to
        achieve optimal SEO ranking and sub-second page delivery across varying network conditions.
      </>
    ),
  },
  {
    icon: 'devices_other',
    color: 'text-tertiary',
    title: 'Cross-Platform Fleet',
    body: (
      <>
        Crafted and deployed production mobile applications using <strong className="text-on-surface">Flutter &amp; React Native</strong>.
        Delivered cohesive cross-platform experiences paired with normalized state management.
      </>
    ),
  },
  {
    icon: 'hub',
    color: 'text-secondary',
    title: 'Distributed Microservices',
    body: (
      <>
        Architected and deployed scalable <strong className="text-on-surface">Node.js &amp; Express</strong> microservices covering
        mission-critical modules: high-throughput booking engines, digital wallet transactions, and JWT authentication.
      </>
    ),
  },
  {
    icon: 'storage',
    color: 'text-primary',
    title: 'Relational Schema Tuning',
    body: (
      <>
        Designed and maintained robust relational databases in <strong className="text-on-surface">PostgreSQL</strong> utilizing{' '}
        <strong className="text-on-surface">Prisma ORM</strong>. Implemented indexes, foreign key relationships, and query
        optimization.
      </>
    ),
  },
  {
    icon: 'sensors',
    color: 'text-tertiary',
    title: 'Real-Time WebSockets',
    body: (
      <>
        Integrated bi-directional <strong className="text-on-surface">WebSocket protocols</strong> enabling instantaneous driver
        coordinates tracking, immediate order lifecycle status dispatches, and live telemetry dashboards.
      </>
    ),
  },
  {
    icon: 'android',
    color: 'text-outline',
    title: 'Native Kotlin Daemons',
    body: (
      <>
        Engineered native <strong className="text-on-surface">Android Kotlin background services</strong>, ensuring driver
        telemetry and background ping loops continue uninterrupted even while the app is minimized.
      </>
    ),
  },
]

export default function JourneySection() {
  return (
    <section id="journey" className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-code text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">history_edu</span>
            OFFICIAL EXPEDITION LOGBOOK
          </div>
          <h2 className="font-headline text-2xl font-bold text-on-surface mt-1">Voyages &amp; Command Posts</h2>
        </div>
        <span className="font-code text-xs text-on-surface-variant">Verified log of maritime software engineering</span>
      </div>

      <div className="w-full p-6 sm:p-8 rounded-xl bg-surface shadow-xl relative overflow-hidden border border-outline-variant/30">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary-container via-tertiary to-secondary"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-3 font-code text-xs">
              <span className="px-2.5 py-0.5 rounded bg-primary-container/20 text-primary font-bold uppercase tracking-wider border border-primary/20">
                ACTIVE FLAGSHIP MISSION
              </span>
              <span className="text-on-surface-variant">EXPEDITION #01</span>
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mt-1">Techspiration India Pvt. Ltd</h3>
            <p className="font-code text-sm text-primary font-medium">Software Engineer 2 (SDE-2) — Full Stack &amp; Mobile Architect</p>
          </div>
          <div className="flex flex-col md:items-end gap-1 font-code text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-high text-tertiary font-bold border border-tertiary/20">
              <span className="material-symbols-outlined text-[16px]">event_available</span>
              JUNE 2024 – PRESENT
            </div>
            <span className="text-on-surface-variant">Bengaluru Fleet Headquarters</span>
          </div>
        </div>

        {/* Logbook Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 text-xs font-body">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="p-4 rounded-lg bg-surface-low flex flex-col gap-2 border border-outline-variant/20">
              <div className={`flex items-center gap-2 font-code font-bold ${pillar.color}`}>
                <span className="material-symbols-outlined text-[18px]">{pillar.icon}</span>
                <span>{pillar.title}</span>
              </div>
              <p className="text-on-surface-variant">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
