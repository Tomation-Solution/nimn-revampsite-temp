import { Inter } from "next/font/google";
import HeadComponent from "@/components/head";
import {
InsightShowcase,
Insight
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent pageName="Insight" />
      <main>
        <InsightShowcase />
        <Insight/>
      </main>
    </>
  );
}
