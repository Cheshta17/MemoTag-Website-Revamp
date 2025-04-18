import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import ProblemSection from "@/components/sections/problem-section";
import SolutionSection from "@/components/sections/solution-section";
import TractionSection from "@/components/sections/traction-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TractionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
