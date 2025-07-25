import React from "react";
import logo from "../assets/logo.svg";
import darkMode from "../assets/dark-mode-icon.svg";
import hamburger from "../assets/hamburger.svg";

function Header() {
    return (
        <header className="lg:py-[26px] md:py-7 py-[10px] bg-[#fff] sticky top-0 z-50 shadow-[0px_1px_10px_0px_#0000001A] ">
            <div className="max-w-[1250px] mx-auto px-10 flex items-center  ">
                <a href="logo">
                    <img
                        className="lg:mr-[77px] md:mr-7 lg:w-40 md:w-20 lg:h-12 md:h-6 "
                        src={logo}
                        alt="logo"
                        width={162}
                        height={48}
                    />
                </a>
                <ul className="md:flex hidden items-center lg:gap-[38px] md:gap-6">
                    <li>
                        <a
                            href="#"
                            className="lg:font-medium md:font-normal lg:text-xl md:text-base lg:leading-[124%] md:leading-[151%] text-[#373737]"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="lg:font-medium md:font-normal lg:text-xl md:text-base lg:leading-[124%] md:leading-[151%] text-[#373737]"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="lg:font-medium md:font-normal lg:text-xl md:text-base lg:leading-[124%] md:leading-[151%] text-[#373737]"
                        >
                            Our Work
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="lg:font-medium md:font-normal lg:text-xl md:text-base lg:leading-[124%] md:leading-[151%] text-[#373737]"
                        >
                            Clients
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="lg:font-medium md:font-normal lg:text-xl md:text-base lg:leading-[124%] md:leading-[151%] text-[#373737]"
                        >
                            Our Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="lg:font-medium md:font-normal lg:text-xl md:text-base lg:leading-[124%] md:leading-[151%] text-[#373737]"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
                <img
                    className="md:ml-auto ml-15"
                    src={darkMode}
                    alt="dark-mode"
                    width={24}
                    height={24}
                    title="dark-mode"
                />
                <img
                    className="ml-auto md:hidden "
                    src={hamburger}
                    alt="hamburger-icon"
                    width={24}
                    height={24}
                />
            </div>
        </header>
    );
}

export default Header;
