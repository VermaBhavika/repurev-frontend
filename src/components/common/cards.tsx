// import Heading from "../shared/heading";
// import Paragraph from "../shared/paragraph";

// interface cards {
//     data?: {
//         heading?: string;
//         text?: string;
//     },
// }

// const cards: React.FC<cards> = ({ data }) => {
//     if (!data) return null;
//     const { heading, text} = data;
//     return(
//     <div className="abc">
//         {heading && <Heading tagName="h3" headingText={heading} />}
//         {text && <Paragraph paraText={text} />}
//     </div>
//     );
// };

// export default cards;

import Heading from "../shared/heading";
import Paragraph from "../shared/paragraph";
import Image from "next/image";
import Button from "../shared/button";

interface ButtonProps {
    button_title?: string;
    button_type?: string;
    button_link?: string;
}
interface cards {
    data?: {
        heading?: string;
        text?: string;
        image?:string;
    } & ButtonProps;
}

const cards: React.FC<cards> = ({ data }) => {
    if (!data) return null;
    console.log(data)
    const { heading, image, text, button_title, button_type, button_link } = data;
    const hasButton = button_title || button_type || button_link;
    const buttonData: ButtonProps | null = hasButton
        ? { button_title, button_type, button_link }
        : null;
    return(
        <div className="cards-section">
            <Image
                    src={data?.image || "https://s3.amazonaws.com/my-bucket/profile.png"}
                    alt="image"
                    width={400}
                    height={200}
            />
                {heading && <Heading tagName="h3" headingText={heading} />}
                {text && <Paragraph paraText={text} />}
                {buttonData && <Button data={buttonData} />}
        </div>
    );
};
export default cards;
