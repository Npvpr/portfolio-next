export default function Project({ project }) {
  return (
    <div className="border border-solid border-black rounded-2xl w-96 bg-gray-400">
      <img className="rounded-t-2xl overflow-hidden w-52" src={project.image} />
      <div className=" rounded-b-2xl min-h-">
        <div>{project.title}</div>
        <div>{project.description}</div>
        <div>{project.link}</div>
      </div>
    </div>
  );
}
