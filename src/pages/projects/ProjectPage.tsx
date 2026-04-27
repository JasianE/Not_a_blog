import doomspray from "../../assets/doomspray.png";
import portfolio from "../../assets/portfolio.png";
import DefinitionTooltip from "../../components/atoms/DefinitionTooltip";
import type { Card } from "../../app/slices/projects/projectApi";

function ProjectPage() {
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
  const handleClick = (item: Card) => { // Use blog type as project
    window.location.href = item.link;
  };

  return (
    <div className="mt-16">
        <h1>Projects</h1>
        <span>
          <h2 className="mt-6">
            <DefinitionTooltip
              term="Rice cooker method"
              definition="When you cook your rice with frozen veggies, discount meat, and your sacrificed taste buds, for optimized nutrition."
            />{" "}
            helped me make these
          </h2>
        </span>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((item) => (
            <div
            key={item.id}
            onClick={() => handleClick(item)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm 
                        hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
            {/* IMAGE */}
            <div className="h-40 w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <img
                src={
                    item.img 
                }
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400 line-clamp-3">
                {item.description ?? "No description provided."}
                </p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default ProjectPage;
