import Heading from "../shared/heading";
import Paragraph from "../shared/paragraph";
import Image from "next/image";
import Button from "../shared/button";
import styles from "../../styles/card.module.scss";

interface ButtonProps {
    button_title?: string;
    button_type?: string;
    button_link?: string;
}
interface cards {
    data?: {
        heading?: string;
        text?: string;
        image?: string;
    } & ButtonProps;
}

const cards: React.FC<cards> = ({ data }) => {
    if (!data) return null;
    const { heading, image, text, button_title, button_type, button_link } = data;
    const hasButton = button_title || button_type || button_link;
    const buttonData: ButtonProps | null = hasButton
        ? { button_title, button_type, button_link }
        : null;
    return (
        <div className={styles.cardSection}>
            <div className={styles.cardSection_image}>
                {data?.image && <Image
                    src={data?.image || "https://s3.amazonaws.com/my-bucket/profile.png"}
                    alt="image"
                    width={400}
                    height={200}
                />}
            </div>
            <div className={styles.cartSection_text}>
                {heading && <Heading tagName="h4" headingText={heading} />}
                {text && <Paragraph paraText={text} />}
                {buttonData && <Button data={buttonData} />}
            </div>

        </div>
    );
};
export default cards;
