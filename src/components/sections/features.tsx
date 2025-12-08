"use client"

import Image from "next/image";
import { featureAnalysis } from "../config/feature";
import { Button } from "../ui/button";
import Container from "../layout/container";

function FeatureSection() {
    return (
        <section className="overflow-hidden mt-10 md:mt-28 mb-20">
            <Container>
                {/* Feature Heading */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-20">
                    <h2 className="text-center md:text-left font-inter font-semibold text-[#191A15] text-[20px] md:text-[30px] lg:text-[50px] w-full max-w-[331px] mb-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >Our Features you cab get</h2>

                    <p className="text-center md:text-left w-full max-w-[471px] text-[#A6A6A6] font-inter font-medium text-[18px]"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >We offer a variety of interesting features that you can help increase yor productivity at work and manage your project easily</p>

                    <div className="w-full mt-5 md:mt-0 md:max-w-[250px] flex justify-center md:justify-end"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        <Button className="bg-[#54BD95] text-white cursor-pointer w-[162px] rounded-4xl p-8 font-inter text-[18px] font-medium">Get Started</Button>
                    </div>
                </div>

                {/* Feature Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-7">
                    {featureAnalysis.map((feature, index) => (
                        <div key={index}
                            data-aos="flip-up"
                            data-aos-delay={300 + index * 200}
                        >
                            <div className="md:mb-6"
                            >
                                <Image src={feature.image} alt={feature.title} />
                            </div>
                            <div className="">
                                <h3 className="font-inter font-bold text-[20px] md:text-[30px] mb-3">{feature.title}</h3>
                                <p className="font-inter font-medium text-[18px] text-[#A6A6A6]">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default FeatureSection;