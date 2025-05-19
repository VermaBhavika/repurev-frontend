import React from "react";
import Image from "next/image";
import Button from "../shared/button";
import Heading from "../shared/heading";
import Paragraph from "../shared/paragraph";
import styles from "../../styles/image-with-text.module.scss";

interface ButtonProps {
    button_title?: string;
    button_type?: string;
    button_link?: string;
}

interface ImageWithTextProps {
    data?: {
        heading?: string;
        image?: string;
        text?: string;
    } & ButtonProps;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ data }) => {
    if (!data) return null;
    const { heading, image, text, button_title, button_type, button_link } = data;
    const hasButton = button_title || button_type || button_link;
    const buttonData: ButtonProps | null = hasButton
        ? { button_title, button_type, button_link }
        : null;

    return (
        <div className={styles.outer}>
            <div className={styles.image}>
                <Image
                    src={image || "https://s3.amazonaws.com/my-bucket/profile.png"}
                    alt="image"
                    width={400}
                    height={200}
                />
            </div>
            <div className={styles.text}>
                {heading && <Heading tagName="h3" headingText={heading} />}
                {text && <Paragraph paraText={text} />}
                {buttonData && <Button data={buttonData} />}
            </div>
        </div>
    );
};

export default ImageWithText;
