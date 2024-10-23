import Orbit from "./components/Orbit";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col lg:flex-row-reverse">
        <div className="w-screen lg:w-7/12 xl:w-8/12 h-2/12 flex items-center mt-10 justify-center lg:justify-start lg:z-10 md:p-0">
          <div className="grid gap-y-1 text-center lg:text-left lg:gap-y-6">
            <div className="text-5xl lg:text-7xl xl:text-8xl">Hello World!</div>
            <div className="text-3xl lg:text-5xl xl:text-6xl">
              My name is Abyannaufal
            </div>
            <div className="text-xl lg:text-3xl xl:text-4xl">
              Im a Frontend Developer
            </div>
          </div>
        </div>
        <div className="h-full lg:w-5/12 xl:w-4/12">
          <Orbit />
        </div>
      </div>
      nice
    </div>
  );
}
