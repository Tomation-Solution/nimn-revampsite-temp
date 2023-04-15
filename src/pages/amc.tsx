import TemplateContainer from "@/components/TemplateContainer";
import React from "react";

const amc = () => {
  return (
    <TemplateContainer>
      <>
        <div>
          <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
            2023 Annual Marketing Conference
          </p>{" "}
          <div className="text-[18px] text-gray-600  leading-9">
            <p>Dear Members, </p>
            <p>
              Kindly be informed that the 2022 Annual Marketing Conference is
              scheduled to hold on Thursday, June 16, 2022, at Eko Hotels and
              Suites, Victoria Island, Lagos.
            </p>
            <p>
              <strong>
                The theme of the conference is: Driving Business Sustainability
                In The Age of Data and Technology.
              </strong>
            </p>
            <p>
              <strong>Participation Fee:</strong>
            </p>
            <p>
              <strong>Members:</strong> N25,000
            </p>
            <p>
              <strong>Non-Members:</strong> N35,000
            </p>
            <p>
              <strong>
                Kindly use this link to do so: https://linktr.ee/nimn2022
              </strong>
            </p>
            <p>
              For more clarifications, Kindly reach out to Mr. Adewale Adeshina
              on +234 803 670 6491
            </p>
          </div>
        </div>
      </>
    </TemplateContainer>
  );
};

export default amc;
