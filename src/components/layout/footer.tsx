"use client';"
import { ArrowRight } from 'lucide-react';
import TestimonialFormSection from '../sections/testimonial';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Container from './container';
import { footerColumns } from '../config/footer';

const Footer = () => {
  return (
    <>
      <TestimonialFormSection />
      <footer className="bg-[#161C28] text-white pt-16 pb-8">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-22 lg:gap-24 mb-16">
            {/* Left Section: Brand & Newsletter */}
            <div className="lg:w-1/3 space-y-6">
              <h2 className="text-5xl font-bold text-[#54BD95]" data-aos="zoom-in"
                data-aos-delay="500">Biccas</h2>
              <p className="text-gray-400 text-lg" data-aos="fade-right"
                data-aos-delay="500">
                Get started now try our product
              </p>

              {/* Email Input Field */}
              <div className="relative max-w-sm mt-6" data-aos="fade-right"
                data-aos-delay="700">
                <Input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full bg-transparent border border-gray-500 rounded-full py-3.5 pl-6 pr-14 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#54BD95] transition-colors h-[60px]"
                />
                <Button className="absolute right-2 top-2.5 bottom-1.5 bg-[#54BD95] hover:bg-[#418b6f] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>

            {/* Right Section: Links Columns */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              {footerColumns.map((column) => (
                <div key={column.title} className="space-y-4">
                  <h3 className="text-white font-semibold text-base" data-aos="flip-up"
                    data-aos-delay="500">{column.title}</h3>
                  <ul className="space-y-3 text-gray-400">
                    {column.links.map((link, index) => (
                      <li key={link}
                        data-aos="flip-up"
                        data-aos-delay={700 + index * 100}
                      >
                        <a href="#" className="hover:text-[#54BD95] transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Copyright & Legal */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
            <div className="text-center md:text-left">
              © 2022 Biccas Inc. Copyright and rights reserved
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#54BD95] transition-colors">Terms and Conditions</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-[#54BD95] transition-colors">Privacy Policy</a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;