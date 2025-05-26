import ProjectCard from '../components/ProjectCard';
import { backgroundData, projectData } from '../assets/projectData';
import Background from '../components/Background';
import InfoCard from '../components/InfoCard';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Background image={backgroundData} />

      <section className="min-h-screen flex flex-col justify-center items-center bg-pink-400">
        <InfoCard />
      </section>

      <button className="max-w-[250px] px-10 py-3.5 rounded-full bg-purple-700">Test button</button>

      <section className="my-[100px] mx-10 flex flex-col justify-center items-center w-full gap-5 min-h-screen bg-deep-indigo">
        <h2 className="font-bold text-3xl text-shadow-[] ">My Projects</h2>
        <div className="card-wrapper gap-5 max-w-[1920px]">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center bg-green-400">
        <InfoCard />
      </section>
    </div>
  );
}

// <div className="flex flex-col justify-center items-center max-w-[1920px]">
//   <Background image={backgroundData} />

//   <section className="min-h-screen flex flex-col justify-center items-center bg-pink-400">
//     <InfoCard />
//   </section>

//   <button className="max-w-[250px] px-10 py-3.5 rounded-full bg-purple-700">Test button</button>

//   <section className="my-[100px] mx-10 flex flex-col gap-5 min-h-screen">
//     <h2 className="font-bold text-3xl text-shadow-[] ">My Projects</h2>
//     <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
//       {projectData.map((project) => (
//         <ProjectCard key={project.id} project={project} />
//       ))}
//     </div>
//   </section>

//   <section className="min-h-screen flex flex-col justify-center items-center bg-green-400">
//     <InfoCard />
//   </section>
// </div>
