import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";
import Image from "next/image";
import Button from "../ui/button";
import styles from "../../styles/card.module.scss";
import Charts from "./chart";

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
        chartData?: number;
    };
}

const Cards: React.FC<CardsProps> = ({ data }) => {
    if (!data) return null;

    const { heading, image, text, button, chartData } = data;
const chart = {
    labels: [heading, "Remaining"],
    datasets: [{
        label: heading || "Score",
        data: [chartData || 0, 20 - (chartData || 0)],
        backgroundColor: [
            "#9966ffa1",
            "rgba(201, 203, 207, 0.5)"
        ],
        borderColor: [
            "#9966ff",
            "rgba(201, 203, 207, 1)"
        ],
        borderWidth: 1
    }]
};

    return (
        <div className={styles.cardSection}>
            <div className={styles.cardSection_image}>
                {image && (
                    <Image
                        src={image}
                        alt="card image"
                        width={300}
                        height={300}
                    />
                )}
                {chartData &&
                    <Charts  data={chart}
                        width={300}
                        height={300} type="pie" />
                }
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
