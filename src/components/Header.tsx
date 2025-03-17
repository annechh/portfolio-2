import { Link } from 'react-router-dom';
import logo from '../assets/HaugeDevLogo.svg';

export default function Header() {
  return (
    <header className="fixed w-screen px-5 md:px-10">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" className="h-12" />
        <nav className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
