type Props = {
  image: string;
  title: string;
  description: string;
};

const Projects: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div>
      <div className="card">
        <div className="img-container">
          <img src={image} alt="Background photo" />
        </div>
        <div className="info-container">
          <h3>{title}</h3>
          <div className="description-container flex flex-col gap-5">
            {description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
