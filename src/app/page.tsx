import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import OurServices from "@/components/OurServices";
import CompletedProjects from "@/components/CompletedProjects";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ImpactStats from "@/components/ImpactStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandMarquee />
      {/* 1st Tab in Nav: Our Services */}
      <OurServices />
      {/* 2nd Tab in Nav: Portfolio */}
      <CompletedProjects />
      {/* 3rd Tab in Nav: Who Are We */}
      <AboutSection />
      {/* 4th Tab in Nav: Team */}
      <TeamSection />
      {/* Impact Stats Banner */}
      <ImpactStats />
      {/* 5th Tab in Nav: Contact Us */}
      <ContactSection />
      {/* Footer */}
      <Footer />
      {/* Floating Interactive Chatbot Widget */}
      <Chatbot />
    </main>
  );
}
