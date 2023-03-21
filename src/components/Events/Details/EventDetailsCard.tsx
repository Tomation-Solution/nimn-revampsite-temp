import Image from "next/image";
import React from "react";

const EventDetailsCard = ({
  title,
  description,
  type,
  image,
}: {
  title: string;
  description: string;
  type: string;
  image: string;
}) => {
  return (
    <div>
      <div className="w-full  bg-slate-600 overflow-hidden flex items-start justify-center">
        <Image src={image} alt="" />
      </div>
      <div className=" flex flex-row   ">
        <div className="lg:px-[10em] md:px-[3em] px-[1em]">
          <p className="mt-10   text-[36px] font-[700] mb-5  lg:text-justify text-center ">
            Events Details{" "}
          </p>

          <div className="grid lg:grid-cols-2 gap-[5em] md:grid-cols-2 grid-cols-1 mt-14 ">
            <div className="shadow-sm px-1 ">
              <div className="  py-[2rem] ">
                <p className="text-pri_var_1 font-[700] text-[24px]">{title}</p>
              </div>
              <div className="">
                <p className=" leading-10 text-p_gray text-justify  font-[600] text-[19px]">
                  {description}
                </p>
              </div>
            </div>

            <div className="shadow-sm px-1 ">
              <div className="py-[2rem] ">
                <p className="text-pri_var_1 font-[700] text-[24px]">
                  {" "}
                  What included{" "}
                </p>
              </div>
              <div className="">
                <p className=" leading-10 text-p_gray text-justify  font-[600] text-[19px]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsCard;
