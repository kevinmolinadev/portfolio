import { useRouter } from "next/navigation";
import styles from "./card.module.css";
import { useEffect, useRef } from "react";

interface Props {
    title: string,
    description?: string,
    urlWebsite?: string,
    urlRepository?: string,
    isOnView?: boolean,
    enabledAnimationFlow?: boolean
}

export const Card = ({ title, description, urlWebsite, urlRepository, isOnView, enabledAnimationFlow = true }: Props) => {

    const router = useRouter()
    const cardRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (cardRef.current !== null && enabledAnimationFlow) {
            const animation = cardRef.current.animate([
                { opacity: 0, transform: `translateY(50px) scale(0.8)` },
                { opacity: 1, transform: `translateY(0) scale(1)` }
            ], {
                duration: 500,
                easing: "ease",
                fill: "both",
                direction: isOnView ? "normal" : "reverse"
            });
            if (enabledAnimationFlow) animation.play();
        }

    }, [isOnView])

    const handleClick = (name: string) => {
        router.push(`/projects/${name}`);
    }

    return (
        <article onClick={() => handleClick(title)} ref={cardRef} className={`${!enabledAnimationFlow && `${styles.card__in}`} absolute flex flex-col gap-1 p-2 w-52 outline rounded-lg hover:cursor-pointer`}>
            <h2 className="first-letter:uppercase font-semibold text-ellipsis overflow-hidden">{title}</h2>
            {description && (
                <p className="text-sm font-normal max-h-16 text-decoration overflow-hidden">{description}</p>
            )}
            <div className="flex gap-2 text-sm text-white">
                {urlWebsite && (
                    <a className="flex gap-1 flex-grow justify-center items-center px-2 py-1 bg-curious-blue-500 rounded-lg" href={urlWebsite} target="_blank">
                        Web
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="22px" height="22px"><path fill="currentColor" d="M 43 12 C 40.791 12 39 13.791 39 16 C 39 18.209 40.791 20 43 20 L 46.34375 20 L 35.171875 31.171875 C 33.609875 32.733875 33.609875 35.266125 35.171875 36.828125 C 35.951875 37.608125 36.977 38 38 38 C 39.023 38 40.048125 37.608125 40.828125 36.828125 L 52 25.65625 L 52 29 C 52 31.209 53.791 33 56 33 C 58.209 33 60 31.209 60 29 L 60 16 C 60 13.791 58.209 12 56 12 L 43 12 z M 23 14 C 18.037 14 14 18.038 14 23 L 14 49 C 14 53.962 18.037 58 23 58 L 49 58 C 53.963 58 58 53.962 58 49 L 58 41 C 58 38.791 56.209 37 54 37 C 51.791 37 50 38.791 50 41 L 50 49 C 50 49.551 49.552 50 49 50 L 23 50 C 22.448 50 22 49.551 22 49 L 22 23 C 22 22.449 22.448 22 23 22 L 31 22 C 33.209 22 35 20.209 35 18 C 35 15.791 33.209 14 31 14 L 23 14 z" /></svg>
                    </a>
                )}
                {urlRepository && (
                    <a className="flex gap-1 flex-grow justify-center items-center px-2 py-1 bg-curious-blue-500 rounded-lg" href={urlRepository} target="_blank">
                        Repo
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22px" height="22px"><path fill="currentColor" d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" /></svg>
                    </a>
                )}
            </div>
        </article>
    );
};