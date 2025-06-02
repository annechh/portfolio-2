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
    <article className="card w-auto flex flex-col items-center gap-5">
      <div className="group h-[300px] w-[300px] xl:h-[350px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px] [perspective:1000px]">
        <div className="relative rounded-xl bg-dark shadow-sm h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 p-6 flex flex-col gap-6 rounded-xl">
            <div className="img-container h-[100px] md:h-[150px] w-full">
              <img src={project.media.url} alt={project.media.alt} className="w-full h-full" />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
          {/* Back */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-dark [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center gap-4 p-6 shadow-pink">
            <h3 className="text-2xl font-bold text-pink text-left">{project.title}</h3>

            <p className="text-lg">{project.shortDescription}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

// const ProjectCards = ({ project }: ProjectProps) => {
//   return (
//     <article className="card bg-dark shadow-sm h-[400px] w-auto flex flex-col items-center gap-5 p-6 hover:rotate-x-180 ">
//       <div>
//         <div className="img-container h-[100px] md:h-[150px] w-full">
//           <img src={project.media.url} alt={project.media.alt} className="w-full h-full" />
//         </div>
//         <div className="w-full">
//           <h3 className="text-xl md:text-2xl">{project.title}</h3>
//         </div>
//       </div>
//       <div>
//         <p className="text-base md:text-xl">{project.shortDescription}</p>
//       </div>
//     </article>
//   );
// };

export default ProjectCards;
