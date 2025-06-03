import { projectData } from '../assets/projectData';
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen px-6 my-[60px]">
      <h2 className="pb-2 text-2xl lg:text-[40px] font-bold text-pink w-full max-w-[1260px]">
        MY PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 max-w-[1260px] border-t border-white-faded py-6">
        {projectData.map((project) => (
          <ProjectCards key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
