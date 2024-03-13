import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/home/Hero";
import OurProduct from "@/components/home/OurProduct";
import OurPartners from "@/components/home/OurPartners";
import OurBlog from "@/components/home/OurBlog";
import Community from "@/components/home/Community";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <>
        <Head>
          <title>Dep Network | Building the intersection of web3 and AI</title>
          <meta
            name="description"
            content="Convergence of WEB3 and AI Venture Studio"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero />
        <OurProduct />
        <OurPartners />
        <OurBlog />
        <Community />
      </>
    </>
  );
}
