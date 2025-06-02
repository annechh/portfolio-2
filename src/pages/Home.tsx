import { aboutMeData } from '../assets/data';
import { projectData } from '../assets/projectData';

// import Background from '../components/Background';
import Introduction from '../components/Introduction';
import ProjectCards from '../components/ProjectCards';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* <Background image={backgroundData} /> */}

      <Introduction />

      <section className="flex flex-col justify-center items-center w-full min-h-screen bg-[#1d1d1d] py-16">
        <h2 className="h-14 text-[40px] font-bold text-pink w-full max-w-[300px] md:max-w-[624px] lg:max-w-[948px] xl:max-w-[1098px] 2xl:max-w-[1260px]">
          MY PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1260px] border-t py-6">
          {projectData.map((project) => (
            <ProjectCards key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center w-full bg-dark">
        <h2 className="h-14 text-[40px] font-bold text-pink w-full max-w-[1260px] px-6">
          ABOUT ME
        </h2>
        <div className="flex max-w-[1260px] h-full w-full border-y px-6">
          {/* <div className="flex flex-col self-end h-full"> */}
          <div className="flex flex-col self-end max-w-[500px] w-full h-full">
            <img
              src={aboutMeData.media.url}
              alt={aboutMeData.media.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {/* </div> */}
          <div className="max-w-[740px] w-full p-6">
            {aboutMeData.description.split('\n\n').map((para, index) => (
              <p key={index} className="lg:text-xl mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
