import React, { useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import pic_5 from "../../../public/images/member_4.jpg";
import pic_6 from "../../../public/images/member_5.jpg";
import pic_7 from "../../../public/images/member_6.jpg";
import pic_8 from "../../../public/images/member_7.jpg";

const data = [
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
  {
    img: pic_8,
    title: "Cheif Hope Gbagi",
    body: "Council Member",
  },
];
const SpotLightCard = ({
  img,
  title,
  body,
  index,
}: // link,
{
  img: any;
  title: string;
  body: string;
  index: number;
  // link: string;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay={index * 400}
      className="relative flex flex-col items-center"
    >
      <div className="w-[20em] h-[20em] shadow-md bg-pri rounded-full overflow-hidden">
        <Image width={500} height={500} src={img} alt={title} />
      </div>

      <div className="flex flex-col gap-y-[1em] text-center absolute -bottom-[10em] bg-white rounded-md px-[1.5em] py-[2em] w-[90%] ">
        <p className="text-pri_var_2 text-[20px] font-[600]">{title}</p>
        <p className="text-[15px] text-p_gray">{body}</p>
        {/* <a className="text-pri_var_1 font-[600] text-[16px]" href={link}>
          Read More
        </a> */}
      </div>
    </div>
  );
};

const SpotLight = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em] mt-6">
      <div className="flex  flex-col justify-center my-[3em] gap-6">
        <p className="text-[42px] font-[700] text-pri text-center">
          {" "}
          Member’s Spotlight{" "}
        </p>
        {/* <p className=" text-center mb-14"> Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p> */}
      </div>
      <div className=" grid lg:grid-cols-4 gap-[3em] md:grid-cols-2 grid-cols-1 gap-y-[12em] gap-x-[2em] pb-[10rem] ">
        {data.map((item, index) => (
          <SpotLightCard
            key={index}
            img={item.img}
            title={item.title}
            body={item.body}
            index={index}
            // link={item.link}
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

export default SpotLight;
