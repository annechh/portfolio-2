import { Link, useParams } from 'react-router-dom';
import { projectData } from '../data/projectData';
import { ProjectType } from '../types/commons';
import { MdContentCopy } from 'react-icons/md';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeExit } from '../constants/constants';
import { IoArrowBackOutline } from 'react-icons/io5';

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project: ProjectType | undefined = projectData.find((project) => project.id === id);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <motion.div
      variants={fadeExit}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex justify-center py-[60px] lg:py-[100px]"
    >
      {project ? (
        <div className="max-w-[1000px] w-full flex flex-col p-6 lg:p-10 bg-dark shadow-sm">
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5">
            <div className="flex-1/2">
              <div className="flex flex-col justify-between h-full gap-5">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest">
                  {project?.title}
                </h1>
                <div className="flex gap-3 ">
                  {project?.tech?.map((tech) => (
                    <span key={tech.id} className="text-lg md:text-3xl">
                      {tech.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1/2 w-full h-full">
              <img src={project.media.url} alt={project.media.alt} />
            </div>
          </div>
          <div className="pt-2 pb-5 flex w-full relative">
            <button
              type="button"
              aria-label="Copy link"
              onClick={handleCopyLink}
              className={`p-2 rounded border border-sun transition transform duration-200 ml-auto cursor-pointer ${
                copied ? 'scale-90 opacity-60 bg-sun text-black' : 'scale-100 opacity-100'
              }`}
            >
              <MdContentCopy size={20} />
            </button>
            <span
              className={`absolute right-10 text-sm transition-opacity duration-300 self-center ${
                copied ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Copied!
            </span>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="px-3">{project.description}</p>
              </div>
              {project.fixes && (
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-bold">Fixes</h2>
                  <p className="px-3">{project.fixes}</p>
                </div>
              )}
            </div>

            <div className="flex gap-5">
              <Link to={project.liveDemoLink} target="_blank" className="button">
                Live Demo
              </Link>
              <Link to={project.githubLink} target="_blank" className="button">
                GitHub Repo
              </Link>
            </div>
          </div>
          <Link to={'/#projects'} className="flex items-center gap-1 h-[30px] mt-5">
            <IoArrowBackOutline /> Back to projects
          </Link>
        </div>
      ) : (
        <p>Project not found.</p>
      )}
    </motion.div>
  );
};

export default ProjectPage;
