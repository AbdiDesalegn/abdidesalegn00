import {
  Navigation,
  HeroSection,
  AboutSection,
  ProjectsSection,
  BlogSection,
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
      <ProjectsSection />
      <div className="py-32"></div>
      <BlogSection />
      <div className="py-32"></div>
      <EducationSection />
      <div className="py-32"></div>
      <ContactSection />
      <Footer />
    </main>
  );
}