import React, { useEffect, useState } from 'react';
import './style.css';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSystem } from './scenes/scrollSystem.js';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [voyage, setVoyage] = useState({ percent: 0, name: 'East Blue Port', knots: '24 KTS // SSW' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical', gestureDirection: 'vertical', smooth: true, mouseMultiplier: 1, smoothTouch: false, touchMultiplier: 2, infinite: false });
    const scrollSystem = new ScrollSystem();
    const ticker = (time) => lenis.raf(time * 1000);
    const onLoad = () => ScrollTrigger.refresh();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(ticker);
    window.addEventListener('load', onLoad);
    return () => {
      window.removeEventListener('load', onLoad);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      scrollSystem.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const milestones = [
      { progress: 0.15, name: 'East Blue (Command Deck)', knots: '22 KTS // NE' },
      { progress: 0.35, name: 'Calm Belt (Haki Arsenal)', knots: '14 KTS // W' },
      { progress: 0.55, name: 'Water 7 (Expeditions)', knots: '28 KTS // SSW' },
      { progress: 0.8, name: 'Sabaody (Flagship Projects)', knots: '36 KTS // SW' },
      { progress: 1, name: 'Laugh Tale (Den Den Comms)', knots: '42 KTS // S' },
    ];
    const updateVoyage = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percent = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
      setVoyage({ percent: Math.round(percent * 100), ...(milestones.find((milestone) => percent <= milestone.progress) || milestones[milestones.length - 1]) });
    };
    updateVoyage();
    window.addEventListener('scroll', updateVoyage, { passive: true });
    window.addEventListener('resize', updateVoyage);
    return () => { window.removeEventListener('scroll', updateVoyage); window.removeEventListener('resize', updateVoyage); };
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormStatus('Puri-puri-puri! Signal dispatched straight to Captain Sharath.');
    event.currentTarget.reset();
  };

  return (
    <>


  
  
  
  <aside aria-label="Grand Line Voyage Navigation" className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none select-none">
    <div id="ship-hud" className="pointer-events-auto transition-all duration-300 p-4 rounded-xl bg-surface/95 backdrop-blur-md border border-outline-variant/60 shadow-[0_8px_32px_rgba(0,0,0,0.7)] w-72 flex flex-col gap-2.5">
      
      
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
          </span>
          <span className="font-code text-[11px] uppercase tracking-wider text-primary font-bold">THOUSAND SUNNY // VOYAGE</span>
        </div>
        <span id="scroll-percentage" className="px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-code text-[10px] font-bold">{voyage.percent}% EXP</span>
      </div>

      
      <div className="grid grid-cols-2 gap-2 font-code text-[11px] text-on-surface-variant">
        <div className="flex flex-col">
          <span className="text-outline uppercase text-[9px] tracking-wider">CURRENT SEA</span>
          <span id="current-sea-name" className="text-on-surface font-semibold truncate">{voyage.name}</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-outline uppercase text-[9px] tracking-wider">WIND SPEED</span>
          <span id="wind-speed-label" className="text-tertiary font-bold">{voyage.knots}</span>
        </div>
      </div>

      
      <div className="relative w-full pt-6 pb-1">
        
        <div className="w-full h-2 rounded-full bg-surface-lowest overflow-hidden border border-outline-variant/40">
          <div id="voyage-bar" className="h-full bg-gradient-to-r from-primary-container via-tertiary to-secondary rounded-full transition-[width] duration-150" style={{ width: `${Math.max(voyage.percent, 4)}%` }}></div>
        </div>

        
        <div className="flex justify-between items-center text-[9px] font-code text-outline mt-1.5 px-0.5">
          <span>PORT</span>
          <span>HAKI</span>
          <span>LOG</span>
          <span>LOOT</span>
          <span className="text-primary font-bold">ONE PIECE</span>
        </div>

        
        <div id="sailing-ship-marker" className="absolute top-0 transform -translate-x-1/2 transition-[left] duration-150 pointer-events-auto cursor-pointer" style={{ left: `${Math.min(Math.max(voyage.percent * 0.92 + 4, 4), 96)}%` }} title="Thousand Sunny sailing the Grand Line">
          <div className="relative anim-ship">
            
            <svg className="w-7 h-7 drop-shadow-[0_2px_10px_rgba(246,179,50,0.6)]" viewBox="0 0 64 64" fill="none">
              <path d="M32 8V44M18 20H46M22 32H42" stroke="#504534" strokeWidth="2.5" strokeLinecap="round"/>
              <path className="anim-sail" d="M20 18C26 15 38 15 44 18C42 28 38 31 32 31C26 31 22 28 20 18Z" fill="#dce3f2" stroke="#f6b332" strokeWidth="1.5"/>
              <path d="M32 7L38 10L32 13V7Z" fill="#ad0224"/>
              <circle cx="32" cy="24" r="3.5" fill="#f6b332"/>
              <path d="M12 40C16 48 48 48 52 40C48 45 16 45 12 40Z" fill="#684700" stroke="#f6b332" strokeWidth="1.5"/>
              <circle className="anim-sunny-head" cx="50" cy="38" r="4.5" fill="#f6b332"/>
              <circle cx="50" cy="38" r="2" fill="#ad0224"/>
              <ellipse className="anim-foam" cx="32" cy="47" rx="18" ry="2" fill="#7bd0ff" opacity="0.6"/>
            </svg>
          </div>
        </div>
      </div>

      
      <div className="flex items-center justify-between pt-1 border-t border-outline-variant/20">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-code text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px]">north</span> Helm (Top)
        </button>
        <a href="#den-den-mushi" className="text-[10px] font-code text-primary hover:underline flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px]">anchor</span> Port: Comms
        </a>
      </div>
    </div>
  </aside>

  
  
  
  <header className="navbar fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/20">
    <div className="max-w-[1280px] mx-auto h-20 px-6 sm:px-8 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <a href="#overview" className="flex items-center gap-3 group">
          <img alt="Sharath Dev Pirate Logo" className="h-9 w-auto rounded border border-primary-container/40 p-0.5 group-hover:border-primary transition-colors shadow-[0_0_12px_rgba(246,179,50,0.2)]" src="https://lh3.googleusercontent.com/aida/AEtjO1VsaLOHeMw2z4AxAfus8zrzAZUnolg9XImiYUJsAM-v2run32g5OgzBBVtcLVaFm3mrZA832_5LpkEg_PNbRY0DG-M2vUU7dvtb51ETl0E22qm775MABOYFiftjUXONPcRLzsU80mBmg7P8tOVo0jviDD2KGieqQtNWK6jZV5xgUhrui0MXpqJ7Zcv_-GseSW8ptsKb34oqQAEP5-tbSNHz8mHEPFGcI_uDQ4j5V5lfXJY3Q_1sXj5pQjUe"/>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-headline text-lg font-bold tracking-tight text-primary">SHARATH K.</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-surface-high border border-outline-variant/40 font-code text-[10px] text-on-surface-variant uppercase">LVL 2 FULL STACK // SDE-2</span>
            </div>
          </div>
        </a>
      </div>

      <nav className="hidden lg:flex items-center gap-6 font-code text-xs">
        <a className="text-primary border-b-2 border-primary-container pb-1 font-semibold flex items-center gap-1.5" href="#overview">
          <span className="material-symbols-outlined text-[16px]">sailing</span>Deck
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#arsenal">Arsenal // Haki</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#journey">Logbook // SDE-2</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#treasures">Treasures // Projects</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#den-den-mushi">Comms</a>
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded bg-surface-low border border-outline-variant/40">
          <span className="font-code text-xs text-primary-container font-bold">BOUNTY:</span>
          <span className="font-code text-xs text-primary font-bold">₿ 3,000,000,000 EXP</span>
        </div>
        <a className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-primary-container text-surface font-code text-xs font-bold uppercase tracking-wider hover:bg-primary transition-all shadow-[0_0_16px_rgba(246,179,50,0.3)]" href="#den-den-mushi">
          <span className="material-symbols-outlined text-[16px]">anchor</span>Hire Captain
        </a>
      </div>
    </div>
  </header>

  
  
  
  <main className="w-full pt-20 relative overflow-hidden">
    
    
    <div className="pointer-events-none absolute top-20 left-0 w-[220%] h-36 opacity-30 overflow-hidden z-0 select-none">
      
      <div className="absolute -top-2 w-24 h-14 ship-cruising z-10 opacity-70">
        <svg viewBox="0 0 100 60" fill="none" className="w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 42C25 50 75 50 85 42C75 46 25 46 15 42Z" fill="currentColor"/>
          <path d="M48 10V42M28 20H68M34 30H62" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 18C38 15 58 15 66 18C62 27 58 29 48 29C38 29 34 27 30 18Z" fill="#ffd492" opacity="0.8"/>
          <circle cx="83" cy="40" r="4" fill="#f6b332"/>
          <path d="M48 8L55 12L48 15V8Z" fill="#ad0224"/>
          <line x1="5" y1="46" x2="20" y2="46" stroke="#7bd0ff" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      
      <svg className="anim-wave-1 absolute bottom-0 left-0 w-full h-20 text-surface-low" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
        <path d="M0,40 C150,80 350,10 500,45 C650,80 850,20 1000,50 C1150,80 1350,15 1500,45 C1650,75 1850,20 2000,50 C2150,80 2350,20 2400,45 L2400,120 L0,120 Z" opacity="0.6"/>
      </svg>
      
      <svg className="anim-wave-2 absolute bottom-0 left-0 w-full h-16 text-primary-container/20" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
        <path d="M0,60 C200,20 400,85 600,45 C800,5 1000,75 1200,45 C1400,15 1600,80 1800,45 C2000,10 2200,75 2400,45 L2400,120 L0,120 Z" opacity="0.4"/>
      </svg>
    </div>

    <div className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-8 pb-24 flex flex-col gap-16 relative z-10">

      
      <section id="overview" className="flex flex-col gap-6">
        
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
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-tertiary">speed</span>14ms Latency</span>
            <span className="hidden sm:flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">sailing</span>Techspiration Fleet</span>
            <span className="px-2 py-0.5 rounded bg-surface font-semibold text-primary border border-primary/20">99.98% Uptime</span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          
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

            
            <div className="w-full rounded-lg bg-surface-lowest p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-inner my-2 border border-outline-variant/30">
              <div className="relative w-32 h-32 mb-3 flex items-center justify-center group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-container/20 to-tertiary/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <img alt="Sharath Dev Pirate Jolly Roger" className="relative w-28 h-28 object-contain rounded-xl border border-primary-container/50 shadow-[0_0_20px_rgba(246,179,50,0.3)] transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1VsaLOHeMw2z4AxAfus8zrzAZUnolg9XImiYUJsAM-v2run32g5OgzBBVtcLVaFm3mrZA832_5LpkEg_PNbRY0DG-M2vUU7dvtb51ETl0E22qm775MABOYFiftjUXONPcRLzsU80mBmg7P8tOVo0jviDD2KGieqQtNWK6jZV5xgUhrui0MXpqJ7Zcv_-GseSW8ptsKb34oqQAEP5-tbSNHz8mHEPFGcI_uDQ4j5V5lfXJY3Q_1sXj5pQjUe"/>
              </div>

              <div className="text-center flex flex-col items-center">
                <span className="font-headline text-xl font-bold tracking-tight text-on-surface">SHARATH K</span>
                <span className="font-code text-xs text-primary tracking-widest uppercase mt-0.5">FULL STACK &amp; CROSS-PLATFORM VOYAGER</span>
                <span className="font-code text-xs text-on-surface-variant mt-1">SDE-2 @ Techspiration India</span>
              </div>
            </div>

            
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

          
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 p-8 rounded-xl bg-surface shadow-xl border border-outline-variant/40 relative overflow-hidden">
            <div className="flex flex-col gap-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-high w-fit border border-primary/20">
                <span className="material-symbols-outlined text-[16px] text-primary">explore</span>
                <span className="font-code text-xs text-primary uppercase font-bold">CAPTAIN'S LOGBOOK // GRAND LINE EDITION</span>
              </div>

              
              <div className="flex items-start justify-between gap-4">
                <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                  Sailing across <span className="text-primary">Frontend</span>, <span className="text-tertiary">Backend</span> &amp; <span className="text-secondary">Mobile</span> Architectures.
                </h1>

                
                <div className="hidden sm:flex shrink-0 p-2.5 rounded-xl bg-surface-high/80 border border-outline-variant/40 anim-ship" title="Thousand Sunny - Flagship of the Full Stack Fleet">
                  <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" stroke="#f6b332" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.4"/>
                    <path d="M32 6V48M14 18H50" stroke="#ffd492" strokeWidth="2.5" strokeLinecap="round"/>
                    <path className="anim-sail" d="M16 18C24 14 40 14 48 18C45 30 39 34 32 34C25 34 19 30 16 18Z" fill="#151c26" stroke="#f6b332" strokeWidth="1.8"/>
                    <path d="M28 24L36 28M36 24L28 28" stroke="#ffb3b1" strokeWidth="1.5"/>
                    <circle cx="32" cy="26" r="3" fill="#f6b332"/>
                    <path d="M8 44C14 54 50 54 56 44C50 49 14 49 8 44Z" fill="#684700" stroke="#f6b332" strokeWidth="2"/>
                    <g className="anim-sunny-head">
                      <circle cx="53" cy="42" r="6" fill="#f6b332"/>
                      <path d="M53 34L54 37M53 50L54 47M45 42L48 42M61 42L58 42M47 36L49 38M59 48L57 46M47 48L49 46M59 36L57 38" stroke="#ad0224" strokeWidth="1.5"/>
                    </g>
                    <circle cx="53" cy="42" r="3" fill="#ad0224"/>
                    <path className="anim-foam" d="M4 52 Q 16 48, 32 52 T 60 52" stroke="#7bd0ff" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              <p className="text-body text-on-surface-variant max-w-2xl text-base leading-relaxed">
                Driven Software Engineer 2 mastering high-throughput web applications, cross-platform mobile experiences, and fault-tolerant microservices. Equipped with React, Next.js, Flutter, Node.js, Prisma ORM, and PostgreSQL.
              </p>

              
              <div className="flex flex-wrap items-center gap-3 pt-2 font-code text-xs">
                <a className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container text-surface font-bold uppercase tracking-wider shadow-lg hover:bg-primary transition-all" href="#treasures">
                  <span className="material-symbols-outlined text-[17px]">diamond</span>
                  Treasures // Projects
                </a>
                <a className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-high text-on-surface font-bold uppercase tracking-wider hover:text-primary transition-all border border-outline-variant/30" href="#arsenal">
                  <span className="material-symbols-outlined text-[17px]">military_tech</span>
                  Arsenal &amp; Haki
                </a>
                <a className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-low text-primary font-bold uppercase tracking-wider hover:bg-surface-high transition-all border border-primary/20" href="#den-den-mushi">
                  <span className="material-symbols-outlined text-[17px]">ring_volume</span>
                  Den Den Mushi
                </a>
                <a className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-low text-on-surface-variant font-medium hover:text-on-surface transition-all border border-outline-variant/20" href="mailto:sharathsakshi.123@gmail.com">
                  <span className="material-symbols-outlined text-[17px]">download</span>
                  Resume Log
                </a>
              </div>
            </div>

            
            <div className="w-full rounded-lg bg-surface-lowest p-4 shadow-inner flex flex-col gap-2 border border-outline-variant/30 relative z-10 font-code text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary-container"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-tertiary"></div>
                  <span className="text-on-surface-variant ml-2">grand-line-nav: zsh</span>
                </div>
                <span className="text-primary font-bold flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>READY_FOR_VOYAGE</span>
              </div>
              <div className="space-y-1 pt-1">
                <p className="text-on-surface-variant"><span className="text-primary font-bold">pirate-king@sharath:~$</span> logpose.status()</p>
                <p className="text-tertiary">&gt; Initializing Log Pose vectors across Next.js 14, Node Microservices &amp; Flutter Native...</p>
                <p className="text-primary-container">&gt; Real-Time WebSockets: ONLINE [Driver Mesh &amp; Event Badges Active]</p>
                <p className="text-on-surface-variant"><span className="text-primary font-bold">pirate-king@sharath:~$</span> cat nakama_manifest.json | grep "ROLE"</p>
                <p className="text-secondary">&gt; "SDE_2", "FULL_STACK_ARCHITECT", "CROSS_PLATFORM_SPECIALIST"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md border border-outline-variant/30">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
              <h2 className="font-headline text-lg font-bold text-on-surface">Executive Crew Profile // Engineering Philosophy</h2>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Results-driven Full Stack Developer with hands-on production expertise in React.js, Next.js, React Native, Flutter, Node.js, Prisma ORM, and PostgreSQL. Experienced across the full software lifecycle—architecting robust relational schemas, designing modular Redux Toolkit state slices, composing high-availability microservices, and orchestrating native Android background sync.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-code text-xs">
            <a className="p-3 rounded-lg bg-surface-high flex items-center gap-3 hover:text-primary transition-colors group border border-outline-variant/20" href="mailto:sharathsakshi.123@gmail.com">
              <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
              <div className="flex flex-col min-w-0">
                <span className="text-outline uppercase text-[10px]">TRANSPONDER EMAIL</span>
                <span className="text-on-surface truncate group-hover:text-primary">sharathsakshi.123@gmail.com</span>
              </div>
            </a>
            <a className="p-3 rounded-lg bg-surface-high flex items-center gap-3 hover:text-tertiary transition-colors group border border-outline-variant/20" href="tel:+919902389523">
              <span className="material-symbols-outlined text-tertiary text-[20px]">call</span>
              <div className="flex flex-col min-w-0">
                <span className="text-outline uppercase text-[10px]">DEN DEN DIAL</span>
                <span className="text-on-surface truncate group-hover:text-tertiary">+91 9902389523</span>
              </div>
            </a>
            <a className="p-3 rounded-lg bg-surface-high flex items-center gap-3 hover:text-primary transition-colors group border border-outline-variant/20" href="https://linkedin.com" rel="noreferrer" target="_blank">
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
            <p className="text-on-surface-variant text-xs">
              East West Institute of Technology (EWIT), Bengaluru.
            </p>
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
          
          <div className="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md hover:shadow-xl transition-all border border-outline-variant/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-[20px]">shield</span>
                  <span className="font-bold uppercase">Armament Haki</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-high text-primary font-bold text-[10px]">UI DEFENSE</span>
              </div>
              <h3 className="font-headline text-base font-bold text-on-surface">Frontend &amp; High-Fidelity UI</h3>
              <p className="font-body text-xs text-on-surface-variant">
                Hardened user interfaces capable of withstanding intense traffic loads and rendering with zero hydration lag.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">React.js</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-primary font-bold">Next.js (SSR/SSG)</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Vite</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-tertiary">Tailwind CSS</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">TypeScript</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">JavaScript ES6+</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1.5 pt-2">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Combat Fluency</span>
                <span className="text-primary font-bold">96%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-lowest overflow-hidden">
                <div className="h-full bg-primary-container rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>

          
          <div className="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md hover:shadow-xl transition-all border border-outline-variant/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-tertiary">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                  <span className="font-bold uppercase">Observation Haki</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-high text-tertiary font-bold text-[10px]">FLOW &amp; TELEMETRY</span>
              </div>
              <h3 className="font-headline text-base font-bold text-on-surface">State Architecture &amp; Data Pipeline</h3>
              <p className="font-body text-xs text-on-surface-variant">
                Anticipating data shifts and mutating normalized stores with zero unnecessary rerenders or dropped packets.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-surface-high text-tertiary font-bold">Redux Toolkit (RTK)</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Redux Slices</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Axios Interceptors</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Dynamic Data Fetching</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">RESTful APIs</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Jest &amp; Vitest</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1.5 pt-2">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Combat Fluency</span>
                <span className="text-tertiary font-bold">92%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-lowest overflow-hidden">
                <div className="h-full bg-tertiary-container rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>

          
          <div className="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md hover:shadow-xl transition-all border border-outline-variant/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-[20px]">electric_bolt</span>
                  <span className="font-bold uppercase">Conqueror's Haki</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-high text-secondary font-bold text-[10px]">BACKEND WILL</span>
              </div>
              <h3 className="font-headline text-base font-bold text-on-surface">Distributed Microservices</h3>
              <p className="font-body text-xs text-on-surface-variant">
                Dominating distributed server architectures with modular services, WebSocket live telemetry, and resilient workers.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-surface-high text-secondary font-bold">Node.js</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Express.js</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-primary">Microservices Mesh</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-tertiary">WebSockets</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Booking Engine</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Wallet &amp; Auth</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1.5 pt-2">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Combat Fluency</span>
                <span className="text-secondary font-bold">90%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-lowest overflow-hidden">
                <div className="h-full bg-secondary-container rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          
          <div className="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md hover:shadow-xl transition-all border border-outline-variant/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-[20px]">database</span>
                  <span className="font-bold uppercase">Grand Line Navigation</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-high text-primary font-bold text-[10px]">DATABASE</span>
              </div>
              <h3 className="font-headline text-base font-bold text-on-surface">Database &amp; Schema Engineering</h3>
              <p className="font-body text-xs text-on-surface-variant">
                Charting immutable data stores, indexed relational topologies, and high-performance transactional pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-surface-high text-primary font-bold">PostgreSQL</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-tertiary font-bold">Prisma ORM</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Schema Migrations</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Query Optimization</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1.5 pt-2">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Combat Fluency</span>
                <span className="text-primary font-bold">88%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-lowest overflow-hidden">
                <div className="h-full bg-primary-container rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>

          
          <div className="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md hover:shadow-xl transition-all border border-outline-variant/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-tertiary">
                  <span className="material-symbols-outlined text-[20px]">phone_iphone</span>
                  <span className="font-bold uppercase">All-Sea Transports</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-high text-tertiary font-bold text-[10px]">MOBILE DUAL</span>
              </div>
              <h3 className="font-headline text-base font-bold text-on-surface">Cross-Platform &amp; Native Daemons</h3>
              <p className="font-body text-xs text-on-surface-variant">
                Crafting performant dual-realm applications for iOS and Android, bolstered by native Kotlin background drivers.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-surface-high text-tertiary font-bold">Flutter &amp; Dart</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-primary font-bold">React Native</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Kotlin Services</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Location Sensors</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1.5 pt-2">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Combat Fluency</span>
                <span className="text-tertiary font-bold">90%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-lowest overflow-hidden">
                <div className="h-full bg-tertiary-container rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          
          <div className="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-md hover:shadow-xl transition-all border border-outline-variant/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined text-[20px]">construction</span>
                  <span className="font-bold uppercase">Shipwright Deck</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-high text-outline font-bold text-[10px]">TOOLING</span>
              </div>
              <h3 className="font-headline text-base font-bold text-on-surface">Vessel Tooling &amp; Agile Rituals</h3>
              <p className="font-body text-xs text-on-surface-variant">
                Equipping developer pipelines with deterministic versioning, containerized environments, and fast feedback loops.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">Git &amp; GitHub</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-primary">Docker</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">WordPress</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-tertiary">Agile / Scrum</span>
                <span className="px-2 py-0.5 rounded bg-surface-high text-on-surface">CI/CD</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1.5 pt-2">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Combat Fluency</span>
                <span className="text-on-surface font-bold">87%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-lowest overflow-hidden">
                <div className="h-full bg-primary-container/80 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <div className="w-full py-1 flex items-center justify-center opacity-70">
        <div className="w-full h-6 flex items-center justify-between text-outline-variant/40">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary-container/40"></div>
          <div className="px-4 flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-[18px] anim-ship">sailing</span>
            <span className="font-code text-[11px] tracking-widest uppercase text-outline">NAUTICAL BEARING // VOYAGES LOGBOOK</span>
            <span className="material-symbols-outlined text-[18px]">water</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary-container/40"></div>
        </div>
      </div>

      
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

        <div className="w-full p-8 rounded-xl bg-surface shadow-xl relative overflow-hidden border border-outline-variant/30">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary-container via-tertiary to-secondary"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 font-code text-xs">
                <span className="px-2.5 py-0.5 rounded bg-primary-container/20 text-primary font-bold uppercase tracking-wider border border-primary/20">
                  ACTIVE FLAGSHIP MISSION
                </span>
                <span className="text-on-surface-variant">EXPEDITION #01</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mt-1">
                Techspiration India Pvt. Ltd
              </h3>
              <p className="font-code text-sm text-primary font-medium">
                Software Engineer 2 (SDE-2) — Full Stack &amp; Mobile Architect
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-1 font-code text-xs">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-high text-tertiary font-bold border border-tertiary/20">
                <span className="material-symbols-outlined text-[16px]">event_available</span>
                JUNE 2024 – PRESENT
              </div>
              <span className="text-on-surface-variant">Bengaluru Fleet Headquarters</span>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 text-xs font-body">
            <div className="p-4 rounded-lg bg-surface-low flex flex-col gap-2 border border-outline-variant/20">
              <div className="flex items-center gap-2 text-primary font-code font-bold">
                <span className="material-symbols-outlined text-[18px]">web</span>
                <span>Frontend Mastery</span>
              </div>
              <p className="text-on-surface-variant">
                Engineered high-performance web interfaces in <strong className="text-on-surface">Next.js</strong> employing SSR and SSG to achieve optimal SEO ranking and sub-second page delivery across varying network conditions.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-surface-low flex flex-col gap-2 border border-outline-variant/20">
              <div className="flex items-center gap-2 text-tertiary font-code font-bold">
                <span className="material-symbols-outlined text-[18px]">devices_other</span>
                <span>Cross-Platform Fleet</span>
              </div>
              <p className="text-on-surface-variant">
                Crafted and deployed production mobile applications using <strong className="text-on-surface">Flutter &amp; React Native</strong>. Delivered cohesive cross-platform experiences paired with normalized state management.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-surface-low flex flex-col gap-2 border border-outline-variant/20">
              <div className="flex items-center gap-2 text-secondary font-code font-bold">
                <span className="material-symbols-outlined text-[18px]">hub</span>
                <span>Distributed Microservices</span>
              </div>
              <p className="text-on-surface-variant">
                Architected and deployed scalable <strong className="text-on-surface">Node.js &amp; Express</strong> microservices covering mission-critical modules: high-throughput booking engines, digital wallet transactions, and JWT authentication.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-surface-low flex flex-col gap-2 border border-outline-variant/20">
              <div className="flex items-center gap-2 text-primary font-code font-bold">
                <span className="material-symbols-outlined text-[18px]">storage</span>
                <span>Relational Schema Tuning</span>
              </div>
              <p className="text-on-surface-variant">
                Designed and maintained robust relational databases in <strong className="text-on-surface">PostgreSQL</strong> utilizing <strong className="text-on-surface">Prisma ORM</strong>. Implemented indexes, foreign key relationships, and query optimization.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-surface-low flex flex-col gap-2 border border-outline-variant/20">
              <div className="flex items-center gap-2 text-tertiary font-code font-bold">
                <span className="material-symbols-outlined text-[18px]">sensors</span>
                <span>Real-Time WebSockets</span>
              </div>
              <p className="text-on-surface-variant">
                Integrated bi-directional <strong className="text-on-surface">WebSocket protocols</strong> enabling instantaneous driver coordinates tracking, immediate order lifecycle status dispatches, and live telemetry dashboards.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-surface-low flex flex-col gap-2 border border-outline-variant/20">
              <div className="flex items-center gap-2 text-outline font-code font-bold">
                <span className="material-symbols-outlined text-[18px]">android</span>
                <span>Native Kotlin Daemons</span>
              </div>
              <p className="text-on-surface-variant">
                Engineered native <strong className="text-on-surface">Android Kotlin background services</strong>, ensuring driver telemetry and background ping loops continue uninterrupted even while the app is minimized.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <div className="w-full py-1 flex items-center justify-center opacity-70">
        <div className="w-full h-6 flex items-center justify-between text-outline-variant/40">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary-container/40"></div>
          <div className="px-4 flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-[18px] anim-ship">sailing</span>
            <span className="font-code text-[11px] tracking-widest uppercase text-outline">GRAND LINE CONQUESTS // 5 SHIPPED FLEETS</span>
            <span className="material-symbols-outlined text-[18px]">water</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary-container/40"></div>
        </div>
      </div>

      
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
          
          <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
            <div className="lg:w-7/12 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-code text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-surface-high text-primary font-bold uppercase border border-primary/30">
                    ISLAND: WATER 7 FINANCIAL DISTRICT
                  </span>
                  <span className="text-on-surface-variant">CONQUEST #01</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  TechInvest — Investment Management Platform
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  A high-velocity financial orchestration portal designed for managing investment-related products and financial portfolios. Features dynamic authentication flows, rapid transaction calculation graphs, sub-second client state updates, and clean modular component architecture.
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
                    <path d="M0 65 Q 40 50, 70 58 T 140 35 T 210 20 T 300 5 L 300 80 L 0 80 Z" fill="rgba(254, 186, 57, 0.08)"></path>
                  </svg>
                </div>
              </div>
              <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
                <span className="text-on-surface-variant">API RESPONSE BUDGET</span>
                <span className="text-tertiary font-bold">&lt; 85ms AVERAGE</span>
              </div>
            </div>
          </div>

          
          <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
            <div className="lg:w-7/12 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-code text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-surface-high text-tertiary font-bold uppercase border border-tertiary/30">
                    ISLAND: OHARA ACADEMY
                  </span>
                  <span className="text-on-surface-variant">CONQUEST #02</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">
                  Code Monsters (CodeMonsters.in) — EdTech Platform
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  High-conversion, interactive digital ecosystem for an elite tech training and placement bootcamp. Engineered complex UI animations, pixel-perfect designer prototype fidelity, and automated lead capture pipelines with server-side Excel export streams.
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
                <img className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500" alt="Code Monsters platform UI preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwMGTmOfCWUy6rsJLCRTEX6BVhaN05o7D_GMlwKZVKIozRmAminuo9Cb2QgXw73jWe3Bw4gpfdUqUBQuGosaF4zzFaa69JqHqrAFeOHe86hdoJykwAYFugDv8nDuTsJDs95CjzhqX-fbPXxQPnSMzlhOPxKfB1pLuRQ7o1228BfYAmQeFgYTiDSbWCosjBL-vvZfxv9oal-K10ExfXAKVzFueQbiM3dvxdSzalHf5unVhzMV3qhsztKw"/>
              </div>
              <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
                <span className="text-on-surface-variant">PERFORMANCE</span>
                <span className="text-tertiary font-bold">100% LIGHTHOUSE</span>
              </div>
            </div>
          </div>

          
          <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
            <div className="lg:w-7/12 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-code text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-surface-high text-secondary font-bold uppercase border border-secondary/30">
                    ISLAND: ENIES LOBBY COMMAND
                  </span>
                  <span className="text-on-surface-variant">CONQUEST #03</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-secondary transition-colors">
                  DriveGenie — Fleet Booking &amp; Live Tracking Triad
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  Tri-part transportation ecosystem comprising Customer Mobile App, Partner Driver App, and CRM Operational Dashboard for on-demand car bookings. Leveraged WebSockets for real-time driver telemetry and custom Android Kotlin background daemons for uninterrupted location transmission.
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
              <div className="w-full h-36 rounded bg-cover bg-center relative overflow-hidden flex items-center justify-center shadow-md" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCg3qHF3ZCIkSR7tXMvL5D2TbSIXW8hphxHEj9bgKahZqhu50SK4Wlbedfc_RLw3tPYNmNzQ0WhRRB6-XSU17KSHDe_rHhi7c8TQC-0ai4YWer4XWIHw5cjlMDegvJlnD5aX-ZkC_OkfH3AFuaFgcwSKhGO3uCvKY3KExGuRdI_Q_YAz5RGfUa2Gj-hgqHNRPOjGMPSyAoCXMraa5TPUkl5qWfFfJV7PPoBQGVwzdM3iVeU8v7byi-Q2w\')' }}>
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

          
          <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
            <div className="lg:w-7/12 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-code text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-surface-high text-primary font-bold uppercase border border-primary/30">
                    ISLAND: SABAODY ARCHIPELAGO
                  </span>
                  <span className="text-on-surface-variant">CONQUEST #04</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  BeBadge — Multi-Tier Event Management Ecosystem
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  Enterprise-scale conference and convention platform equipped with multi-tier role authorization (Master Admin, Organization, Exhibitor, Visitor). Powered by normalized Redux slices for instant badge generation, dynamic QR passes, and real-time attendance validation.
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
                <img className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500" alt="BeBadge accreditation dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8nwjMqzbeUXBlLHSXcXf3Kvxvm9_s9msQU9WyTo7gA9gRctLoEwR6RcaRET1S8jj2aruhLmMCN4s_XL7V5uGkfS5fMegeMGO8RCBAaE8uNZIMi4niCco44IKFcaD71WaOKKYsn9QmNw7mfUWeerHPWI5T2VG7XYDgqWCZ4Qi7_Svp6KLNy8fjPwvXhBji1C50JlxFdipWnGZI-HyBM8bhx15B6h279gpf2ZidSDewHjbSBUlJqA81oA"/>
              </div>
              <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
                <span className="text-on-surface-variant">QR SCAN RATE</span>
                <span className="text-primary font-bold">&lt; 150ms INSTANT</span>
              </div>
            </div>
          </div>

          
          <div className="w-full rounded-xl bg-surface p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-stretch justify-between gap-8 group border border-outline-variant/30">
            <div className="lg:w-7/12 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-code text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-surface-high text-outline font-bold uppercase border border-outline/30">
                    ISLAND: LOGUETOWN GATEWAY
                  </span>
                  <span className="text-on-surface-variant">CONQUEST #05</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-outline transition-colors">
                  TecheWorks — Corporate IT Solutions Platform
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  Enterprise digital portal for global IT solutions and cloud services. Engineered high-converting bespoke landing architecture, strict web accessibility (WCAG), responsive cross-device typography, and seamless content pipelines.
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
                <img className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500" alt="TecheWorks enterprise architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgiJmQtzRjhV7DGwxawPi4yqTyX8PW2ryR7A9sJnjeNggtdci4H9aCyXG7hkatwcgSLJufrq-aeocyKqe6HEoP3Kde0jaa_vBijMtLA1lefxyq5Itmdt6LVsvnTqExSfSK07YQoTt1kXsk6iE8MABiwNqObPRDhC_VqAI8W4_jS6gsMmld5XG_55fKaA-_HzcT6KG0OIxxwNWjOwxdTt5wyj2UCN-cKsrWj-wqP1t-pORtH8Pq6uGYw"/>
              </div>
              <div className="p-3 rounded bg-surface flex items-center justify-between font-code text-xs">
                <span className="text-on-surface-variant">ASSET LATENCY</span>
                <span className="text-outline font-bold">Sub-second CDN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
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
          
          <div className="lg:col-span-5 p-8 rounded-xl bg-surface flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden border border-outline-variant/30">
            <div className="flex flex-col gap-4">
              
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

              
              <div className="p-4 rounded-lg bg-surface-low border-l-2 border-primary-container flex flex-col gap-2 border border-outline-variant/20">
                <p className="text-xs italic text-on-surface leading-relaxed">
                  “Inherited Will, The Flow of Time, and The Dreams of Its People... Transmuted into clean code, resilient architecture, and the relentless drive to build exceptional software.”
                </p>
                <span className="font-code text-[11px] text-primary font-bold text-right">— Captain's Engineering Creed</span>
              </div>
            </div>

            
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

          
          <div className="lg:col-span-7 p-8 rounded-xl bg-surface shadow-xl flex flex-col justify-between gap-6 border border-outline-variant/30">
            <div className="flex flex-col gap-1">
              <span className="font-code text-xs text-primary uppercase font-bold tracking-widest">SIGNAL DISPATCH CONSOLE</span>
              <h3 className="font-headline text-lg font-bold text-on-surface">Send a High-Priority Message to the Ship</h3>
            </div>

            <form className="flex flex-col gap-4 font-body" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-code text-xs uppercase text-on-surface-variant font-medium">Captain / Recruiter Name</label>
                  <input className="px-4 py-2.5 rounded-lg bg-surface-high text-on-surface text-sm placeholder:text-outline-variant focus:outline-none border border-outline-variant/30 focus:border-primary" placeholder="e.g., Silvers Rayleigh" required type="text"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-code text-xs uppercase text-on-surface-variant font-medium">Den Den Mushi / Return Email</label>
                  <input className="px-4 py-2.5 rounded-lg bg-surface-high text-on-surface text-sm placeholder:text-outline-variant focus:outline-none border border-outline-variant/30 focus:border-primary" placeholder="fleet@venture.com" required type="email"/>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-code text-xs uppercase text-on-surface-variant font-medium">Mission Classification / Role Scope</label>
                <input className="px-4 py-2.5 rounded-lg bg-surface-high text-on-surface text-sm placeholder:text-outline-variant focus:outline-none border border-outline-variant/30 focus:border-primary" placeholder="e.g., Senior Full Stack / Mobile Cross-Platform Voyage" type="text"/>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-code text-xs uppercase text-on-surface-variant font-medium">Mission Details &amp; Coordinates</label>
                <textarea className="px-4 py-2.5 rounded-lg bg-surface-high text-on-surface text-sm placeholder:text-outline-variant focus:outline-none resize-none border border-outline-variant/30 focus:border-primary" placeholder="Describe your architecture requirements, crew roadmap, or engineering challenge..." required rows="4"></textarea>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-code text-xs">
                <span className="text-on-surface-variant flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
                  E2E Encrypted Marine Protocol
                </span>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-surface font-bold uppercase tracking-wider shadow-lg hover:bg-primary transition-all" type="submit">
                  <span className="material-symbols-outlined text-[17px]">send</span>
                  Transmit Dispatch
                </button>
              </div>
              {formStatus && <p className="text-primary text-xs" role="status">{formStatus}</p>}
            </form>
          </div>
        </div>
      </section>

      
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

    </div>
  </main>

  
  
  
  <footer className="w-full bg-surface-lowest py-10 border-t border-outline-variant/20 font-code text-xs">
    <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center md:items-start gap-1">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">explore</span>
          <span className="font-headline text-sm text-on-surface font-bold">Navigating the Grand Line of Web &amp; Mobile Architecture</span>
        </div>
        <p className="text-on-surface-variant text-[11px]">© 2024 Sharath K. Engineering Log. All coordinates cleared.</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-high border border-outline-variant/40">
          <span className="h-2 w-2 rounded-full bg-tertiary animate-ping"></span>
          <span className="text-tertiary uppercase text-[10px]">AVAILABLE FOR HIGH-IMPACT CREWS &amp; ROLES</span>
        </div>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com" rel="noreferrer" target="_blank">GitHub</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://linkedin.com" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </div>
  </footer>

    </>
  );
}

export default App;
