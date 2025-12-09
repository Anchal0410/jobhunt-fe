// src/app/page.js
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedJobs from '@/components/FeaturedJobs';
import HowItWorks from '@/components/HowItWorks';
import TopCompanies from '@/components/TopCompanies';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedJobs />
      <HowItWorks />
      <TopCompanies />
      <Footer />
    </main>
  );
}