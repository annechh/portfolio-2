import { MediaType } from '../types/commons';

interface BackgroundProps {
  image: MediaType;
}

const Background: React.FC<BackgroundProps> = ({ image }) => {
  return (
    <div className="fixed inset-0 -z-10 flex flex-col justify-center w-full min-h-screen">
      <img
        src={image.url}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#21072778]"></div>
    </div>
  );
};

export default Background;
