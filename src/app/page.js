import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-slate-100">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
      <Footer />
    </main>
  );
}
