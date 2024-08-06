import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col justify-center">
      <section className="flex-grow flex flex-col justify-center items-center px-6 gap-8">
        <div className="mask-image">
          <div />
          <Image width={150} height={150} src="/profile.png" alt="profile" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl text-center">Kevin Molina Lazarte</h1>
          <p className="text-center font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem non harum exercitationem possimus recusandae quidem nemo, officiis perferendis quibusdam expedita? Unde odio doloribus repudiandae molestiae distinctio veniam eos impedit nihil!
          </p>
          <ul className="flex items-center justify-around">
            <li><a href="#github">Github</a></li>
            <li><a href="#linkedin">Linkedin</a></li>
          </ul>
        </div>
      </section>
      <NavBar fixed={false} />
    </main >
  );
}
