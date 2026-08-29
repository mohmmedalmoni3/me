import { LangProvider, useLang } from './context/LangContext';
import { SmoothScrollProvider } from './context/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function Shell() {
  const { isRtl } = useLang();
  return (
    <div className={isRtl ? 'font-arabic' : 'font-display'}>
      <CustomCursor />
      <Nav />
      <HeroSection />
      <MarqueeSection />
      <main id="main">
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <LangProvider>
        <Shell />
      </LangProvider>
    </SmoothScrollProvider>
  );
}
