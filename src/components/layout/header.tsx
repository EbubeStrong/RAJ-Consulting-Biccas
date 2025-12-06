"use client"
import Link from "next/link";
import { useState } from "react";
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
        label: "ABout Us",
        href: "/",
    },
];

function Header() {
    const [activeNav, setActiveNav] = useState("Home")

    function handleNavClick(label: string) {
        setActiveNav(label);
    }

    return (
        <header className="w-full overflow-hidden py-5 sticky top-0 ">
            <div className="w-full max-w-[1180px] flex justify-between items-center mx-auto h-10 z-100">
                {/* Logo */}
                <div className="w-full">
                    <Link href="/">
                        <h1 className="text-[#54BD95] font-inter font-semibold text-[50px]">Biccas</h1>
                    </Link>
                </div>

                <nav className="flex items-center w-full">
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
                <div className="flex items-center gap-2 w-1/2  justify-end">
                    <button className="w-1/3 cursor-pointer text-[#A6A6A6] bg-transparent rounded-lg p-2 text-[16px] font-inter font-medium">Login</button>
                    <button className="w-1/3 cursor-pointer bg-[#54BD95] text-white rounded-lg p-2 text-[16px] font-inter font-medium">Sign Up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;