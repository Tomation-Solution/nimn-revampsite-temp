import React from "react";

const data = [
  {
    title: "NIMN 2021 Annual Conference",
    date: "26th to 28th October, 2021",
  },
  {
    title: "NIMN 2021 Annual Conference",
    date: "26th to 28th October, 2021",
  },
  {
    title: "NIMN 2021 Annual Conference",
    date: "26th to 28th October, 2021",
  },
];

const RecentPostCard = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="my-[1em]">
      <p className="text-[18px] font-[600]">{title}</p>
      <p className="text-p_gray text-[14px] ">{date}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-[5em]">
      <div className="bg-pri_var_2 lg:p-[4em] md:p-[3em] p-[1em] text-white mt-[2em]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2em]">
          <div>
            <p className="text-[28px] font-[600] ">NIMN</p>
            <p className="md:text-[18px] my-[2em]">
              We consider all the drivers of change – from the ground up and
              we’ll motivate and support you.
            </p>
          </div>

          <div>
            <p className="text-[22px] font-[600] border-b-2 border-p_gray py-[1em] mb-[1em]">
              Extra Links
            </p>
            <div className="text-[18px] font-[600] flex gap-x-[1em]">
              <div className="flex flex-col gap-y-[1em]">
                <p>Home</p>
                <p>About Us</p>
                <p>Training</p>
                <p>Portal Login</p>
                <p>Become Memeber</p>
              </div>{" "}
              <div className="flex flex-col gap-y-[1em]">
                <p>Home</p>
                <p>About Us</p>
                <p>Training</p>
                <p>Portal Login</p>
                <p>Become Member</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[22px] font-[600] border-b-2 border-p_gray py-[1em] mb-[1em]">
              Recent Posts
            </p>
            <div className="">
              {data.map((post, index) => (
                <RecentPostCard
                  key={index}
                  title={post.title}
                  date={post.date}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-[22px] font-[600] border-b-2 border-p_gray py-[1em] mb-[1em]">
              Subscribe
            </p>
            <div className="">
              <label htmlFor="email" className="text-p_gray font-[18px] ">
                Email Address
              </label>
              <br />
              <input
                className="p-[1em] my-[1em] w-full"
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <button
                className="bg-pri md:text-[20px] text-[16px] px-[1em]
                py-[1em] font-[600] text-white w-full"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between mt-[6em]">
          <p className="text-p_gray ">
            Copyright © 2018 National Institute of Marketing of Nigeria. All
            rights Reserved.
          </p>
          <p className="text-p_gray ">Privacy Policy Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
