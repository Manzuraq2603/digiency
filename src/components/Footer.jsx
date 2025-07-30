import React from "react";
import footerDigiency from "../assets/footer-digiency.svg";

function Footer() {
    return (
        <footer className="bg-[#373737]">
            <ul className="text-white flex md:flex-row flex-col max-w-[1250px] mx-auto px-10 lg:pt-[66px] lg:pb-[60px] md:py-15 py-[50px]">
                <li className="lg:max-w-[263px] md:max-w-[155px] flex flex-col  w-full lg:mr-[37px] md:mr-[23px] ">
                    <img
                        className="lg:w-[162px] lg:h-12 md:w-[105px] md:h-[31px] w-[129px] h-[39px]"
                        src={footerDigiency}
                        alt="logo"
                        width={162}
                        height={48}
                    />
                    <p className="font-normal text-base lg:mt-[25px] mt-[18px]  leading-[151%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span className="lg:flex md:hidden">
                            {" "}
                            Sit a laoreet libero dis eget maecenas bibendum.
                        </span>
                    </p>
                    <div className="flex flex-row lg:gap-[27px] md:gap-[11px] gap-[27px] md:mt-auto mt-[18px]">
                        <a
                            className="   lg:w-10 lg:h-10 md:w-[30px] md:h-[30px] w-10 h-10 lg:bg-[#FF5300] lg:hover:bg-white lg:text-white lg:hover:text-[#FF5300] bg-white hover:bg-[#FF5300] text-[#FF5300] hover:text-white flex items-center justify-center"
                            href="https://www.facebook.com/tursunov.doniyorbek.5"
                            target="_blank"
                        >
                            <svg
                                className="lg:w-[11px] lg:h-5 md:w-[7.88px] md:h-[15px] w-[11px] h-5"
                                width="11"
                                height="20"
                                viewBox="0 0 11 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                                    fill="currentcolor "
                                />
                            </svg>
                        </a>

                        <a
                            className=" lg:w-10 lg:h-10 md:w-[30px] md:h-[30px] w-10 h-10 bg-white hover:bg-[#FF5300] text-[#FF5300] hover:text-white flex items-center justify-center "
                            href="https://www.instagram.com/manzuraqoraboyeva01"
                        >
                            <svg
                                className="lg:w-[20px] lg:h-5 md:w-[15px] md:h-[15px] w-5 h-5"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z"
                                    fill="currentcolor"
                                />
                            </svg>
                        </a>

                        <a
                            className=" lg:w-10 lg:h-10 md:w-[30px] md:h-[30px] w-10 h-10 bg-white hover:bg-[#FF5300] text-[#FF5300] hover:text-white flex items-center justify-center "
                            href="#"
                        >
                            <svg
                                className="lg:w-[22px] lg:h-[18px] md:w-[15.29px] md:h-[12.43px] w-[22px] h-[18px]"
                                width="22"
                                height="18"
                                viewBox="0 0 22 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.1621 2.65599C20.3986 2.99368 19.589 3.21546 18.7601 3.31399C19.6338 2.79142 20.2878 1.969 20.6001 0.999988C19.7801 1.48799 18.8811 1.82999 17.9441 2.01499C17.3147 1.34157 16.4804 0.894951 15.571 0.744572C14.6616 0.594194 13.728 0.748479 12.9153 1.18344C12.1026 1.6184 11.4564 2.30967 11.0772 3.14978C10.6979 3.98989 10.6068 4.93177 10.8181 5.82899C9.15516 5.74564 7.52838 5.31351 6.04334 4.56065C4.55829 3.80779 3.24818 2.75104 2.19805 1.45899C1.82634 2.09744 1.63101 2.82321 1.63205 3.56199C1.63205 5.01199 2.37005 6.29299 3.49205 7.04299C2.82806 7.02208 2.17869 6.84277 1.59805 6.51999V6.57199C1.59825 7.53769 1.93242 8.4736 2.5439 9.22105C3.15538 9.96849 4.00653 10.4815 4.95305 10.673C4.33667 10.84 3.69036 10.8646 3.06305 10.745C3.32992 11.5762 3.85006 12.3032 4.55064 12.8241C5.25123 13.345 6.09718 13.6338 6.97005 13.65C6.10253 14.3313 5.10923 14.835 4.04693 15.1322C2.98464 15.4293 1.87418 15.5142 0.779053 15.382C2.69075 16.6114 4.91615 17.2641 7.18905 17.262C14.8821 17.262 19.0891 10.889 19.0891 5.36199C19.0891 5.18199 19.0841 4.99999 19.0761 4.82199C19.8949 4.23016 20.6017 3.49701 21.1631 2.65699L21.1621 2.65599Z"
                                    fill="currentcolor"
                                />
                            </svg>
                        </a>

                        <a
                            className=" lg:w-10 lg:h-10 md:w-[30px] md:h-[30px] w-10 h-10 bg-white hover:bg-[#FF5300] text-[#FF5300] hover:text-white flex items-center justify-center "
                            href="#"
                        >
                            <svg
                                className="lg:w-[18px] lg:h-[18px] md:w-[13.5px] md:h-[13.5px] w-[18px] h-[18px]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.31 17.4C8.98774 17.6066 7.63535 17.498 6.36296 17.083C5.09057 16.6681 3.93413 15.9586 2.98779 15.0123C2.04144 14.0659 1.33193 12.9095 0.917011 11.6371C0.50209 10.3647 0.393485 9.0123 0.600035 7.69C0.0787677 6.69851 -0.111709 5.56629 0.0564446 4.45882C0.224598 3.35135 0.742567 2.32669 1.53464 1.53461C2.32672 0.742537 3.35138 0.224568 4.45885 0.0564141C5.56632 -0.11174 6.69855 0.0787371 7.69003 0.600005C9.01233 0.393454 10.3647 0.502059 11.6371 0.91698C12.9095 1.3319 14.0659 2.04141 15.0123 2.98776C15.9586 3.9341 16.6681 5.09054 17.0831 6.36293C17.498 7.63532 17.6066 8.98771 17.4 10.31C17.9213 11.3015 18.1118 12.4337 17.9436 13.5412C17.7755 14.6487 17.2575 15.6733 16.4654 16.4654C15.6734 17.2575 14.6487 17.7754 13.5412 17.9436C12.4337 18.1117 11.3015 17.9213 10.31 17.4ZM9.05204 14.156H9.01204C11.884 14.156 13.315 12.77 13.315 10.913C13.315 9.715 12.764 8.44201 10.589 7.955L8.60604 7.51501C7.85104 7.34301 6.98404 7.115 6.98404 6.4C6.98404 5.685 7.60404 5.18701 8.70804 5.18701C10.938 5.18701 10.735 6.715 11.839 6.715C12.415 6.715 12.932 6.373 12.932 5.785C12.932 4.415 10.735 3.38501 8.87604 3.38501C6.85504 3.38501 4.70304 4.24401 4.70304 6.52901C4.70304 7.62701 5.09703 8.799 7.26303 9.342L9.95203 10.013C10.768 10.215 10.97 10.672 10.97 11.085C10.97 11.772 10.286 12.443 9.05204 12.443C6.63504 12.443 6.97404 10.586 5.67804 10.586C5.09804 10.586 4.67504 10.984 4.67504 11.557C4.67504 12.671 6.02704 14.155 9.05204 14.155V14.156Z"
                                    fill="currentcolor"
                                />
                            </svg>
                        </a>
                    </div>
                </li>
                <li className="lg:max-w-[179px] md:max-w-[115px] w-full lg:mr-30 md:mr-16 md:mt-0 mt-[50px]">
                    <h2 className="lg:font-semibold md:font-medium lg:text-[39px] md:text-[25px] leading-[124%] font-semibold text-[31px] ">
                        Company
                    </h2>
                    <ul className="flex flex-col lg:gap-[10px] md:gap-[1px] gap-[10px]">
                        <li className="font-normal text-base lg:mt-[25px] mt-[18px]  leading-[151%]">
                            About Us
                        </li>
                        <li className="font-normal text-base   leading-[151%]">
                            Our Work
                        </li>
                        <li className="font-normal text-base   leading-[151%]">
                            Client
                        </li>
                        <li className="font-normal text-base   leading-[151%]">
                            Our Blog
                        </li>
                        <li className="font-normal text-base   leading-[151%]">
                            Contact US
                        </li>
                    </ul>
                </li>

                <li className=" lg:max-w-[145px] md:max-w-[144px] w-full lg:mr-39 md:mr-[33px] md:mt-0 mt-[50px]">
                    <h2 className="lg:font-semibold md:font-medium lg:text-[39px] md:text-[25px] leading-[124%] font-semibold text-[31px]">
                        Sevices
                    </h2>
                    <ul className="flex flex-col lg:gap-[10px] md:gap-[1px] gap-[10px]">
                        <li className="font-normal text-base lg:mt-[25px] mt-[18px] leading-[151%]">
                            Graphic Design
                        </li>
                        <li className="font-normal text-base leading-[151%]">
                            UI/UX Design
                        </li>
                        <li className="font-normal text-base leading-[151%]">
                            Web Development
                        </li>
                        <li className="font-normal text-base leading-[151%]">
                            App Development
                        </li>
                        <li className="font-normal text-base leading-[151%]">
                            Web Hosting
                        </li>
                    </ul>
                </li>

                <li className=" lg:max-w-[270px] md:max-w-[154px] w-full flex flex-col md:mt-0 mt-[50px]">
                    <h2 className="lg:font-semibold  md:font-medium  lg:text-[39px] md:text-[25px] leading-[124%] font-semibold text-[31px]">
                        Newsletter
                    </h2>
                    <p className="font-normal text-base lg:my-[25px] mt-[25px] md:mb-[0] leading-[151%]">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span className="lg:flex md:hidden">
                            Lorem eget varius viverra in.
                        </span>
                    </p>
                    <div className="flex md:mt-auto mt-[18px]">
                        <input
                            className="lg:max-w-[189px] md:max-w-[119px] max-w-full lg:pl-[18px] md:pl-[5px] pl-[18px] border-1 outline-none border-[#FF5300]  placeholder:text-[#7B7B7B] lg:placeholder:text-base md:placeholder:text-xs placeholder:text-base"
                            type="text"
                            placeholder="info@gmail.com"
                        />
                        <button type="submit" className=" bg-[#FF5300]  ">
                            {" "}
                            <a
                                className=" lg:w-[81px] lg:h-15 md:w-[35px] md:h-10 w-[81px] h-15 bg-[#FF5300] hover:bg-white text-[white] hover:text-[#FF5300] flex items-center justify-center "
                                href="https://t.me/manzura26_03"
                                target="blank"
                            >
                                <svg
                                    className="lg:w-[21px] lg:h-[21px] md:w-[15px] md:h-[15px] w-[21px] h-[21px]"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.94596 7.31504C0.42396 7.14104 0.41896 6.86004 0.95596 6.68104L20.043 0.31904C20.572 0.14304 20.875 0.43904 20.727 0.95704L15.273 20.043C15.123 20.572 14.818 20.59 14.594 20.088L11 12L17 4.00004L8.99996 10L0.94596 7.31504Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </a>
                        </button>
                    </div>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
