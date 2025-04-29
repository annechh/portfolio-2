import { ProjectType } from '../types/commons';

interface ProjectProps {
  project: ProjectType;
}

const Projects: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      <div className="card p-5 bg-faded-purple rounded flex flex-col gap-5 ">
        <div className="img-container">
          <img src={project.media.url} alt={project.media.alt} className="w-full" />
        </div>
        <div className="info-container flex flex-col gap-5">
          <h3 className="font-bold text-2xl">{project.title}</h3>
          <div className="description-container flex flex-col gap-5">
            {project.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
