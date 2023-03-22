import React from "react";
import HeadComponent from "@/components/head";
import { CertificateBenefit, CertificateLevel } from "@/components";
import LearningDev from "@/components/Certification/LearningDev";

function membership() {
  return (
    <>
      <HeadComponent pageName="Certificate" />
      <main>
        <CertificateBenefit />
        <LearningDev />
      </main>
    </>
  );
}

export default membership;
