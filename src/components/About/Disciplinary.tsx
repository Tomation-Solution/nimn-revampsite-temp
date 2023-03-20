import React, { useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import pic_1 from "../../../public/images/council_1.jpg";
import pic_2 from "../../../public/images/coun_3.png";
import pic_3 from "../../../public/images/coun.png";
import pic_4 from "../../../public/images/coun_4.png";
import pic_5 from "../../../public/images/coun_2.jpeg";
import pic_6 from "../../../public/images/coun_6.jpeg";
import pic_7 from "../../../public/images/coun_7.jpeg";
import pic_8 from "../../../public/images/coun_8.jpeg";

const data = [
  {
    img: pic_1,
    title: "Dr. Ify Uraih",
    body: "Chairman",
  },
  {
    img: pic_7,
    title: "Mrs. Evelyn Nwosu",
    body: "Member",
  },
  {
    img: pic_4,
    title: "Mrs. Folakemi Oshinyemi",
    body: "Member",
  },
  {
    img: pic_5,
    title: "Prince Femi Oyewole",
    body: "Member",
  },
  {
    img: pic_2,
    title: "Dr. Onyekachi Onubogu",
    body: "Member",
  },
  {
    img: pic_3,
    title: "Mr. Debo Adebayo",
    body: "Member",
  },
  {
    img: pic_8,
    title: "Mr. Ibrahim Yakasai",
    body: "Member",
  },
  {
    img: pic_6,
    title: "Mr. Augustine Kalu ",
    body: "Assessor",
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
      <div className="rounded-tr-[2em] rounded-bl-[3em] shadow-xl overflow-hidden ">
        <Image width={500} height={500} src={img} alt={title} />
      </div>
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
