import Hero from '../components/Hero';
import About from '../components/About';
import Tech from '../components/Tech';
import Projects from '../components/Projects';
import Background from '../components/Background';
import { backgroundData } from '../data/projectData';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Background image={backgroundData} />

      <Hero />
      <Projects />
      <About />
      <Tech />
    </div>
  );
};

export default Home;
