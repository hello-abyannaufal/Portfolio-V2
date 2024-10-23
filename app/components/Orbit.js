import OrbitingCircles from "@/components/ui/orbiting-circles";
import {
  FaGithub,
  FaGitlab,
  FaGitAlt,
  FaVuejs,
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaUser,
  FaJava,
} from "react-icons/fa";

export default function Orbit() {
  planets.forEach((planet, index) => {
    if (planet.orbit == "inner") {
      renderList.push(
        <OrbitingCircles
          className="border-none bg-transparent"
          duration={config.duration}
          delay={config.delayPlanet.inner}
          radius={config.radius.inner}
          key={index}
        >
          <a href={planet.link}>{planet.icon}</a>
        </OrbitingCircles>
      );
      config.delayPlanet.inner += config.delay;
    } else if (planet.orbit == "middle") {
      renderList.push(
        <OrbitingCircles
          className="border-none bg-transparent"
          duration={config.duration}
          delay={config.delayPlanet.middle}
          radius={config.radius.middle}
          key={index}
          reverse
        >
          <a href={planet.link}>{planet.icon}</a>
        </OrbitingCircles>
      );
      config.delayPlanet.middle += config.delay;
    } else {
      renderList.push(
        <OrbitingCircles
          className="border-none bg-transparent"
          duration={config.duration}
          delay={config.delayPlanet.outer}
          radius={config.radius.outer}
          key={index}
        >
          <a href={planet.link}>{planet.icon}</a>
        </OrbitingCircles>
      );
      config.delayPlanet.outer += config.delay;
    }
  });

  return (
    <div className="relative flex h-full w-screen -translate-x-1/2 lg:scale-125 xl:scale-[1.3] items-center justify-center rounded-lg">
      {/* <span className="hover:uppercase pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black"> */}
      <FaUser className="text-9xl opacity-85" />
      {/* </span> */}
      {renderList}
    </div>
  );
}

const planetStyle =
  "text-[40px] transition-transform duration-300 ease-in-out transform hover:scale-150 opacity-80 active:scale-100 ";
const planets = [
  {
    icon: <FaJsSquare className={planetStyle} />,
    link: "",
    orbit: "inner",
  },
  {
    icon: <FaPython className={planetStyle} />,
    link: "",
    orbit: "inner",
  },
  {
    icon: <FaJava className={planetStyle} />,
    link: "",
    orbit: "inner",
  },
  {
    icon: <FaGithub className={planetStyle} />,
    link: "https://github.com/hello-abyannaufal",
    orbit: "middle",
  },
  {
    icon: <FaGitlab className={planetStyle} />,
    link: "",
    orbit: "middle",
  },
  {
    icon: <FaGitAlt className={planetStyle} />,
    link: "",
    orbit: "middle",
  },
  {
    icon: <FaVuejs className={planetStyle} />,
    link: "",
    orbit: "outer",
  },
  {
    icon: <FaReact className={planetStyle} />,
    link: "",
    orbit: "outer",
  },
  {
    icon: <FaHtml5 className={planetStyle} />,
    link: "",
    orbit: "outer",
  },
];

let renderList = [];

let config = {
  delayPlanet: {
    inner: 0,
    middle: 0,
    outer: 0,
  },
  radius: {
    inner: 120,
    middle: 220,
    outer: 320,
  },
  duration: 30,
  delay: 10,
};
