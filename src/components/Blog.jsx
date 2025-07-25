import React from "react";
import blogImg1 from "../assets/blog-img1.svg";
import blogImg2 from "../assets/blog-img2.svg";
import blogProfile1 from "../assets/blog-profile1.svg";
import blogProfile2 from "../assets/blog-profile2.svg";
import ellipse from "../assets/ellipse.svg";
import rectangle from "../assets/Rectangle.svg";
import ellipseGrey from "../assets/ellipse-grey.svg";

function Blog() {
    return (
        <section className="py-40 bg-white">
            <div className="max-w-[1250px] mx-auto px-10">
                <div className=" max-w-[542px] mx-auto">
                    <p className="font-normal text-[#7B7B7B] text-base leading-[151%] lg:mb-[25px] mb-[18px] text-center ">
                        Our Blog
                    </p>

                    <h2 className=" md:font-semibold font-medium lg:text-[39px] md:text-[31px] text-[25px]  text-center leading-[124%] md:mb-15 mb-[18px] text-[#373737]">
                        Our Latest{" "}
                        <span className="text-[#FF5300]">Blogs Will Keep </span>
                        Everyone Updated
                    </h2>
                </div>
                <ul className="flex justify-between items-center gap-6">
                    <li className="max-w-[570px] w-full shadow-[0px_1px_10px_0px_#0000001A] lg:p-[25px] p-[18px] ">
                        <div className="flex justify-between ">
                            <div className="max-w-[308px] w-full">
                                <p className="font-normal text-base mb-[18px] leading-[151%] text-[#FF5300]">
                                    Graphic Design
                                </p>
                                <h4 className="font-medium lg:text-[25px] text-base leading-[125%] text-[#373737]">
                                    35 Stellar Graphic Design Blogs to Keep You
                                    Educated and Inspired
                                </h4>
                            </div>
                            <img
                                className="lg:w-41 lg:h-41 h-20 w-20"
                                src={blogImg1}
                                alt="blog-img1"
                                width={164}
                                height={164}
                            />
                        </div>
                        <div className="flex gap-[10px] items-center  lg:mt-0 mt-[22px] ">
                            <img
                                className="lg:w-20 lg:h-20 w-15 h-15"
                                src={blogProfile1}
                                alt="profile1"
                                width={80}
                                height={80}
                            />
                            <div>
                                <h5 className="font-medium text-xl mb-[6px] leading-[124%] text-[#373737]">
                                    Cristofer Westervelt
                                </h5>
                                <p className="font-normal lg:text-base text-xs lg:leading-[151%] leading-[124%] text-[#7B7B7B] flex items-center gap-2">
                                    January 25, 2021{" "}
                                    <span className="inline-block w-[5px] h-[5px] bg-[#7B7B7B] rounded-[50%]"></span>
                                    5 min Read
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="max-w-[570px] w-full shadow-[0px_1px_10px_0px_#0000001A] lg:p-[25px] p-[18px] ">
                        <div className="flex justify-between ">
                            <div className="max-w-[308px] w-full">
                                <p className="font-normal text-base mb-[18px] leading-[151%] text-[#FF5300]">
                                    Managing Director
                                </p>
                                <h4 className="font-medium lg:text-[25px] text-base leading-[125%] text-[#373737]">
                                    Ridiculously powerful 2021 iPad Pro may drop
                                    this month
                                </h4>
                            </div>
                            <img
                                className="lg:w-41 lg:h-41 h-20 w-20"
                                src={blogImg2}
                                alt="blog-img1"
                                width={164}
                                height={164}
                            />
                        </div>
                        <div className="flex gap-[10px] items-center  lg:mt-0 mt-[22px] ">
                            <img
                                className="lg:w-20 lg:h-20 w-15 h-15"
                                src={blogProfile2}
                                alt="profile1"
                                width={80}
                                height={80}
                            />
                            <div>
                                <h5 className="font-medium text-xl mb-[6px] leading-[124%] text-[#373737]">
                                    Haylie Mango
                                </h5>
                                <p className="font-normal lg:text-base text-xs lg:leading-[151%] leading-[124%] text-[#7B7B7B] flex items-center gap-2">
                                    January 25, 2021{" "}
                                    <span className="inline-block w-[5px] h-[5px] bg-[#7B7B7B] rounded-[50%]"></span>
                                    5 min Read
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-1 pt-15">
                    <img src={ellipse} alt="ellipse" width={15} height={15} />
                    <img src={rectangle} alt="ellipse" width={49} height={15} />
                    <img
                        src={ellipseGrey}
                        alt="ellipse"
                        width={15}
                        height={15}
                    />
                </div>
            </div>
        </section>
    );
}

export default Blog;
