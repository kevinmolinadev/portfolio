"use client"

import { Api } from "@/api";
import { Card } from "@/components/Card";
import Loader from "@/components/Loader";
import { NavBar } from "@/components/NavBar";
import { Road } from "@/components/Road";
import { Repository } from "@/interfaces/repository.interface";
import { SessionStorage } from "@/tools/session-storage";
import { useEffect, useRef, useState } from "react";

const KEYWORD = "projects";

export default function Page() {
    const [projects, setProjects] = useState<Repository[] | null>(null)
    const [maskPositionY, setMaskPositionY] = useState<number | null>(null);

    const maskRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (maskRef.current !== null) {
            window.addEventListener("scroll", handlePositionMask);
            return () => window.removeEventListener("scroll", handlePositionMask);
        }
    }, [projects])


    useEffect(() => {
        const storedProjects = SessionStorage.getItem<Repository[]>(KEYWORD)
        if (storedProjects === null) {
            Api.getRepositories().then(response => {
                SessionStorage.setItem(KEYWORD, response);
                setProjects(response);
            }).catch(error => console.error(error));
        } else {
            setProjects(storedProjects)
        }
    }, [])

    const handlePositionMask = () => {
        if (maskRef.current) {
            const value = Math.ceil(maskRef.current.getBoundingClientRect().top);
            setMaskPositionY(value);
        }
    }

    if (projects === null) return <Loader />

    return (
        <div className="flow-path">
            <div ref={maskRef} />
            {
                projects.map((item, index) => {
                    return <Road key={item.id} direction={index % 2 !== 0 ? "left" : "right"} positionOnViewMask={maskPositionY!}>
                        <Card title={item.name} description={item.description} urlWebsite={item.homepage} urlRepository={item.html_url} enabledAnimationFlow={index === 0 ? false : true} />
                    </Road>
                })
            }
            <Road direction={projects.length % 2 !== 0 ? "left" : "right"} positionOnViewMask={maskPositionY!} />
            <NavBar />
        </div>
    );
}