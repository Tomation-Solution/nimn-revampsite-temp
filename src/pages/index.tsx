import { Inter } from "next/font/google";
import HeadComponent from "@/components/head";
import {
  Events,
  Insights,
  Meetings,
  Profile,
  Programs,
  Showcase,
  SpotLight
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent pageName="HOME" />
      <main>
        <Showcase />
        <Profile />
        <Programs />
        <Events />
        <Meetings />
        <SpotLight />
      </main>
    </>
  );
}
