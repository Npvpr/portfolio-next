import Project from "@/components/Project";

export default function ProjectsFlexbox({ projects }) {
  return (
    <div className=" m-10 flex flex-wrap justify-center gap-10">
      {projects.map((project) => {
        return <Project project={project} key={project.title} />;
      })}
    </div>
  );
}
