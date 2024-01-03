import Link from "next/link";

export default function Project({ project }) {
  return (
    <div className=" max-w-xl rounded-2xl border border-solid border-black bg-gray-400">
      {/* <div className="flex h-40 items-center justify-center rounded-t-xl bg-black"> */}
      <img className="h-auto w-full " src={project.image} />
      {/* </div> */}
      <div className=" mx-3 flex flex-col justify-around rounded-b-2xl">
        <div className="mb-2 text-xl font-bold">{project.title}</div>
        <div className="mb-2 text-base">{project.description}</div>
        <div className="mb-2 flex justify-between">
          <Link className=" font-bold text-blue-950" href={project.github_link}>
            Github
          </Link>
          {project.website_link !== "" ? (
            <Link
              className=" font-bold text-blue-950"
              href={project.website_link}
            >
              Website
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
