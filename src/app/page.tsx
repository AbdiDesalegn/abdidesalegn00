import {
  Navigation,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  CertificatesSection,
  EducationSection,
  ContactSection,
  Footer
} from '@/components';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="py-32"></div>
      <AboutSection />
      <div className="py-32"></div>
      <ExperienceSection />
      <div className="py-32"></div>
      <ProjectsSection />
      <div className="py-32"></div>
      <CertificatesSection />
      <div className="py-32"></div>
      <EducationSection />
      <div className="py-32"></div>
      <ContactSection />
      <Footer />
    </main>
  );
}