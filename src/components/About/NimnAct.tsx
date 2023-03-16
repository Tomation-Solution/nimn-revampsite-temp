import Image from "next/image";
import React, { useEffect } from "react";
import profile from "../../../public/images/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import act2003 from "../../../public/images/";

const NIMNAct = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex md:gap-0 gap-10   items-center justify-center  md:px-[6em] px-[1em] md:my-[10rem] my-[6rem] flex-wrap relative">
      <Image
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        src={profile}
        alt="Profile"
        width={600}
        height={400}
        className="flex-1 width-auto"
      />

      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-delay={400}
        className="flex-1 md:sticky inline md:-ml-[4em] md:mt-[6em] shadow-slate-700 shadow-2xl"
      >
        <div className="flex flex-col gap-y-5 bg-pri_var_2 items-center  ">
          <p className="md:text-[42px]  lg:text-[42px] text-[20]  font-[700]  lg:px-14 px-6    text-justify w-full  mt-10 text-pri_var_1 ">
            NIMN Act 2013
          </p>
          <p className="md:text-[20px] text-[20px] lg:px-14 px-6  text-white lg:leading-10 leading-7 pb-10  text-justify  ">
            The Act that mandates compulsory membership of the Institute for all
            marketers who receive or expect to receive remuneration is put in
            place to regulate the marketing profession and ensure a high level
            of professionalism and ethical standards. The Act defines practicing
            marketing as engaging in the practice of marketing, holding oneself
            out to the public as a marketer, or providing professional services
            related to marketing. Failure to register with the Institute is
            illegal, and Section 202 of the Act makes it clear that anyone who
            practices marketing without being a registered member of the
            Institute or takes or uses any name, title, addition, or description
            implying that they are in practice as a marketer commits an offence.
            The Institute aims to provide value to its members, corporate
            members, and government by providing opportunities for continuous
            improvement of marketing skills, promoting professional and career
            advancement through education, information, and networking, and
            showcasing marketing excellence. Additionally, the Institute
            collaborates with government at all levels to design genuine
            programmes that will help in achieving the economic transformation
            of the country. As an employee of the government, it&#39;s essential
            to understand the Act&#39;s provisions to comply with the law and
            promote ethical practices in marketing. If you have any questions or
            need further clarification, you can reach out to the Institute or
            consult legal experts for advice.
          </p>
          <a className="w-full" href={act2003} download="ACT2003.pdf">
            <button className=" justify-left items-left  text-white bg-pri_var_1 w-3/4 py-4 font-normal text-lg hover:bg-pri">
              Download the NIMN Act 2013
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NIMNAct;
