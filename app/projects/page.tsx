import { client } from '@/sanity/lib/client';
import { ProjectCard } from '@/components/ProjectCard';
import project from '@/types/project';

async function getData() {
  const query = `*[_type == "project"]{
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      startDate,
      endDate,
      team[]->{
        _id,
        name,
        position,
        "photoUrl": photo.asset->url
      }
    }`

const data = await client.fetch(query);

return data;
  
}

export default async function ProjectPage() {
  const data = await getData();

  return (
    <div className="container mx-auto px-4 py-40">
      <div className="text-3xl font-bold mb-6 text-center">Our Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((project :project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            team={project.team} startDate={project.startDate} endDate={project.endDate}
            />
        ))}
      </div>
    </div>
  );
}