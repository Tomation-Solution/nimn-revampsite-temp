import React from "react";
import TemplateContainer from "../TemplateContainer";

const ECP = () => {
  return (
    <TemplateContainer>
      <div>
        <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
          2023 Election - Contestants Profile
        </p>{" "}
        <div className="text-[18px] text-gray-600 my-[2em] leading-9">
          <p>
            <strong>First Vice President</strong>
          </p>
          <p>
            Prof. Prince Mike Ikupolati <strong>(View Profile)</strong>
          </p>
        </div>{" "}
        <div className="text-[18px] text-gray-600 my-[2em] leading-9">
          <p>
            <strong>Second Vice President</strong>
          </p>
          <p>
            Mrs. Ebisan Onyema <strong>(View Profile)</strong>
          </p>{" "}
          <p>
            Mrs. Ebisan Onyema <strong>(View Profile)</strong>
          </p>
        </div>
      </div>
    </TemplateContainer>
  );
};

export default ECP;
