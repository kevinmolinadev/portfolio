"use client"

import { Api } from "@/api";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    params: {
        name: string
    }
}

export default function Page({ params: { name } }: Props) {
    const [data, setData] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        Api.getReadme(name).then(response => {
            setData(response);
        }).catch(error => {
            console.error(error)
            router.replace("/projects");
        });
    }, [])

    if (data === null) return <div>Loading...</div>

    return (
        <article>
            <Markdown className="markdown-body p-8" options={{ forceBlock: true }} >{data}</Markdown>
        </article>
    );
}