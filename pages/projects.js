import ProjectsFlexbox from "@/components/ProjectsFlexbox";
import Link from "next/link";

export default function ProjectsPage() {
  // Set images around 1918x965
  const mainProjects = [
    {
      title: "Ecommerce Website",
      description: "An ecommerce website written in Next.js.",
      image: "/images/ecommerce.png",
      github_link: "https://github.com/Npvpr/ecommerce-front",
      website_link: "https://ecommerce-front-npvpr.vercel.app/",
    },
    {
      title: "Auction Website",
      description: "An auction website written in Django.",
      image: "/images/auction.png",
      github_link: "https://github.com/Npvpr/Commerce",
      website_link: "",
    },
    {
      title: "Easy Table",
      description: "Manipulate database with UI, written in Flask.",
      image: "/images/easytable.png",
      github_link: "https://github.com/Npvpr/Easy-Table",
      website_link: "",
    },
  ];
  const smallProjects = [
    {
      title: "Rock Paper Scissors",
      description: "Simple rock paper scissors game written in JavaScript.",
      image: "/images/rockpaperscissors.png",
      github_link: "https://github.com/Npvpr/rock-paper-scissors",
      website_link: "https://npvpr.github.io/rock-paper-scissors/",
    },
    {
      title: "Etch-a-sketch",
      description:
        "Sketch simple pixel drawings on this website, written in JavaScript.",
      image: "/images/etchasketch.png",
      github_link: "https://github.com/Npvpr/etch-a-sketch",
      website_link: "https://npvpr.github.io/etch-a-sketch/",
    },
    {
      title: "Calculator",
      description: "Simple calculator, written in JavaScript.",
      image: "/images/calculator.png",
      github_link: "https://github.com/Npvpr/calculator",
      website_link: "https://npvpr.github.io/calculator/",
    },
    {
      title: "Robot Run",
      description: "Simple Mario like platform game, written in JavaScript.",
      image: "/images/robotrun.png",
      github_link: "https://github.com/Npvpr/itp1-gameproject",
      website_link: "https://npvpr.github.io/itp1-gameproject/",
    },
  ];
  return (
    <div className=" m-5 lg:m-10">
      <Link
        className=" fixed -m-2 flex justify-center rounded-xl bg-neutral-400 px-6 py-2 hover:bg-neutral-200"
        href="/"
      >
        <div>Back</div>
      </Link>

      <div className="flex justify-center">
        <div className="mb-2 text-2xl md:text-3xl lg:text-4xl">Projects</div>
      </div>

      <div className="mb-10 flex w-full justify-center">
        <ProjectsFlexbox projects={mainProjects} />
      </div>

      <div className="flex justify-center">
        <div className="mb-2 text-2xl md:text-3xl lg:text-4xl">
          Small Projects
        </div>
      </div>

      <div className="flex w-full justify-center">
        <ProjectsFlexbox projects={smallProjects} />
      </div>
    </div>
  );
}
