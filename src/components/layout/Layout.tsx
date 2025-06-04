import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="font-primary text-white flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex flex-grow flex-col items-center justify-center w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
