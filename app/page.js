import Orbit from "./components/Orbit";
import SparklesText from "@/components/ui/spakles-text";
import WordRotate from "@/components/ui/word-rotate";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col lg:flex-row-reverse">
        <div className="w-screen lg:w-7/12 xl:w-8/12 h-2/12 flex items-center mt-10 justify-center lg:justify-start lg:z-10 md:p-0">
          <div className="grid gap-y-1 text-center lg:text-left lg:gap-y-6">
            <div className="text-5xl lg:text-7xl xl:text-8xl">Hello World!</div>
            <div className="text-3xl lg:text-5xl xl:text-6xl flex flex-row">
              <span>My name is</span>
              <span>
                <SparklesText
                  text="Abyannaufal"
                  sparklesCount={7}
                  colors={{ first: "#FFFFFF", second: "#FE8FB5" }}
                  className="text-3xl lg:text-5xl xl:text-6xl font-light ml-3"
                />
              </span>
            </div>
            <div className="text-xl lg:text-3xl xl:text-4xl flex flex-row items-center">
              Im a
              <WordRotate
                className="text-xl lg:text-3xl xl:text-4xl ml-3"
                words={["Frontend Developer", "Data Enthusiast"]}
              />
            </div>
          </div>
        </div>
        <div className="h-full lg:w-5/12 xl:w-4/12">
          <Orbit />
        </div>
      </div>
    </div>
  );
}
