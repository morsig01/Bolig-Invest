import About from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { EmployeeSlider } from "@/components/EmployeeSlider";
import Hero from "@/components/Hero";
import ProjectsLink from "@/components/ProjectsLink";
import Services from "@/components/Services";
import VideoPlayer from "@/components/VideoPlayer";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `*[_type == "employee"] {
    _id,
    name,
    position,
    "photo": photo.asset->url
}`

const data = await client.fetch(query);

return data;
  
}

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
