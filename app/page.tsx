import About from "@/components/About";
import EmployeeSlider from "@/components/EmployeeSlider";
import Hero from "@/components/Hero";
import ProjectsLink from "@/components/ProjectsLink";
import Services from "@/components/Services";

export default function Home() {
  return (
  <div>
    <Hero />
    <About />
    <ProjectsLink />
    <Services />
    <EmployeeSlider />
  </div>
  );
}
