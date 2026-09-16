import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', role: '', details: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Puri-puri-puri! 🐌 Signal dispatched straight to Captain Sharath.')
    setForm({ name: '', email: '', role: '', details: '' })
  }

  return (
    <section id="den-den-mushi" className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-code text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">cell_tower</span>
            DEN DEN MUSHI // FREQUENCY COMMS
          </div>
          <h2 className="font-headline text-2xl font-bold text-on-surface mt-1">Summon Captain Sharath</h2>
        </div>
        <span className="font-code text-xs text-on-surface-variant">Encrypted signal ready for transmission</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Info (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-surface flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden border border-outline-variant/30">
          <div className="flex flex-col gap-4">
            {/* Den Den Mushi Snail Icon */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-surface-high flex items-center justify-center text-primary shadow-inner border border-primary/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="14" cy="11" r="6"></circle>
                  <path d="M14 8a3 3 0 0 1 3 3"></path>
                  <path d="M2 17c0-2.5 3-4 6-4h1"></path>
                  <path d="M20 17H4"></path>
                  <circle cx="6" cy="7" r="1.5"></circle>
                  <path d="M6 8.5v3.5"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-lg font-bold text-on-surface">Transponder Frequency</span>
                <span className="font-code text-xs text-primary font-bold">CHANNEL // SHARATH.DEV</span>
              </div>
            </div>

            {/* Quote Creed */}
            <div className="p-4 rounded-lg bg-surface-low border-l-2 border-primary-container flex flex-col gap-2 border border-outline-variant/20">
              <p className="text-xs italic text-on-surface leading-relaxed">
                "Inherited Will, The Flow of Time, and The Dreams of Its People... Transmuted into clean code, resilient
                architecture, and the relentless drive to build exceptional software."
              </p>
              <span className="font-code text-[11px] text-primary font-bold text-right">— Captain's Engineering Creed</span>
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-2.5 font-code text-xs">
            <span className="text-outline uppercase font-bold tracking-wider text-[10px]">DIRECT DISPATCH CHANNELS</span>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-high border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-[18px]">alternate_email</span>
              <div className="flex flex-col min-w-0">
                <span className="text-outline text-[10px]">PRIMARY COMM</span>
                <a className="text-on-surface hover:text-primary transition-colors truncate" href="mailto:sharathsakshi.123@gmail.com">
                  sharathsakshi.123@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-high border border-outline-variant/20">
              <span className="material-symbols-outlined text-tertiary text-[18px]">call</span>
              <div className="flex flex-col min-w-0">
                <span className="text-outline text-[10px]">VOYAGE HOTLINE</span>
                <a className="text-on-surface hover:text-tertiary transition-colors truncate" href="tel:+919902389523">
                  +91 9902389523
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-high border border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[18px]">share_location</span>
              <div className="flex flex-col min-w-0">
                <span className="text-outline text-[10px]">GEOGRAPHIC ANCHOR</span>
                <span className="text-on-surface">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Signal Dispatch Form (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-surface shadow-xl flex flex-col justify-between gap-6 border border-outline-variant/30">
          <div className="flex flex-col gap-1">
            <span className="font-code text-xs text-primary uppercase font-bold tracking-widest">SIGNAL DISPATCH CONSOLE</span>
            <h3 className="font-headline text-lg font-bold text-on-surface">Send a High-Priority Message to the Ship</h3>
          </div>

          <form className="flex flex-col gap-4 font-body" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-code text-xs uppercase text-on-surface-variant font-medium">Captain / Recruiter Name</label>
                <input
                  className="px-4 py-2.5 rounded-lg bg-surface-high text-on-surface text-sm placeholder:text-outline-variant focus:outline-none border border-outline-variant/30 focus:border-primary"
                  placeholder="e.g., Silvers Rayleigh"
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-code text-xs uppercase text-on-surface-variant font-medium">Den Den Mushi / Return Email</label>
                <input
                  className="px-4 py-2.5 rounded-lg bg-surface-high text-on-surface text-sm placeholder:text-outline-variant focus:outline-none border border-outline-variant/30 focus:border-primary"
                  placeholder="fleet@venture.com"
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-code text-xs uppercase text-on-surface-variant font-medium">Mission Classification / Role Scope</label>
              <input
                className="px-4 py-2.5 rounded-lg bg-surface-high text-on-surface text-sm placeholder:text-outline-variant focus:outline-none border border-outline-variant/30 focus:border-primary"
                placeholder="e.g., Senior Full Stack / Mobile Cross-Platform Voyage"
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-code text-xs uppercase text-on-surface-variant font-medium">Mission Details &amp; Coordinates</label>
              <textarea
                className="px-4 py-2.5 rounded-lg bg-surface-high text-on-surface text-sm placeholder:text-outline-variant focus:outline-none resize-none border border-outline-variant/30 focus:border-primary"
                placeholder="Describe your architecture requirements, crew roadmap, or engineering challenge..."
                required
                rows="4"
                name="details"
                value={form.details}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-code text-xs">
              <span className="text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
                E2E Encrypted Marine Protocol
              </span>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-surface font-bold uppercase tracking-wider shadow-lg hover:bg-primary transition-all"
                type="submit"
              >
                <span className="material-symbols-outlined text-[17px]">send</span>
                Transmit Dispatch
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Return Anchor */}
      <div className="w-full p-4 rounded-xl bg-surface-low flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left border border-outline-variant/30 font-code text-xs">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">anchor</span>
          <span className="text-on-surface font-semibold">ALL GRAND LINE PORTS REACHED // DEV PIRATE PROTOCOL: ACTIVE</span>
        </div>
        <a className="text-primary hover:underline flex items-center gap-1" href="#overview">
          Back to Helm
          <span className="material-symbols-outlined text-[15px]">arrow_upward</span>
        </a>
      </div>
    </section>
  )
}
