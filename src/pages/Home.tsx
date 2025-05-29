import ProjectCard from '../components/ProjectCard';
import { backgroundData, projectData } from '../assets/projectData';
import Background from '../components/Background';
// import InfoCard from '../components/InfoCard';
import Carousel from '../components/Carousel';
import Introduction from '../components/Introduction';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Background image={backgroundData} />

      <Introduction />

      <button className="max-w-[250px] px-10 py-3.5 rounded-full bg-purple-700">Test button</button>

      <section className="my-[100px] flex flex-col justify-center items-center w-full min-h-screen bg-deep-indigo">
        <div className="flex max-w-[1000px] bg-amber-300"></div>
      </section>

      <section className="flex flex-col justify-center items-center w-full h-screen">
        <h2 className="text-3xl lg:text-5xl tracking-widest font-bold">My projects</h2>
        <Carousel />
      </section>

      <section className="my-[100px] mx-10 flex flex-col justify-center items-center w-full gap-5 min-h-screen bg-deep-indigo">
        <h2 className="font-bold text-3xl">My Projects</h2>
        <div className="card-wrapper gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1920px] px-5">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center bg-green-400">
        {/* <InfoCard /> */}
      </section>
    </div>
  );
}
