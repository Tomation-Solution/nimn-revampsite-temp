import React from "react";
import HeadComponent from "@/components/head";
import { CertificateBenefit, CertificateLevel } from "@/components";
import LearningDev from "@/components/Certification/LearningDev";
import Link from "next/link";

function membership() {
  return (
    <>
      <HeadComponent pageName="Certificate" />
      <main>
        <CertificateBenefit />
        <div className="flex items-center justify-center m-[2em]">
          <div className="lg:w-[60%] md:w-[75%] w-[90%]">
            <h2 className=" font-bold mt-10  lg:text-[46px] md:text-[30px] text-[20px] text-3xl text-justify mb-5 text-pri">
              {" "}
              Certifications{" "}
            </h2>
            <Link href="/certification/learningDev">
              <button className="bg-gray-300 p-4 rounded-md hover:bg-gray-500 animate-all duration-300">
                {" "}
                Attend a Training
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default membership;
