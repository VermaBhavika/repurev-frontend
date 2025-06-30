"use client"
import React, { useState } from 'react';
import Heading from "@/components/ui/heading";
import data from '../../static-data/static.json';
import Button from "@/components/ui/button";
import ImageWithText from "@/components/common/image-with-text";
import CustomSlider from "@/components/layout/custom-slider";
import Cards from "@/components/common/cards";
import Paragraph from "@/components/ui/paragraph";
import Charts from "@/components/common/chart";
import TextField from "@/components/ui/input";
import { isValidEmail } from '@/validators/input-validator';
import Modal from '@/components/common/modal';

const StyleGuide = () => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        email: "",
        password: ""
    });
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const validators: { [key: string]: (value: string) => boolean } = {
        email: isValidEmail,
        password: (val: string) => val.length >= 4,
    };

    const handleInputChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));

        if (validators[name]) {
            const valid = validators[name](value);
            setFormErrors(prev => ({
                ...prev,
                [name]: valid ? '' : `Invalid ${name}`,
            }));
        } else {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let valid = true;
        const newErrors: { [key: string]: string } = {};

        for (const field of Object.keys(validators)) {
            const value = formData[field] || '';

            if (!value.trim()) {
                valid = false;
                newErrors[field] = `${field} is required`;
                continue;
            }

            if (!validators[field](value)) {
                valid = false;
                newErrors[field] = `Invalid ${field}`;
            }
        }

        setFormErrors(newErrors);

        if (!valid) {
            console.log("Form has errors, cannot submit.");
            return;
        }
        else {
            console.log("Form submitted successfully with data:", formData);
        }
    };
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
                    tagName="h6"
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
                <div className="grid grid-3 mt-20 mb-20">
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
                    <Charts
                        type="bar"
                        data={data?.chartData}
                        width={300}
                        height={300}
                    />
                    <Charts
                        type="line"
                        data={data?.chartData}
                        width={300}
                        height={300}
                    />
                    <Charts
                        type="pie"
                        data={data?.chartData}
                        width={300}
                        height={300}
                    />
                </div>
                <Heading
                    tagName="h2"
                    headingText="Form"
                />
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            type="email"
                            placeholderText="Enter your Email"
                            len={50}
                            name="email"
                            onChange={handleInputChange}
                        />
                        <TextField
                            type="password"
                            placeholderText="Enter your Password"
                            len={10}
                            name="password"
                            onChange={handleInputChange}
                        />
                        <Button data={data?.submit_button} />
                    </form>

                </div>
                <div className='mt-20'>
                    <Heading
                        tagName="h2"
                        headingText="Modal button"
                    />
                    <div onClick={() => setIsModalOpen(true)}>
                        <Button data={data?.regular_button} />
                    </div>
                    {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} modalData={data?.modal_data} />}
                </div>
            </div>
        </div>
    )
}
export default StyleGuide;