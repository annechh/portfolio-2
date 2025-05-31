// import ProjectCard from '../components/ProjectCard';
import { backgroundData, projectData } from '../assets/projectData';
import Background from '../components/Background';
// import Carousel from '../components/Carousel';
import Introduction from '../components/Introduction';
import { useState } from 'react';
import Carousel from '../components/Carousel';

type ProjectCategory = keyof typeof projectData;

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectCategory>('secondYear');

  // const displayProjects = projectData[selectedProject];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Background image={backgroundData} />

      <Introduction />

      {/* <section className="mx-10 flex flex-col justify-center items-center w-full gap-5 min-h-screen px-5">
        <h2 className="font-bold text-3xl">My Projects</h2>
        <div className="flex">
          <div className="card-wrapper gap-5 flex max-w-[1920px] w-full overflow-y-scroll">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="min-h-screen flex flex-col justify-center items-center gap-10 max-w-[1420px] w-full">
        <h2 className="font-bold text-3xl">My Projects</h2>
        <div className="flex flex-row gap-5 max-w-[1200px]">
          <div className="flex flex-col gap-5 w-full px-5 lg:px-10">
            <button
              className={`projectButton ${selectedProject === 'secondYear' ? 'selectedProjectButton' : ''}`}
              onClick={() => setSelectedProject('secondYear')}
            >
              Second year
            </button>
            <button
              className={`projectButton ${selectedProject === 'firstYear' ? 'selectedProjectButton' : ''}`}
              onClick={() => setSelectedProject('firstYear')}
            >
              First year
            </button>
          </div>
          <Carousel projectType={selectedProject} />
        </div>
      </section> */}

      <section className="min-h-screen flex flex-col justify-center items-center gap-10 max-w-[1420px] w-full">
        <h2 className="font-bold text-3xl">My Projects</h2>

        <div className="flex flex-col w-full px-5 lg:px-10 relative ">
          {/* Slider background */}
          <div className="relative  w-full h-[60px]  overflow-hidden">
            <div
              className={`absolute top-0 h-full w-1/2 bg-yellow transition-transform duration-300 ease-in-out ${
                selectedProject === 'firstYear' ? 'translate-x-full' : 'translate-x-0'
              }`}
            />
            <div className="button-wrapper flex w-full h-full  z-10">
              <button
                onClick={() => setSelectedProject('secondYear')}
                className={`projectButton text-shadow-sm ${selectedProject === 'secondYear' ? 'selectedProjectButton' : ''}`}
              >
                Second year
              </button>
              <button
                onClick={() => setSelectedProject('firstYear')}
                className={`projectButton text-shadow-sm ${selectedProject === 'firstYear' ? 'selectedProjectButton' : ''}`}
              >
                First year
              </button>
            </div>
          </div>
        </div>

        <Carousel projectType={selectedProject} />
      </section>
    </div>
  );
}
