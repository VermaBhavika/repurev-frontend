import Heading from "../shared/heading";
import Paragraph from "../shared/paragraph";
import Image from "next/image";
import Button from "../shared/button";
import styles from "../../styles/card.module.scss";

interface ButtonProps {
    button_title?: string;
    button_type?: string;
    button_link?: string;
    button_style?: string;
}

interface CardsProps {
    data?: {
        heading?: string;
        text?: string;
        image?: string;
        button?: ButtonProps;
    };
}

const Cards: React.FC<CardsProps> = ({ data }) => {
    if (!data) return null;

    const { heading, image, text, button } = data;

    return (
        <div className={styles.cardSection}>
            <div className={styles.cardSection_image}>
                {image && (
                    <Image
                        src={image}
                        alt="card image"
                        width={400}
                        height={200}
                    />
                )}
            </div>
            <div className={styles.cartSection_text}>
                {heading && <Heading tagName="h4" headingText={heading} />}
                {text && <Paragraph paraText={text} />}
                {button && <Button data={button} />}
            </div>
        </div>
    );
};

export default Cards;
