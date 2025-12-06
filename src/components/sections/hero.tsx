"use client"

import Image from "next/image";

const Logos = [
    {},
    {},
    {},
    {},
    {},
];


const FloatingImagesAndIcons = [
    {
        src: "",
        alt: "Hero Absolute Image 1",
        className: "absolute top-5 left-0",
        width: 150,
        height: 100,
    },
    {
        src: "",
        alt: "Hero Absolute Image 2",
        className: "absolute top-20 left-0",
        width: 150,
        height: 100,
    },
    {
        src: "",
        alt: "Hero Absolute Image 3",
        className: "absolute bottom-5 left-0",
        width: 150,
        height: 100,
    },
    {
        src: "",
        alt: "Hero Absolute Image 4",
        className: "absolute right-0 top-5",
        width: 150,
        height: 100,
    },
    {
        src: "",
        alt: "Hero Absolute Image 5",
        className: "absolute right-0 bottom-5",
        width: 150,
        height: 100,
    },
    {
        src: "",
        alt: "Hero Absolute Image 6",
        className: "absolute right-20 bottom-[-5px]",
        width: 150,
        height: 100,
    },
];


const HeroTeamsLogo = () => {
    return (
        <section>
            <h2>More than 24,000 teams use Collabs</h2>

            <div className="flex">
                {/* {
                Logos.map((logo, index) => (
                    <div key={index} className="w-32 h-16 border m-4"></div>
                ))
            } */}
            </div>
        </section>
    )
}


function HeroSection() {
    return (
        <>
            <section>
                <div className="w-[1291px] mx-auto border flex items-start justify-between py-10">
                    {/* hero write-ups */}
                    <div className="">
                        <h1>We&apos;re here to Increase your Productivity</h1>

                        {/* Vector Line */}
                        <Image
                            src=""
                            alt="Vector Line"
                            width={500}
                            height={10}
                        />

                        <p>Let&apos;s make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.</p>

                        {/* hero buttons */}
                        <div className="">
                            <button>Try free trial</button>
                            <button>
                                View Demo
                            </button>
                        </div>
                    </div>

                    {/* hero-image */}
                    <div className="relative border">
                        <div className="">
                            <Image
                                src=""
                                alt="Hero Image"
                                width={600}
                                height={400}
                            />
                        </div>

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

            <HeroTeamsLogo />
        </>
    );
}

export default HeroSection;