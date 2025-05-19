import Link from "next/link";
import React from "react";
import styles from "../../styles/button.module.scss";

interface Button{
    buttonType?: string;
    buttonLink?: string;
    buttonText?: string;
}

const Button: React.FC<Button> = ({ buttonType, buttonLink = "#", buttonText = "Click me" }) => {
    const isExternal = buttonLink.startsWith("https");
    return(
        buttonType == 'link'? 
            <Link 
            href={buttonLink} 
            target={isExternal ? "_blank" : "_self"} 
            className={styles.buttonLink}>
                {buttonText}
            </Link> :
            <button type="button" className={styles.button}>{buttonText}</button>
    )
}

export default Button