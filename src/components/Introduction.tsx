import { introductionData } from '../assets/data';
import GlowDot from '../assets/images/glow-dot.png';

export default function Introduction() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center gap-10 max-w-3xl lg:max-w-7xl xl:max-w-[1920px] w-full px-5 lg:px-10 h-full ">
        <div className="flex flex-col max-w-3xl lg:max-w-7xl xl:max-w-[1650px] z-20">
          <p className="text-base md:text-2xl lg:text-3xl text-shadow-sm pb-2 md:pb-4">
            {introductionData.intro1}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-shadow-sm text-pink">
            {introductionData.title}
          </h1>
          <p className="text-xs md:text-sm text-shadow-sm pt-1 md:pt-2">
            {introductionData.intro2}
          </p>
        </div>

        <div className="absolute flex right-0 bottom-0 h-full overflow-visible">
          <div className="relative self-end max-w-[500px] lg:max-w-[800px] mb-[50px] w-full h-auto z-10">
            <img
              src={introductionData.media.url}
              alt={introductionData.media.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <img
            src={GlowDot}
            alt="glow effect"
            className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          />
        </div>
      </div>
      <div className="absolute bg-gradient-to-t from-dark to-dark/0 flex flex-col bottom-0 w-full h-20 mb-[50px] z-20"></div>
    </>
  );
}
