import React from "react";
import aboutImg from "../assets/about-img.svg";
import fileIcon from "../assets/file-icon.svg";
import groupIcon from "../assets/group-icon.svg";
import settings from "../assets/settings-icon.svg";
import systems from "../assets/systems-icon.svg";
function About() {
    return (
        <section className="py-30 bg-white">
            <div className="max-w-[1250px] mx-auto px-10  ">
                <div className="flex justify-between md:flex-row flex-col ">
                    <img
                        className="mt-auto lg:w-[684px] md:w-[372px] lg:h-[352px] md:h-[192px] w-full md:mb-0 mb-[50px]"
                        src={aboutImg}
                        alt="image"
                        width={684}
                        height={352}
                    />
                    <div className="lg:max-w-[570px] md:max-w-83 w-full ">
                        <p className="font-normal text-[#7B7B7B] text-base leading-[151%] mb-[25px] md:text-start text-center   ">
                            About Us
                        </p>
                        <h2 className="md:font-semibold font-medium lg:text-[39px] md:text-[31px] text-[25px] md:text-start text-center leading-[124%] mb-[18px] text-[#373737]">
                            We Are{" "}
                            <span className="text-[#FF5300]">
                                Making Ideas Better
                            </span>{" "}
                            For Everyone
                        </h2>
                        <p className="mb-[25px] font-normal text-[#7B7B7B] text-base md:text-start text-center leading-[151%] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nascetur imperdiet at a augue ullamcorper.
                            <span className="lg:flex hidden">
                                Leo faucibus feugiat rutrum aenean. Nisi, lectus
                                aliquet aliquam consectetur augue praesent.
                                Lorem vulputate orci eget mi, sed pulvinar.
                            </span>
                        </p>
                        <p className="mb-[25px] font-normal text-[#7B7B7B] text-base leading-[151%] md:text-start text-center ">
                            Ornare etiam erat volutpat tempor fringilla mi. Elit
                            a blandit faucibus est, dui interdum ut amet.
                            <span className="lg:flex hidden">
                                Adipiscing feugiat vel at posuere in.
                                Pellentesque volutpat vestibulum.
                            </span>
                        </p>
                        <div className="flex items-center md:justify-start justify-center">
                            <button className="font-medium text-xl leading-[124%] rounded-[5px]  pl-[19px] pr-[22px] pt-[13px] pb-4 text-white bg-[#FF5300] cursor-pointer  border-2 border-transparent hover:text-[#FF5300] hover:border-2 hover:border-[#FF5300] hover:bg-white transition-all duration-[0.4s] ease-in">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                <ul className="mt-15 md:flex-row flex flex-col lg:gap-[30px] gap-5 items-center w-full ">
                    <li className="max-w-[270px] w-full shadow-[0px_1px_10px_0px_#0000001A] pt-[25px] pb-[21px] pl-[31px] pr-[33px]  flex flex-col  items-center text-center">
                        <div className="w-[70px] h-[70px] mb-9 bg-[#FF5300] rounded-[50%] shadow-[4px_5px_15px_0px_#FF530066] flex items-center justify-center ">
                            <img src={fileIcon} alt="" />
                        </div>
                        <p className="font-normal  text-base leading-[151%]">
                            World leader in consulting and finance
                        </p>
                    </li>

                    <li className="max-w-[270px] w-full shadow-[0px_1px_10px_0px_#0000001A] pt-[25px] pb-[21px] pl-[47px] pr-[46px] flex flex-col  items-center text-center">
                        <div className="w-[70px] h-[70px]  mb-9 bg-[#7B7B7B] rounded-[50%] shadow-[4px_5px_15px_0px_#00000066] flex items-center justify-center ">
                            <img src={groupIcon} alt="" />
                        </div>
                        <p className="font-normal text-base leading-[151%]">
                            A focused team with a specialized skill
                        </p>
                    </li>

                    <li className="max-w-[270px] w-full shadow-[0px_1px_10px_0px_#0000001A] pt-[25px] pb-[21px] pl-[38px] pr-[37px] flex flex-col  items-center text-center">
                        <div className="w-[70px] h-[70px] mb-9 bg-[#00ACFF] rounded-[50%] shadow-[4px_5px_15px_0px_#00C2FF66] flex items-center justify-center ">
                            <img src={settings} alt="" />
                        </div>
                        <p className="font-normal  text-base leading-[151%]">
                            Trusted and professional advisors for you
                        </p>
                    </li>

                    <li className="max-w-[270px] w-full shadow-[0px_1px_10px_0px_#0000001A] pt-[25px] pb-[21px] pl-[40px] pr-[39px] flex flex-col  items-center text-center">
                        <div className="w-[70px] h-[70px] mb-9 bg-[#373737] rounded-[50%] shadow-[4px_5px_15px_0px_#00000066] flex items-center justify-center ">
                            <img src={systems} alt="" />
                        </div>
                        <p className="font-normal  text-base leading-[151%]">
                            Experience to give you a better results
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
