import { backgroundData } from '../assets/projectData';
import Background from '../components/Background';
import LOGO_ICON from '../assets/images/LogoIcon.svg';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Background image={backgroundData} />

      <section className="flex flex-col justify-center items-center gap-3 text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold ">Page is under production</h1>
        <p>Expected to be finished by June 8, 2025</p>
        <img src={LOGO_ICON} alt="HaugeDev logo icon" className="spin" />
      </section>
    </div>
  );
}
