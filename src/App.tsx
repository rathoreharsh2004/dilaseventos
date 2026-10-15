import { Navbar } from './components/navigation/Navbar.tsx';
import { HeroContent } from './components/hero/HeroContent.tsx';
import { ManifestoSection } from './components/sections/ManifestoSection.tsx';
import { ExperiencesSection } from './components/sections/ExperiencesSection.tsx';
import { TransformationScene } from './components/three/TransformationScene.tsx';
import { PortfolioSection } from './components/sections/PortfolioSection.tsx';
import { ProcessSection } from './components/sections/ProcessSection.tsx';
import { CinematicInterlude } from './components/sections/CinematicInterlude.tsx';
import { WhyDilasSection } from './components/sections/WhyDilasSection.tsx';
import { InstagramProofSection } from './components/sections/InstagramProofSection.tsx';
import { EnquirySection } from './components/sections/EnquirySection.tsx';
import { Footer } from './components/footer/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f4efe8] flex flex-col font-sans-luxury selection:bg-[#d4a96b]/30 selection:text-[#fbf8f3]">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with 3D Cinematic Atmosphere */}
        <HeroContent />

        {/* Brand Manifesto */}
        <ManifestoSection />

        {/* 5 Signature Experience Categories */}
        <ExperiencesSection />

        {/* The Signature 3D Transformation Experience */}
        <TransformationScene />

        {/* Portfolio & Lightbox Gallery */}
        <PortfolioSection />

        {/* How We Create Your Event (4 Steps) */}
        <ProcessSection />

        {/* Cinematic Interlude */}
        <CinematicInterlude />

        {/* Why Dilas Eventos (Service Commitments) */}
        <WhyDilasSection />

        {/* Social Proof & Instagram @dilas.eventos */}
        <InstagramProofSection />

        {/* Enquiry Experience & WhatsApp Integration */}
        <EnquirySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
