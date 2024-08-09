import { Api } from "@/api";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
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
            <article>
                <Markdown className="markdown-body p-8" options={{ forceBlock: true }} >{data}</Markdown>
            </article>
        );
    } catch (error) {
        console.log(error)
        return notFound();
    }
}