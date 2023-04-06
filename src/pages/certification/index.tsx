import React from "react";
import HeadComponent from "@/components/head";
import {
  CertShowcase,
  CertificateBenefit,
  CertificateLevel,
} from "@/components";
import LearningDev from "@/components/Certification/LearningDev";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Attend a Training",
    description:
      "Our Training and Development courses are designed majorly to update and refresh the skills of marketing practitioners and those seeking to reposition their organizations in a competitive globalized world... read more",
    link: "/certification/learningDev",
  },
  {
    id: 2,
    title: "Benefits of Having NIMN Professional Qualification In Marketing",
    description:
      "The professional qualifications in marketing provide holders with a wide range of interesting career opportunities in brand management, Sales, customer service, customer relationship...read more",
    link: "/certification/benefit",
  },
  {
    id: 3,
    title: "Prospectus and Syllabus For Professional Examination",
    description: "Prospectus and Syllabus For Professional Examination",
    link: "https://drive.google.com/file/d/1-3WhKIskcImmhCDZadn5Cewz-UEralWJ/view?usp=sharing",
  },

  {
    id: 4,
    title: "Professional Qualifications In Marketing",
    description:
      "The NIMN professional qualifications in marketing have three (3) distinct stages and the curricula have been structured to provide a solid foundation for those desirous of having a thorough in marketing and becoming Chartered Marketers...read more",
    link: "/certification/qualifications",
  },
  {
    id: 5,
    title: "About the Examination",
    description:
      "Upon registration for the any diet of the examination, payments so made are non-refundable. However, a concession may be given for deferment of the examination after registration if there is a written application for deferment by the candidate supported with cogent reasons...read more",
    link: "/certification/about",
  },
];

const CertNavButton = ({ title, description, link }: any) => {
  return (
    <Link href={link}>
      <div className="bg-pri p-4 rounded-md my-4 ">
        <div className=" font-bold bg-white p-4 rounded-md hover:bg-gray-300 animate-all duration-300">
          {" "}
          {title}
        </div>
        <p>
          <span className="text-white font-semibold mt-4">{description}</span>
        </p>
      </div>
    </Link>
  );
};

function membership() {
  return (
    <>
      <HeadComponent pageName="Certificate" />
      <main>
        <CertShowcase />
        <div className="flex items-center justify-center m-[2em]">
          <div className="lg:w-[60%] md:w-[75%] w-[90%]">
            {/* <h2 className=" font-bold mt-10  lg:text-[46px] md:text-[30px] text-[20px] text-3xl text-justify mb-5 text-pri">
              {" "}
              Certifications{" "}
            </h2> */}
            <div className="grid lg;grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <CertNavButton
                      title={item.title}
                      description={item.description}
                      link={item.link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <CertificateBenefit />
      </main>
    </>
  );
}

export default membership;
