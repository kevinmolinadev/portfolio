"use client"

import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Home from "@/assets/svg/home.svg";
import Projects from "@/assets/svg/projects.svg";
import Curriculum from "@/assets/svg/file.svg";

interface ItemSection {
    path: string,
    title: string,
    icon: StaticImageData
}

const items: ItemSection[] = [
    {
        path: "/",
        title: "Home",
        icon: Home
    },
    {
        path: "/projects",
        title: "Projects",
        icon: Projects
    },
    {
        path: "/curriculum",
        title: "Cv",
        icon: Curriculum
    }
]

interface Props {
    fixed?: boolean
}

export const NavBar = ({ fixed = true }: Props) => {
    const path = usePathname();
    return (
        <div className={`${fixed && "fixed bottom-0 w-full z-10"} flex justify-center`}>
            <ul className="p-2 w-8/12 mb-8 bg-curious-blue-400 flex gap-2 rounded-2xl text-white">
                {
                    items.map(item => (
                        <Link key={item.path}  href={item.path} className={`bg-curious-blue-400 w-1/3 h-[55px] rounded-lg flex flex-col gap-0.5 items-center justify-center hover:bg-curious-blue-500 transition-colors duration-300 ${item.path === path ? "bg-curious-blue-500" : ""}`}>
                            <Image width={26} height={26} src={item.icon} alt={item.title} />
                            <p className="text-sm" >{item.title}</p>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};