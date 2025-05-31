import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { projectData } from '../assets/projectData';
// import CardProject from './CardProject';
import ProjectCard from './ProjectCard';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselProps {
  projectType: string;
}

const Carousel: React.FC<CarouselProps> = ({ projectType }) => {
  const project = projectType === 'firstYear' ? projectData.firstYear : projectData.secondYear;

  console.log(project);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  // [Autoplay()]
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {project.map((project, index) => (
          <div className="embla__slide max-h-[1000px] flex items-center justify-center" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// import { useEffect } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import { projectData } from '../assets/projectData';
// import CardProject from './CardProject';
// import Autoplay from 'embla-carousel-autoplay';

// const Carousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   [Autoplay()]
//   useEffect(() => {
//     if (emblaApi) {
//       console.log(emblaApi.slideNodes());
//     }
//   }, [emblaApi]);

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         {projectData.firstYear.map((project, index) => (
//           <div
//             className="embla__slide max-h-[1000px] py-10 flex items-center justify-center"
//             key={index}
//           >
//             <CardProject project={project} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
