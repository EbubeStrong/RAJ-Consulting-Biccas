"use client"

import { Check } from "lucide-react";
import { useState } from "react";
import Container from "../layout/container";
import { plans } from "../config/plan";

const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState('yearly');

    return (
        <div className="w-full py-7 flex flex-col items-center">
            {/* Toggle Switch */}
            <div className="bg-white p-3 px-7 rounded-md shadow inline-flex relative mb-18"
                data-aos="zoom-up"
                data-aos-delay="500"
            >
                <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-3 rounded-md cursor-pointer text-sm font-medium transition-all duration-200 font-inter text-[18px] ${billingCycle === 'monthly'
                        ? 'bg-[#54BD95] text-white shadow-md'
                        : 'text-gray-600 hover:text-[#54BD95]'
                        }`}
                    data-aos="zoom-in"
                    data-aos-delay="700"
                >
                    Bill Monthly
                </button>
                <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-6 py-3 rounded-md cursor-pointer text-sm font-medium transition-all duration-200 font-inter text-[18px] ${billingCycle === 'yearly'
                        ? 'bg-[#54BD95] text-white shadow-md'
                        : 'text-gray-600 hover:text-[#54BD95]'
                        }`}
                    data-aos="zoom-in"
                    data-aos-delay="900"
                >
                    Bill Yearly
                </button>
            </div>

            {/* --- Cards Container --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 max-w-8xl lg:max-w-6xl px-4 w-full items-start">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative p-4 flex flex-col rounded-3xl transition-all duration-300 h-full ${plan.isPro
                            ? 'bg-[#54BD95] text-white shadow scale-105 z-10'
                            : 'bg-white text-black shadow-xl border border-gray-100 mt-5'
                            }`}
                        data-aos="zoom-in"
                        data-aos-delay={400 + index * 200}
                    >
                        {/* Top Section: Header & Price */}
                        <div className="p-8 text-center space-y-4">
                            <h3 className={`text-[16px] md:text-[30px] font-bold ${plan.isPro ? 'text-white' : 'text-black'}`}>
                                {plan.title}
                            </h3>
                            <p className={`text-sm mx-auto font-inter text-[16px] lg:text-[18px] font-medium ${plan.isPro ? 'text-white' : 'text-[#A6A6A6]'} ${plan.isPro ? 'max-w-[210px]' : plan.title === "Business" ? 'max-width-[250px]' : 'max-w-[210px]'}`}>
                                {plan.description}
                            </p>

                            <div className="pt-4">
                                <span
                                    className={`text-xl relative -top-8 mr-1 ${plan.isPro ? "text-white" : "text-[#A6A6A6]"
                                        }`}
                                >
                                    $
                                </span>

                                <span className="text-5xl font-bold tracking-tight">
                                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                                </span>
                            </div>

                            {/* Specific Badge for Pro */}
                            {plan.isPro && (
                                <div className="inline-block bg-white/20 rounded-lg px-3 py-1 text-xs font-medium mt-2">
                                    {plan.saveBadge}
                                </div>
                            )}
                        </div>

                        {/* Bottom Section: Features & Button */}
                        <div
                            className={`p-8 flex-1 flex flex-col  rounded-b-3xl ${plan.isPro ? 'bg-white text-white m-2 rounded-2xl' : 'bg-[#F9FAFB] rounded-2xl'
                                }`}
                        >
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex w-full md:flex-col lg:flex-row lg:justify-start lg:items-start gap-3 items-center ">
                                        <div
                                            className={`rounded-full p-1 bg-[#54BD95] text-white `}
                                        >
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-center lg:text-left text-sm font-medium text-gray-600">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-xl font-bold transition-transform active:scale-95 ${plan.isPro
                                    ? 'bg-[#54BD95] text-white hover:bg-[#54BD95] shadow-lg'
                                    : 'bg-white border text-[#54BD95] hover:bg-gray-50'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


function PlanSection() {
    return (
        <section>
            <Container className="mt-20 md:mt-40">
                <h2 className="text-[#191A15] font-inter text-center font-bold text-[20px] md:text-[30px] lg:text-[50px] w-full max-w-[492px] mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >Choose Plan That&apos;s Right For You</h2>

                <p className="text-[#A6A6A6] font-inter font-bold text-[18px] text-center mt-12"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                >Choose plan that works best for you, feel free to contact us</p>

                <PricingSection />
            </Container>
        </section>
    );
}

export default PlanSection;