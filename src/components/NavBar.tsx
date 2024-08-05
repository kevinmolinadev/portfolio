"use client"

import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Home from "@/assets/png/home.png";
import Projects from "@/assets/png/repository.png";
import Curriculum from "@/assets/png/cv.png";

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


export const NavBar = () => {
    const path = usePathname();
    return (
        <div className="fixed bottom-0 w-full flex justify-center z-10">
            <ul className="p-2 w-8/12 mb-8 bg-curious-blue-400 flex gap-2 rounded-2xl text-white">
                {
                    items.map(item => (
                        <Link key={item.path} href={item.path} className={`bg-curious-blue-400 w-1/3 rounded-lg h-[50px] pb-1.5 pt-2 flex flex-col gap-0.5 items-center justify-center hover:bg-curious-blue-500 transition-colors duration-300 ${item.path === path ? "bg-curious-blue-500" : ""}`}>
                            <Image width={24} height={24} src={item.icon} alt={item.title} />
                            <p className="text-sm" >{item.title}</p>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};