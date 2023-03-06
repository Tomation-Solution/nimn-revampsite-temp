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
    url: "/insight",
    name: "Insight",
  },
  {
    url: "/contact",
    name: "Contact",
  },
];

const NavButton = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link href={url}>
      <p className="font-[600] text-p_gray hover:text-pri">{name}</p>
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
          <Image alt="login" src={login} height={60} width={60} />
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden inline text-[34px] "
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <div
        className={`md:flex  md:flex-row flex-col md:justify-between text-center gap-y-[1rem] lg:px-[15em] md:px-[10em] py-[1em]  ${
          showMenu ? "flex " : "hidden"
        }`}
      >
        {navData.map((item) => (
          <NavButton name={item.name} url={item.url} />
        ))}
      </div>
    </>
  );
};

export default Header;
