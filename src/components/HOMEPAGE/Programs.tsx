import React, { useEffect } from "react";
import showcase_bg from "../../../public/images/showcase_bg.jpg";
import grad from "../../../public/images/grad.jpeg";
import guy from "../../../public/images/guy.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
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

const ProgramsCard = ({
  img,
  title,
  body,
  link,
  index,
}: {
  img: any;
  title: string;
  body: string;
  link: string;
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
      className="relative flex flex-col items-center"
    >
      <Image width={500} height={500} src={img} alt={title} />

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

const Programs = () => {
  return (
    <div className="bg-pri_var_2 lg:p-[10em] md:p-[6em] p-[2em]">
      <div className=" grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 gap-y-[12em] gap-x-[2em] pb-[10rem] ">
        {data.map((item, index) => (
          <ProgramsCard
            key={index}
            img={item.img}
            title={item.title}
            body={item.body}
            link={item.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;
