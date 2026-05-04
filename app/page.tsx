import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Evolution from "@/components/Evolution";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
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
        <Positioning />
        <Evolution />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
