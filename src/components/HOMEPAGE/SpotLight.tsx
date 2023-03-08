import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import showcase_bg from "../../../public/images/showcase_bg.jpg";
import grad from "../../../public/images/grad.jpeg";
import guy from "../../../public/images/guy.jpeg";
import Image from "next/image";

const data = [
  {
    img: showcase_bg,
    title: "Professional Qualifications in Marketing",
    body: "The professional qualifications in marketing provide holders with a …",
    link: "/",
  },
  {
    img: grad,
    title: "NIMN Examination",
    body: "The professional examinations are conducted in designated examination …",
    link: "/",
  },
  {
    img: guy,
    title: "Direct Membership Programme",
    body: "Membership through Fast Track Executive Membership …",
    link: "/",
  },
];


const SpotLightCard = ({
  img,
  title,
  body,
  link,
}: {
  img: any;
  title: string;
  body: string;
  link: string;
}) => {
  return (
    <div className="relative flex flex-col items-center">
      <Image width={500} height={500}src={img} alt={title} />

      <div className="flex flex-col gap-y-[1em] text-center absolute -bottom-[10em] bg-white rounded-md px-[1.5em] py-[2em] w-[90%] ">
        <p className="text-pri_var_2 text-[20px] font-[600]">{title}</p>
        <p className="text-[15px] text-p_gray">{body}</p>
        <a className="text-pri_var_1 font-[600] text-[16px]" href={link}>
          Read More
        </a>
      </div>
    </div>
  );
};

const SpotLight = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em] mt-6">
      <div className="flex  flex-col justify-center my-[3em] gap-6">
        <p className="text-[42px] font-[700] text-pri text-center"> Member’s Spotlight </p>
    <p className=" text-center mb-14"> Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
      </div>
      <div className=" grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 gap-y-[12em] gap-x-[2em] pb-[10rem] ">
        {data.map((item, index) => (
          <SpotLightCard
          key={index}
          img={item.img}
          title={item.title}
          body={item.body}
          link={item.link}
          />
        ))}
      </div>
      <div className="mt-5 flex justify-center items-center"> 
      <button className=" justify-center items-center text-white bg-pri_var_2 w-[116px] h-[59px] font-normal text-lg"> see more </button>

      </div>
    </div>
  );
};

export default SpotLight;
