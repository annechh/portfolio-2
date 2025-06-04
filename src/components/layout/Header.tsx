import { Link } from 'react-scroll';
import logo from '../../assets/svgs/HaugeDevLogo.svg';
import { useState } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState<string>('home');

  return (
    <header className="fixed flex w-full h-[60px] lg:h-[100px] px-5 md:px-10 backdrop-blur-[20px] z-50">
      <nav className="flex justify-between items-center w-full gap-5 text-sm ">
        <img src={logo} alt="logo" className="h-[40px] w-[75px] lg:h-[80px] lg:w-[150px]" />

        <ul className="flex gap-5 text-base lg:text-lg">
          <li>
            <Link
              to="home"
              duration={500}
              spy={true}
              className={activeLink === 'home' ? 'text-pink' : 'cursor-pointer'}
              onSetActive={() => setActiveLink('home')}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              duration={500}
              spy={true}
              className={activeLink === 'projects' ? 'text-pink' : 'cursor-pointer'}
              onSetActive={() => setActiveLink('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              duration={500}
              spy={true}
              className={activeLink === 'about' ? 'text-pink' : 'cursor-pointer'}
              onSetActive={() => setActiveLink('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="tech"
              duration={500}
              spy={true}
              className={activeLink === 'tech' ? 'text-pink' : 'cursor-pointer'}
              onSetActive={() => setActiveLink('tech')}
            >
              Toolkit
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
