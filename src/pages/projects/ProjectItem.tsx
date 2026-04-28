
import { useParams } from "react-router";
import doomspray from "../../assets/doomspray.png";
import portfolio from "../../assets/portfolio.png";

function ProjectItem() {
  let { projectKey } = useParams();

   const data = [
  {
    title: "Engagemint",
    description: "An embedded Raspberry Pi cam + React dashboard that analyzes real time student engagement. GDG 2026 Mac-a-thon 1st place winner!",
    img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/268/669/datas/gallery.jpg",
    link: "https://devpost.com/software/engagemint",
    id: 1
  },
  {
    title: "MovieTime",
    description: "Webpage for sharing movie recommendations w/ your friends :)",
    img: "https://ssb.wiki.gallery/images/thumb/9/9e/ESAM_with_Pikachu.jpg/1200px-ESAM_with_Pikachu.jpg",
    link: "https://github.com/JasianE/MovieTime",
    id: 2
  },
  {
    title: "WasteMan",
    description: "React dashboard with live analysis + embedded raspberry pi cam w/ real time food monitoring constraints. Deerhacks 2026 1st place winner!",
    img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/389/023/datas/original.jpeg",
    link: "https://devpost.com/software/thewasteman",
    id: 3
  },
  {
    title: "AroundU",
    description: "Making campus connection even easier. Built fully with generative AI using the MCP protocol!",
    img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/437/737/datas/original.png",
    link: "https://devpost.com/software/campuspulse-mgyufq",
    id: 4
  },
  {
    title: "UtraHacks Path Following Robot",
    description: "A big test on how to apply what I learned in embedded development + an introduction to control systems! ",
    img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/231/619/datas/gallery.jpg",
    link: "https://devpost.com/software/goon-machine",
    id: 5
  }, 
  {
    title: "Doomspray",
    description: "My first ever hardware project / hack! Coolest expereince eva",
    img: doomspray,
    link: "https://dorahacks.io/buidl/26394",
    id: 6
  },
  {
    title: "My old high school portfolio!",
    description: "My first portfolio I made after finishing The Odin Project, my first foray into programming. Has all my old projects!",
    img: portfolio,
    link: "https://portfoliojunli.web.app/",
    id: 7
  }
];

  if(!projectKey){
    projectKey = "1";
  }

  const projectOfInterest = data?.find((item) => item.id == parseInt(projectKey, 10));

  const handleClick = () => {
    if (projectOfInterest?.img) {
      window.location.href = projectOfInterest.link;
    }
  };


  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center">
        {projectOfInterest?.title}
      </h1>

      {/* IMAGE */}
      <div className="mt-6 sm:mt-8 lg:mt-10 w-full max-w-2xl rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-neutral-700">
        <img src={projectOfInterest?.img} alt={projectOfInterest?.title}></img>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleClick}
        className="
          mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base
          bg-blue-600 text-black hover:bg-blue-700
          transition shadow-sm hover:shadow-md
        "
      >
        View Project
      </button>
    </div>
  );
}

export default ProjectItem;
