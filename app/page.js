import Orbit from "../components/Portfolio/Orbit";
import SparklesText from "@/components/ui/sparkles-text";
import WordRotate from "@/components/ui/word-rotate";
import TypingAnimation from "@/components/ui/typing-animation";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Home() {
  function dateRange(alpha, omega) {
    let range = (omega.getFullYear() - alpha.getFullYear()) * 12;
    range -= alpha.getMonth();
    range += omega.getMonth();
    let month = range <= 0 ? 0 : range;
    let result = `${Math.floor(month / 12)} year ${month % 12} month`;
    return result;
  }

  let alpha = new Date("December 05, 2022 00:00:00");
  let omega = new Date();
  let delta = dateRange(alpha, omega);

  let about = (
    <div className="flex flex-col gap-y-6 justify-center my-28">
      <div className="text-2xl font-bold lg:text-3xl xl:text-4xl text-center ">
        Hello viewer, welcome!
      </div>
      <div className="w-10/12 xl:w-7/12 mx-auto text-xl text-center xl:text-justify leading-loose">
        <div>
          I’m Mohamad Abyannaufal, but you can call me Naufal. Currently, I work
          at Sarana Pactindo LLC as a Frontend Web Developer for about {delta}.
          I have been involved in Web Admin and Internet Business Banking Admin
          projects for various clients in Indonesia.
        </div>
        <div>
          I enjoy brainstorming during coding sessions and possess an insatiable
          curiosity. I also love discussing programming topics with my
          colleagues.
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* HERO SECTION */}
      <div className="w-screen h-screen flex flex-col lg:flex-row-reverse">
        <div className="w-screen lg:w-7/12 xl:w-8/12 h-2/12 flex items-center mt-10 xl:mt-0 justify-center lg:justify-start lg:z-10">
          <div className="grid gap-y-1 text-center lg:text-left lg:gap-y-3">
            <GradualSpacing
              className="text-5xl lg:text-7xl xl:text-8xl -tracking-widest leading-loose"
              text="Hello World!"
            />
            {/* <div className="text-5xl lg:text-7xl xl:text-8xl">Hello World!</div> */}
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
            <div className="text-xl flex flex-row lg:text-3xl xl:text-4xl justify-center xl:justify-start items-center">
              Im a
              <WordRotate
                className="text-xl lg:text-3xl xl:text-4xl ml-3"
                words={["Frontend Developer", "Data Enthusiast", "Dreamer"]}
              />
            </div>
          </div>
        </div>
        <div className="h-full lg:w-5/12 xl:w-4/12">
          <Orbit />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <VelocityScroll
        text="About Me -"
        default_velocity={2}
        className="my-16 font-display text-white text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]"
        slot={about}
      />
    </div>
  );
}
