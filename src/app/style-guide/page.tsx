import Heading from "@/components/shared/heading";
import data from '../../static-data/static.json';
import Button from "@/components/shared/button";
import ImageWithText from "@/components/common/image-with-text";
import CustomSlider from "@/components/common/custom-slider";
import Cards from "@/components/common/cards";
import Paragraph from "@/components/shared/paragraph";
import Charts from "@/components/common/chart";

const StyleGuide = () => {
    return (
        <div className="guides">
            <div className="container">
                <Heading
                    tagName="h2"
                    headingText="Typography"
                />
                <Heading
                    tagName="h1"
                    headingText="Heading 1"
                />
                <Heading
                    tagName="h2"
                    headingText="Heading 2"
                />
                <Heading
                    tagName="h3"
                    headingText="Heading 3"
                />
                <Heading
                    tagName="h4"
                    headingText="Heading 4"
                />
                <Heading
                    tagName="h5"
                    headingText="Heading 5"
                />
                <Heading
                    tagName="h5"
                    headingText="Heading 6"
                />
                <Paragraph
                    paraText="Paragraph text"
                />
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
                    <CustomSlider
                        slidesData={data?.slider}
                    />
                </div>
                <Heading
                    tagName="h2"
                    headingText="Cards"
                />
                <div className="grid grid-4 mt-20 mb-20">
                    {data?.cards.map((cards, index) => (
                        <Cards
                            key={index}
                            data={cards}
                        />
                    ))}
                </div>
                <Heading
                    tagName="h2"
                    headingText="Charts"
                />
                <div className="flex justify-center">
                    <Charts type="bar" data={data?.chartData} width={300} height={300} />
                    <Charts type="line" data={data?.chartData} width={300} height={300} />
                    <Charts type="pie" data={data?.chartData} width={300} height={300}/>
                </div>


            </div>
        </div>
    )
}
export default StyleGuide;