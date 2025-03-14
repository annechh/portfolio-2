type cardImage = {
  props: string;
};

export default function Projects({ props }: cardImage) {
  return (
    <div>
      <div className="card">
        <div className="img-container">
          <img src={props} alt="Background photo" />
        </div>
      </div>
    </div>
  );
}
