import { Link } from 'react-router-dom';
import logo from '../assets/images/HaugeDevLogo.svg';

export default function Header() {
  return (
    <header className="fixed flex w-full h-16 px-5 md:px-10 backdrop-blur-[20px] z-50">
      <nav className="flex justify-between items-center w-full gap-5 text-sm ">
        <img src={logo} alt="logo" className="h-12" />

        <ul className="flex gap-5">
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
