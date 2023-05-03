import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/svgs/logo.svg";
import join from "../../public/svgs/join.svg";
import search from "../../public/svgs/search.svg";
import login from "../../public/svgs/login.svg";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import PaymentFormModal from "./Member/component/PaymentForm";
import { BsChevronDown } from "react-icons/bs";

const navData = [
  // {
  //   url: "/election",
  //   name: "2023 Election",
  //   subMenu: [
  //     {
  //       url: "/election",
  //       name: "2023 Election Contestants Profile",
  //     },
  //     {
  //       url: "/election/lev",
  //       name: "List of Eligible Voters",
  //     },
  //     {
  //       url: "https://drive.google.com/file/d/1JUb7_Yjdl4UPbFhvHQi7w7Kdp0lBY30S/view",
  //       name: "Election Nomination Form",
  //     },
  //     {
  //       url: "https://drive.google.com/file/d/1sJw2T3hHYtXbeB3oKh5L_Pa3XIGKR1I4/view",
  //       name: "Election Guidelines",
  //     },
  //     {
  //       url: "https://drive.google.com/file/d/124seHWUp3AKU1hV0E8PClAuWOABazl3V/view",
  //       name: "2022 Annual Report and Accounts",
  //     },
  //   ],
  // },
  // {
  //   url: "/amc",
  //   name: "2023 AMC",
  // },
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/membership",
    name: "Membership",
  },
  {
    url: "/certification",
    name: "Certification",
    subMenu: [
      {
        url: "/certification/learningDev",
        name: "Attend a Training",
      },
      {
        url: "/certification/benefit",
        name: "Benefits of Having NIMN Professional Qualification In Marketing",
      },
      {
        url: "https://drive.google.com/file/d/1-3WhKIskcImmhCDZadn5Cewz-UEralWJ/view?usp=sharing",
        name: "Prospectus and Syllabus For Professional Examination",
      },
      {
        url: "/certification/qualifications",
        name: "Professional Qualifications In Marketing",
      },
      {
        url: "/certification/about",
        name: "About the Examination",
      },
    ],
  },
  {
    url: "/events",
    name: "Events",
  },
  {
    url: "/gallery",
    name: "Gallery",
  },
  {
    url: "/Insight",
    name: "Insight",
  },
  {
    url: "/marketplace",
    name: "Marketplace",
  },
  {
    url: "/contact",
    name: "Contacts",
  },
];

const NavButton = ({
  name,
  url,

  subMenu,
}: {
  name: string;
  url: string;

  subMenu?: any;
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
      {subMenu ? (
        <div
          className="cursor-pointer relative flex flex-col items-center "
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          <div className="flex items-center gap-x-3">
            <p className=" text-pri font-bold hover:text-pri">{name}</p>
            <BsChevronDown className="text-pri font-bold" />
          </div>

          {showSubMenu && (
            <div className="flex flex-col gap-y-[.5em] z-30 absolute bg-pri  w-[20em] mt-8">
              {subMenu.map((item: any, index: number) => (
                <Link href={item.url} key={index}>
                  <p className=" text-white font-bold hover:text-pri hover:bg-white">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link href={url}>
          <p className=" text-pri font-bold hover:text-pri">{name}</p>
        </Link>
      )}
    </>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  return (
    <>
      <PaymentFormModal
        openNow={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
      <div
        className=" mt-[.4em] px-[2em]
      flex justify-between items-center border-t-8 border-b-4 border-pri
    "
      >
        <Image alt="logo" src={logo} height={100} width={150} />

        <div className="flex">
          <Image alt="search" src={search} height={60} width={60} />

          <a href=" https://www.members.nimn.com.ng/prospective">
            <Image
              className="cursor-pointer"
              alt="join"
              src={join}
              height={60}
              width={60}
            />
          </a>
          <a href="https://members.nimn.com.ng/">
            {" "}
            <Image alt="login" src={login} height={60} width={60} />
          </a>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden inline text-[34px] "
          >
            <FiMenu />
          </button>
        </div>
      </div>
      <div
        className={`lg:flex  lg:flex-row lg:justify-end lg:px-[10em] md:px-[5em] flex-col lg:gap-x-[1.2em]  gap-y-[1rem]  py-[1em] text-center items-center  ${
          showMenu ? "flex " : "hidden"
        }`}
      >
        {navData.map((item, index) => (
          <NavButton
            key={index}
            name={item.name}
            url={item.url}
            subMenu={item.subMenu}
          />
        ))}
      </div>
    </>
  );
};

export default Header;
