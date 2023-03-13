import Image from "next/image";
import React from "react";
import profile from "../../../public/images/Rectangle_8.png";
import pdf from "../../../public/images/ACT2003.pdf";
import Link from "next/link";


const NIMNAct = () => {
    return (
        <div className="flex gap-10  lg:flex-row  flex-col gap-10  items-center justify-center  md:px-[6em] px-[1em] md:my-[10rem] my-[6rem]">
        <Image src={profile} alt="Profile" width={920} height={1000} />
    
        <div className="flex mt-10 flex-col gap-y-5 bg-pri_var_2 items-center  rounded-md  lg:w-[874px] w-full  lg:h-[1000px] h-[120vh]  z-10">
            <p className="md:text-[42px]  lg:text-[42px] text-[20]  font-[700]  lg:px-14 px-6    text-justify w-full  mt-10 text-pri_var_1">
            NIMN Act 2013              
         </p>
            <p className="md:text-[24px] text-[20px] lg:px-10 px-6  text-white lg:leading-[36px] leading-7   text-justify  ">
The Act that mandates compulsory membership of the Institute for all marketers who receive or expect to receive remuneration is put in place to regulate the marketing profession and ensure a high level of professionalism and ethical standards. The Act defines practicing marketing as engaging in the practice of marketing, holding oneself out to the public as a marketer, or providing professional services related to marketing.
Failure to register with the Institute is illegal, and Section 20(2) of the Act makes it clear that anyone who practices marketing without being a registered member of the Institute or takes or uses any name, title, addition, or description implying that they are in practice as a marketer commits an offence.
The Institute aims to provide value to its members, corporate members, and government by providing opportunities for continuous improvement of marketing skills, promoting professional and career advancement through education, information, and networking, and showcasing marketing excellence. Additionally, the Institute collaborates with government at all levels to design genuine programmes that will help in achieving the economic transformation of the country.
As an employee of the government, it's essential to understand the Act's provisions to comply with the law and promote ethical practices in marketing. If you have any questions or need further clarification, you can reach out to the Institute or consult legal experts for advice.
</p>
<button className=" justify-left items-left  text-white bg-pri_var_1 w-3/4 py-4 font-normal text-lg"> 
<Link href="/pdf">Download the NIMN Act 2013 </Link> 
</button>   



        </div>
        
    </div>
    );
};

export default NIMNAct;
