"use client"

import { Check } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  // Data for the plans
  const plans = [
    {
      title: "Free",
      description: "Have a go and test your superpowers",
      price: { monthly: 0, yearly: 0 },
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps",
      ],
      isPro: false,
      buttonText: "Signup for free",
    },
    {
      title: "Pro",
      description: "Experiment the power of infinite possibilities",
      // Example: Yearly price is cheaper ($8 * 12 = 96, but maybe you offer it for 80)
      price: { monthly: 8, yearly: 80 }, 
      saveBadge: "Save $50 a year",
      features: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
      isPro: true,
      buttonText: "Go to pro",
    },
    {
      title: "Business",
      description: "Unveil new superpowers and join the Design League",
      price: { monthly: 16, yearly: 160 },
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception program",
        "Collaboration-Soon",
      ],
      isPro: false,
      buttonText: "Goto Business",
    },
  ];

  return (
    <div className="w-full py-16 flex flex-col items-center">
      
      {/* --- Toggle Switch --- */}
      <div className="bg-white p-1 rounded-md shadow-sm border inline-flex relative mb-12">
        {/* Animated background sliding effect could be added here, using simple conditional classes for now */}
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-6 py-2 rounded text-sm font-medium transition-all duration-200 ${
            billingCycle === 'monthly'
              ? 'bg-[#54BD95] text-white shadow-md'
              : 'text-gray-600 hover:text-emerald-500'
          }`}
        >
          Bill Monthly
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-6 py-2 rounded text-sm font-medium transition-all duration-200 ${
            billingCycle === 'yearly'
              ? 'bg-[#54BD95] text-white shadow-md'
              : 'text-gray-600 hover:text-emerald-500'
          }`}
        >
          Bill Yearly
        </button>
      </div>

      {/* --- Cards Container --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4 w-full items-start">
        
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-3xl transition-all duration-300 ${
              plan.isPro
                ? 'bg-[#54BD95] text-white shadow-2xl scale-105 z-10' // Pro Card Styles
                : 'bg-white text-gray-800 shadow-xl border border-gray-100' // Standard Card Styles
            }`}
          >
            {/* Top Section: Header & Price */}
            <div className="p-8 text-center space-y-4">
              <h3 className={`text-2xl font-bold ${plan.isPro ? 'text-white' : 'text-gray-900'}`}>
                {plan.title}
              </h3>
              <p className={`text-sm ${plan.isPro ? 'text-emerald-50' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="pt-4">
                <span className="text-xl align-top mr-1">$</span>
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
            {/* The Pro card has a white inner container for features, others are continuous */}
            <div
              className={`p-8 flex-1 flex flex-col rounded-b-3xl ${
                plan.isPro ? 'bg-white text-gray-800 m-2 rounded-2xl' : ''
              }`}
            >
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-1 ${
                        plan.isPro ? 'bg-[#54BD95] text-white' : 'bg-emerald-100 text-emerald-500'
                      }`}
                    >
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold transition-transform active:scale-95 ${
                  plan.isPro
                    ? 'bg-[#54BD95] text-white hover:bg-[#54BD95] shadow-lg shadow-emerald-200'
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
        <section className="">
            <h2 className="text-[#191A15] text-center font-bold text-[20px] md:text-[30px] lg:text-[50px] w-full max-w-[452px] mx-auto">Choose Plan That&apos;s Right For You</h2>

            <p className="text-[#A6A6A6] font-inter font-bold text-[18px] text-center my-10">Choose plan that works best for you, feel free to contact us</p>

            <PricingSection />

        </section>
    );
}

export default PlanSection;