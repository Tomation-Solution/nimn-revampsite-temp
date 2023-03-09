import React from 'react'
import HeadComponent from "@/components/head";
import {
    Showcase,
    MemberBenefit,
    MemberTypes,
    MemberLevels,
    Requirement,
  } from "@/components";

function membership() {
  return (
<>
<HeadComponent pageName="Member" />
  <main> 
    <Showcase/>
    <MemberBenefit/>
    <MemberTypes/>
    <MemberLevels/>
    <Requirement/>
  </main>

</>
    )
}

export default membership