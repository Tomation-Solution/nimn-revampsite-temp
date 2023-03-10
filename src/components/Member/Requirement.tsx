import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const data = [
  {
    title: "NIMN Membership",
    details: "Membership of the Institute is compulsory for all practitioners of the marketing profession. A person shall be deemed to practice as a marketer if in consideration of remuneration received or to be received and whether by himself or in partnership with any other persons, he: a. Engages himself in the practice of marketing or hold himself out to the public as a marketer; or b. Renders professional service or assistance in, or about matters of principles or detail, relating to the practice of marketing; or c. Renders any other service which may, by regulation made by Council in consultation with the Minister, e designated as service constituting practice as a marketer.",
    type: "Find out happenings at NIMN ranging from our latest news, to events archives and interesting details of the programmes we have to offer",
  },
  {
    title: "Membership Grades",
    details: "» Fellow Member As a fellow, if he satisfy the Council that he has attained the age of 35 years and that for the period of 5 years immediately preceding the date of application in that behalf has been fit and proper person, and in addition he is the holder of an approved academic qualification and has creditably held a senior management position in a marketing or related organization, or has held a senior lecturer position in a higher educational institution for a period of not less than 8 years » Full Member As a Full Member, if he has attained the age of 25 years and has been an Associate Member for a period not less than 5 years immediately preceding the date of application in that behalf and has been enrolled as an associate member or has been exempted from this requirement by the Council and is otherwise fir and proper  person »Associate Member As an Associate Member, if he has attained the age of 23 years and is employed in an management capacity in a marketing or related organization, and has passed examinations accepted by the Institute and is otherwise a fit and proper person to be enrolled in the Register;",
    type: "Find out happenings at NIMN ranging from our latest news, to events archives and interesting details of the programmes we have to offer",
  },
  {
    title: "Membership through Fast Track Executive Membership Programme",
    details: "Associate Membership Eligibility: Minimum of B.sc/HND in a relevant discipline plus 5 years working experience in a marketing or commercial function in a blue chip company or those adjudged to be equivalent.Programme Duration: 4 weekend programme on “Marketing Strategy in Practice”.  Registration: N15,000 Course fee inclusive of induction: N252,000 Full Membership Eligibility: Minimum of B.sc/HND in a relevant discipline and 5 years+ (Marketing Manager Level) experience in a marketing or commercial function in a blue-chip company or those adjudged to be equivalent. Programme Duration: 2 weekend programme on “Mastering Marketing Management”. Registration: N15,000 Course fee inclusive of induction: N378,000",
    type: "Find out happenings at NIMN ranging from our latest news, to events archives and interesting details of the programmes we have to offer",
  },
];

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' },
  {
   type: 'group', name: 'group1', items: [
     { value: 'three', label: 'Three', className: 'myOptionClassName' },
     { value: 'four', label: 'Four' }
   ]
  },
  {
   type: 'group', name: 'group2', items: [
     { value: 'five', label: 'Five' },
     { value: 'six', label: 'Six' }
   ]
  }
];
const RequireMentCard = ({
  title,
  details,
  type,
}: {
  title: string;
  details: string;
  type: string;
}) => {
  return (
    <div className="shadow-sm">
      <div className=" px-[1em] py-[2rem] ">
        <p className="text-pri_var_1 font-[700] text-[40px]">{title}</p>
      </div>
      
      <div className="bg-white leading-10 text-p_gray text-justify  font-[600] text-[18px]">
        <p>{details}</p>
      </div>

    </div>
  );
};

const Requirement = () => {
  return (
    <div>  
    <div className="lg:px-[5em] md:px-[3em] px-[1em]">
      <div
        className="
      text-center mb-[2em] lg:w-[50%] md:w-[60%] w-[80%] mx-auto">
        {/* <p className="text-pri text-[70px] font-[600] "> Membership Requirements </p> */}

      </div>
      <div className="grid lg:grid-cols-1 gap-[3em] md:grid-cols-2 grid-cols-1 ">
        {data.map((item, index) => (
          <RequireMentCard
            key={index}
            title={item.title}
            details={item.details}
            type={item.type}
          />
        ))}
      </div>
<div className=" w-[90%] items-center flex-1 rounded-lg ml-10 mt-10  ">
<Dropdown className=" rounded-lg" options={options}   placeholder="Select an option" 
  arrowClosed={<span className="arrow-closed" />}
  arrowOpen={<span className="arrow-open" />}/>
</div>

    </div>
    </div>
  );
};

export default Requirement;
