import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Background from '../Background';
import { backgroundData } from '../../data/projectData';

export default function Layout() {
  return (
    <div className="font-primary text-white flex flex-col min-h-screen w-full">
      <Background image={backgroundData} />
      <Header />
      <main className="flex flex-grow flex-col items-center justify-center w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
