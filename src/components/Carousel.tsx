import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { projectData } from '../data/projectData';
import ProjectCards from './ProjectCards';
// import Autoplay from 'embla-carousel-autoplay';

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  // [Autoplay()]
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {projectData.map((project, index) => (
          <div
            className="embla__slide max-h-[1000px] py-10 flex items-center justify-center"
            key={index}
          >
            <ProjectCards project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
