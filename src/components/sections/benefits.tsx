"use client"

import Image from "next/image";
import { BenefitItems, BenefitsImagesAndIcons, HeroImage } from "../config/benefits";
import Container from "../layout/container";

function BenefitSection() {
    return (
        <section className="bg-[linear-gradient(to_right,#FFFFFF_45%,#FFFFFF_55%,#DBEFEB_85%,#DBEFEB_95%,#DBEFEB_100%)] pt-30 pb-10 md:pb-30">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div>
                    <h2 className="font-inter font-bold text-center md:text-left text-[20px] w-full max-w-[500px] md:text-[30px] lg:text-[50px]"
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >What Benefit Will You Get</h2>

                    {BenefitItems.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-4 my-8"
                            data-aos="fade-right"
                            data-aos-delay={400 + index * 200}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 48 48"><defs><mask id="SVGIQLGgV2F"><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"></path><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12"></path></g></mask></defs><path fill="#6DD130" d="M0 0h48v48H0z" mask="url(#SVGIQLGgV2F)"></path></svg>
                            <h4 className="font-inter font-medium text-[18px]"> {benefit.title}</h4>
                        </div>
                    ))}
                </div>

                {/* Image Display */}
                <div className="hidden md:block w-full md:max-w-[330px] md:h-full lg:max-w-[501px] md:w-full h-[458px]">
                    <div className="relative h-full w-full lg:max-w-[450px] mx-auto">
                        <Image
                            src={HeroImage}
                            alt="Hero Image"
                            width={400}
                            className="object-contain"
                            data-aos="flip-left"
                            data-aos-delay="300"
                        />

                        {/* Benefits Images and Icons */}
                        {BenefitsImagesAndIcons.map((image, index) => (
                            <div key={index} className={image.className}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    data-aos="fade-up-left"
                                    data-aos-delay={450 + index * 200}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default BenefitSection;