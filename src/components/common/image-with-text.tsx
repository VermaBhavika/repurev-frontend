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
    button_style?: string;
}

interface ImageWithTextProps {
    data?: {
        heading?: string;
        image?: string;
        text?: string;
        image_direction?: string;
        button?: ButtonProps;
    };
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ data }) => {
    if (!data) return null;

    const { heading, image, text, image_direction, button } = data;

    return (
        <div className={`${styles.outer} ${image_direction === "right" ? styles.reverse : ""}`}>
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
                {button && <Button data={button} />}
            </div>
        </div>
    );
};

export default ImageWithText;
