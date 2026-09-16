const SKILLS = [
  {
    id: 'armament',
    icon: 'shield',
    accent: 'text-primary',
    badge: 'UI DEFENSE',
    haki: 'Armament Haki',
    title: 'Frontend & High-Fidelity UI',
    desc: 'Hardened user interfaces capable of withstanding intense traffic loads and rendering with zero hydration lag.',
    tags: [
      { text: 'React.js', color: 'text-on-surface' },
      { text: 'Next.js (SSR/SSG)', color: 'text-primary font-bold' },
      { text: 'Vite', color: 'text-on-surface' },
      { text: 'Tailwind CSS', color: 'text-tertiary' },
      { text: 'TypeScript', color: 'text-on-surface' },
      { text: 'JavaScript ES6+', color: 'text-on-surface' },
    ],
    fluency: 96,
    barColor: 'bg-primary-container',
    fluencyColor: 'text-primary',
  },
  {
    id: 'observation',
    icon: 'visibility',
    accent: 'text-tertiary',
    badge: 'FLOW & TELEMETRY',
    haki: 'Observation Haki',
    title: 'State Architecture & Data Pipeline',
    desc: 'Anticipating data shifts and mutating normalized stores with zero unnecessary rerenders or dropped packets.',
    tags: [
      { text: 'Redux Toolkit (RTK)', color: 'text-tertiary font-bold' },
      { text: 'Redux Slices', color: 'text-on-surface' },
      { text: 'Axios Interceptors', color: 'text-on-surface' },
      { text: 'Dynamic Data Fetching', color: 'text-on-surface' },
      { text: 'RESTful APIs', color: 'text-on-surface' },
      { text: 'Jest & Vitest', color: 'text-on-surface' },
    ],
    fluency: 92,
    barColor: 'bg-tertiary-container',
    fluencyColor: 'text-tertiary',
  },
  {
    id: 'conqueror',
    icon: 'electric_bolt',
    accent: 'text-secondary',
    badge: 'BACKEND WILL',
    haki: "Conqueror's Haki",
    title: 'Distributed Microservices',
    desc: 'Dominating distributed server architectures with modular services, WebSocket live telemetry, and resilient workers.',
    tags: [
      { text: 'Node.js', color: 'text-secondary font-bold' },
      { text: 'Express.js', color: 'text-on-surface' },
      { text: 'Microservices Mesh', color: 'text-primary' },
      { text: 'WebSockets', color: 'text-tertiary' },
      { text: 'Booking Engine', color: 'text-on-surface' },
      { text: 'Wallet & Auth', color: 'text-on-surface' },
    ],
    fluency: 90,
    barColor: 'bg-secondary-container',
    fluencyColor: 'text-secondary',
  },
  {
    id: 'navigation',
    icon: 'database',
    accent: 'text-primary',
    badge: 'DATABASE',
    haki: 'Grand Line Navigation',
    title: 'Database & Schema Engineering',
    desc: 'Charting immutable data stores, indexed relational topologies, and high-performance transactional pipelines.',
    tags: [
      { text: 'PostgreSQL', color: 'text-primary font-bold' },
      { text: 'Prisma ORM', color: 'text-tertiary font-bold' },
      { text: 'Schema Migrations', color: 'text-on-surface' },
      { text: 'Query Optimization', color: 'text-on-surface' },
    ],
    fluency: 88,
    barColor: 'bg-primary-container',
    fluencyColor: 'text-primary',
  },
  {
    id: 'transports',
    icon: 'phone_iphone',
    accent: 'text-tertiary',
    badge: 'MOBILE DUAL',
    haki: 'All-Sea Transports',
    title: 'Cross-Platform & Native Daemons',
    desc: 'Crafting performant dual-realm applications for iOS and Android, bolstered by native Kotlin background drivers.',
    tags: [
      { text: 'Flutter & Dart', color: 'text-tertiary font-bold' },
      { text: 'React Native', color: 'text-primary font-bold' },
      { text: 'Kotlin Services', color: 'text-on-surface' },
      { text: 'Location Sensors', color: 'text-on-surface' },
    ],
    fluency: 90,
    barColor: 'bg-tertiary-container',
    fluencyColor: 'text-tertiary',
  },
  {
    id: 'shipwright',
    icon: 'construction',
    accent: 'text-outline',
    badge: 'TOOLING',
    haki: 'Shipwright Deck',
    title: 'Vessel Tooling & Agile Rituals',
    desc: 'Equipping developer pipelines with deterministic versioning, containerized environments, and fast feedback loops.',
    tags: [
      { text: 'Git & GitHub', color: 'text-on-surface' },
      { text: 'Docker', color: 'text-primary' },
      { text: 'WordPress', color: 'text-on-surface' },
      { text: 'Agile / Scrum', color: 'text-tertiary' },
      { text: 'CI/CD', color: 'text-on-surface' },
    ],
    fluency: 87,
    barColor: 'bg-primary-container/80',
    fluencyColor: 'text-on-surface',
  },
]

export default function ArsenalSection() {
  return (
    <section id="arsenal" className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-code text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">swords</span>
            DEVIL FRUITS &amp; HAKI DISCIPLINES
          </div>
          <h2 className="font-headline text-2xl font-bold text-on-surface mt-1">Sharath's Combat Arsenal</h2>
        </div>
        <span className="font-code text-xs text-on-surface-variant">Proficiencies forged across production deployments</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-code text-xs">
        {SKILLS.map((skill) => (
          <div
            key={skill.id}
            className="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md hover:shadow-xl transition-all border border-outline-variant/30"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-2 ${skill.accent}`}>
                  <span className="material-symbols-outlined text-[20px]">{skill.icon}</span>
                  <span className="font-bold uppercase">{skill.haki}</span>
                </div>
                <span className={`px-2 py-0.5 rounded bg-surface-high font-bold text-[10px] ${skill.accent}`}>{skill.badge}</span>
              </div>
              <h3 className="font-headline text-base font-bold text-on-surface">{skill.title}</h3>
              <p className="font-body text-xs text-on-surface-variant">{skill.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skill.tags.map((tag) => (
                  <span key={tag.text} className={`px-2 py-0.5 rounded bg-surface-high ${tag.color}`}>
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-1.5 pt-2">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Combat Fluency</span>
                <span className={`font-bold ${skill.fluencyColor}`}>{skill.fluency}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-lowest overflow-hidden">
                <div className={`h-full rounded-full ${skill.barColor}`} style={{ width: `${skill.fluency}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
