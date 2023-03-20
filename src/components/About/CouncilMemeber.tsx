import React, { useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import pic_1 from "../../../public/images/chairman.jpg";
import pic_2 from "../../../public/images/member.jpg";
import pic_3 from "../../../public/images/member_2.jpg";
import pic_4 from "../../../public/images/member_3.jpg";
import pic_5 from "../../../public/images/member_4.jpg";
import pic_6 from "../../../public/images/member_5.jpg";
import pic_7 from "../../../public/images/member_6.jpg";

const data = [
  {
    img: pic_1,
    title: " Mr. Idorenyen Enang",
    body: "President and Chairman of Council",
  },
  {
    img: pic_2,
    title: "Mrs. Ebisan Onyema",
    body: "Second Vice President",
  },
  {
    img: pic_3,
    title: "Mr. Anthony Agenmonmen",
    body: "Immediate Past President",
  },
  {
    img: pic_4,
    title: "Dr. Chidi Nwankpa",
    body: "Council Member",
  },
  {
    img: pic_5,
    title: "Mr. Walter Okafor",
    body: "Council Member",
  },
  {
    img: pic_6,
    title: "Mrs. Adenike Olufade",
    body: "Council Member",
  },
  {
    img: pic_7,
    title: "Mrs. Adejoke Ishola",
    body: "Council Member",
  },
];

const CouncilMemberCard = ({
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
      className="relative flex flex-col items-center justify-end bg-gray-200 rounded-3xl "
    >
      <div className="rounded-full shadow-lg overflow-hidden">
        <Image width={500} height={500} src={img} alt={title} />
      </div>

      <div className="flex shadow-xl flex-col gap-y-[1em] text-center absolute -bottom-[10em] bg-white rounded-md px-[1.5em] py-[2em] w-[90%] ">
        <p className="text-pri_var_2 text-[20px] font-[600]">{title}</p>
        <p className="text-[15px] text-p_gray">{body}</p>
        {/* <a className="text-pri_var_1 font-[600] text-[16px]" href={link}>
          Read More
        </a> */}
      </div>
    </div>
  );
};

const CouncilMember = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em] mt-6">
      <div className="flex  flex-col justify-center my-[3em] gap-6">
        <p className="text-[42px] font-[700] text-pri text-center">
          {" "}
          Council Members{" "}
        </p>
        <p className=" text-center mb-14 md:text-[24px] font-medium">
          Our council members are the best in their fields. They are the best
          professionals in the marketing industry.
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 gap-[3em] md:grid-cols-2 grid-cols-1 gap-y-[12em] gap-x-[2em] pb-[10rem] ">
        {data.map((item, index) => (
          <CouncilMemberCard
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

export default CouncilMember;
