"use client";

import Hero from "../components/home/hero";
import Navbar from "../components/navbar";
// import Footer from "@/components/footer";
import Agree from "../components/home/agree";
import FadeInSection from "../components/fadeInSection";
import InstallPWA from "../components/InstallPWA";
import { useEffect } from "react";
const isBrowser = () => typeof window !== "undefined"; 
export default function Home() {
  // useEffect(() => { }, [isBrowser()]);

  return (
    <div className="min-h-screen kanit">
      {isBrowser() && <InstallPWA />}
      <main className="kanit">
        <div className="">
          <Navbar />
        </div>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <Agree />
      </main>
    </div>
  );
}
