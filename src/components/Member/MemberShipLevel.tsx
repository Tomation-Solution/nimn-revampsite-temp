import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import showcase_bg from "../../../public/images/showcase_bg.jpg";
import grad from "../../../public/images/grad.jpeg";
import guy from "../../../public/images/guy.jpeg";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

const data = [
  {
    img: showcase_bg,
    title: "PLATINUM",
    body: "he professional qualifications in marketing provide",
    link: "/",
    amount:'500'
  },
  {
    img: grad,
    title: "Gold",
    body: "he professional qualifications in marketing provide",
    link: "/",
    amount:'400'

  },
  {
    img: guy,
    title: "Silver",
    body: "he professional qualifications in marketing provide",
    link: "/",
    amount:'300'

  },

  {
    img: guy,
    title: "Bronze",
    body: "he professional qualifications in marketing provide",
    link: "/",
    amount:'250'

  },
  {
    img: guy,
    title: "Professional",
    body: "he professional qualifications in marketing provide",
    link: "/",
    amount:'200'

  },
  {
    title: "Regular",
    body: "he professional qualifications in marketing provide",
    link: "/",
    amount:'100'

  },

];


const SpotLightCard = ({
  img,
  title,
  body,
  link,
  amount
}: {
  img: any;
  title: string;
  body: string;
  link: string;
  amount:string

}) => {
  return (
    <div className="relative flex flex-col items-center">
    <div className='bg-pri_var_1 rounded-sm w-[413px] h-[60px] items-center justify-center '> 
        <p className=" text-white text-center pt-3 font-semibold text-[24px]" > {title} </p>
    </div>

       <div className=" items-center">
           <h2 className=" font-semibold  text-center text-[53px] "> {amount} </h2>
           <p className=" text-center text-p_gray"> per anum</p>

       </div>

      <div className="flex flex-col  gap-2 text-center  bg-white rounded-md px-[1.5em] py-[2em] ">
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
        <hr/>
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
        <hr/>
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#ff2f00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
  <hr/>

        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
          <hr/>
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
          <hr/>
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
        <hr/>
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
        <hr/>
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
        <hr/>
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
        <hr/>
        <div className=" flex  gap-4 flex-row items-center w-full  ">   
          <BsCheckCircle color={'#00FF00'} /> 
          <p className="text-[15px] text-center text-p_gray">{body}</p>
        </div>
        <hr/>
      </div>
       <button className="bg-pri_var_2 w-[262px] rounded-md h-[77px]">
        <p className="text-lg text-white font-extrabold"> Become a Member </p>
       </button>
    </div>
  );
};

const SpotLight = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em] mt-6">
      <div className="flex  flex-col justify-center my-[3em] gap-6">
        <p className="text-[42px] font-[700] text-pri text-center"> Membership Levels </p>
    <p className=" text-center mb-14"> Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
      </div>
      <div className=" grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 gap-y-[12em] gap-x-[2em] pb-[10rem] ">
        {data.map((item, index) => (
          <SpotLightCard
          key={index}
          img={item.img}
          title={item.title}
          body={item.body}
          link={item.link}
          amount={item.amount}
          />
        ))}
      </div>
      <div className="mt-5 flex justify-center items-center"> 
      <button className=" justify-center items-center text-white bg-pri_var_2 w-[116px] h-[59px] font-normal text-lg"> see more </button>

      </div>
    </div>
  );
};

export default SpotLight;
