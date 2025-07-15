import React from "react";
import aboutImg from "../assets/about-img.svg";
import fileIcon from "../assets/file-icon.svg";
import groupIcon from "../assets/group-icon.svg";
import settings from "../assets/settings-icon.svg";
import systems from "../assets/systems-icon.svg";
function About() {
    return (
        <section className="py-30 bg-white">
            <div className="max-w-[1250px] mx-auto px-10 ">
                <div className="flex justify-between">
                    <img
                        className="mt-auto"
                        src={aboutImg}
                        alt="image"
                        width={684}
                        height={352}
                    />
                    <div className="max-w-[570px] w-full">
                        <p className="font-normal text-[#7B7B7B] text-base leading-[151%] mb-[25px]">
                            About Us
                        </p>
                        <h2 className="font-semibold text-[39px] leading-[124%] mb-[18px] text-[#373737]">
                            We Are{" "}
                            <span className="text-[#FF5300]">
                                Making Ideas Better
                            </span>{" "}
                            For Everyone
                        </h2>
                        <p className="mb-[25px] font-normal text-[#7B7B7B] text-base leading-[151%] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nascetur imperdiet at a augue ullamcorper. Leo
                            faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                            aliquam consectetur augue praesent. Lorem vulputate
                            orci eget mi, sed pulvinar.
                        </p>
                        <p className="mb-[25px] font-normal text-[#7B7B7B] text-base leading-[151%] ">
                            Ornare etiam erat volutpat tempor fringilla mi. Elit
                            a blandit faucibus est, dui interdum ut amet.
                            Adipiscing feugiat vel at posuere in. Pellentesque
                            volutpat vestibulum.
                        </p>
                        <div className="flex items-center md:justify-start justify-center">
                            <button className="font-medium text-xl leading-[124%] rounded-[5px]  pl-[19px] pr-[22px] pt-[13px] pb-4 text-white bg-[#FF5300]">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="mt-15 flex justify-between items-center ">
                    <li className="shadow-[0px_1px_10px_0px_#0000001A] max-w-[270px] h-50 w-full flex flex-col items-center pt-[25px] pb-[21px] gap-9 text-center">
                        <div className=" shadow-[4px_5px_15px_0px_#FF530066] w-[70px] h-[70px] bg-[#FF5300] flex justify-center items-center rounded-[50%]">
                            <img
                                src={fileIcon}
                                alt="file-icon"
                                width={22.5}
                                height={25}
                            />
                        </div>
                        <p className=" max-w-[206px] w-full font-normal text-[#7B7B7B] text-base leading-[151%] ">
                            World leader in consulting and finance
                        </p>
                    </li>

                    <li className="shadow-[0px_1px_10px_0px_#0000001A] max-w-[270px]  h-50 w-full flex flex-col items-center pt-[25px] pb-[21px] gap-9 text-center">
                        <div className="shadow-[4px_5px_15px_0px_#00000066] w-[70px] h-[70px] bg-[#7B7B7B] flex justify-center items-center rounded-[50%]">
                            <img
                                src={groupIcon}
                                alt="file-icon"
                                width={27.5}
                                height={17.68}
                            />
                        </div>
                        <p className="max-w-[177px] w-full font-normal text-[#7B7B7B] text-base leading-[151%] ">
                            A focused team with a specialized skill
                        </p>
                    </li>

                    <li className="shadow-[0px_1px_10px_0px_#0000001A] max-w-[270px]  h-50 w-full flex flex-col items-center pt-[25px] pb-[21px] gap-9 text-center">
                        <div className="shadow-[4px_5px_15px_0px_#00C2FF66] w-[70px] h-[70px] bg-[#00ACFF] flex justify-center items-center rounded-[50%]">
                            <img
                                src={settings}
                                alt="file-icon"
                                width={25}
                                height={24.1}
                            />
                        </div>
                        <p className="max-w-[195px] w-full font-normal text-[#7B7B7B] text-base leading-[151%] ">
                            Trusted and professional advisors for you
                        </p>
                    </li>

                    <li className="shadow-[0px_1px_10px_0px_#0000001A] max-w-[270px]  h-50 w-full flex flex-col items-center pt-[25px] pb-[21px] gap-9 text-center">
                        <div className="shadow-[4px_5px_15px_0px_#00000066] w-[70px] h-[70px] bg-[#373737] flex justify-center items-center rounded-[50%]">
                            <img
                                src={systems}
                                alt="file-icon"
                                width={22.5}
                                height={22.5}
                            />
                        </div>
                        <p className="max-w-[191px] w-full font-normal text-[#7B7B7B] text-base leading-[151%] ">
                            Experience to give you a better results
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
