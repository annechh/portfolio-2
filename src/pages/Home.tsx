import ProjectCard from '../components/ProjectCard';
import { backgroundData, projectData } from '../assets/projectData';
import Background from '../components/Background';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1920px]">
      <Background image={backgroundData} />
      <section className="my-[100px] mx-10 flex flex-col gap-5">
        <h2 className="font-bold text-3xl text-shadow-[] ">My Projects</h2>
        <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
