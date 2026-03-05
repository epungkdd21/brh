import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import AboutSection from '@/components/AboutSection';
import WorksSection from '@/components/WorksSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuoteSection />
      <AboutSection />
      <WorksSection />
      <Footer />
    </main>
  );
}
