import React from 'react';
import { Quote, Play, Coins } from 'lucide-react';
import Image from 'next/image';

const TestimonialFormSection = () => {
  // Placeholder images for the avatars
  const avatars = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026302d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
  ];

  return (
    <section className="w-full min-h-screen bg-[#0F131F] text-white flex items-center justify-center py-16 px-4 md:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- Left Column: Testimonial --- */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              People are Saying <br /> About DoWhith
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Everything you need to accept to payment and grow your money of manage anywhere on planet
            </p>
          </div>

          <div className="space-y-6">
            {/* Quote Icon */}
            <div className="text-gray-500">
              <Quote size={48} className="fill-current rotate-180" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-gray-300 text-lg leading-relaxed max-w-md">
              I am very helped by this E-wallet application, my days are very easy to use this application and its very helpful in my life, even I can pay a short time 😍
            </blockquote>

            <p className="text-gray-400 font-medium">_ Aria Zinanrio</p>

            {/* Avatars & Play Button */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex gap-4">
                {avatars.map((src, index) => (
                  <Image
                    key={index}
                    // src={src}
                    src=""
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-transparent hover:border-[#54BD95] transition-colors object-cover grayscale hover:grayscale-0"
                    width={48}
                    height={48}
                  />
                ))}
              </div>
              
              {/* Play Button Circle */}
              <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Play size={20} fill="currentColor" className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* --- Right Column: Form Card --- */}
        <div className="bg-[#1C2333] p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full mx-auto lg:mx-0 lg:ml-auto">
          <div className="flex flex-col items-center text-center mb-8 space-y-4">
            {/* Icon */}
            <div className="w-16 h-16 bg-[#54BD95]/20 rounded-full flex items-center justify-center mb-2">
              <Coins size={40} className="text-[#54BD95]" />
            </div>
            <h2 className="text-3xl font-semibold text-white">Get Started</h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="What are you say ?"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#54BD95] resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full py-4 bg-[#54BD95] hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg transition-transform active:scale-95"
            >
              Request Demo
            </button>

            <div className="text-right text-sm text-gray-400">
              or <a href="#" className="text-white hover:underline">Start Free Trial</a>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default TestimonialFormSection;