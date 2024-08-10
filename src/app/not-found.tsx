import NotFound from "@/components/NotFound";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col gap-2 w-full h-dvh justify-center items-center text-center p-4">
            <NotFound />
            <p className="mt-4 lg:mt-8 text-gray-600 text-lg md:text-xl">Oops! La página que buscas no se encuentra.</p>
            <p className="text-gray-500 text-lg md:text-xl">Quizás quieras volver a <Link href="/" replace={true} className="text-curious-blue-500 hover:underline">inicio</Link>.</p>
        </div>
    );
}
