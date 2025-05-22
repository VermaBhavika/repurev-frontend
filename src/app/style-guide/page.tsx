import Heading from "@/components/shared/heading";
import data from '../../static-data/static.json';
import Button from "@/components/shared/button";
import ImageWithText from "@/components/common/image-with-text";
import CustomSlider from "@/components/common/custom-slider";
import Cards from "@/components/common/cards";

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
                {data?.image_with_text?.map((item, index) => (
                    <div className="mb-20" key={index}>
                        <ImageWithText
                            data={item}
                        />
                    </div>
                ))}
                <Heading
                    tagName="h2"
                    headingText="Slider"
                />
                <div className="mb-20">
                    <CustomSlider slidesData={data?.slider}
                    />
                    <div className="flex mb-20">
                        {data?.cards.map((cards, index) => (
                            <Cards key={index} data={cards} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StyleGuide;