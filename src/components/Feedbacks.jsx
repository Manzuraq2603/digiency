import React from "react";
import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import ellipse from "../assets/ellipse.svg";
import rectangle from "../assets/Rectangle.svg";
import ellipseGrey from "../assets/ellipse-grey.svg";

function Feedbacks() {
    return (
        <section className="py-15 bg-[#FFF7F4]">
            <div className="max-w-[1250px] mx-auto px-10">
               <div className='max-w-115 mx-auto '>
               <p className="font-normal text-[#7B7B7B] text-base leading-[151%] lg:mb-[25px] mb-[18px] text-center ">
                    Clients Feedback
                </p>
                <h2 className="md:font-semibold font-medium lg:text-[39px] md:text-[31px] text-[25px]  text-center leading-[124%] md:mb-15 mb-[18px] text-[#373737]">
                    Some <span className="text-[#FF5300] ">Great Words </span>
                    From Our Clients
                </h2>
               </div>
                <ul className="flex gap-16">
                    <li className="bg-[#FF5300] max-w-[470px] w-full ml-auto pl-[65px] pr-[35px] text-white pt-[34px] pb-[25px] relative">
                        <h4 className="font-medium text-2xl leading-[124%]  ">
                            Justin Septimus
                        </h4>
                        <p className="font-normal text-base leading-[151%] pt-[7px]">
                            CEO,word yt
                        </p>
                        <p className="font-normal text-base leading-[151%] pt-[23px] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sit a laoreet libero dis eget maecenas
                            bibendum. Morbi lacinia eu, etiam volutpat morbi et
                            amet, sagittis adipiscing.{" "}
                        </p>

                        <img
                            className=" absolute -left-10 top-6"
                            src={client1}
                            alt=""
                        />
                    </li>

                    <li className="bg-[#FF5300] max-w-[470px] w-full relative pl-[65px] pr-[35px] text-white pt-[34px] pb-[25px] ml-auto">
                        <h4 className="font-medium text-2xl leading-[124%]  ">
                            Ashlynn Gouse
                        </h4>
                        <p className="font-normal text-base leading-[151%] pt-[7px]">
                            Managing Director
                        </p>
                        <p className="font-normal text-base leading-[151%] pt-[23px] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sit a laoreet libero dis eget maecenas
                            bibendum. Morbi lacinia eu, etiam volutpat morbi et
                            amet, sagittis adipiscing.{" "}
                        </p>

                        <img
                            className="absolute -left-10 top-6"
                            src={client2}
                            alt="client2"
                        />
                    </li>
                </ul>
                <div className="flex justify-center items-center  gap-1 pt-15">
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

export default Feedbacks;
