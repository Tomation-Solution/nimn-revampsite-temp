import React from "react";

const FormInput = ({ title, type }: any) => {
  return (
    <div className="flex flex-col shadow-2xl w-full ">
      <label className="font-bold " aria-required htmlFor={title}>
        {title}
      </label>
      <input
        className="border-gray-500 border-2 text-gray-500 p-[.5em] rounded-md"
        type={type}
        id={title}
        name={title}
        placeholder={`Enter your ${title.toLowerCase()}`}
      />
    </div>
  );
};

const LearningDev = () => {
  return (
    <div className="flex items-center justify-center m-[2em]">
      <div className="w-[60%]">
        <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri my-[.5em] ">
          NIMN Learning and Development{" "}
        </p>{" "}
        <div className="font-semibold text-[18px] text-gray-600 leading-10">
          <p>
            Our Training and Development courses are designed majorly to update
            and refresh the skills of marketing practitioners and those seeking
            to reposition their organizations in a competitive globalized world.
          </p>
          <p>
            The courses address employees and corporate drivers in both the
            public and private sectors of the economy.
          </p>

          <p className="mt-[2em] text-[20px] font-bold">
            SOME IMPORTANT INFORMATION
          </p>
          <ol className="list-disc">
            <li>Customized programmes are available, kindly contact us.</li>
            <li>
              For effectiveness, the average class size should be between 15 and
              20
            </li>
            <li>
              The course fee covers lecture training materials and certificate
              of attendance
            </li>
            <li>
              Registration should be made at latest 1 week before any programme
            </li>
            <li>
              Mandatory training is for members, especially those eligible for
              an upgrade.
            </li>
          </ol>
          <p className="mt-[2em] text-[20px] font-bold">
            KINDLY USE THE FORM BELOW TO REGISTER FOR A TRAINING
          </p>

          <button className="bg-gray-300 rounded-md p-[1em] my-[2em]">
            Download 2022 Training Schedule
          </button>
          <div>
            <div className="flex md:flex-row flex-col gap-6 items-center w-full">
              <FormInput title="Name" type="text" />
              <FormInput title="Last" type="text" />
            </div>{" "}
            <div className="flex md:flex-row flex-col gap-6 items-center w-full  mt-[2em]">
              <FormInput title="Phone" type="phone" />
              <FormInput title="Email" type="email" />
            </div>{" "}
            <div className="flex md:flex-row flex-col gap-6 items-center w-full  mt-[2em]">
              <FormInput title="Organization" type="text" />
              <div>
                <p>
                  <strong>Are you a member of the institute?</strong>
                  <div>
                    <input
                      type="checkbox"
                      className="w-[1em] h-[1em]"
                      id="yes"
                      name="member"
                      value="yes"
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="w-[1em] h-[1em]"
                      id="no"
                      name="member"
                      value="no"
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDev;
