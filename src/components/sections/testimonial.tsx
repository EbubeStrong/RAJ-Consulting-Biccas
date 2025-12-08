"use client";
import Image from 'next/image';
import { getStartedImage } from '../config/testimonial';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import TestimonialCarousel from '../testimonial-carousel';

const TestimonialFormSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#161C28] text-white flex items-center justify-center py-16 px-4 md:px-8 pt-25">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* --- Left Column: Testimonial --- */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-aos="fade-up"
              data-aos-delay="500">
              People are Saying <br /> About DoWhith
            </h1>
            <p className="text-[#A6A6A6] text-lg max-w-md" data-aos="fade-right"
              data-aos-delay="700">
              Everything you need to accept to payment and grow your money of manage anywhere on planet
            </p>
          </div>

          {/* Testimonial Card */}
          <TestimonialCarousel />
        </div>

        {/* --- Right Column: Form Card --- */}
        <div className="bg-[#1C2333] p-8 md:p-12 rounded-3xl shadow-2xl lg:max-w-md w-full mx-auto lg:mx-0 lg:ml-auto" data-aos="zoom-in"
          data-aos-delay="800">
          <div className="flex flex-col items-center text-center mb-8 space-y-4">
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center mb-2">
              <Image
                src={getStartedImage}
                alt='coins alt'
                width={56}
                height={40}
              />
            </div>
            <h2 className="text-3xl font-semibold font-inter text-white">Get Started</h2>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col space-y-4">
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder:text-[#A6A6A6] focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                Message
              </Label>
              <Textarea
                id="message"
                rows={3}
                placeholder="What are you saying ?"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder:text-[#A6A6A6] focus:outline-none focus:ring-2 focus:ring-[#54BD95] resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full py-4 bg-[#54BD95] hover:bg-[#469979] text-white font-semibold rounded-lg shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Request Demo
            </button>

            <div className="text-right text-sm text-[#A6A6A6]">
              or <a href="#" className="text-white hover:underline">Start Free Trial</a>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default TestimonialFormSection;