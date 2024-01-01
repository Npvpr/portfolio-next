export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5 lg:mb-10">
        <img className="w-52 rounded-full lg:w-72" src="/images/me.jpeg" />
      </div>
      <div className="mb-2 lg:mb-5">
        <b className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
          Naing Lin Maung
        </b>
      </div>
      <div className="md:text-2xl lg:text-3xl xl:text-4xl">
        Junior Software Developer
      </div>
    </div>
  );
}
