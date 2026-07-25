import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Miscellaneous from "@/components/Miscellaneous";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { contactInfo, socials } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tamilarasan S",
  jobTitle: "Artificial Intelligence & Machine Learning Developer",
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
    "Internet of Things"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="relative z-10 bg-black">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Miscellaneous />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
