"use client"

import Image from "next/image";
import { supportItems } from "../config/support";
import { HeroCenterBg } from "../config/hero";

function SupportSection() {
    return (
        <section className="flex flex-col md:flex-row md:mt-15">
            <div className="">
                <h2>How we support our partner all over the world</h2>

                <p>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>

                {/* Ratings */}
                <div className="">
                    <div className="">
                        {/* Star ratings */}
                        {/*  */}
                        <h3>4.9/5 rating</h3>
                        <p>databricks</p>
                    </div>

                    <div className="">
                        {/* Star ratings */}
                        {/*  */}
                        <h3>4.8/5 rating</h3>
                        <p>Chainalysis</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                {supportItems.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:my-8">

                        {/* Icon */}
                        <div className="">
                            <Image
                                // src={item.icon}
                                src={HeroCenterBg}
                                alt={`${item.title} Icon`}
                                width={64}
                                height={64}
                            />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col border gap-3">
                            <h3 className="font-inter font-bold text-[20px] md:text-[30px]">{item.title}</h3>
                            <p className="font-inter font-medium text-[18px] color-[#A6A6A6]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default SupportSection;