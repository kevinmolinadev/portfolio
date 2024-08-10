import styles from "./loader.module.css"

interface Props {
    message?: string
}

export default function Loader({ message = "Cargando recursos" }: Props) {
    return (
        <div className="flex flex-col justify-center items-center w-full h-dvh">
            <span className={styles.loader} />
            {message && <p className="text-lg lg:text-xl">{message}</p>}
        </div>
    );
}