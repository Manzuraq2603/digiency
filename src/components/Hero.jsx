import React from "react";
import heroImg from "../assets/hero-img.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import skype from "../assets/skype.svg";

function Hero() {
    return (
        <section className="lg:py-[153px] md:[73px] py-[50px] bg-[#FFF7F4] flex">
            <div className="max-w-[1250px] mx-auto px-10 md:flex-row flex flex-col-reverse  items-center lg:gap-[35px] md:gap-[19px] ">
                <div className="lg:max-w-[493px] md:max-w-[349px] w-full">
                    <h1 className="lg:font-bold font-semibold lg:text-5xl md:text-[39px] text-[31px] md:text-start text-center leading-[124%] text-[#373737]">
                        We Are The Best{" "}
                        <span className="text-[#FF5300]">Digital Agency</span>{" "}
                        for business
                    </h1>
                    <p className="font-normal text-base md:text-start text-center leading-[151%] lg:mt-[11px] mt-[18px]">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                    </p>
                    <div className="flex items-center md:justify-start justify-center">
                        <button className="font-medium text-xl leading-[124%] rounded-[5px] lg:mt-[50px]  mt-[25px] pl-[19px] pr-[22px] pt-[13px] pb-4 text-white bg-[#FF5300]">
                            Contact Us
                        </button>
                    </div>
                </div>
                <img
                    className="lg:w-[639px] lg:h-[429px] md:w-[307px] w-full md:h-[207px] md:mb-0 mb-[50px]"
                    src={heroImg}
                    alt="hero-img"
                    width={639}
                    height={429}
                />
            </div>
            <div className="  md:flex hidden  flex-col gap-[5px]">
                <div className=" mt-16  w-10 h-10 bg-amber-600 flex items-center justify-center">
                    <img
                        className=""
                        src={facebook}
                        alt="facebook"
                        width={10.5}
                        height={20}
                    />
                </div>
                <div className=" w-10 h-10 bg-white flex items-center justify-center ">
                    <img
                        className=""
                        src={instagram}
                        alt="instagram"
                        width={20}
                        height={20}
                    />
                </div>
                <div className=" w-10 h-10 bg-white flex items-center justify-center">
                    <img
                        className=""
                        src={twitter}
                        alt="twitter"
                        width={20.38}
                        height={16.57}
                    />
                </div>
                <div className=" w-10 h-10 bg-white flex items-center justify-center">
                    <img
                        className=""
                        src={skype}
                        alt="skype"
                        width={18.01}
                        height={18.01}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
