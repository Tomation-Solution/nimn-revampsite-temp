import Image from "next/image";
import React, { useEffect } from "react";
import mission from "../../public/images/mission.png";
import vision from "../../public/images/vision.png";
import AOS from "aos";
import "aos/dist/aos.css";

const TemplateContainer = (props: any) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex  justify-center md:my-[10em] my-[3em]">
      <div className="lg:w-[60%] md:w-[90%] w-[90%] flex  md:flex-row flex-col gap-x-[3em]">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration={1000}
        >
          {props.children}
        </div>
        <div>
          <div className="bg-gray-200 p-[.6em] md:mt-0 mt-[2em] flex flex-col gap-y-[.6em] md:w-[22em] w-full">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration={1000}
              className="w-full bg-white p-[.6em]"
            >
              <Image src={mission} width={300} height={180} alt="mission " />
              <p className="text-pri font-extrabold text-[20px]">
                Mission Statement
              </p>
              <p className="text-p_gray text-[16px] leading-7 ">
                NIMN shall create enduring, distinctive value for all
                stakeholders, through the development, promotion, and
                application of world-class marketing professionalism
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration={1000}
              data-aos-delay={400}
              className="w-full bg-white p-[.6em]"
            >
              <Image src={vision} width={300} height={180} alt="mission " />
              <p className="text-pri font-extrabold text-[20px]">
                The NIMN Vision
              </p>
              <p className="text-p_gray text-[16px] leading-7 ">
                To be the Engine-room of value creation for consumer empowerment
                and society’s development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateContainer;
