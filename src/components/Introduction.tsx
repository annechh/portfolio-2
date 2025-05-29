import { introductionData } from '../assets/data';

export default function Introduction() {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center gap-10 max-w-3xl lg:max-w-7xl xl:max-w-[1650px] w-full px-5 lg:px-10">
      <div className="">
        <p className="text-base md:text-3xl lg:text-4xl">{introductionData.intro1}</p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">{introductionData.title}</h1>
        <p className="">{introductionData.intro2}</p>
      </div>
      <div className="max-w-[200px] lg:max-w-[300px] w-full h-full rounded-full overflow-hidden">
        <img
          src={introductionData.media.url}
          alt={introductionData.media.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
