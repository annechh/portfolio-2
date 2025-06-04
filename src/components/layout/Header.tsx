import logo from '../../assets/svgs/HaugeDevLogo.svg';
import ScrollButtons from '../utils/ScrollButtons';
import { IoIosArrowUp } from 'react-icons/io';
import { useScroll } from '../../context/scrollContext';

const sections = ['home', 'projects', 'about', 'toolkit'];

export default function Header() {
  const { activeLink } = useScroll();

  const currentIndex = sections.indexOf(activeLink);
  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null;

  return (
    <header className="fixed flex w-full h-[60px] lg:h-[100px] px-5 md:px-10 backdrop-blur-[20px] z-40">
      <div className="relative w-full">
        <nav className="flex justify-between items-center w-full gap-5 text-sm ">
          <img src={logo} alt="logo" className="h-[40px] w-[75px] lg:h-[80px] lg:w-[150px]" />

          <ul className="flex gap-5 text-base lg:text-lg">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={`${activeLink === id ? 'text-pink' : 'cursor-pointer'} transition-colors duration-200`}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {previousSection && (
          <div className="absolute top-0 w-full flex justify-center items-center h-[50px] mt-[60px] lg:mt-[100px]">
            <ScrollButtons scrollTo={previousSection} icon={<IoIosArrowUp className="text-4xl" />} />
          </div>
        )}
      </div>
    </header>
  );
}
