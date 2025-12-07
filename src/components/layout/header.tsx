"use client"
import Link from "next/link";
import { useState } from "react";
import Container from "./container";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Product",
        href: "/",
    },
    {
        label: "FAQ",
        href: "/",
    },
    {
        label: "Blog",
        href: "/",
    },
    {
        label: "About Us",
        href: "/",
    },
];

function Header() {
    const [activeNav, setActiveNav] = useState("Home")

    function handleNavClick(label: string) {
        setActiveNav(label);
    }

    return (
        <header className="w-full overflow-hidden py-5">
            <Container className="hidden md:block">
                <div className="w-full flex justify-between items-center mx-auto px-0 overflow-hidden">
                    {/* Logo */}
                    <div className="w-full md:w-1/3">
                        <Link href="/">
                            <h1 className="text-[#54BD95] font-inter font-semibold text-[50px]">Biccas</h1>
                        </Link>
                    </div>

                    <nav className="flex items-center justify-end w-full">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`mx-4 font-inter font-medium text-[16px] whitespace-nowrap ${activeNav === item.label
                                    ? "text-black"
                                    : "text-[#A6A6A6]"
                                    }`}
                                onClick={() => handleNavClick(item.label)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Login Buttons */}
                    <div className="flex items-center gap-2 w-full md:w-1/2 justify-end max-[989px]:justify-center">
                        <button className="w-1/3 cursor-pointer text-[#A6A6A6] bg-transparent rounded-lg p-2 text-[16px] font-inter font-medium">Login</button>

                        <button className="lg:w-1/3 cursor-pointer bg-[#54BD95] text-white rounded-2xl p-2 text-[16px] font-inter font-medium whitespace-nowrap ">Sign Up</button>
                    </div>
                </div>
            </Container>

            <div className="block md:hidden px-9">
                <div className="w-full flex justify-between items-center mx-auto px-0 overflow-hidden">
                    {/* Logo */}
                    <div className="w-full md:w-1/3">
                        <Link href="/">
                            <h1 className="text-[#54BD95] font-inter font-semibold text-[50px]">Biccas</h1>
                        </Link>
                    </div>

                    <Sheet>
                        <SheetTrigger className="w-1/2 flex justify-end ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 20 20" className="cursor-pointer"><path fill="currentColor" fillRule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m6 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1" clipRule="evenodd"></path></svg>
                        </SheetTrigger>
                        <SheetContent className="w-[400px] sm:w-[540px]">
                            <SheetHeader>
                                <SheetTitle className="sr-only">Nav Link</SheetTitle>
                                <SheetDescription className="sr-only">
                                   This is the navigation link section. Please select a page to navigate.
                                </SheetDescription>
                            </SheetHeader>
                            <nav className="flex flex-col h-[350px] mt-10 justify-between items-center w-full">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`mx-4 font-inter font-medium text-[16px] ${activeNav === item.label
                                            ? "text-black"
                                            : "text-[#A6A6A6]"
                                            }`}
                                        onClick={() => handleNavClick(item.label)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>


                             {/* Login Buttons */}
                    <div className="flex items-center gap-2 w-full justify-center mt-10">
                        <button className="w-1/3 cursor-pointer text-[#A6A6A6] bg-transparent rounded-lg p-2 text-[16px] font-inter font-medium">Login</button>

                        <button className="lg:w-1/3 cursor-pointer bg-[#54BD95] text-white rounded-2xl p-2 text-[16px] font-inter font-medium whitespace-nowrap ">Sign Up</button>
                    </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    );
}

export default Header;