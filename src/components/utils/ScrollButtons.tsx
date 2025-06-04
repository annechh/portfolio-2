import { Link } from 'react-scroll';

type ScrollButtonProps = {
  scrollTo: string;
  icon: React.ReactNode;
};

const ScrollButtons = ({ scrollTo, icon }: ScrollButtonProps) => {
  return (
    <Link
      to={scrollTo}
      duration={500}
      className="cursor-pointer w-20 h-[50px] flex justify-center items-end animate-bounce"
    >
      {icon}
    </Link>
  );
};

export default ScrollButtons;
