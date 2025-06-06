import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center w-full bg-dark px-6 py-[70px] lg:py-[150px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
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
        className="flex flex-col-reverse md:flex-row max-w-[1260px] h-full w-full border-y border-white/50 mb-[100px]"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="flex flex-col self-center md:self-end max-w-[500px] w-full h-full"
        >
          <img
            src={aboutData.media.url}
            alt={aboutData.media.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="max-w-[740px] w-full p-6">
          <p className="lg:text-xl mb-4 whitespace-pre-line"> {aboutData.description}</p>
          <div className="flex gap-3">
            <Link
              to={aboutData.connect.linkedIn}
              target="_blank"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin className="text-pink text-3xl" />
            </Link>
            <Link to={aboutData.connect.instagram} target="_blank" aria-label="Visit my Instagram">
              <FaInstagram className="text-pink text-3xl" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
