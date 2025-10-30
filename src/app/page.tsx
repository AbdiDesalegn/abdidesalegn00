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

const SITE_URL = "https://abdidesalegn.vercel.app";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Abdi Desalegn",
                url: SITE_URL,
                image: `${SITE_URL}/profile-photo.png`,
                jobTitle: "Software Engineer",
                sameAs: [
                  "https://github.com/AbdiDesalegn",
                  "https://www.linkedin.com/in/abdidesalegn",
                  "https://t.me/abdidesalegn"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Abdi Desalegn",
                url: SITE_URL
              }
            ],
            null,
            2
          )
        }}
      />
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