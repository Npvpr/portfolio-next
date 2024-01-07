import Link from "next/link";

export default function Certificate({ certificate }) {
  return (
    <Link href={certificate.pdf} className="max-w-3xl">
      <img className="h-auto w-full rounded-2xl" src={certificate.image} />
      <div className="flex justify-center">
        <div className=" mx-1 mb-2 mt-1 text-lg font-bold sm:text-xl">
          {certificate.title}
        </div>
      </div>
    </Link>
  );
}
