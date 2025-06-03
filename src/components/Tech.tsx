import { motion } from 'framer-motion';
import { techData } from '../assets/data/tech';

const Tech = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center w-full px-6"
    >
      <h2 className="pb-2 text-2xl lg:text-[40px] font-bold text-pink w-full max-w-[1260px]">
        MY TOOLKIT
      </h2>
      <div className="flex flex-col max-w-[1260px] h-full w-full border-t border-white-faded mb-[100px]">
        <ul className="flex justify-center gap-10 flex-wrap py-10">
          {techData.map((tech) => (
            <li className="flex items-center gap-2 text-xl" key={tech.id}>
              {tech.icon}
              <p>{tech.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Tech;
