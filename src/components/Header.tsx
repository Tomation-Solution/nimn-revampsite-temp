import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/svgs/logo.svg";
import join from "../../public/svgs/join.svg";
import search from "../../public/svgs/search.svg";
import login from "../../public/svgs/login.svg";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const navData = [
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
  },
  {
    url: "/events",
    name: "Events",
  },
  {
    url: "/photos",
    name: "Photos",
  },
  {
    url: "/Insight",
    name: "Insight",
  },
  {
    url: "/contact",
    name: "Contact",
  },
];

const NavButton = ({
  name,
  url,
  setShowMenu,
  showMenu,
}: {
  name: string;
  url: string;
  setShowMenu: any;
  showMenu: any;
}) => {
  return (
    <Link onClick={() => setShowMenu(!showMenu)} href={url}>
      <p className=" text-pri font-bold hover:text-pri">{name.toUpperCase()}</p>
    </Link>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className=" mt-[.4em] px-[2em]
      flex justify-between items-center border-t-8 border-b-4 border-pri
    "
      >
        <Image alt="logo" src={logo} height={100} width={150} />

        <div className="flex">
          <Image alt="search" src={search} height={60} width={60} />
          <Image alt="join" src={join} height={60} width={60} />
          <a href="https://members.nimn.com.ng/">
            {" "}
            <Image alt="login" src={login} height={60} width={60} />
          </a>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden inline text-[34px] "
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <div
        className={`md:flex  md:flex-row md:justify-end lg:px-[10em] md:px-[5em] flex-col md:gap-x-[1.2em]  gap-y-[1rem]  py-[1em]  ${
          showMenu ? "flex " : "hidden"
        }`}
      >
        {navData.map((item, index) => (
          <NavButton
            key={index}
            name={item.name}
            url={item.url}
            setShowMenu={setShowMenu}
            showMenu={showMenu}
          />
        ))}
      </div>
    </>
  );
};

export default Header;
