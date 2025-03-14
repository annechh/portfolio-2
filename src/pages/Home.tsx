import Projects from '../components/Projects';
import bgImage from '../assets/ramsdalsnipa.jpg';
import Background from '../components/Background';
import SA from '../assets/SA.png';
import SCM from '../assets/SCM.png';
import SE from '../assets/SE.png';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Background props={bgImage} />
      <div className="card-wrapper grid grid-cols-3 gap-5">
        <Projects props={SA} />
        <Projects props={SCM} />
        <Projects props={SE} />
      </div>
    </div>
  );
}
