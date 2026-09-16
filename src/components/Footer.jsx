export default function Footer() {
  return (
    <footer className="w-full bg-surface-lowest py-10 border-t border-outline-variant/20 font-code text-xs">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">explore</span>
            <span className="font-headline text-sm text-on-surface font-bold">Navigating the Grand Line of Web &amp; Mobile Architecture</span>
          </div>
          <p className="text-on-surface-variant text-[11px]">© 2024 Sharath K. Engineering Log. All coordinates cleared.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-high border border-outline-variant/40">
            <span className="h-2 w-2 rounded-full bg-tertiary animate-ping"></span>
            <span className="text-tertiary uppercase text-[10px]">AVAILABLE FOR HIGH-IMPACT CREWS &amp; ROLES</span>
          </div>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://linkedin.com" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
