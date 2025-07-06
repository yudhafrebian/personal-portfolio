import AboutSection from "@/view/about-section/page";
import HeroSection from "@/view/hero-section/page";
import ProjectSection from "@/view/project-section/page";
import MyServiceSection from "@/view/service-section/page";

export default function Home() {
  return (
   <main>
    <HeroSection />
    <AboutSection />
    <MyServiceSection />
    <ProjectSection />
   </main>
  );
}
