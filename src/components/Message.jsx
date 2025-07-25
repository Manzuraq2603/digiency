import React, { useState } from "react";
import messageImg from "../assets/message-img.svg";

function Message() {
    const [formData, setFormData] = useState({
        firstname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        const scriptURL =
            "https://script.google.com/macros/s/AKfycbzsR_StsRDijmUNTz1ja4LgNa0p0sSbOnRl38afzk9pSec7ZY1wZY-XQ_eHcuXDuo78nw/exec";

        // Create FormData object to pass to the fetch request
        const form = new FormData();
        Object.keys(formData).forEach((key) => form.append(key, formData[key]));

        // Fetch request to submit the form data
        fetch(scriptURL, { method: "POST", body: form })
            .then((response) => {
                alert("Your message has been sent successfully!"); // Success alert
                console.log("Success!", response);

                // Reset the form data after successful submission
                setFormData({
                    firstname: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((error) => {
                alert(
                    "There was an error sending your message! Please try again."
                ); // Error alert
                console.error("Error!", error.message);
            });
    };

    return (
        <section className="py-15">
            <div className="max-w-[1250px] mx-auto px-10 flex md:flex-row flex-col justify-between">
                <img
                    className="lg:w-158 lg:h-[333px] md:w-[342px] w-full md:h-[181px] mt-auto"
                    src={messageImg}
                    alt="message-img"
                />
                <form
                    className="lg:max-w-[670px] md:max-w-[391px] w-full "
                    onSubmit={handleSubmit}
                >
                    <h2 className=" font-semibold lg:text-[39px] md:text-[31px] text-[25px] leading-[124%] md:mt-0 mt-[50px] lg:mb-15 mb-[18px] text-center text-[#373737]">
                        Send Your{" "}
                        <span className="text-[#FF5300]">Message To Us</span>
                    </h2>
                    <div className="flex md:flex-row flex-col gap-[10px] mb-[18px] w-full">
                        <input
                            className="md:max-w-[330px] max-w-full w-full  outline-none lg:py-[18px] md:py-[13px] pl-[18px] py-[18px] placeholder:text-base placeholder:text-[#7B7B7B] shadow-[0px_1px_10px_0px_#0000001A]"
                            type="text"
                            placeholder="Name"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                        <input
                            className="md:max-w-[330px] max-w-full w-full outline-none lg:py-[18px] md:py-[13px] pl-[18px] py-[18px] placeholder:text-base placeholder:text-[#7B7B7B] shadow-[0px_1px_10px_0px_#0000001A]"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex  md:flex-row flex-col  gap-[10px] mb-[18px]">
                        <input
                            className="md:max-w-[330px] max-w-full w-full outline-none lg:py-[18px] md:py-[13px] pl-[18px] py-[18px] placeholder:text-base placeholder:text-[#7B7B7B] shadow-[0px_1px_10px_0px_#0000001A]"
                            type="number"
                            placeholder="Mobile No"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            className="md:max-w-[330px] max-w-full w-full outline-none lg:py-[18px] md:py-[13px] pl-[18px] py-[18px] placeholder:text-base placeholder:text-[#7B7B7B] shadow-[0px_1px_10px_0px_#0000001A]"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        className="md:max-w-[670px] max-w-full w-full outline-none  pt-[18px] pl-[18px] lg:pb-[121px] md:pb-[67px] pb-[121px] lg:mb-7 mb-[25px] placeholder:text-base placeholder:text-[#7B7B7B] shadow-[0px_1px_10px_0px_#0000001A]"
                        placeholder="Send Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <div className="flex items-center md:justify-start justify-center">
                        <button
                            type="submit"
                            className="font-medium text-xl leading-[124%] rounded-[5px] pl-[19px] pr-[22px] pt-[13px] pb-4 text-white bg-[#FF5300] cursor-pointer border-2 border-transparent hover:text-[#FF5300] hover:border-2 hover:border-[#FF5300] hover:bg-white transition-all duration-[0.4s] ease-in"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Message;
