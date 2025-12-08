"use client"
import Image from "next/image";
import { supportItems } from "../config/support";
import Container from "../layout/container";


const RatingsSection = () => {
    const star = <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24"><path fill="#FFC728" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></path></svg>
    return (
        <div className="flex items-center w-full flex-col sm:flex-row gap-12 py-6">
            <div className="space-y-8 flex flex-col items-center">
                {/* Star Row */}
                <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} data-aos="fade-right"
                            data-aos-delay={300 * index + 100}>{star}</span>
                    ))}

                </div>

                {/* Text Content */}
                <div data-aos="fade-up"
                    data-aos-delay="400">
                    <h3 className="text-[#191A15] text-[18px] font-normal mb-4">4.9 / 5 rating</h3>
                    <p className="text-[#A6A6A6] font-inter font-bold text-[18px]">databricks</p>
                </div>
            </div>

            <div className="space-y-8 flex flex-col items-center">
                {/* Star Row */}
                <div className="flex gap-1">
                    {[...Array(4)].map((_, index) => (
                        <span key={index} data-aos="fade-right"
                            data-aos-delay={500 * index + 100}>{star}</span>
                    ))}
                    {/* 1 Empty Star */}
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" data-aos="fade-right"
                        data-aos-delay={700}><path fill="#BBBBBB" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></path></svg>
                </div>

                {/* Text Content */}
                <div data-aos="fade-up"
                    data-aos-delay="500">
                    <h3 className="text-[#191A15] text-[18px] font-normal mb-4">4.8 / 5 rating</h3>
                    <p className="text-[#A6A6A6] font-inter font-bold text-[18px]">Chain Analysis</p>
                </div>
            </div>

        </div>
    );
};


function SupportSection() {
    return (
        <section className="bg-[#F9F8FE] md:mt-15 py-7">
            <Container className="flex flex-col md:flex-row gap-8 md:mt-2">
                <div className="w-full max-w-[644px]">
                    <h2 className="text-center md:text-left font-inter font-semibold text-[20px] md:text-[30px] lg:text-[50px] text-[#191A15]"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >How we support our partner all over the world</h2>

                    <p className=" font-medium text-[16px] text-[#A6A6A6] my-7"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>

                    {/* Ratings */}
                    <RatingsSection />
                </div>

                <div className="flex flex-col gap-10 md:gap-6">
                    {supportItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start md:flex-row gap-4 md:my-8">
                            {/* Icon */}
                            <div
                                className={`flex items-center justify-center bg-white w-[70px] h-[60px] ${index === 0 ? "w-[90px]" : ""
                                    }`}
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <Image
                                    src={item.icon}
                                    alt={`${item.title} Icon`}
                                    width={30}
                                    height={30}
                                    className="h-[30px] w-[30px]"
                                />
                            </div>

                            {/* Text */}
                            <div
                                className={`flex flex-col gap-3 items-center md:items-start ${index === 0 ? "ml-4" : ""
                                    }`}
                            >
                                <h3 className="font-inter font-bold text-[20px] md:text-[30px]" data-aos="fade-left"
                                    data-aos-delay="600">
                                    {item.title}
                                </h3>
                                <p className="text-center md:text-left font-inter font-medium text-[18px] text-[#A6A6A6] " 
                                data-aos="fade-left"
                                    data-aos-delay="700"
                                >
                                    {item.text}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default SupportSection;