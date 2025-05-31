// import { Link } from 'react-router-dom';
import { ProjectType } from '../types/commons';

interface ProjectProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="h-full w-full bg-deep-indigo">
      <div className="card p-5 bg-test shadow-sm rounded flex flex-col gap-5 h-full">
        <div className="img-container  w-full h-full overflow-hidden">
          <img
            src={project.media.url}
            alt={project.media.alt}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="info-container flex flex-col gap-5 h-full flex-1/3">
          <h3 className="font-bold text-2xl">{project.title}</h3>
          <div className="flex flex-col gap-5 h-full justify-between">
            <div className="description-container flex flex-col gap-5">
              {project.shortDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="">
                  {paragraph}
                </p>
              ))}
              {/* <button className="button onHover mt-auto">Read more</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
