import { introductionData } from '../assets/data';

export default function Introduction() {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center gap-10 max-w-3xl lg:max-w-7xl xl:max-w-[1650px] w-full px-5 lg:px-10">
      <div className="flex flex-col">
        <p className="text-base md:text-2xl lg:text-3xl text-shadow-sm pb-2 md:pb-4">
          {introductionData.intro1}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-shadow-sm">
          {introductionData.title}
        </h1>
        <p className="text-xs md:text-sm text-shadow-sm pt-1 md:pt-2">{introductionData.intro2}</p>
      </div>
      <div className="max-w-[200px] lg:max-w-[300px] w-full h-full rounded-full overflow-hidden shadow-sm">
        <img
          src={introductionData.media.url}
          alt={introductionData.media.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
