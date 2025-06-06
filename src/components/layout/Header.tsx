import logo from '../../assets/svgs/HaugeDevLogo.svg';
import ScrollButtons from '../utils/ScrollButtons';
import { IoIosArrowUp } from 'react-icons/io';
import { useScroll } from '../../context/scrollContext';
import { useEffect, useRef, useState } from 'react';

import { Menu, XIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const sections = ['home', 'projects', 'about', 'tech'];

export default function Header() {
  const { activeLink } = useScroll();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentIndex = sections.indexOf(activeLink);
  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null;

  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed flex w-full h-[60px] lg:h-[100px]  backdrop-blur-[20px] z-40">
      <div className="relative w-full self-center ">
        <nav className=" flex justify-between items-center w-full gap-5 text-sm px-5 md:px-10">
          <Link to={'/#home'}>
            <img src={logo} alt="logo" className="h-[40px] w-[75px] lg:h-[80px] lg:w-[150px]" />
          </Link>

          <ul className="hidden lg:flex gap-5 text-base lg:text-lg text-shadow-sm">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  className={`${activeLink === id ? 'text-pink' : 'cursor-pointer'} transition-colors duration-200`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
          <div
            ref={menuRef}
            className={`absolute lg:hidden top-[-10px] right-0  min-h-screen bg-dark shadow-sm w-40 px-5 md:px-10 pt-[18px] flex flex-col gap-4 z-40 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <button
              className="text-2xl cursor-pointer self-end"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <XIcon />
            </button>
            <ul className="flex flex-col gap-4 pt-[50px]">
              {isMenuOpen &&
                sections.map((id) => (
                  <li key={id} className="self-end">
                    <a
                      href={`/#${id}`}
                      className={`${activeLink === id ? 'text-pink' : 'cursor-pointer'} transition-colors duration-200 h-6`}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </nav>

        {isHome && previousSection && (
          <div className="absolute top-0 w-full flex justify-center items-center h-[50px] mt-[60px] lg:mt-[100px]">
            <ScrollButtons
              scrollTo={previousSection}
              icon={<IoIosArrowUp className="text-4xl" />}
            />
          </div>
        )}
      </div>
    </header>
  );
}
