import { Link } from 'react-router-dom';
import logo from '../assets/images/HaugeDevLogo.svg';

export default function Header() {
  return (
    <header className="fixed flex w-full h-[60px] lg:h-[100px] px-5 md:px-10 backdrop-blur-[20px] z-50">
      <nav className="flex justify-between items-center w-full gap-5 text-sm ">
        <img src={logo} alt="logo" className="h-[40px] w-[75px] lg:h-[80px] lg:w-[150px]" />

        <ul className="flex gap-5 text-base lg:text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
