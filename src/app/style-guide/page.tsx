import Heading from "@/components/shared/heading";
import data from '../../static-data/static.json';
import Button from "@/components/shared/button";
import ImageWithText from "@/components/common/image-with-text";

const StyleGuide = () => {
    return (
        <div className="guides">
            <div className="container">
                <Heading
                    tagName="h2"
                    headingText="Buttons"
                />
                <div className="flex mb-20">
                    {data?.button?.map((btnData, index) => (
                        <Button
                            key={index}
                            data={btnData}
                        />
                    ))}
                </div>
                <Heading
                    tagName="h2"
                    headingText="Image with Text"
                />
                <ImageWithText
                    data={data?.image_with_text}
                />
            </div>
        </div>
    )
}
export default StyleGuide;