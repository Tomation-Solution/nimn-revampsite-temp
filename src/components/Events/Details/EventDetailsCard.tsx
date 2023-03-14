import React from "react";

const EventDetailsCard = ({
    title,
    description,
    type,
}: {
    title: string;
    description: string;
    type: string;
}) => {
    return (
        <div>
            <div className="lg:px-[5em] md:px-[3em] px-[1em]">
                <div
                    className="text-justify mb-[2em] lg:w-[50%] md:w-[60%] w-[80%] mx-auto">
                    <p className=" text-[36px] font-[700] "> Details Events </p>
                </div>

        <div className="grid lg:grid-cols-1 gap-[3em] md:grid-cols-2 grid-cols-1 ">
        <div className="shadow-sm">
            <div className=" px-[1em] py-[2rem] ">
                <p className="text-pri_var_1 font-[700] text-[24px]">{title}</p>
            </div>

            <div className="bg-white leading-10 text-p_gray text-justify  font-[600] text-[19px]">
                <p>{description}</p>
            </div>
        </div>
                </div>
 

            </div>
            <div> 
                <p className=" ">  Whats included </p>
            </div>
        </div>
    );
};

export default EventDetailsCard;
