import React, { useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import pic_1 from "../../../public/images/avatar.jpg";
import pic_2 from "../../../public/images/avatar.jpg";
import pic_3 from "../../../public/images/avatar.jpg";

const data = [
  {
    img: pic_1,
    title: "Disciplinary member 1",
    body: "Disciplinary position 1",
  },
  {
    img: pic_3,
    title: "Disciplinary member 2",
    body: "Disciplinary position 2",
  },
  {
    img: pic_2,
    title: "Disciplinary member 3",
    body: "Disciplinary position 3",
  },
  {
    img: pic_2,
    title: "Disciplinary member 4",
    body: "Disciplinary position 4",
  },
];

const DisciplinaryCard = ({
  img,
  title,
  body,
  index,
}: {
  img: any;
  title: string;
  body: string;
  index: number;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay={index * 400}
      className="relative flex flex-col items-center justify-end"
    >
      <Image width={500} height={500} src={img} alt={title} />

      <div className="flex shadow-xl flex-col gap-y-[1em] absolute -bottom-[10em] bg-white rounded-md px-[1.5em] py-[2em] w-[90%] ">
        <p className="text-pri_var_2 text-[20px] font-[600] border-b-stone-700 border-b-2">
          {title}
        </p>
        <p className="text-[16px] text-p_gray">{body}</p>
      </div>
    </div>
  );
};

const Disciplinary = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em] mt-6">
      <div className="flex  flex-col justify-center my-[3em] gap-6">
        <p className="text-[42px] font-[700] text-pri text-center">
          {" "}
          Disciplinary Tribunal
        </p>
        <p className=" text-center mb-14 md:text-[24px] font-medium">
          {" "}
          Our disciplinary committee is made up of seasoned professionals who
          are experts in their various fields.{" "}
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 gap-[3em] md:grid-cols-2 grid-cols-1 gap-y-[12em] gap-x-[2em] pb-[10rem] ">
        {data.map((item, index) => (
          <DisciplinaryCard
            key={index}
            img={item.img}
            title={item.title}
            body={item.body}
            index={index}
          />
        ))}
      </div>
      {/* <div className="mt-5 flex justify-center items-center">
        <button className=" justify-center items-center text-white bg-pri_var_2 w-[116px] h-[59px] font-normal text-lg">
          {" "}
          see more{" "}
        </button>
      </div> */}
    </div>
  );
};

export default Disciplinary;
