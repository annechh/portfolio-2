import { motion } from 'framer-motion';
import { introductionData } from '../data/aboutData';

export default function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row justify-between xl:justify-center items-center gap-10 w-full h-full bg-dark"
    >
      <div className="min-h-screen flex flex-col lg:flex-row justify-between xl:justify-center items-center gap-10 w-full px-5 sm:px-8 lg:px-10 h-full max-w-[1920px] ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="flex flex-col justify-center items-start flex-1 pt-[15vh] lg:pt-0 z-20 lg:min-w-[500px]"
        >
          <p className="text-base md:text-2xl lg:text-3xl text-shadow-sm pb-2 md:pb-4">
            {introductionData.intro1}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-shadow-sm text-pink">
            {introductionData.title}
          </h1>
          <p className="text-xs md:text-base text-shadow-sm pt-1 md:pt-2">
            {introductionData.intro2}
          </p>
        </motion.div>

        <div className="flex flex-col h-full overflow-hidden mb-[50px] lg:mb-0">
          <div className="relative max-w-[500px] lg:max-w-[600px] w-full h-auto">
            <img
              src={introductionData.media.url}
              alt={introductionData.media.alt}
              className="w-full h-full object-cover relative z-10"
            />

            <div className="absolute mb-[-1px] bottom-0 left-0 w-full h-32 z-20 bg-gradient-to-t from-dark to-dark/0" />
          </div>
        </div>
      </div>
    </div>
  );
}
