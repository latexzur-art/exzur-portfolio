import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechtalStudios from "@/components/TechtalStudios";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <TechtalStudios />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
