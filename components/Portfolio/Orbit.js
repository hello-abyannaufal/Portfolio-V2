import OrbitingCircles from "@/components/ui/orbiting-circles";
import { FaReact, FaXTwitter } from "react-icons/fa6";
import { ImTerminal } from "react-icons/im";
import {
  FaGithub,
  FaJsSquare,
  FaPython,
  FaUser,
  FaJava,
  FaLinkedin,
  FaKaggle,
  FaInstagram,
  FaDiscord,
  FaVuejs,
  FaGit,
} from "react-icons/fa";

export default function Orbit() {
  renderList = [];
  let { inner, middle, outer } = delayPlanet(planets, config);

  planets.map((planet, index) => {
    if (planet.orbit == "inner") {
      renderList.push(
        <OrbitingCircles
          className="border-none bg-transparent"
          duration={config.duration}
          delay={config.delayPlanet.inner}
          radius={config.radius.inner}
          key={index}
        >
          <a href={planet.link} target="_blank" rel="noopener noreferrer">
            {planet.icon}
          </a>
        </OrbitingCircles>
      );
      config.delayPlanet.inner += inner;
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
          <a href={planet.link} target="_blank" rel="noopener noreferrer">
            {planet.icon}
          </a>
        </OrbitingCircles>
      );
      config.delayPlanet.middle += middle;
    } else {
      renderList.push(
        <OrbitingCircles
          className="border-none bg-transparent"
          duration={config.duration}
          delay={config.delayPlanet.outer}
          radius={config.radius.outer}
          key={index}
        >
          <a href={planet.link} target="_blank" rel="noopener noreferrer">
            {planet.icon}
          </a>
        </OrbitingCircles>
      );
      config.delayPlanet.outer += outer;
    }
  });

  return (
    <div className="relative flex h-full w-screen -translate-x-1/2 lg:scale-125 xl:scale-[1.3] items-center justify-center rounded-lg">
      <a
        href="https://drive.google.com/file/d/1kqznw2FQdLmC7URcaSUp0W0TTWvoevUS/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaUser className="text-9xl transition-transform duration-300 ease-in-out transform hover:scale-110 opacity-80 active:scale-100" />
      </a>
      {renderList}
    </div>
  );
}

function delayPlanet(planets, config) {
  // Group By Orbit Categories
  const categories = planets.reduce(
    (acc, cur) =>
      Object.assign(acc, {
        [cur.orbit]: (acc[cur.orbit] || 0) + 1,
      }),
    {}
  );
  return {
    inner: config.duration / categories.inner,
    middle: config.duration / categories.middle,
    outer: config.duration / categories.outer,
  };
}

const planetStyle =
  "text-[40px] transition-transform duration-300 ease-in-out transform hover:scale-150 opacity-80 active:scale-100 ";
const planets = [
  {
    icon: <FaGithub className={planetStyle} />,
    link: "https://github.com/hello-abyannaufal",
    orbit: "inner",
  },
  {
    icon: <FaKaggle className={planetStyle} />,
    link: "https://www.kaggle.com/abyannaufal27",
    orbit: "inner",
  },
  {
    icon: <FaLinkedin className={planetStyle} />,
    link: "https://www.linkedin.com/in/abyannaufal27/",
    orbit: "inner",
  },
  {
    icon: <FaXTwitter className={planetStyle} />,
    link: "https://x.com/abyannaufal27/",
    orbit: "middle",
  },
  {
    icon: <FaInstagram className={planetStyle} />,
    link: "https://www.instagram.com/abyannaufal27/",
    orbit: "middle",
  },
  {
    icon: <FaDiscord className={planetStyle} />,
    link: "https://discord.com/users/489782785230503967",
    orbit: "middle",
  },
  {
    icon: <FaJsSquare className={planetStyle} />,
    link: "https://www.javascript.com/",
    orbit: "outer",
  },
  {
    icon: <FaVuejs className={planetStyle} />,
    link: "https://vuejs.org/",
    orbit: "outer",
  },
  {
    icon: <FaReact className={planetStyle} />,
    link: "https://react.dev/",
    orbit: "outer",
  },
  {
    icon: <FaPython className={planetStyle} />,
    link: "https://www.python.org/",
    orbit: "outer",
  },
  {
    icon: <ImTerminal className={planetStyle} />,
    link: "https://learn.microsoft.com/en-us/windows/wsl/",
    orbit: "outer",
  },
  {
    icon: <FaGit className={planetStyle} />,
    link: "https://git-scm.com/",
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
};
