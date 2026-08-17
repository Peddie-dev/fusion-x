import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d12]">
      <Navbar />
      <Hero />
      <Capabilities />
      <Work />
      <Approach />
      <Impact />
      <About />
      <Contact />
      <FinalCta />
      <Footer />
    </div>
  );
}