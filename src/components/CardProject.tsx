import { Link } from 'react-router-dom';
import { ProjectType } from '../types/commons';

interface ProjectProps {
  project: ProjectType;
}

const CardProject: React.FC<ProjectProps> = ({ project }) => {
  return (
    <article className="card p-5 lg:p-10 rounded-3xl shadow-sm shadow-black grid lg:grid-cols-2  gap-5 lg:gap-10 bg-deep-indigo max-w-[1900px] w-full h-[550px]">
      <div className="img-container max-w-[880px] w-full h-full overflow-hidden rounded-3xl flex">
        <img
          src={project.media.url}
          alt={project.media.alt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="info-container flex flex-col gap-5 h-full">
        <h3 className="font-bold text-xl lg:text-5xl tracking-widest">{project.title}</h3>

        <div className="flex flex-col gap-5 h-full justify-between min-h-[200px]">
          <div className="description-container flex flex-col gap-5 text-2xl">
            {project.shortDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="icons-container">
            <div className="icon-wrapper flex justify-between gap-5 h-12">
              <Link
                to={project.liveDemo.link}
                target="_blank"
                className="button hoverButton hoverItem"
              >
                Live Demo
              </Link>
              <Link
                to={project.githubLink.link}
                target="_blank"
                className="button buttonHover hoverItem"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
