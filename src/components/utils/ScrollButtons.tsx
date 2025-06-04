type ScrollButtonProps = {
  scrollTo: string;
  icon: React.ReactNode;
};

const ScrollButtons = ({ scrollTo, icon }: ScrollButtonProps) => {
  const handleClick = () => {
    const el = document.getElementById(scrollTo);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer w-20 h-[50px] flex justify-center items-center animate-bounce"
      aria-label={`Scroll to ${scrollTo}`}
    >
      {icon}
    </button>
  );
};

export default ScrollButtons;
