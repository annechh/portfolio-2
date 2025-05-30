import { Link } from 'react-router-dom';
import { ProjectType } from '../types/commons';

interface ProjectProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="h-full rounded-full">
      <div className="card p-5 bg-test shadow-sm shadow-white-faded onHover rounded flex flex-col gap-5 h-full">
        <div className="img-container">
          <img src={project.media.url} alt={project.media.alt} className="w-full" />
        </div>
        <div className="info-container flex flex-col gap-5 h-full">
          <h3 className="font-bold text-2xl">{project.title}</h3>

          <div className="flex flex-col gap-5 h-full justify-between min-h-[240px]">
            <div className="description-container flex flex-col gap-5">
              {project.description.split('\n').map((paragraph, index) => (
                <p key={index} className="line-clamp-1">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="icons-container">
              <div className="icon-wrapper flex flex-wrap gap-5">
                <Link to={project.liveDemo.link} target="_blank">
                  <div className="flex items-center gap-2 hover:bg-[var(--color-purple-light)] px-3 py-2 rounded-full">
                    <div className="h-10 w-10">
                      <img src={project.icons.url} alt={project.icons.alt} />
                    </div>
                    <p>Live Demo</p>
                  </div>
                </Link>
                <Link to={project.githubLink.link} target="_blank">
                  <div className="flex items-center gap-2 hover:bg-[var(--color-purple-light)] px-3 py-2 rounded-full">
                    <div className="h-10 w-10 rounded-full overflow-hidden border-1 border-[#EABEE6]">
                      <img
                        src={project.githubMedia.url}
                        alt={project.githubMedia.alt}
                        className="bg-[#EABEE6]"
                      />
                    </div>
                    <p>GitHub Repo</p>
                  </div>
                </Link>
              </div>

              <div className="icon-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
