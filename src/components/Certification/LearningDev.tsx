import React from "react";

const data = [
  {
    title: "January Programmes",
    checks: [
      "Economic outlook 2022: Budget discussion for C-suite Executives and Corporate leaders. (January, 11)",
      "Personal Financial Planning and Investment Opportunities in Nigeria. (January, 25)",
    ],
  },
  {
    title: "February Programmes",
    checks: [
      "Building a High-performance Sales organization:Handling difficult customers. (February, 16)",
    ],
  },
  {
    title: "March Programmes",
    checks: [
      "Managing the sales planning and review process. (March, 1)",
      "Emotional Intelligence and Wellbeing: Finding that Balance (The Wheel of Life). ( March, 22)",
      "Breaking the Glass Ceiling: Tips for rising in the Corporate World. (March 24 - 25)",
    ],
  },
  {
    title: "April Programmes",
    checks: [
      "Masterclass for Real Estate Marketing professionals; (investment opportunities). ( April, 5)",
      "Confidence Building: The key skill of a leader. (April, 19)",
    ],
  },
  {
    title: "June Programmes",
    checks: [
      "Mastering new technologies for customers connection and business growth. (June, 7)",
      "Networking and NetWeaving; The worth of your social capital. (June, 21)",
      "Building a Sustainable Career. (June, 30)",
    ],
  },
  {
    title: "July Programmes",
    checks: [
      "Understanding your customers",
      "Negotiation Skills: Strategies for closing out effectively. (July, 5)",
      "Paying it Forward: Your Digital Visibility, Footprint, and Capital. (July, 19)",
    ],
  },
  {
    title: "August Programmes",
    checks: [
      "Managing Supply Chain Disruptions. (August, 2)",
      "Becoming an MVP: Deal with the imposter syndrome. (August, 16)",
    ],
  },
  {
    title: "September Programmes",
    checks: [
      "Sports Marketing: Embracing a new Niche and discovering opportunities. (September, 6)",
      "Healthy Living and Longevity: Love your Job: Love Your Life. (September , 20)",
      "Milk and Beer are one and same product. (September, 30)",
    ],
  },
  {
    title: "October Programmes",
    checks: [
      "Developing a customer centric mindset through writing an effective user story. (October, 4)",
      "Developing effective public speaking Skills. (October, 18)",
    ],
  },
  {
    title: "November Programmes",
    checks: [
      "Understanding and Overcoming the Challenges of Marketing an NGO. (November, 8)",
      "Why you need a Sponsor. Reverse Mentoring: Feedback from Associates and Members on NIMN aided Career Growth in 2022. (November, 22)",
    ],
  },
  {
    title: "December Programmes",
    checks: [
      "Mentees Journey: Call to action and Project Presentation. (December, 6)",
    ],
  },
];

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

const CheckInput = ({ title, checks }: any) => {
  return (
    <div className="leading-7 mt-8">
      <p className="font-bold text-pri mb-2">{title}</p>
      <div>
        {checks.map((check: any, index: number) => (
          <div key={index}>
            <input
              type="checkbox"
              className="w-[1em] h-[1em]"
              id={check}
              name={check}
              value={check}
            />
            <label className="font-normal ml-1 text-[14px]" htmlFor={check}>
              {check}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const LearningDev = () => {
  return (
    <div className="flex items-center justify-center m-[2em]">
      <div className="lg:w-[60%] md:w-[75%] w-[90%]">
        <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri my-[.5em] ">
          NIMN Learning and Development{" "}
        </p>{" "}
        <div className="font-semibold text-[16px]  leading-10">
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
          <a href="https://drive.google.com/file/d/1xY9RamH-AKAHCnPZc71l59zPdGFc48gh/view?usp=sharing">
            <button className="bg-gray-300 text-[16px] rounded-md p-[1em] my-[2em]">
              Download 2022 Training Schedule
            </button>
          </a>
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
                </p>
                <div className="flex gap-x-6">
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
                </div>
              </div>
            </div>
          </div>

          <div className="my-[2em]">
            <p className="font-bold underline">
              Which of the programmes will you like to attend? ( Certificate
              Awarded )
            </p>

            {data.map((item: any, index: number) => (
              <CheckInput key={index} title={item.title} checks={item.checks} />
            ))}

            <button className="bg-gray-300 px-10 p-2 mt-[1em] rounded-md hover:bg-gray-500 animate-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDev;
