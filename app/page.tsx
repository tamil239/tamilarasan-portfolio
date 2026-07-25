import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CertificationsAchievements from "@/components/CertificationsAchievements";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { contactInfo, socials } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tamilarasan S",
  jobTitle: "Artificial Intelligence & Data Science Student",
  email: contactInfo.email,
  telephone: contactInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sivakasi",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN"
  },
  sameAs: [socials.github, socials.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Dr. Mahalingam College of Engineering and Technology"
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Data Science",
    "Internet of Things"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <ScrollReveal />
      <BackgroundCanvas />
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <CertificationsAchievements />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
