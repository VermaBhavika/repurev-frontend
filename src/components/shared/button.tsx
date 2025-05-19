import Link from "next/link";
import React from "react";
import styles from "../../styles/button.module.scss";

interface Button {
    data?: {
        button_title?: string,
        button_type?: string,
        button_link?: string
    }
}

const Button: React.FC<Button> = ({ data }) => {
    if (!data) return null;
    const isExternal = data?.button_link?.startsWith("https");
    return (
        data?.button_type == 'link' ?
            <Link
                href={data?.button_link || "#"}
                target={isExternal ? "_blank" : "_self"}
                className={styles.buttonLink}>
                {data?.button_title || "click me"}
            </Link> :
            <button
                type="button"
                className={`${styles.button} ${styles[`btn-${data?.button_type}`]}`}>
                {data.button_title}
            </button>
    )
}

export default Button