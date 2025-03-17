import Projects from '../components/Projects';
import { projectData } from '../assets/projectData';
import bgImage from '../assets/ramsdalsnipa.jpg';
import Background from '../components/Background';

export default function Home() {
  console.log(projectData);

  return (
    <div className="flex flex-col justify-center items-center">
      <Background props={bgImage} />
      <div className="card-wrapper h-screen grid grid-cols-1 gap-5 my-[100px]">
        {projectData.map((project) => (
          <Projects
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
