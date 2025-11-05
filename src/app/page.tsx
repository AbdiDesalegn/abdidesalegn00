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
                image: [
                  `${SITE_URL}/profile-photo.png`,
                  `${SITE_URL}/og-image.png`
                ],
                jobTitle: "Software Engineer",
                description: "Computer Science and Engineering graduate passionate about development, physics, and cybersecurity.",
                knowsAbout: [
                  "Software Engineering",
                  "Web Development",
                  "Mobile Development",
                  "Computational Physics",
                  "Cybersecurity"
                ],
                alumniOf: {
                  "@type": "EducationalOrganization",
                  name: "Addis Ababa University"
                },
                sameAs: [
                  "https://github.com/AbdiDesalegn",
                  "https://www.linkedin.com/in/abdidesalegn",
                  "https://t.me/abdidesalegn"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Abdi Desalegn - Portfolio",
                url: SITE_URL,
                image: `${SITE_URL}/og-image.png`,
                description: "Computer Science and Engineering graduate passionate about development, physics, and cybersecurity.",
                author: {
                  "@type": "Person",
                  name: "Abdi Desalegn"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Abdi Desalegn",
                url: SITE_URL,
                logo: [
                  `${SITE_URL}/logo.svg`,
                  `${SITE_URL}/icon-512.png`
                ],
                image: `${SITE_URL}/profile-photo.png`,
                founder: {
                  "@type": "Person",
                  name: "Abdi Desalegn"
                }
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