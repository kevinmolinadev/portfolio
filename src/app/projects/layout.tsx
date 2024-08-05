import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kevin Molina Lazarte | Proyectos",
    description: "Explora los proyectos destacados de Kevin Molina Lazarte, desarrollador de software. Desde aplicaciones web hasta soluciones personalizadas, descubre cómo transformo ideas en tecnología innovadora.",
};

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
