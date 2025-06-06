import Hero from '../components/Hero';
import About from '../components/About';
import Tech from '../components/Tech';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';
import { fadeExit } from '../constants/constants';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Home = () => {
  useScrollToHash();

  return (
    <motion.div
      variants={fadeExit}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col justify-center items-center w-full"
    >
      <Hero />
      <Projects />
      <About />
      <Tech />
    </motion.div>
  );
};

export default Home;
