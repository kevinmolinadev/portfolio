"use client"

import { Card } from "@/components/Card";
import { NavBar } from "@/components/NavBar";
import { Road } from "@/components/Road";
import { useEffect, useRef, useState } from "react";

const KEYWORD = "projects";

export default function Page() {

    const [maskPositionY, setMaskPositionY] = useState<number | null>(null);

    const maskRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (maskRef.current !== null) {
            window.addEventListener("scroll", handlePositionMask);
            return () => window.removeEventListener("scroll", handlePositionMask);
        }
    }, [])

    const handlePositionMask = () => {
        if (maskRef.current) {
            const value = Math.ceil(maskRef.current.getBoundingClientRect().top);
            setMaskPositionY(value);
        }
    }

    return (
        <div className="flow-path">
            <div ref={maskRef} />
            <Road direction="right" positionOnViewMask={maskPositionY!}>
                <Card title="Test 1" description="Test description 1" urlWebsite="#url" urlRepository="#" enabledAnimationFlow={false} />
            </Road>
            <Road positionOnViewMask={maskPositionY!}>
                <Card title="Test 2" description="Test description 2" urlWebsite="#url" urlRepository="#" />
            </Road>
            <Road direction="right" positionOnViewMask={maskPositionY!}>
                <Card title="Test 3" description="Test description 3" urlWebsite="#url" urlRepository="#" />
            </Road>
            <Road positionOnViewMask={maskPositionY!}>
                <Card title="Test 4" description="Test description 4" urlWebsite="#url" urlRepository="#" />
            </Road>
            <Road direction="right" positionOnViewMask={maskPositionY!}>
                <Card title="Test 5" description="Test description 5" urlWebsite="#url" urlRepository="#" />
            </Road>
            <Road positionOnViewMask={maskPositionY!}>
                <Card title="Test 6" description="Test description 6" urlWebsite="#url" urlRepository="#" />
            </Road>
            <Road direction="right" positionOnViewMask={maskPositionY!}>
                <Card title="Test 7" description="Test description 7" urlWebsite="#url" urlRepository="#" />
            </Road>
            <Road positionOnViewMask={maskPositionY!}/>
            <NavBar />
        </div>
    );
}