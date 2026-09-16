export default function ProfileSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md border border-outline-variant/30">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
            <h2 className="font-headline text-lg font-bold text-on-surface">Executive Crew Profile // Engineering Philosophy</h2>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Results-driven Full Stack Developer with hands-on production expertise in React.js, Next.js, React Native, Flutter,
            Node.js, Prisma ORM, and PostgreSQL. Experienced across the full software lifecycle—architecting robust relational
            schemas, designing modular Redux Toolkit state slices, composing high-availability microservices, and orchestrating
            native Android background sync.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-code text-xs">
          <a
            className="p-3 rounded-lg bg-surface-high flex items-center gap-3 hover:text-primary transition-colors group border border-outline-variant/20"
            href="mailto:sharathsakshi.123@gmail.com"
          >
            <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
            <div className="flex flex-col min-w-0">
              <span className="text-outline uppercase text-[10px]">TRANSPONDER EMAIL</span>
              <span className="text-on-surface truncate group-hover:text-primary">sharathsakshi.123@gmail.com</span>
            </div>
          </a>
          <a
            className="p-3 rounded-lg bg-surface-high flex items-center gap-3 hover:text-tertiary transition-colors group border border-outline-variant/20"
            href="tel:+919902389523"
          >
            <span className="material-symbols-outlined text-tertiary text-[20px]">call</span>
            <div className="flex flex-col min-w-0">
              <span className="text-outline uppercase text-[10px]">DEN DEN DIAL</span>
              <span className="text-on-surface truncate group-hover:text-tertiary">+91 9902389523</span>
            </div>
          </a>
          <a
            className="p-3 rounded-lg bg-surface-high flex items-center gap-3 hover:text-primary transition-colors group border border-outline-variant/20"
            href="https://linkedin.com"
            rel="noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-primary text-[20px]">link</span>
            <div className="flex flex-col min-w-0">
              <span className="text-outline uppercase text-[10px]">LOG POSE REGISTRY</span>
              <span className="text-on-surface truncate group-hover:text-primary">Sharath K — LinkedIn</span>
            </div>
          </a>
          <div className="p-3 rounded-lg bg-surface-high flex items-center gap-3 border border-outline-variant/20">
            <span className="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>
            <div className="flex flex-col min-w-0">
              <span className="text-outline uppercase text-[10px]">HOME PORT</span>
              <span className="text-on-surface truncate">Bengaluru, India (UTC +5:30)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Academy Credentials */}
      <div className="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md border border-outline-variant/30">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-[20px]">school</span>
              <span className="font-code text-xs font-bold text-on-surface uppercase">Marine Science Academy</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-surface-high font-code text-xs text-primary font-bold">2020 – 2024</span>
          </div>
          <h3 className="font-headline text-base font-bold text-on-surface mt-1">Bachelor of Computer Science &amp; Engineering</h3>
          <p className="text-on-surface-variant text-xs">East West Institute of Technology (EWIT), Bengaluru.</p>
        </div>
        <div className="p-3.5 rounded-lg bg-surface-lowest flex items-center justify-between border border-outline-variant/20 font-code">
          <div className="flex flex-col">
            <span className="text-outline uppercase text-[10px]">CUMULATIVE CGPA</span>
            <span className="text-lg font-bold text-primary">6.70 / 10.0</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-outline uppercase text-[10px]">CORE SPECIALIZATION</span>
            <span className="text-xs text-tertiary font-bold">Distributed Systems</span>
          </div>
        </div>
      </div>
    </section>
  )
}
