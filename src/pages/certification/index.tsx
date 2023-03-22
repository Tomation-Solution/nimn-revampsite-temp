import React from "react";
import HeadComponent from "@/components/head";
import { CertificateBenefit, CertificateLevel } from "@/components";
import LearningDev from "@/components/Certification/LearningDev";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Attend a Training",
    description: "Attend a training to get a certificate",
    link: "/certification/learningDev",
  },
  {
    id: 2,
    title: "Benefits of Having NIMN Professional Qualification In Marketing",
    description:
      "Benefits of Having NIMN Professional Qualification In Marketing",
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
    description: "Professional Qualifications In Marketing",
    link: "/certification/qualifications",
  },
  {
    id: 5,
    title: "About the Examination",
    description: "About the Examination",
    link: "/certification/about",
  },
];

const CertNavButton = ({ title, description, link }: any) => {
  return (
    <Link href={link}>
      <div className="bg-pri p-4 rounded-md my-4">
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
        <CertificateBenefit />
        <div className="flex items-center justify-center m-[2em]">
          <div className="lg:w-[60%] md:w-[75%] w-[90%]">
            {/* <h2 className=" font-bold mt-10  lg:text-[46px] md:text-[30px] text-[20px] text-3xl text-justify mb-5 text-pri">
              {" "}
              Certifications{" "}
            </h2> */}
            <div className="">
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
      </main>
    </>
  );
}

export default membership;
