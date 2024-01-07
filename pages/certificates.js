import Link from "next/link";
import Certificate from "@/components/Certificate";

export default function CertificatesPage() {
  const certificates = [
    {
      title: "Introduction to Computer Science (HarvardX)",
      image: "/images/cs50x.png",
      pdf: "/static/cs50x.pdf",
    },
    {
      title: "Computational Thinking Using Python (MITx)",
      image: "/images/computational_thinking.png",
      pdf: "/static/computational_thinking.pdf",
    },
    {
      title: "Google IT Support (Google)",
      image: "/images/google_IT_support.png",
      pdf: "/static/google_IT_support.pdf",
    },
  ];
  return (
    <div className=" m-5 overflow-hidden lg:m-10">
      <Link
        className=" fixed -m-2 flex justify-center rounded-xl bg-neutral-400 px-6 py-2 hover:bg-neutral-200"
        href="/"
      >
        <div>Back</div>
      </Link>

      <div className=" mt-5 flex w-full justify-center">
        <div className=" m-10 flex flex-wrap justify-center gap-10">
          {certificates.map((certificate) => {
            return (
              <Certificate certificate={certificate} key={certificate.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
