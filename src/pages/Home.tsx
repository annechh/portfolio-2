import { projectData } from '../assets/projectData';

import ProjectCards from '../components/ProjectCards';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Hero />

      <section className="flex flex-col justify-center items-center w-full min-h-screen bg-[#1d1d1d] px-6">
        <h2 className="pb-2 text-2xl lg:text-[40px] font-bold text-pink w-full max-w-[1260px]">
          MY PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 max-w-[1260px] border-t py-6">
          {projectData.map((project) => (
            <ProjectCards key={project.id} project={project} />
          ))}
        </div>
      </section>

      <About />
    </div>
  );
};

export default Home;
