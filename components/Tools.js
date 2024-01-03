import Link from "next/link";

export default function Tools() {
  return (
    <div>
      <div className="mb-10">
        <div className="mb-2 text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          About Me
        </div>
        <div className="text-base lg:text-lg xl:text-xl">
          I am an enthusiastic computer science student with a passion for
          developing applications.
        </div>
      </div>
      <div className="mb-10">
        <div className="mb-2 text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Tools I am familiar with:
        </div>
        <ul className="ml-5 list-disc text-base lg:text-lg xl:text-xl">
          <li>HTML, CSS, JavaScript</li>
          <li>Bootstrap, TailwindCSS</li>
          <li>Node.js, Python</li>
          <li>React, Next.js, Django</li>
          <li>Django REST framework</li>
          <li>PostgreSQL, MongoDB</li>
          <li>Ubuntu</li>
        </ul>
      </div>
      <div className="flex justify-around gap-10 lg:mr-20">
        <Link
          href={"/projects"}
          className=" flex flex-1 justify-center rounded-xl bg-neutral-400 px-6 py-2 text-black hover:bg-neutral-200"
        >
          <div>Projects</div>
        </Link>
        <Link
          href={""}
          className=" flex flex-1 justify-center rounded-xl bg-neutral-400 px-6 py-2 text-black hover:bg-neutral-200"
        >
          <div>Resume</div>
        </Link>
      </div>
    </div>
  );
}
