import Project from "@/components/Project";

export default function ProjectsFlexbox({ projects }) {
  return (
    <div className="flex gap-10 m-10">
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
}
