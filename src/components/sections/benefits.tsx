"use client"

import Image from "next/image";
import { BenefitItems } from "../config/benefits";
import { FloatingImagesAndIcons, HeroImage } from "../config/hero";

function BenefitSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between mb-30 gap-10">
            <div className="">
                <h2 className="font-inter font-bold text-center md:text-left text-[20px] w-full max-w-[500px] md:text-[30px] lg:text-[50px]">What Benefit Will You Get</h2>

                {BenefitItems.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 my-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 48 48"><defs><mask id="SVGIQLGgV2F"><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"></path><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12"></path></g></mask></defs><path fill="#6DD130" d="M0 0h48v48H0z" mask="url(#SVGIQLGgV2F)"></path></svg>
                        <h4 className="font-inter font-medium text-[18px]"> {benefit.title}</h4>
                    </div>
                ))}
            </div>

            {/* Image Display */}
            <div className="hidden md:block w-full mx-auto max-w-[501px]  min-[1061px]:max-w-[601px] h-[458px]">
                <div className="relative h-full w-full lg:max-w-[450px] mx-auto">
                    <Image
                        src={HeroImage}
                        alt="Hero Image"
                        fill
                        className="object-contain"
                    />

                    {/* Floating Images and Icons */}
                    {FloatingImagesAndIcons.map((image, index) => (
                        <div key={index} className={image.className}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                            />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}

export default BenefitSection;