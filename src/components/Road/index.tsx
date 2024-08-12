"use client"
import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";
import styles from "./road.module.css"

interface Props {
    direction?: "left" | "right"
    positionOnViewMask: number;
    children?: ReactNode;
}

export const Road = ({ direction = "left", children, positionOnViewMask }: Props) => {

    const [isOnView, setIsOnView] = useState(false);
    const refCard = useRef(null)

    useEffect(() => {
        if (refCard.current !== null) {
            const element: HTMLElement = refCard.current;
            const position = Math.ceil(element.getBoundingClientRect().top);
            validatePositionInView(position);
        }
    }, [positionOnViewMask])

    const validatePositionInView = (value: number) => {
        setIsOnView(positionOnViewMask >= value);
    }

    return (
        <div className={`${styles.road}`}>
            <div className={`${styles.road__line} ${direction === "right" ? `${styles.reverse}` : ""}`}>
                <svg viewBox="0 0 273 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M268.5 0C268.5 6.5 277 44.5 227 96.5C177 148.5 89.7546 101.983 37.5003 154L25.5003 166L16.5003 178.5L9.50012 193L6.00015 207.5L4.00021 231.5" stroke="currentColor" strokeWidth="10" strokeDasharray="12 15" />
                </svg>
            </div>
            <div ref={refCard} className={`${styles.road__circle} ${direction === "right" ? `${styles.road__circle__right}` : `${styles.road__circle__left}`}`}>
                {React.Children.map(children, child => React.cloneElement(child as React.ReactElement, { isOnView }))}
            </div>
        </div>
    );
};