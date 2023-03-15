import { Inter } from "next/font/google";
import HeadComponent from "@/components/head";
import {
  Events,
  Insights,
  Meetings,
  Profile,
  Programs,
  Showcase,
  SpotLight,
} from "@/components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HeadComponent pageName="HOME" />
      <main>
        <Showcase />
        <div data-aos="fade-up">
          <Profile />
        </div>
        <Programs />
        <Events />
        {/* <Meetings /> */}
        <Insights />
        <SpotLight />
      </main>
    </>
  );
}
