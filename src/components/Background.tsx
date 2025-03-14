type BackgroundImage = {
  props: string;
};

export default function Background({ props }: BackgroundImage) {
  return (
    <div className="fixed inset-0 -z-10 flex flex-col justify-center w-full min-h-screen">
      <img
        src={props}
        alt="Ramsdalsnipa mountain"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#21072778]"></div>
    </div>
  );
}
