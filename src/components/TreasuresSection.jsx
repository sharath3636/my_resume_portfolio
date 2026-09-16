export default function TreasuresSection() {
  return (
    <section id="treasures" className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-code text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">lock_open</span>
            REPOSITORIES &amp; CONQUESTS // THE ONE PIECE
          </div>
          <h2 className="font-headline text-2xl font-bold text-on-surface mt-1">Flagship System Architectures</h2>
        </div>
        <span className="font-code text-xs text-on-surface-variant">5 High-Impact Software Solutions Shipped</span>
      </div>

      <div className="flex flex-col gap-6">
        {/* 1. TechInvest */}
        <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
          <div className="lg:w-7/12 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3 font-code text-xs">
                <span className="px-2.5 py-0.5 rounded bg-surface-high text-primary font-bold uppercase border border-primary/30">
                  ISLAND: WATER 7 FINANCIAL DISTRICT
                </span>
                <span className="text-on-surface-variant">CONQUEST #01</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                TechInvest — Investment Management Platform
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                A high-velocity financial orchestration portal designed for managing investment-related products and financial
                portfolios. Features dynamic authentication flows, rapid transaction calculation graphs, sub-second client state
                updates, and clean modular component architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-code text-xs">
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[16px]">bolt</span>
                Sub-second state updates with Axios
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary text-[16px]">security</span>
                Secure JWT authentication workflows
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[16px]">query_stats</span>
                Optimized Prisma relational queries
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-[16px]">view_quilt</span>
                Reusable atomic component design
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 font-code text-xs">
              <span className="px-2.5 py-1 rounded bg-surface-high text-primary font-semibold">React + Vite</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">Axios</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">Node.js</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-tertiary">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-primary">Prisma ORM</span>
            </div>
          </div>

          {/* Visual Sparkline */}
          <div className="lg:w-5/12 flex flex-col justify-between p-6 rounded-lg bg-surface-lowest shadow-inner gap-4 border border-outline-variant/30">
            <div className="flex items-center justify-between font-code text-xs">
              <span className="font-bold text-on-surface uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">account_balance_wallet</span>
                PORTFOLIO ENGINE
              </span>
              <span className="text-tertiary font-bold">LIVE TELEMETRY</span>
            </div>
            <div className="w-full flex flex-col gap-2 my-auto py-2">
              <div className="flex justify-between items-baseline">
                <span className="font-code text-xs text-on-surface-variant">PORTFOLIO VELOCITY</span>
                <span className="font-headline text-2xl text-primary font-bold">+342.8%</span>
              </div>
              <div className="w-full h-20 flex items-end">
                <svg className="w-full h-16 text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 300 80">
                  <path d="M0 65 Q 40 50, 70 58 T 140 35 T 210 20 T 300 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                  <path
                    d="M0 65 Q 40 50, 70 58 T 140 35 T 210 20 T 300 5 L 300 80 L 0 80 Z"
                    fill="rgba(254, 186, 57, 0.08)"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
              <span className="text-on-surface-variant">API RESPONSE BUDGET</span>
              <span className="text-tertiary font-bold">&lt; 85ms AVERAGE</span>
            </div>
          </div>
        </div>

        {/* 2. Code Monsters */}
        <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
          <div className="lg:w-7/12 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3 font-code text-xs">
                <span className="px-2.5 py-0.5 rounded bg-surface-high text-tertiary font-bold uppercase border border-tertiary/30">
                  ISLAND: OHARA ACADEMY
                </span>
                <span className="text-on-surface-variant">CONQUEST #02</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">
                Code Monsters (CodeMonsters.in) — EdTech Platform
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                High-conversion, interactive digital ecosystem for an elite tech training and placement bootcamp. Engineered
                complex UI animations, pixel-perfect designer prototype fidelity, and automated lead capture pipelines with
                server-side Excel export streams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-code text-xs">
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary text-[16px]">speed</span>
                SSR-driven SEO achieving top organic indexing
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[16px]">animation</span>
                Fluid micro-interactions &amp; transition fidelity
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-[16px]">table_view</span>
                Server-side bulk Excel ingestion pipelines
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[16px]">conversion_path</span>
                Conversion-optimized registration funnel
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 font-code text-xs">
              <span className="px-2.5 py-1 rounded bg-surface-high text-tertiary font-semibold">Next.js</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">Node.js</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-primary">SSR / SSG</span>
            </div>
          </div>

          <div className="lg:w-5/12 flex flex-col justify-between p-6 rounded-lg bg-surface-lowest shadow-inner gap-4 border border-outline-variant/30">
            <div className="flex items-center justify-between font-code text-xs">
              <span className="font-bold text-on-surface uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary text-[18px]">auto_stories</span>
                STUDENT PORTAL
              </span>
              <a className="text-primary hover:underline flex items-center gap-1" href="https://codemonsters.in" rel="noreferrer" target="_blank">
                codemonsters.in
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
            </div>
            <div className="w-full h-36 rounded bg-surface overflow-hidden relative group/img flex items-center justify-center">
              <img
                className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500"
                alt="Code Monsters platform UI preview"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwMGTmOfCWUy6rsJLCRTEX6BVhaN05o7D_GMlwKZVKIozRmAminuo9Cb2QgXw73jWe3Bw4gpfdUqUBQuGosaF4zzFaa69JqHqrAFeOHe86hdoJykwAYFugDv8nDuTsJDs95CjzhqX-fbPXxQPnSMzlhOPxKfB1pLuRQ7o1228BfYAmQeFgYTiDSbWCosjBL-vvZfxv9oal-K10ExfXAKVzFueQbiM3dvxdSzalHf5unVhzMV3qhsztKw"
              />
            </div>
            <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
              <span className="text-on-surface-variant">PERFORMANCE</span>
              <span className="text-tertiary font-bold">100% LIGHTHOUSE</span>
            </div>
          </div>
        </div>

        {/* 3. DriveGenie */}
        <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
          <div className="lg:w-7/12 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3 font-code text-xs">
                <span className="px-2.5 py-0.5 rounded bg-surface-high text-secondary font-bold uppercase border border-secondary/30">
                  ISLAND: ENIES LOBBY COMMAND
                </span>
                <span className="text-on-surface-variant">CONQUEST #03</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-secondary transition-colors">
                DriveGenie — Fleet Booking &amp; Live Tracking Triad
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                Tri-part transportation ecosystem comprising Customer Mobile App, Partner Driver App, and CRM Operational
                Dashboard for on-demand car bookings. Leveraged WebSockets for real-time driver telemetry and custom Android
                Kotlin background daemons for uninterrupted location transmission.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-code text-xs">
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-[16px]">sensors</span>
                Live WebSocket bi-directional driver mesh
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[16px]">android</span>
                Native Kotlin background daemon worker
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary text-[16px]">hub</span>
                Microservices: Wallet, Booking &amp; Fleet
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[16px]">tune</span>
                Tri-surface synced state: Web, iOS, Android
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 font-code text-xs">
              <span className="px-2.5 py-1 rounded bg-surface-high text-tertiary font-semibold">Flutter &amp; Dart</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-primary font-semibold">React.js</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">Node.js</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-secondary font-bold">WebSockets</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-outline">Kotlin Native</span>
            </div>
          </div>

          <div className="lg:w-5/12 flex flex-col justify-between p-6 rounded-lg bg-surface-lowest shadow-inner gap-4 border border-outline-variant/30">
            <div className="flex items-center justify-between font-code text-xs">
              <span className="font-bold text-on-surface uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">near_me</span>
                FLEET TELEMETRY
              </span>
              <span className="text-primary font-bold flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary-container animate-pulse"></span>
                RADAR ACTIVE
              </span>
            </div>
            <div
              className="w-full h-36 rounded bg-cover bg-center relative overflow-hidden flex items-center justify-center shadow-md"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCg3qHF3ZCIkSR7tXMvL5D2TbSIXW8hphxHEj9bgKahZqhu50SK4Wlbedfc_RLw3tPYNmNzQ0WhRRB6-XSU17KSHDe_rHhi7c8TQC-0ai4YWer4XWIHw5cjlMDegvJlnD5aX-ZkC_OkfH3AFuaFgcwSKhGO3uCvKY3KExGuRdI_Q_YAz5RGfUa2Gj-hgqHNRPOjGMPSyAoCXMraa5TPUkl5qWfFfJV7PPoBQGVwzdM3iVeU8v7byi-Q2w')",
              }}
            >
              <div className="absolute inset-0 bg-surface/75 backdrop-blur-[2px]"></div>
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-secondary/30 animate-ping absolute"></div>
                <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_12px_rgba(246,179,50,0.8)]"></div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
              <span className="text-on-surface-variant">DAEMON STATUS</span>
              <span className="text-primary font-bold">100% UNINTERRUPTED</span>
            </div>
          </div>
        </div>

        {/* 4. BeBadge */}
        <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
          <div className="lg:w-7/12 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3 font-code text-xs">
                <span className="px-2.5 py-0.5 rounded bg-surface-high text-primary font-bold uppercase border border-primary/30">
                  ISLAND: SABAODY ARCHIPELAGO
                </span>
                <span className="text-on-surface-variant">CONQUEST #04</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                BeBadge — Multi-Tier Event Management Ecosystem
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                Enterprise-scale conference and convention platform equipped with multi-tier role authorization (Master Admin,
                Organization, Exhibitor, Visitor). Powered by normalized Redux slices for instant badge generation, dynamic QR
                passes, and real-time attendance validation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-code text-xs">
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[16px]">shield_person</span>
                4-Tier Role Guard route security
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary text-[16px]">qr_code_2</span>
                Real-time digital QR badge issuance
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-[16px]">splitscreen</span>
                Redux Toolkit normalized cache stores
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-outline text-[16px]">phone_android</span>
                React Native companion scanner app
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 font-code text-xs">
              <span className="px-2.5 py-1 rounded bg-surface-high text-primary font-semibold">React.js</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-tertiary font-semibold">React Native</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-primary font-bold">Redux Toolkit</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">Axios</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">RESTful APIs</span>
            </div>
          </div>

          <div className="lg:w-5/12 flex flex-col justify-between p-6 rounded-lg bg-surface-lowest shadow-inner gap-4 border border-outline-variant/30">
            <div className="flex items-center justify-between font-code text-xs">
              <span className="font-bold text-on-surface uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">badge</span>
                ACCREDITATION
              </span>
              <span className="text-primary font-bold">MULTI-TENANT</span>
            </div>
            <div className="w-full h-36 rounded bg-surface overflow-hidden relative group/img flex items-center justify-center">
              <img
                className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500"
                alt="BeBadge accreditation dashboard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8nwjMqzbeUXBlLHSXcXf3Kvxvm9_s9msQU9WyTo7gA9gRctLoEwR6RcaRET1S8jj2aruhLmMCN4s_XL7V5uGkfS5fMegeMGO8RCBAaE8uNZIMi4niCco44IKFcaD71WaOKKYsn9QmNw7mfUWeerHPWI5T2VG7XYDgqWCZ4Qi7_Svp6KLNy8fjPwvXhBji1C50JlxFdipWnGZI-HyBM8bhx15B6h279gpf2ZidSDewHjbSBUlJqA81oA"
              />
            </div>
            <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
              <span className="text-on-surface-variant">QR SCAN RATE</span>
              <span className="text-primary font-bold">&lt; 150ms INSTANT</span>
            </div>
          </div>
        </div>

        {/* 5. TecheWorks */}
        <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
          <div className="lg:w-7/12 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3 font-code text-xs">
                <span className="px-2.5 py-0.5 rounded bg-surface-high text-outline font-bold uppercase border border-outline/30">
                  ISLAND: LOGUETOWN GATEWAY
                </span>
                <span className="text-on-surface-variant">CONQUEST #05</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-outline transition-colors">
                TecheWorks — Corporate IT Solutions Platform
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                Enterprise digital portal for global IT solutions and cloud services. Engineered high-converting bespoke landing
                architecture, strict web accessibility (WCAG), responsive cross-device typography, and seamless content
                pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-code text-xs">
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-outline text-[16px]">accessibility</span>
                High accessibility &amp; WCAG compliance
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[16px]">devices</span>
                Fluid responsive layout scaling
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary text-[16px]">speed</span>
                Optimized asset delivery pipeline
              </div>
              <div className="p-2.5 rounded bg-surface-low flex items-center gap-2 text-on-surface border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-[16px]">domain</span>
                Global services showcase portfolio
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 font-code text-xs">
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface font-semibold">WordPress</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-primary font-semibold">HTML5 / CSS3</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-on-surface">JavaScript</span>
              <span className="px-2.5 py-1 rounded bg-surface-high text-tertiary font-semibold">PHP Core</span>
            </div>
          </div>

          <div className="lg:w-5/12 flex flex-col justify-between p-6 rounded-lg bg-surface-lowest shadow-inner gap-4 border border-outline-variant/30">
            <div className="flex items-center justify-between font-code text-xs">
              <span className="font-bold text-on-surface uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-outline text-[18px]">corporate_fare</span>
                ENTERPRISE
              </span>
              <span className="text-outline font-bold">CORPORATE IT</span>
            </div>
            <div className="w-full h-36 rounded bg-surface overflow-hidden relative group/img flex items-center justify-center">
              <img
                className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500"
                alt="TecheWorks enterprise architecture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgiJmQtzRjhV7DGwxawPi4yqTyX8PW2ryR7A9sJnjeNggtdci4H9aCyXG7hkatwcgSLJufrq-aeocyKqe6HEoP3Kde0jaa_vBijMtLA1lefxyq5Itmdt6LVsvnTqExSfSK07YQoTt1kXsk6iE8MABiwNqObPRDhC_VqAI8W4_jS6gsMmld5XG_55fKaA-_HzcT6KG0OIxxwNWjOwxdTt5wyj2UCN-cKsrWj-wqP1t-pORtH8Pq6uGYw"
              />
            </div>
            <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
              <span className="text-on-surface-variant">ASSET LATENCY</span>
              <span className="text-outline font-bold">Sub-second CDN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
