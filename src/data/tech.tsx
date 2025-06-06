import { DiGithubBadge, DiHtml5, DiJsBadge, DiReact, DiVisualstudio } from 'react-icons/di';
import { FaFigma } from 'react-icons/fa';
import { SiCss3, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';

export const techData = [
  {
    id: 'HTML',
    name: 'HTML',
    icon: <DiHtml5 />,
  },
  {
    id: 'CSS',
    name: 'CSS',
    icon: <SiCss3 />,
  },
  {
    id: 'javaScript',
    name: 'JavaScript',
    icon: <DiJsBadge />,
  },
  {
    id: 'tailwindCSS',
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
  },
  {
    id: 'react',
    name: 'React',
    icon: <DiReact />,
  },
  {
    id: 'vsCode',
    name: 'VS Code',
    icon: <DiVisualstudio />,
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: <SiVite />,
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: <FaFigma />,
  },
  {
    id: 'gitHub',
    name: 'GitHub',
    icon: <DiGithubBadge />,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
];
