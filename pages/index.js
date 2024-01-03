import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="lg:gap-30 m-5 flex flex-col items-center lg:m-0 lg:h-screen lg:flex-row">
      <div className=" mb-10 lg:flex-1">
        <Header />
        <div className="hidden lg:block">
          <Contacts />
        </div>
      </div>
      <div className="lg:flex-1">
        <div className="lg:mr-20">
          <Tools />
        </div>
      </div>
      <div className="lg:hidden">
        <Contacts />
      </div>
    </div>
  );
}
