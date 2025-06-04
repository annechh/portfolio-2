import { motion } from 'framer-motion';
import { introductionData } from '../data/data';
import GlowDot from '../assets/images/glow-dot.png';
import ScrollButtons from './utils/ScrollButtons';
import { IoIosArrowDown } from 'react-icons/io';

export default function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row justify-between xl:justify-center items-center gap-10 w-full h-full bg-dark"
    >
      <div className="min-h-screen flex flex-col lg:flex-row justify-between xl:justify-center items-center gap-10 w-full px-5 sm:px-8 lg:px-10 h-full max-w-[1920px] ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col h-full overflow-hidden mb-[50px] lg:mb-0"
        >
          <div className="relative max-w-[500px] lg:max-w-[600px] w-full h-auto">
            <img
              src={GlowDot}
              alt="glow effect"
              className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
            />

            <img
              src={introductionData.media.url}
              alt={introductionData.media.alt}
              className="w-full h-full object-cover relative z-10"
            />

            <div className="absolute mb-[-1px] bottom-0 left-0 w-full h-32 z-20 bg-gradient-to-t from-dark to-dark/0" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center items-center h-[50px] mb-[50px] z-50">
        <ScrollButtons scrollTo="projects" icon={<IoIosArrowDown className="text-4xl" />} />
      </div>
    </div>
  );
}
