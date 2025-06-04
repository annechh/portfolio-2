import { motion } from 'framer-motion';

interface ProjectProps {
  project: {
    title: string;
    shortDescription: string;
    media: {
      url: string;
      alt: string;
    };
  };
}

const ProjectCards = ({ project }: ProjectProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="w-full h-full"
    >
      <div className="group relative w-full aspect-[3/2] sm:aspect-[1/1] [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl bg-dark shadow-sm transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 p-6 flex flex-col gap-6 rounded-xl">
            <div className="w-full max-h-[100px] overflow-hidden">
              <img src={project.media.url} alt={project.media.alt} className="w-full h-full" />
            </div>
            <div className="flex-1 flex items-center justify-center text-center">
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>

          <div className="absolute inset-0 h-full w-full rounded-xl bg-dark [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center gap-4 p-6 shadow-pink">
            <h3 className="text-2xl font-bold text-pink">{project.title}</h3>
            <p className="text-lg">{project.shortDescription}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCards;
