"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { testimonials } from "./config/testimonial";
import Quote from '../../assets/testimonial-quote.png';

const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 100000);

        return () => clearInterval(interval);
    }, []);

    const currentData = testimonials[activeIndex];

    return (
        <div className="space-y-6 max-w-lg" data-aos="zoom-in"
                    data-aos-delay="500">
            {/* Quote Icon */}
                <div className="text-gray-500">
                <Image src={Quote} alt="Quote Icon" width={48} height={48} className="rotate-180" />
            </div>

            {/* Quote Text */}
            <div key={activeIndex} className="animate-in fade-in slide-in-from-right-4 duration-500">
                <blockquote className="text-gray-300 text-lg leading-relaxed min-h-[120px]">
                    {currentData.quote}
                </blockquote>

                <div className="mt-4">
                    <p className="text-[#54BD95] font-bold text-lg">{currentData.name}</p>
                    <p className="text-[#A6A6A6] text-sm">_ {currentData.role}</p>
                </div>
            </div>

            {/* Avatars & Play Button */}
            <div className="flex items-center gap-6 pt-2">
                <div className="flex gap-3">
                    {testimonials.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveIndex(index)} 
                            className={`relative transition-all duration-300 cursor-pointer ${index === activeIndex
                                    ? "scale-110"
                                    : "scale-100 opacity-50 grayscale hover:grayscale-0 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={item.avatar}
                                alt={item.name}
                                className={`w-12 h-12 rounded-full border-2 object-cover ${index === activeIndex ? "border-[#54BD95]" : "border-transparent"
                                    }`}
                                width={48}
                                height={48}
                            />
                        </div>
                    ))}
                </div>

                {/*  Video Popup */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#54BD95] hover:border-[#54BD95] hover:text-white text-gray-300 transition-all group">
                            <Play size={20} fill="currentColor" className="ml-1 group-hover:scale-110 transition-transform" />
                        </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[800px] bg-[#0F131F] border-gray-800 text-white p-0 overflow-hidden">
                        {/* Accessible Title for Screen Readers */}
                        <DialogHeader className="sr-only">
                            <DialogTitle>Video testimonial by {currentData.name}</DialogTitle>
                            <DialogDescription>Watch what {currentData.name} has to say about our product.</DialogDescription>
                        </DialogHeader>

                        <div className="aspect-video w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`${currentData.videoUrl}?autoplay=1`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    );
};

export default TestimonialCarousel;