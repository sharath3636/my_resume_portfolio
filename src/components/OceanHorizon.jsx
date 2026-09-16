export default function OceanHorizon() {
  return (
    <div className="pointer-events-none absolute top-20 left-0 w-[220%] h-36 opacity-30 overflow-hidden z-0 select-none">
      {/* Cruising Ship Silhouette across the horizon */}
      <div className="absolute -top-2 w-24 h-14 ship-cruising z-10 opacity-70">
        <svg viewBox="0 0 100 60" fill="none" className="w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 42C25 50 75 50 85 42C75 46 25 46 15 42Z" fill="currentColor" />
          <path d="M48 10V42M28 20H68M34 30H62" stroke="currentColor" strokeWidth="2" />
          <path d="M30 18C38 15 58 15 66 18C62 27 58 29 48 29C38 29 34 27 30 18Z" fill="#ffd492" opacity="0.8" />
          <circle cx="83" cy="40" r="4" fill="#f6b332" />
          <path d="M48 8L55 12L48 15V8Z" fill="#ad0224" />
          <line x1="5" y1="46" x2="20" y2="46" stroke="#7bd0ff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      {/* Wave 1 */}
      <svg className="anim-wave-1 absolute bottom-0 left-0 w-full h-20 text-surface-low" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
        <path
          d="M0,40 C150,80 350,10 500,45 C650,80 850,20 1000,50 C1150,80 1350,15 1500,45 C1650,75 1850,20 2000,50 C2150,80 2350,20 2400,45 L2400,120 L0,120 Z"
          opacity="0.6"
        />
      </svg>
      {/* Wave 2 */}
      <svg className="anim-wave-2 absolute bottom-0 left-0 w-full h-16 text-primary-container/20" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
        <path
          d="M0,60 C200,20 400,85 600,45 C800,5 1000,75 1200,45 C1400,15 1600,80 1800,45 C2000,10 2200,75 2400,45 L2400,120 L0,120 Z"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}
