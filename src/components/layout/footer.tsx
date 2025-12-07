"use client';"
import { ArrowRight } from 'lucide-react';
import TestimonialFormSection from '../sections/testimonial';

const Footer = () => {
  return (
    <>
    <TestimonialFormSection/>
    
    <footer className="bg-[#161C28] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16">
          
          {/* Left Section: Brand & Newsletter */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-5xl font-bold text-[#54BD95]">Biccas</h2>
            <p className="text-gray-400 text-lg">
              Get started now try our product
            </p>

            {/* Email Input Field */}
            <div className="relative max-w-sm mt-6">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full bg-transparent border border-gray-500 rounded-full py-3.5 pl-6 pr-14 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#54BD95] transition-colors"
              />
              <button className="absolute right-2 top-1.5 bottom-1.5 bg-[#54BD95] hover:bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Section: Links Columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-base">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Help centre</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Account information</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Contact us</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-base">Help and Solution</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Talk to support</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Support docs</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">System status</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Covid response</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-base">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Update</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Beta test</a></li>
                <li><a href="#" className="hover:text-[#54BD95] transition-colors">Pricing product</a></li>
              </ul>
            </div>

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
        
      </div>
    </footer>
    </>
  );
};

export default Footer;