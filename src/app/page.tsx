import { Api } from "@/api";
import { ApiIcons } from "@/api/icons";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";

const getData = async () => {
  const data = await Api.getUserData();
  for (const item of data.socialAccounts) {
    const icon = await ApiIcons.getIconByName(item.provider)
    item.icon = typeof icon.route === "object" ? icon.route.light : icon.route;
  }
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex h-dvh flex-col justify-center lg:flex-row-reverse">
      <section className="flex-grow flex flex-col justify-center items-center px-6 gap-8">
        <div className="mask-image">
          <div />
          <Image width={150} height={150} src={data.user.avatar_url} alt="profile" />
        </div>
        <div className="flex flex-col gap-6 md:w-10/12 lg:w-7/12">
          <h1 className="font-bold text-3xl text-center">{data.user.name}</h1>
          <p className="text-center text-xl font-light">{data.user.bio}</p>
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {
              data.socialAccounts.map(item => <li key={item.provider}><a className="capitalize flex gap-2 items-center text-lg  px-2.5 py-1 rounded-lg bg-curious-blue-100/60 shadow-md" target="_blank" href={item.url}>{item.provider} <Image width={23} height={23} src={item.icon} alt={`${item.provider}`} /> </a></li>)
            }
          </ul>
        </div>
      </section>
      <NavBar fixed={false} />
    </main >
  );
}
