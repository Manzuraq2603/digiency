import React from "react";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import frame4 from "../assets/frame4.svg";
function Frame() {
    return (
        <section className="bg-white ">
            <div className="max-w-[1250px] w-full mx-auto px-10 pt-[122px] pb-[123px] flex lg:gap-15 md:gap-[54px] gap-[29px] justify-between items-center ">
                <img
                    className="lg:w-[213px] lg:h-[167px] md:w-[138px] md:h-[108px] w-[67px] h-[53px]"
                    src={frame1}
                    alt="frame1"
                    width={213}
                    height={167}
                />
                <img
                    className="lg:w-[223px] lg:h-[162px] md:w-[145px] md:h-[107px]  w-[70px] h-[51px]"
                    src={frame2}
                    alt="frame2"
                    width={223}
                    height={162}
                />
                <img
                    className="lg:w-[159px] lg:h-[168px] md:w-[104px] md:h-[109px]  w-[51px] h-[53px]"
                    src={frame3}
                    alt="frame3"
                    width={159.76}
                    height={168.99}
                />
                <img
                    className="lg:w-[213px] lg:h-[169px] md:w-[139px] md:h-[109px]  w-[67px] h-[53px]"
                    src={frame4}
                    alt="frame4"
                    width={213.67}
                    height={169.7}
                />
            </div>
        </section>
    );
}

export default Frame;
