import { motion } from 'framer-motion';
import { aboutMeData } from '../data/data';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center w-full bg-dark px-6 py-[70px] lg:py-[150px]">
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="pb-2 text-2xl lg:text-[40px] font-bold text-pink w-full max-w-[1260px]"
      >
        ABOUT ME
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="flex flex-col-reverse md:flex-row max-w-[1260px] h-full w-full border-y border-white-faded mb-[100px]"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="flex flex-col self-center md:self-end max-w-[500px] w-full h-full"
        >
          <img src={aboutMeData.media.url} alt={aboutMeData.media.alt} className="w-full h-full object-cover" />
        </motion.div>
        <div className="max-w-[740px] w-full p-6">
          {aboutMeData.description.split('\n\n').map((para, index) => (
            <p key={index} className="lg:text-xl mb-4">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
