import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectType } from '../types/commons';

interface ProjectProps {
  project: ProjectType;
}

const ProjectCards = ({ project }: ProjectProps) => {
  return (
    <Link to={`/project/${project.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="w-full h-full"
      >
        <div className="group relative w-full aspect-[3/2] sm:aspect-[1/1] [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl bg-dark shadow-sm transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 p-6 flex flex-col gap-6 rounded-xl">
              <div className="w-full max-h-[150px] overflow-hidden">
                <img src={project.logo.url} alt={project.logo.alt} className="w-full h-full" />
              </div>
              <div className="flex-1 flex flex-col gap-3 items-center justify-center text-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.assignment}</p>
              </div>
            </div>

            <div className="absolute inset-0 h-full w-full rounded-xl bg-dark [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center gap-4 p-6 shadow-pink">
              <h3 className="text-2xl font-bold text-pink">{project.title}</h3>
              <p className="text-lg">{project.shortDescription}</p>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ProjectCards;
