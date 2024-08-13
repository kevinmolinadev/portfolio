"use client"

import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Home from "@/assets/svg/home.svg";
import Projects from "@/assets/svg/projects.svg";
import Curriculum from "@/assets/svg/file.svg";

const URL_CV = process.env.NEXT_PUBLIC_URL_CV;

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
        path: URL_CV!,
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
        <div className={`${fixed && "fixed bottom-0 z-10 w-full lg:w-auto lg:h-full lg:left-0"} flex justify-center items-center`}>
            <ul className="p-2 w-8/12 mb-8 bg-curious-blue-400 flex gap-2 rounded-2xl text-white md:w-2/5 lg:flex-col lg:w-auto lg:ml-16 lg:mb-0">
                {
                    items.map(item => (
                        <Link key={item.path} data-tile={item.title} href={item.path} className={`item-navbar relative bg-curious-blue-400 w-1/3 h-[55px] rounded-lg flex flex-col gap-0.5 items-center justify-center hover:bg-curious-blue-500 transition-colors duration-300 ${item.path === path && "bg-curious-blue-500"} md:h-[75px] lg:w-12 lg:h-12`}>
                            <Image className="md:w-[32px] md:h-[32px] lg:w-[28px] lg:h-[28px]" width={26} height={26} src={item.icon} alt={item.title} />
                            <p className={`text-sm md:text-lg lg:text-base  lg:hidden lg:absolute lg:left-[130%] lg:px-2 lg:py-1 lg:rounded-lg ${item.path === path ? "lg:bg-curious-blue-500" : "lg:bg-curious-blue-400"}`} >{item.title}</p>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};