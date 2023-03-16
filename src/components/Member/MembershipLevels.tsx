import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import showcase_bg from "../../../public/images/showcase_bg.jpg";
import grad from "../../../public/images/grad.jpeg";
import guy from "../../../public/images/guy.jpeg";
import span from "../../../public/images/span.png";
import Image from "next/image";

const data = [
  {
    img: span,
    title: "Corporate Membership",
    body: "Corporate Membership is open to companies which produce or market goods and or services in Nigeria, which at the date of application, employ not less than 25 persons and satisfy the rules and regulation of the Institute.",
    link: "membership/corporate",
  },
  {
    img: span,
    title: "Individual Membership",
    body: "Membership of the National Institute of Marketing of Nigeria (NIMN) allows members to affix the initials, animn, mnimn, fnimn to their names. This gives a certain identity and visibility to members’ professional status.",
    link: "membership/individual",
  },

  {
    title: "Membership through Examination",
    body: "Membership of the Institute can also be achieved through successfully passing the qualifying examinations leading to the award of either the Chartered Graduate Diploma in Marketing or Chartered Post Graduate Diploma in Marketing.",
    link: "membership/exam",
    img: span,
  },
];

const MembershipLevelsCard = ({
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
    <div className="relative flex flex-col items-center shadow-md bg-pri group rounded-md">
      <div className="flex flex-col gap-y-[1em]  text-center  bg-white rounded-md px-[1.5em] py-[2em] group-hover:mt-0 animate-all duration-300  mt-5 h-full text-pri_var_1 group-hover:text-pri ">
        <p className=" text-[20px] font-[700]">{title}</p>
        <p className="text-[18px] font-medium text-p_gray">{body}</p>
        <a className="font-[600] text-[16px]" href={link}>
          Read More
        </a>
      </div>
    </div>
  );
};

const MembershipLevels = () => {
  return (
    <div className="md:px-[5em] p-[1em] ">
      <div className="flex  flex-col justify-center my-[3em] gap-6">
        <p className="md:text-[42px] text-[32px] font-[700] text-pri text-center">
          {" "}
          Membership Types
        </p>
      </div>
      <div className=" grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 gap-y-[12em] gap-x-[2em] pb-[10rem] ">
        {data.map((item, index) => (
          <MembershipLevelsCard
            key={index}
            img={item.img}
            title={item.title}
            body={item.body}
            link={item.link}
          />
        ))}
      </div>
      {/* <div className="mt-5 flex justify-center items-center">
        <button className=" justify-center items-center text-white bg-pri_var_2 w-[116px] h-[59px] font-normal text-lg hover:bg-pri_var_1">
          {" "}
          see more{" "}
        </button>
      </div> */}
    </div>
  );
};

export default MembershipLevels;
