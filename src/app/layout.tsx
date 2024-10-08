import type { Metadata } from "next";
import { fira } from "@/fonts";
import "@/styles/index.css";

export const metadata: Metadata = {
  icons: "/icon.png",
  title: "Kevin Molina Lazarte",
  description: "Soy un desarrollador de software apasionado por la tecnología, especializado en la creación de soluciones innovadoras y eficientes.",
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: "Kevin Molina Lazarte"
  },
  openGraph: {
    type: "profile",
    images: {
      url: "/profile.avif"
    }
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fira.className}`}>
        {children}
      </body>
    </html>
  );
}
