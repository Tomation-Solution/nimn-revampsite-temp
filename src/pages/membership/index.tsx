import React from "react";
import HeadComponent from "@/components/head";
import {
  Showcase,
  MemberBenefit,
  MemberTypes,
  MemberLevels,
  Requirement,
  Testimoney,
} from "@/components";
import MembershipLevels from "@/components/Member/MembershipLevels";

function membership() {
  return (
    <>
      <HeadComponent pageName="Member" />
      <main>
        <Showcase />
        <MemberBenefit />
        <MemberTypes />
        <MembershipLevels />
        {/* <MemberLevels /> */}
        {/* <Requirement /> */}
        <Testimoney />
      </main>
    </>
  );
}

export default membership;
