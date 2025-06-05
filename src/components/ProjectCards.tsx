import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectType } from '../types/commons';
import { useState } from 'react';
import { HiMiniArrowUturnLeft, HiMiniArrowUturnRight } from 'react-icons/hi2';

interface ProjectProps {
  project: ProjectType;
}

const ProjectCards = ({ project }: ProjectProps) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (window.innerWidth < 1280) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <Link to={`/project/${project.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="w-full h-full"
      >
        <div
          className={`group relative w-full h-[300px] sm:min-h-[300px] aspect-[1/1] [perspective:1000px]`}
        >
          <div
            className={`relative h-full w-full rounded-xl bg-dark shadow-sm transition-all duration-500 [transform-style:preserve-3d]
              ${flipped ? '[transform:rotateY(180deg)]' : ''}
              xl:group-hover:[transform:rotateY(180deg)]
            `}
          >
            {/* Front */}
            <div className="absolute inset-0 p-6 flex flex-col gap-6 rounded-xl backface-hidden">
              <div className="w-full max-h-[100px] overflow-hidden">
                <img src={project.logo.url} alt={project.logo.alt} className="w-full h-full" />
              </div>
              <div className="flex-1 flex flex-col gap-3 items-center justify-center text-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.assignment}</p>
              </div>
              <div className="w-full flex">
                <button
                  onClick={toggleFlip}
                  className="xl:hidden ml-auto mt-auto text-sm border border-sun cursor-pointer rounded p-2"
                >
                  <HiMiniArrowUturnRight className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 h-full w-full rounded-xl bg-dark [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center gap-4 p-6 shadow-pink">
              <h3 className="text-2xl font-bold text-pink">{project.title}</h3>
              <p className="text-lg">{project.shortDescription}</p>
              <div className="w-full flex mt-auto">
                <button
                  onClick={toggleFlip}
                  className="xl:hidden ml-auto mt-auto text-sm border border-pink cursor-pointer rounded p-2"
                >
                  <HiMiniArrowUturnLeft className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ProjectCards;
