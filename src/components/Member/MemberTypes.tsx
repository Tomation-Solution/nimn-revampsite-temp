import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import showcase_bg from "../../../public/images/showcase_bg.jpg";
import grad from "../../../public/images/grad.jpeg";
import guy from "../../../public/images/guy.jpeg";
import span from "../../../public/images/span.png";
import Image from "next/image";

const data = [
  {
    title: "Associate Member",
    body: "As an Associate Member, if he has attained the age of 23 years and is employed in an management capacity in a marketing or related organization, and has passed examinations accepted by the Institute and is otherwise a fit and proper person to be enrolled in the Register;",
    link: "membership/memberships",
    img: span,
  },
  {
    img: span,
    title: "Full membership",
    body: "As a Full Member, if he has attained the age of 25 years and has been an Associate Member for a period not less than 5 years immediately preceding the date of application in that behalf and has been enrolled as an associate member or has been exempted from this requirement by the Council and is otherwise fir and proper person",
    link: "membership/memberships",
  },

  {
    title: "Fellow Member",
    body: "As a fellow, if he satisfy the Council that he has attained the age of 35 years and that for the period of 5 years immediately preceding the date of application in that behalf has been fit and proper person, and in addition he is the holder of an approved academic qualification and has creditably held a senior management position in a marketing or related organization,",
    link: "membership/memberships",
    img: span,
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

const SpotLight = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:mt-[6em] mt-[2em]">
      <div className="flex  flex-col justify-center my-[3em] gap-6">
        <p className="text-[42px] font-[700] text-pri text-center">
          {" "}
          Member’s Levels{" "}
        </p>
        <p className="text-[18px] font-medium text-p_gray text-center">
          {" "}
          Our members are the heart of our organization. We are proud to have
          members from all over the country.{" "}
        </p>
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
