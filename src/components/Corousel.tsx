// App.js

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import bg_1 from "../../public/images/bg_1.jpg";

export default function Corousel() {
  return (
    <div className=" flex items-center justify-center mt-[8em]">
      {" "}
      <div className="w-3/5">
        <Carousel autoPlay>
          <div>
            <div>
              <p>
                JUNE 2023 Exam
                <br />
                Time-Table Is Out
              </p>
            </div>
            <p className="legend">Register now</p>
          </div>
          <div>
            <Image src={bg_1} height={400} width={600} alt="bg 1" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <Image src={bg_1} height={400} width={600} alt="bg 1" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
