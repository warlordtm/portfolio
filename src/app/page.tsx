import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
