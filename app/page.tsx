import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Evolution from "@/components/Evolution";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Evolution />
        <Experience />
        <Achievements />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
