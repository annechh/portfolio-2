import { projectData } from '../data/projectData';
import { motion } from 'framer-motion';
import ProjectCards from './ProjectCards';
import ScrollButtons from './utils/ScrollButtons';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center w-full min-h-screen gap-5 px-6 py-[70px] lg:py-[150px]"
    >
      <div className="absolute top-0 w-full flex justify-center items-center h-[50px] mt-[60px] lg:mt-[100px]">
        <ScrollButtons scrollTo="home" icon={<IoIosArrowUp className="text-4xl" />} />
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-center h-[50px] mb-[50px]">
        <ScrollButtons scrollTo="about" icon={<IoIosArrowDown className="text-4xl" />} />
      </div>

      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="pb-2 text-2xl lg:text-[40px] font-bold text-pink w-full max-w-[1260px]"
      >
        MY PROJECTS
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 max-w-[1260px] border-t border-white-faded py-6">
        {projectData.map((project) => (
          <ProjectCards key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
