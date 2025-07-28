import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CompanyValues from './components/CompanyValues';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main className="relative pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CompanyValues />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
