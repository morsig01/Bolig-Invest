import About from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { EmployeeSlider } from "@/components/EmployeeSlider";
import Hero from "@/components/Hero";
import ProjectsLink from "@/components/ProjectsLink";
import Services from "@/components/Services";
import VideoPlayer from "@/components/VideoPlayer";


export default function Home() {
  return (
    <>
    <Hero />
    <VideoPlayer 
      src="sample-video.mp4"
    />
    <About />
    <ProjectsLink />
    <Services />
    <EmployeeSlider />
    <ContactForm />
    </>
  );
}
