"use client"
import Image from "next/image";
import { FloatingImagesAndIcons, HeroImage, HeroVector, Logos } from "../config/hero";
import { Input } from "../ui/input";

const HeroTeamsLogo = () => {
    return (
        <section className="flex flex-col items-center w-full mx-auto gap-7 mt-12 pb-15">
            <h2 className="text-[#191A15] font-inter font-bold text-[20px] md:text-[40px] text-center">More than 25,000 teams use Collabs</h2>

            <div className="flex space-x-8 w-full gap-8 flex-wrap flex-1">
                {
                    Logos.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            width={180}
                            height={38}
                            className="mx-auto w-[100px] md:w-[200px]"
                        />
                    ))
                }
            </div>
        </section>
    )
}


function HeroSection() {
    return (
        <>
            <section className="overflow-hidden">
                <div className="w-full mx-auto flex items-start justify-between py-10 gap-7 min-[1061px]:flex-row max-[1061px]:flex-col max-[1061px]:gap-9">
                    {/* hero write-ups */}
                    <div className="w-full md:w-full min-[1061px]:w-1/2">
                        <h1 className="text-[#191A15] font-inter min-[1061px]:text-[70px] md:text-[60px] text-[50px] font-bold leading-20 text-center">We&apos;re here to Increase your Productivity</h1>

                        {/* Vector Line */}
                        <div className="w-full max-w-[650px] mx-auto min-[1061px]:max-w-[550px] relative my-5 mb-20">
                            <Image
                                src={HeroVector}
                                alt="Vector Line"
                                width={550}
                                height={550}
                                className="w-full h-full"
                            />
                        </div>

                        <p className="text-[#000000] min-[1061px]:text-left text-center font-medium text-[18px]">Let&apos;s make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.</p>

                        {/* hero buttons */}
                        <div className="mt-10 flex items-center justify-center min-[1061px]:justify-start">
                            <button className="bg-[#54BD95] text-white font-medium font-inter text-[18px] rounded-4xl p-4 px-5 cursor-pointer">Try free trial</button>

                            <button className="ml-4 font-medium font-inter text-[18px] flex items-center text-[#191A15] bg-transparent p-4 px-5 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path><path fill="currentColor" d="M20 33.7V16.3L35 25zm2-14v10.5l9-5.3z"></path></svg>
                                View Demo
                            </button>
                        </div>
                    </div>

                    {/* hero-image */}
                    <div className="hidden md:block w-full mx-auto max-w-[501px]  min-[1061px]:max-w-[701px] h-[458px]">
                        <div className="relative h-full w-full lg:max-w-[450px] mx-auto">
                            <Image
                                src={HeroImage}
                                alt="Hero Image"
                                fill
                                className="object-contain"
                            />

                            <div className="absolute top-7 bg-white shadow flex items-center justify-between mb-4 p-4 py-6 px-5 rounded-lg w-[260px] h-[65px] -left-35 gap-4">
                                <div className="">
                                    <p className="font-inter text-[12px] font-normal">Enter amount</p>
                                    <Input
                                        className="text-black border-none shadow-none focus:ring-0 font-inter focus:outline-none p-0 text-[16px] font-medium w-[120px] h-[25px]"
                                        value="$5,000.00"
                                        onChange={(value) => console.log(value)}
                                    />

                                </div>
                                <button className="bg-[#52BD94] rounded-3xl text-white p-2 px-7">Send</button>
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
                </div>
            </section>

            <HeroTeamsLogo />
        </>
    );
}

export default HeroSection;