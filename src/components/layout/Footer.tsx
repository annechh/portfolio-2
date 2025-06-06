import ScrollButtons from '../utils/ScrollButtons';
import { IoIosArrowDown } from 'react-icons/io';
import { useScroll } from '../../context/scrollContext';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const { activeLink } = useScroll();
  const sections = ['home', 'projects', 'about', 'tech'];

  const location = useLocation();
  const isHome = location.pathname === '/';

  const currentIndex = sections.indexOf(activeLink);
  const nextSection =
    currentIndex >= 0 && currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <footer className="flex justify-center items-center w-full h-[50px] text-xs fixed bottom-0 border-t border-white/50 backdrop-blur-[20px] z-50">
      <div className="relative w-full flex justify-center items-center">
        <p>Copyright © Hauge Dev</p>
      </div>

      {isHome && nextSection && (
        <div className="absolute bottom-0 w-full flex justify-center items-center h-[50px] mb-[50px] z-50">
          <ScrollButtons scrollTo={nextSection} icon={<IoIosArrowDown className="text-4xl" />} />
        </div>
      )}
    </footer>
  );
}
