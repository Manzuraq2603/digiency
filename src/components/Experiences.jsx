import React from "react";

function Experiences() {
    return (
        <section className="py-15 bg-[#FFF7F4]">
            <div className="max-w-[1250px] mx-auto px-10 flex md:flex-row flex-col gap-[30px] justify-between items-center">
                <div className="lg:max-w-[570px] md:max-w-83 w-full mt-[33px] ">
                    <p className="font-normal text-[#7B7B7B] text-base leading-[151%] lg:mb-[25px] mb-[18px] md:text-start text-center   ">
                        Our Expereince
                    </p>
                    <h2 className="md:font-semibold font-medium lg:text-[39px] md:text-[31px] text-[25px] md:text-start text-center leading-[124%] mb-[18px] text-[#373737]">
                        We Have Completed{" "}
                        <span className="text-[#FF5300]">150+ Projects </span>
                        Succesfully
                    </h2>
                    <p className="mb-[25px] font-normal text-[#7B7B7B] text-base md:text-start text-center leading-[151%] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nascetur imperdiet at a augue ullamcorper.{" "}
                        <span className="lg:flex hidden">
                            {" "}
                            Leo faucibus feugiat rutrum aenean. Nisi, lectus
                            aliquet aliquam consectetur augue praesent. Lorem
                            vulputate orci eget mi, sed pulvinar.
                        </span>
                    </p>
                    <p className="mb-[25px] font-normal text-[#7B7B7B] text-base leading-[151%] md:text-start text-center ">
                        Ornare etiam erat volutpat tempor fringilla mi. Elit a
                        blandit faucibus est, dui interdum ut amet.
                        <span className="lg:flex hidden">
                            Adipiscing feugiat vel at posuere in. Pellentesque
                            volutpat vestibulum.
                        </span>
                    </p>
                    <div className="flex items-center md:justify-start justify-center">
                        <button className="font-medium text-xl leading-[124%] rounded-[5px]  pl-[19px] pr-[22px] pt-[13px] pb-4 text-white bg-[#FF5300] cursor-pointer border-2 border-transparent hover:text-[#FF5300] hover:border-2 hover:border-[#FF5300] hover:bg-white transition-all duration-[0.4s] ease-in">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="flex lg:gap-[30px] md:gap-2 md:flex-row flex-col gap-[25px] md:w-auto w-full">
                    <ul className="flex flex-col lg:gap-[30px] md:gap-2 lg:mt-0 md:mt-[45px] gap-[25px] md:w-auto w-full">
                        <li className="lg:w-[270px] lg:py-[74px] md:w-[162px] w-full  md:py-[43px] py-[71px]  bg-white flex flex-col justify-center items-center shadow-[0px_1px_10px_0px_#0000001A]">
                            <h1 className="text-[#373737] lg:font-bold md:font-medium lg:text-5xl mb-[18px] md:mb-[10px] md:text-[25px] leading-[124%]">
                                250+
                            </h1>
                            <p className="text-[#7B7B7B] lg:font-medium md:font-normal lg:text-xl md:text-base leading-[124%]">
                                Global Customer
                            </p>
                        </li>
                        <li className="lg:w-[270px]  md:w-[162px] lg:py-[74px] md:py-[43px] py-[71px] bg-white flex flex-col justify-center items-center shadow-[0px_1px_10px_0px_#0000001A]">
                            <h1 className="text-[#373737] lg:font-bold md:font-medium lg:text-5xl md:text-[25px] md:mb-[10px] mb-[18px] leading-[124%]">
                                50+
                            </h1>
                            <p className="text-[#7B7B7B] lg:font-medium md:font-normal lg:text-xl md:text-base  leading-[124%]">
                                Team Member
                            </p>
                        </li>
                    </ul>

                    <ul className="flex flex-col lg:gap-[30px] md:gap-2 lg:mt-[23px] md:mt-[77px] gap-[25px]">
                        <li className="lg:w-[270px]  md:w-[162px] lg:py-[74px] md:py-[43px] py-[71px] bg-white flex flex-col justify-center items-center shadow-[0px_1px_10px_0px_#0000001A]">
                            <h1 className="text-[#373737] lg:font-bold md:font-medium lg:text-5xl md:text-[25px] md:mb-[10px] mb-[18px] leading-[124%]">
                                156+
                            </h1>
                            <p className="text-[#7B7B7B] lg:font-medium md:font-normal lg:text-xl md:text-base  leading-[124%]">
                                Project Completed
                            </p>
                        </li>
                        <li className="lg:w-[270px] md:w-[162px] lg:py-[74px] md:py-[43px] py-[71px] bg-white flex flex-col justify-center items-center shadow-[0px_1px_10px_0px_#0000001A]">
                            <h1 className="text-[#373737] lg:font-bold md:font-medium lg:text-5xl md:text-[25px] md:mb-[10px] mb-[18px] leading-[124%]">
                                15+
                            </h1>
                            <p className="text-[#7B7B7B] lg:font-medium md:font-normal lg:text-xl md:text-base leading-[124%]">
                                Our Company
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experiences;
