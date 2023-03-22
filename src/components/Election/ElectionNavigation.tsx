import Link from "next/link";
import React from "react";

const navData = [
  {
    url: "/election/ecp",
    name: "2023 Election Contestants Profile",
  },
  {
    url: "/election/lev",
    name: "List of Eligible Voters",
  },
  {
    url: "https://drive.google.com/file/d/1JUb7_Yjdl4UPbFhvHQi7w7Kdp0lBY30S/view?usp=sharing",
    name: "Election Nomination Form",
  },
  {
    url: "https://drive.google.com/file/d/1sJw2T3hHYtXbeB3oKh5L_Pa3XIGKR1I4/view?usp=sharing",
    name: "Election Guidelines",
  },
  {
    url: "https://drive.google.com/file/d/124seHWUp3AKU1hV0E8PClAuWOABazl3V/view?usp=sharing",
    name: "2022 Annual Report and Accounts",
  },
];

const NavButton = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link href={url}>
      <p className=" text-pri font-bold hover:text-pri">{name}</p>
    </Link>
  );
};

const ElectionNavigation = () => {
  return (
    <div className="flex items-center text-center w-full mt-8">
      <div
        className={`md:flex  md:flex-row md:justify-end lg:px-[10em] md:px-[5em] flex-col md:gap-x-[1.2em]  gap-y-[1rem]  py-[1em] flex w-full`}
      >
        {navData.map((item, index) => (
          <NavButton key={index} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default ElectionNavigation;
