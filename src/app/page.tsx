import { Api } from "@/api";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default async function Home() {
  const data = await Api.getUserData();
  return (
    <main className="flex h-dvh flex-col justify-center lg:flex-row-reverse">
      <section className="flex-grow flex flex-col justify-center items-center px-6 gap-8">
        <div className="mask-image">
          <div />
          <Image width={150} height={150} src={data.user.avatar_url} alt="profile" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl text-center">{data.user.name}</h1>
          <p className="text-center text-lg font-light">{data.user.bio}</p>
          <ul className="flex items-center justify-around">
            {
              data.socialAccounts.map(item => <li key={item.provider}><a className="capitalize" target="_blank" href={item.url}>{item.provider}</a></li>)
            }
          </ul>
        </div>
      </section>
      <NavBar fixed={false} />
    </main >
  );
}
