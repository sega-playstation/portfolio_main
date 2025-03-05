import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="hero" className="py-20">
          <Hero />
        </section>

        <section id="experience" className="py-20">
          <Experience />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="skills" className="py-20">
        <Skills />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </>
  );
}
