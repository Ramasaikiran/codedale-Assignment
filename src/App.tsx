
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/ui/FloatingCTA';
import { Hero } from '@/components/sections/Hero';

import { CaseStudyCarousel } from '@/components/sections/CaseStudyCarousel';
import { LogosStrip } from '@/components/sections/LogosStrip';
import { WorksGrid } from '@/components/sections/WorksGrid';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 selection:bg-brand-100 selection:text-brand-700">
      <Navbar />

      <main>
        <Hero />
        <LogosStrip />
        <CaseStudyCarousel />
        <WorksGrid />

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
