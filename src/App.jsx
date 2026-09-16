import VoyageHUD from './components/VoyageHUD.jsx'
import Navbar from './components/Navbar.jsx'
import OceanHorizon from './components/OceanHorizon.jsx'
import Hero from './components/Hero.jsx'
import ProfileSection from './components/ProfileSection.jsx'
import ArsenalSection from './components/ArsenalSection.jsx'
import SectionDivider from './components/SectionDivider.jsx'
import JourneySection from './components/JourneySection.jsx'
import TreasuresSection from './components/TreasuresSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      {/* Floating Voyage Progress HUD (Luffy's Ship Sailing on Scroll) */}
      <VoyageHUD />

      <Navbar />

      <main className="w-full pt-20 relative overflow-hidden">
        {/* Grand Line Ocean Horizon with layered waves & cruising Sunny */}
        <OceanHorizon />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 flex flex-col gap-16 relative z-10">
          <Hero />
          <ProfileSection />
          <ArsenalSection />

          <SectionDivider label="NAUTICAL BEARING // VOYAGES LOGBOOK" />
          <JourneySection />

          <SectionDivider label="GRAND LINE CONQUESTS // 5 SHIPPED FLEETS" />
          <TreasuresSection />

          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  )
}
