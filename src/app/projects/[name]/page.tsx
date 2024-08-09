import { Api } from "@/api";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 2629800 //Revalidate data each month

interface Props {
    params: {
        name: string
    }
}


export const generateStaticParams = async () => {
    const projects = await Api.getRepositories();
    return projects.map(({ name }) => { name })
}

export const generateMetadata = (props: Props) => {
    return {
        title: `Proyectos | ${props.params.name.replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())}`,
    } as Metadata
}

export default async function Page({ params: { name } }: Props) {
    try {
        const data = await Api.getReadme(name);
        return (
            <article className="flex flex-col items-center justify-center md:w-10/12 lg:w-7/12 p-4 md:py-8 mx-auto gap-4"> 
                <Link className="self-start px-2.5 py-1.5 bg-curious-blue-500 rounded-lg text-white" href="/projects">{"< Volver"}</Link>
                <Markdown className="markdown-body w-full" options={{ forceBlock: true }} >{data}</Markdown>
            </article>
        );
    } catch (error) {
        console.log(error)
        return notFound();
    }
}