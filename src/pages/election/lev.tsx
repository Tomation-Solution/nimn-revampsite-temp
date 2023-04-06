import TemplateContainer from "@/components/TemplateContainer";
import React from "react";

const lev = () => {
  return (
    <>
      <TemplateContainer>
        <div>
          <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
            List of Eligible Voters
          </p>{" "}
          <div className="text-[18px] text-gray-600 my-[2em] leading-9">
            <p>
              The list of eligible voters for the upcoming elections is now out.
            </p>
            <p>
              View the list{" "}
              <a href="https://drive.google.com/file/d/1x3blngJYMZgTo-N6uiHWUlomjr1Pqp9k/view?usp=sharing">
                {" "}
                <strong> Click Here to download</strong>
              </a>{" "}
            </p>
          </div>
        </div>
      </TemplateContainer>
    </>
  );
};

export default lev;
