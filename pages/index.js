import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import ProjectsFlexbox from "@/components/ProjectsFlexbox";
import Tools from "@/components/Tools";

export default function Home() {
  const mainProjects = [
    {
      title: "Ecommerce Website",
      description: "This is an ecommerce website",
      image: "/images/ecommerce.png",
      link: "https://ecommerce-front-npvpr.vercel.app/",
    },
    {
      title: "Auction Website",
      description: "This is an auction website",
      image: "/next.svg",
      link: "",
    },
    {
      title: "Easy Table",
      description: "This is an easy website",
      image: "/next.svg",
      link: "",
    },
  ];
  return (
    <div className="m-5 flex flex-col items-center lg:m-0 lg:h-screen lg:flex-row lg:gap-40">
      <div className=" mb-10 lg:flex-1">
        <Header />
        <div className="hidden lg:block">
          <Contacts />
        </div>
      </div>
      <div className="lg:flex-1">
        <div className="lg:mr-5">
          <Tools />
        </div>
      </div>
      <div className="lg:hidden">
        <Contacts />
      </div>

      {/* <div>
        <div className="text-xl mb-2 lg:text-3xl">Projects</div>
        <ProjectsFlexbox projects={mainProjects} />
      </div>
      <div>
        <div>Projects</div>
        <div>Projects Grid</div>
      </div> */}
    </div>
  );
}
