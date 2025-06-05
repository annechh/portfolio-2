import { projectData } from '../data/projectData';
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center w-full min-h-screen px-6 py-[70px] lg:py-[150px]"
    >
      <h2 className="pb-2 text-2xl lg:text-[40px] font-bold w-full max-w-[1260px] text-shadow-sm">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 max-w-[1260px] border-t border-white-faded py-6">
        {projectData.map((project) => (
          <ProjectCards key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
